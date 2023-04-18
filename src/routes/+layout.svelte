<script>
	import '../app.css';
	import { locale, locales } from 'svelte-i18n';
	import Settings from './Settings.svelte';
	import { _ } from 'svelte-i18n';

	$:console.log('selected locale: ', $locale);
</script>

<div class="flex flex-row gap-2 p-2">
	<div class="flex-grow items-center flex md:pl-5">
		<span class="text-sm opacity-50 block font-bold font-serif">{$_('app_title')}</span>
	</div>
	
	<select class="border-[1px] rounded border-black" bind:value={$locale}>
		<option value="nl">🇳🇱</option>
		<option value="en">🇬🇧</option>
	</select>
	<Settings />
</div>
<slot />
