<script lang="ts">
    import { onMount } from 'svelte';

    export let icon: string = '';
    export let width: string = '24px';
    export let height: string = '24px';

    let iconComponent;

    onMount(async() => {
        iconComponent = (await import(`../assets/icons/${icon}.svelte`)).default;
    })
</script>

{#if iconComponent}
    <div class="icon" style={`width: ${width}; height: ${height}`}>
        <svelte:component this={iconComponent}/>
    </div>
{/if}

<style>
    .icon {
        display: inline-block;
        margin-right: .25rem;
        vertical-align: text-top;
    }
    :global(.icon svg) {
        width: 100%;
        height: 100%;
    }
</style>