<script lang="ts">
	import { time } from '$lib/stores/time';
	import { onMount } from 'svelte';
	import Cost from './Cost.svelte';
	import People from './People.svelte';
	import Settings from './Settings.svelte';
	import TimeDisplay from './TimeDisplay.svelte';
	import Timer from './Timer.svelte';
	
	import ExportableImage from './ExportableImage.svelte';

	let meetingTitle = '';
	let organisationName = '';
	let meetingDate: Date = new Date();

	onMount(() => {
		meetingDate = new Date();
	});
</script>

<div class="p-10">
    <Settings />
	<div class="flex w-full items-center justify-center">
		<span class="text-sm opacity-50 block font-bold font-serif">meeting cost calculator</span>
	</div>

    <div class="min-h-[80vh] flex flex-col items-center justify-center w-full">
	<div class="flex justify-center">
		<Cost />
	</div>
	<div class="flex justify-center">
		<TimeDisplay />
	</div>
    
	<Timer />
    </div>


	<People />

	


</div>
