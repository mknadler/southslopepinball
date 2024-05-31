<script lang="ts">
    import Menu from '$lib/components/Menu.svelte'

    export let menuIsOpen;
</script>

{#if menuIsOpen}
    <div class="sidebar wavy">
        <Menu bind:menuIsOpen />
        <nav>
            <ul>
                <li>
                    <a href="/series/south-slope-match-play-league-summer-2024">South Slope Summer Matchplay League</a>
                </li>
                <li>
                    <a href="/series/belles-and-chimes-summer-2024">Belles and Chimes</a>
                </li>
                <li>
                    <a href="https://southslope.pinballleague.org/">South Slope Summer Team League</a>
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
    background: var(--color-bg-sidebar);
    border-left: 2px solid var(--color-bg-sidebar);
    z-index: 11;
    @media (min-width: 50rem) {
        width: 360px;
        & nav li a {
            font-size: 24px;
        }
    }
  }
  .wavy {
    --mask:
        radial-gradient(96.64px at 132.3px 50%,#000 99%,#0000 101%) 0 calc(50% - 98px)/100% 196px,
        radial-gradient(96.64px at -83.3px 50%,#0000 99%,#000 101%) 49px 50%/100% 196px repeat-y;
    -webkit-mask: var(--mask);
            mask: var(--mask);
  }
  nav {
    padding-top: 10rem;
    padding-right: 2.25rem;
    text-align: right;
    & li {
        margin: 1rem 0;
        list-style-type: none;
        & a {
            display: inline-block;
            max-width: 90%;
            font-size: 20px;
            color: var(--color-link-sidebar);
            &:hover {
                color: var(--color-link-sidebar-hover);
            }
        }
    }
}
</style>