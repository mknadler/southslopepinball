<script lang="ts">
  import Icon from '$lib/assets/Icon.svelte';
  import MenuText from '$lib/assets/MenuText.svelte';
  import Menu from '$lib/components/Menu.svelte';

  export let link: Boolean = false;
  export let menuIsOpen;
</script>

<header>
    <div class="logo">
        {#if link}
            <a href="/">
                <h1 class="visually-hidden">South Slope Pinball</h1>
                <Icon/>
            </a>
        {:else}
            <h1 class="visually-hidden">South Slope Pinball</h1>
            <Icon/>
        {/if}
    </div>
    <Menu bind:menuIsOpen />
</header>
<div class="sticky-header-border"></div>

<style>
    header {
        position: sticky;
        top: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 4rem;
        padding: 1rem 2rem;
        background: var(--color-bg);
        border-bottom: 1px dashed purple;
        z-index: 2;
    }
</style>