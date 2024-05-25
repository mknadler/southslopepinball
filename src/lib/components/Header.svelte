<script lang="ts">
  import Icon from '$lib/assets/Icon.svelte';
  import MenuText from '$lib/assets/MenuText.svelte';
  import Menu from '$lib/components/Menu.svelte';

  export let link: Boolean = false;
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
    <Menu/>
</header>
<div role="illustration" class="sticky-header-border"></div>

<style>
    .visually-hidden {
        clip: rect(0 0 0 0);
        clip-path: inset(50%);
        height: 1px;
        overflow: hidden;
        position: absolute;
        white-space: nowrap;
        width: 1px; 
    }
    header {
        position: sticky;
        top: 0;
        margin-bottom: 4rem;
        padding-left: 2rem;
        padding-right: 2rem;
        padding-top: 1rem;
        padding-bottom: 1rem;
        display: flex;
        justify-content: space-between;
        background: #FDFCFF;
        z-index: 2;
        border-bottom: 1px dashed purple;
    }
</style>