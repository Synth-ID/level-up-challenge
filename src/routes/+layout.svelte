<script>
    import "../app.css";
    import "@fontsource-variable/open-sans";
    import "@fontsource/poppins";
    import "@fontsource-variable/inter";

    import Navbar from "$lib/Navbar.svelte"
</script>

<header>
    <Navbar />
</header>

<slot />

<style lang="postcss">
    :global(body) {
        @apply w-screen min-h-screen
    }
</style>