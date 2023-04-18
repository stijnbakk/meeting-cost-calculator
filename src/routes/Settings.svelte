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
		<div
			class="grid grid-cols-1 md:grid-cols-2 mt-1 bg-white gap-2 border-black border-[1px] rounded p-4"
		>
			<div class="flex items-center"><p>Currency</p></div>
			<select class="rounded" bind:value={$settings.currency}>
				<option value="EUR">€</option>
				<option value="USD">$</option>
			</select>

			<div class="flex items-center"><p>Employer markup</p></div>
			<div class="flex rounded flex-row overflow-hidden border-[1px] border-gray-500">
				<input
					class="w-full border-none"
					bind:value={$settings.employerCostMarkup}
					type="number"
					step="10"
				/>
				<div class="border-gray-500 border-l-[1px] px-3 flex items-center justify-center w-10">
					<span class=""> % </span>
				</div>
			</div>

			<div class="flex items-center"><p>Working hours per week</p></div>
			<div class="flex rounded flex-row overflow-hidden border-[1px] border-gray-500">
				<input
					class="w-full border-none"
					bind:value={$settings.hoursPerWeek}
					type="number"
					step="1"
				/>
				<div class="border-gray-500 border-l-[1px] px-3 flex items-center justify-center w-10">
					<span class=""> # </span>
				</div>
			</div>

			<div class="flex items-center"><p>Holidays per year</p></div>
			<div class="flex rounded flex-row overflow-hidden border-[1px] border-gray-500">
				<input
					class="w-full border-none"
					bind:value={$settings.holidaysPerYear}
					type="number"
					step="1"
				/>
				<div class="border-gray-500 border-l-[1px] px-3 flex items-center justify-center w-10">
					<span class=""> # </span>
				</div>
			</div>

			<div class="flex items-center"><p>Vacationdays per year (#)</p></div>
			<div class="flex rounded flex-row overflow-hidden border-[1px] border-gray-500">
				<input
					class="w-full border-none"
					bind:value={$settings.vacationDaysPerYear}
					type="number"
					step="1"
				/>
				<div class="border-gray-500 border-l-[1px] px-3 flex items-center justify-center w-10">
					<span class=""> # </span>
				</div>
			</div>
		</div>
	{/if}
</div>
