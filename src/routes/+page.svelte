<script>
    import Icon from "@iconify/svelte";
</script>

<!-- Hero -->
<section class="py-12 text-white bg-emerald-950 bg-[url(images/hero.png)] bg-center bg-cover bg-blend-overlay drop-shadow">
    <div class="max-w-screen-xl mx-auto">
        <div class="flex items-center space-x-24">
            <div class="flex flex-col space-y-8 w-1/2">
                <h1 class="text-6xl font-bold font-landingIntructors">Take your career to the next level.</h1>
                <p class="text-3xl font-medium">With indispensable courses</p>
                <div class="space-x-8 font-semibold">
                    <button class="px-6 py-3 rounded-md border">Exams</button>
                    <button class="px-6 py-3 rounded-md bg-white text-landingTertiary">Our Courses</button>
                </div>
            </div>
            <img src="images/hero.png" alt="Hero" class="rounded-t-lg -mb-12 w-1/2 h-[520px] object-cover">
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

<style lang="postcss">
</style>
