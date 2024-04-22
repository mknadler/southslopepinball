<script>
  import Icon from '$lib/assets/Icon.svelte';
  import Menu from '$lib/assets/Menu.svelte';
</script>

<header>
    <div class="logo">
        <h1 class="visually-hidden">South Slope Pinball</h1>
        <Icon/>
    </div>

</header>

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
        padding-left: 2rem;
        padding-right: 2rem;
        padding-top: 1rem;
        margin-bottom: 4rem;
    }
</style>