<script lang="ts">
    import Menu from '$lib/components/Menu.svelte'

    export let menuIsOpen;
</script>

{#if menuIsOpen}
    <div class="sidebar">
        <Menu bind:menuIsOpen />
        <nav>
            <ul>
                <li>
                    <a href="#">Summer league</a>
                </li>
                <li>
                    <a href="#">Events at Kaite's</a>
                </li>
                <li>
                    <a href="#">Menu Item</a>
                </li>
                <li>
                    <a href="#">Menu item</a>
                </li>
            </ul>
        </nav>
    </div>
{/if}

<style>
  .sidebar {
    position: fixed;
    top: 0;
    right: 0;
    width: 320px;
    height: 100vh;
    background: #D9D5FF;
    z-index: 11;
    border-left: 2px solid #111;
    --mask:
        radial-gradient(96.64px at 132.3px 50%,#000 99%,#0000 101%) 0 calc(50% - 98px)/100% 196px,
        radial-gradient(96.64px at -83.3px 50%,#0000 99%,#000 101%) 49px 50%/100% 196px repeat-y;
    -webkit-mask: var(--mask);
            mask: var(--mask);
  }
  nav {
    padding-top: 10rem;
    padding-right: 2.5rem;
    text-align: right;
  }
  nav li {
    list-style-type: none;
    margin: 1rem 0;
  }
  nav li a {
    font-size: 24px;
    color: #222;
    &:hover {
        color: #666;
    }
  }
</style>