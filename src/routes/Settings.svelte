<script lang="ts">
	import { settings } from '$lib/stores/settings';
	import { _ } from 'svelte-i18n'

	let showSettings: boolean = false;
</script>

<div class="text-sm relative ">
	
		<button
			class="font-bold border-[1px] text-right px-4 py-2 text-xl border-black aspect-square rounded"
			on:click={() => (showSettings = !showSettings)}>⛭</button
		>
	
	{#if showSettings}
		<div
			class="absolute w-96 max-w-screen-sm top-12 right-0 grid grid-cols-1 md:grid-cols-2 mt-1 z-50 bg-white gap-2 border-black border-[1px] rounded p-4"
		>
			<div class="flex items-center"><p>{$_('settings_currency_title')}</p></div>
			<select class="rounded" bind:value={$settings.currency}>
				<option value="EUR">€</option>
				<option value="USD">$</option>
			</select>

			<div class="flex items-center"><p>{$_('settings_employerMarkup_title')}</p></div>
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

			<div class="flex items-center"><p>{$_('settings_workingHoursPerWeek_title')}</p></div>
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

			<div class="flex items-center"><p>{$_('settings_holidaysPerYear_title')}</p></div>
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

			<div class="flex items-center"><p>{$_('settings_vacationDaysPerYear_title')}</p></div>
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
