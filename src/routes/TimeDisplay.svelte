<!-- src/components/Time.svelte -->
<script lang="ts">
    	  import { _ } from 'svelte-i18n'

	import { time } from '$lib/stores/time';
</script>

<div class="w-auto ">
    <table class="w-auto">
        <tr>
            <td class="largeNumber"><input bind:value={$time.hours} class='w-11 text-center'/></td>
            <td class="largeNumber"><input bind:value={$time.minutes} class='w-11 text-center'/></td>
            <td class="largeNumber"><input bind:value={$time.seconds} class='w-10 text-center'/></td>
        </tr>
        <tr>
            <td class="smallNumber">{$_('time_hours_title')}</td>
            <td class="smallNumber">{$_('time_minutes_title')}</td>
            <td class="smallNumber">{$_('time_seconds_title')}</td>
        </tr>
    </table>
</div>

<style>
    td{
        @apply text-center;
    }
    .largeNumber {
        @apply text-4xl;
    }
    .smallNumber {
        @apply text-sm px-4;
    }
</style>