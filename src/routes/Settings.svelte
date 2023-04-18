<script lang="ts">
	import { settings } from '$lib/stores/settings';
	let showSettings: boolean = false;
</script>

<div class="text-sm absolute top-0 right-0 p-4">
	<div class="flex flex-row justify-end">
		<button
			class="font-bold text-right p-3 px-5 text-xl border-black aspect-square rounded"
			on:click={() => (showSettings = !showSettings)}>⛭</button
		>
	</div>
	{#if showSettings}
		<div class="grid grid-cols-2 mt-1 bg-white gap-2 border-black border-[1px] rounded p-4">
			<div class="flex items-center"><p>Currency</p></div>
			<select bind:value={$settings.currency}>
				<option value="EUR">€</option>
				<option value="USD">$</option>
			</select>

			<div class="flex items-center"><p>Employer markup (%)</p></div>
			<input class="w-full" bind:value={$settings.employerCostMarkup} type="number" step="10" />

			<div class="flex items-center"><p>Working hours per week (#)</p></div>
			<input class="w-full" bind:value={$settings.hoursPerWeek} type="number" step="1" />

			<div class="flex items-center"><p>Holidays per year (#)</p></div>
			<input class="w-full" bind:value={$settings.holidaysPerYear} type="number" step="1" />

			<div class="flex items-center"><p>Vacationdays per year (#)</p></div>
			<input class="w-full" bind:value={$settings.vacationDaysPerYear} type="number" step="1" />
		</div>
	{/if}
</div>
