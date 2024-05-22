<script>
    import { onMount } from 'svelte';
    import { format } from 'date-fns';

    export let datetime;

    let formatted;

    onMount(() => {
        formatted = format(datetime, "h:mm bbb")
    })
</script>

{#if formatted}
    {formatted}
{/if}
