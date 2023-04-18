<!-- src/components/Timer.svelte -->
<script lang="ts">
	import { time, type Time } from '$lib/stores/time';
	import { onDestroy } from 'svelte';

	let intervalId: ReturnType<typeof setInterval> | null = null;

	const startPauseTimer = () => {
		if (intervalId) {
			clearInterval(intervalId);
			intervalId = null;
		} else {
			intervalId = setInterval(() => {
				time.update((currentTime: Time) => {
					let { hours, minutes, seconds } = currentTime;
					seconds++;
					if (seconds >= 60) {
						seconds = 0;
						minutes++;
					}
					if (minutes >= 60) {
						minutes = 0;
						hours++;
					}
					return { hours, minutes, seconds };
				});
			}, 1000);
		}
	};

	const resetTimer = () => {
		if (intervalId) {
			clearInterval(intervalId);
			intervalId = null;
		}
		time.set({ hours: 0, minutes: 0, seconds: 0 });
	};

	onDestroy(() => {
		if (intervalId) {
			clearInterval(intervalId);
		}
	});
</script>

<div class="flex justify-center gap-2 w-full my-5" >
<button class="button" on:click={startPauseTimer}>
	{intervalId ? 'Pause' : 'Start'}
</button>
<button class="button" on:click={resetTimer}>Reset</button>
</div>

<style lang="scss">
	.button {
		@apply border p-2 rounded hover:bg-gray-200;
	}
</style>
