<script>
	import { Line } from 'svelte-chartjs';
	import { data } from './data.js';

	import {
		Chart as ChartJS,
		Title,
		Tooltip,
		Legend,
		LineElement,
		LinearScale,
		PointElement,
		CategoryScale
	} from 'chart.js';

	ChartJS.register(Title, Tooltip, Legend, LineElement, LinearScale, PointElement, CategoryScale);
</script>

<h1 class="text-3xl font-bold underline">
    Welcome to SvelteKit
</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<main>
	<Line {data} options={{ responsive: true }} />
</main>

<style lang="postcss">
    :global(html) {
      background-color: theme(colors.gray.100);
    }
</style>
