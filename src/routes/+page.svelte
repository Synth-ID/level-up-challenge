<script>
	import { base } from '$app/paths';
	import Icon from '@iconify/svelte';
</script>

<!-- Hero -->
<section
	class="py-12 text-white bg-emerald-950 bg-[url(./images/hero.png)] bg-center bg-cover bg-blend-overlay drop-shadow"
>
	<div class="max-w-screen-xl mx-auto">
		<div class="flex items-center space-x-24">
			<div class="flex flex-col space-y-8 w-1/2">
				<h2 class="text-6xl font-bold font-landingIntructors">
					Take your career to the next level.
				</h2>
				<p class="text-3xl font-medium">With indispensable courses</p>
				<div class="space-x-8 font-semibold">
					<button class="px-6 py-3 rounded-md border">Exams</button>
					<button class="px-6 py-3 rounded-md bg-white text-landingTertiary">Our Courses</button>
				</div>
			</div>
			<img
				src="./images/hero.png"
				alt="Hero"
				class="rounded-t-lg -mb-12 w-1/2 h-[520px] object-cover"
			/>
		</div>
		<div class="flex justify-between absolute text-4xl bottom-12 left-24 right-24">
			<button class="w-12 h-12 backdrop-brightness-75 backdrop-blur rounded-full">
				<Icon icon="mdi:chevron-left" class="w-full" />
			</button>
			<button class="w-12 h-12 backdrop-brightness-75 backdrop-blur rounded-full">
				<Icon icon="mdi:chevron-right" class="w-full" />
			</button>
		</div>
	</div>
</section>

<!-- CTA -->
<section class="py-32 text-gray-900">
	<div class="max-w-screen-xl mx-auto space-y-24">
		<div class="text-center">
			<h1 class="text-6xl font-bold">Enrol for a couse now</h1>
		</div>
		<div class="flex items-center space-x-24">
			<div class="flex flex-col space-y-8 w-1/2">
				<h2 class="text-6xl font-bold">Take your career to the next level.</h2>
				<p class="text-3xl">With indispensable courses</p>
				<p class="text-lg">
					Lorem ipsum dolor sit at, consectetur adipielit. Facilisi fermentum, dignissim pharetra.
					Aliquam Lorem ipsum dolor sit at, consectetur adipielit. Facilisi fermentum, dignissim
					pharetra. Aliquam Lorem ipsum dolor sit at, consectetur adipielit. Facilisi fermentum,
					dignissim pharetra.
				</p>
			</div>
			<form class="flex flex-col space-y-8 w-1/2 bg-white p-12 shadow-xl rounded-lg">
				<h3 class="font-medium text-xl">Registration for enrolment</h3>
				<span />
				<input
					class="border border-gray-200 bg-gray-50 h-12 px-5 rounded-md focus:outline-none"
					type="text"
					name="name"
					placeholder="Full name"
				/>
				<input
					class="border border-gray-200 bg-gray-50 h-12 px-5 rounded-md focus:outline-none"
					type="email"
					name="email"
					placeholder="Email"
				/>
				<input
					class="border border-gray-200 bg-gray-50 h-12 px-5 rounded-md focus:outline-none"
					type="tel"
					name="phone"
					placeholder="Phone number"
				/>
				<button
					class="border border-gray-200 bg-gray-50 h-12 px-5 rounded-md focus:outline-none flex items-center"
				>
					<Icon icon="mdi:snowflake" class="text-2xl mr-4" />
					<span>List of courses goes here</span>
					<Icon icon="mdi:chevron-down" class="text-2xl ml-auto" />
				</button>
				<span />
				<input
					class="px-6 py-3 rounded-md bg-landingTertiary text-white w-1/2 cursor-pointer ml-auto"
					type="submit"
					value="Apply Now"
				/>
			</form>
		</div>
	</div>
</section>

<style lang="postcss">
</style>
