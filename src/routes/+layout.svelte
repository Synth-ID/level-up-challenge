<script>
    import "../app.css";
    import "@fontsource-variable/open-sans";
    import "@fontsource/poppins";
    import "@fontsource-variable/inter";
</script>

<slot />

<style lang="postcss">
    :global(body) {
        @apply w-screen min-h-screen
    }
</style>