<script>
	import Icon from '@iconify/svelte';
</script>

<nav class="sticky top-0 w-full bg-white text-gray-600 py-8 z-50 drop-shadow-sm">
	<div class="flex justify-between max-w-screen-xl mx-auto">
		<div class="flex items-center space-x-32">
			<a href="/">
				<img src="./favicon.svg" alt="Column9 Logo" height={24} />
			</a>
			<div class="flex space-x-12 font-semibold">
				<a href="/">Home</a>
				<a href="/">Courses</a>
				<a href="/">Instuctors</a>
				<a href="/">Schedules</a>
				<a href="/">Contact Us</a>
			</div>
		</div>
		<div class="flex items-center space-x-12">
			<form class="relative mx-auto">
				<input
					class="border border-gray-200 bg-gray-50 h-10 px-5 pr-16 rounded-md text-sm focus:outline-none"
					type="search"
					name="search"
				/>
				<button type="submit" class="text-gray-400 absolute right-0 mt-2 mr-4 text-2xl">
					<Icon icon="mdi:magnify" />
				</button>
			</form>
			<div class="text-4xl text-landingPrimary">
				<Icon icon="mdi:account-circle" />
			</div>
		</div>
	</div>
</nav>
