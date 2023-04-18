<!-- src/components/Cost.svelte -->
<script lang="ts">
	import { people, type Person } from '$lib/stores/people';
	import { settings } from '$lib/stores/settings';
	import { time, type Time } from '$lib/stores/time';
	import { document, type Document} from '$lib/stores/document';

	let totalCost = 0;

	function calculateTotalCost(people: Person[], time: Time): number {
		const elapsedHours = time.hours / 1 + time.minutes / 60 + time.seconds / 3600;

		return people.reduce((acc, person) => {
			let cost = 0;
			cost = person.costPerHour * elapsedHours;
			$document.totalCost = cost
			return acc + cost;
		}, 0);
	}

	function calculateCostPerHour(person: Person): number {
		if (person.rateType === 'hourly') {
			return person.rate;
		} else if (person.rateType === 'yearly') {
			return person.rate / (40 * 52); // Assuming 40 hours/week and 52 weeks/year
		}
		return 0;
	}

	function customNumberFormatter(number:number) {
		if (number < 100) {
			return number.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
		} else {
			return number
				.toLocaleString('de-DE', { minimumFractionDigits: 0, maximumFractionDigits: 0 })
				.replace(/,/g, '.');
		}
	}

	$: {
		$people.forEach((person, index) => {
			const costPerHour = calculateCostPerHour(person);
			people.update((currentPeople) => {
				const updatedPeople = [...currentPeople];
				updatedPeople[index] = { ...person, costPerHour };
				return updatedPeople;
			});
		});
		totalCost = calculateTotalCost($people, $time);
	}
</script>

<p class="text-7xl py-10">
	{$settings.currency === 'EUR' ? '€' : '$'}
	{customNumberFormatter(totalCost)}
</p>
