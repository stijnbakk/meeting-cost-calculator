<script lang="ts">
	  import { _ } from 'svelte-i18n'

	import { time } from '$lib/stores/time';
	import { onMount } from 'svelte';
	import Cost from './Cost.svelte';
	import People from './People.svelte';
	import Settings from './Settings.svelte';
	import TimeDisplay from './TimeDisplay.svelte';
	import Timer from './Timer.svelte';

	import SvelteSeo from "svelte-seo";


	let meetingTitle = '';
	let organisationName = '';
	let meetingDate: Date = new Date();

	onMount(() => {
		meetingDate = new Date();
	});


</script>

<SvelteSeo
  title={$_('app_title')}
  description={$_('app_description')}
/>

<div class="p-10">
    
	

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
