<script lang="ts">
    import { onMount } from 'svelte';

    export let icon: string = '';
    export let label: string = '';
    export let href: string = '';

    let iconComponent;

    onMount(async() => {
        console.log('icon', icon);
        iconComponent = (await import(`../../assets/icons/${icon}.svelte`)).default;
    })
</script>

{#if href}
    <a href={href} class="icon-button" target="_blank">
        <svelte:component this={iconComponent}/>
        <span>{label}</span>
    </a>
{:else}
    <button type="button" class="icon-button" on:click>
        <svelte:component this={iconComponent}/>
        <span>{label}</span>
    </button>
{/if}


<style>

    .icon-button {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: auto;
        border: 1px solid var(--color-purp-dark);
        background: var(--color-pink-light);
        border-radius: 3px;
        height: 1.75rem;
        cursor: pointer;
    }

    a.icon-button {
        display: inline-flex;
        width: auto;
        text-decoration: none;
        color: #000;
    }   


    .icon-button span {
        display: inline-block;
        height: 18px;
        text-transform: uppercase;
        margin-right: 4px;
        font-weight: 500;
    }
    :global(.icon-button svg) {
        margin-right: 4px;
        margin-left: 4px;
    }
    :global(.icon-button + .icon-button) {
        margin-top: .25rem;
    }
</style>