<!-- src/components/People.svelte -->
<script lang="ts">
	import { people, type Person } from '$lib/stores/people';
	import { settings } from '$lib/stores/settings';
	import { onMount, tick } from 'svelte';

	function addPerson() {
		people.update((currentPeople) => [
			...currentPeople,
			{ name: '', rate: 4000, rateType: 'monthly', costPerHour: 0 }
		]);
	}

	function updatePerson(index: number, updatedPerson: Person) {
		people.update((currentPeople) => {
			const updatedPeople = [...currentPeople];
			updatedPeople[index] = updatedPerson;
			return updatedPeople;
		});
	}

	function removePerson(index: number) {
		people.update((currentPeople) => currentPeople.filter((_, i) => i !== index));
	}

	async function handleKeyDown(event: KeyboardEvent, index: number) {
		if (event.key === 'Enter' && index === peopleList.length - 1) {
			event.preventDefault();
			addPerson();
			await tick();
			const input = document.getElementById(`name-input-${index + 1}`);
			input?.focus();
		}
	}

	let peopleList: Person[] = [];
	onMount(() => {
		people.subscribe((value) => {
			peopleList = value;
		});
	});
</script>

<h2 class="font-serif font-bold text-xl mb-4 text-center mb:text-left">People in the meeting</h2>
<div class="flex justify-center">
	<div class="flex flex-col gap-2 max-w-5xl">
		{#each peopleList as person, index}
			<div class="border-[1px] border-gray-100 p-2 rounded flex flex-col md:flex-row gap-2">
				<input
					id={`name-input-${index}`}
					placeholder="Name"
					type="text"
					class="flex-grow"
					bind:value={person.name}
					on:input={() => updatePerson(index, person)}
					on:keydown={(event) => handleKeyDown(event, index)}
				/>
				<div class="flex flex-row rounded border-[1px] border-gray-500">
					<div class="border-gray-500 border-r-[1px] px-3 flex items-center">
					<span class="">
						{#if $settings.currency === 'EUR'}
							€
						{:else}
							$
						{/if}
					</span>
				</div>
				<input
					type="number"
					class="flex-grow-0 border-none rounded-none w-24"
					bind:value={person.rate}
					on:input={() => updatePerson(index, person)}
					on:keydown={(event) => handleKeyDown(event, index)}
				/>
			</div>
				
					<select
						bind:value={person.rateType}
						on:change={() => updatePerson(index, person)}
						placeholder="Salary or hourly rate"
					>
						<option value="hourly">hourly</option>
						<option value="monthly">monthly</option>
						<option value="yearly">yearly</option>
					</select>
				
				{#if peopleList.length > 1}
					<button
						class="px-2 flex-grow-0 text-sm hover:text-opacity-70 flex justify-center items-center"
						on:click={() => removePerson(index)}>🗑️</button
					>
				{/if}
			</div>
		{/each}
		<button
			class="border border-gray-100 rounded text-gray-600 text-sm py-1 px-2 hover:bg-gray-50"
			on:click={addPerson}>Add</button
		>
	</div>
</div>

<style lang="scss">
	input {
		@apply rounded;
	}
	select {
		@apply rounded;
	}
</style>
