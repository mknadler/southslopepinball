<script>
    import MenuText from "$lib/assets/MenuText.svelte";

    export let menuIsOpen = false;
</script>

<button class={`menu ${menuIsOpen ? 'menu--open' : 'menu--closed'}`} type="button" on:click={() => {menuIsOpen = !menuIsOpen}}>
    <div class="menu-image">
        <div class="menu-images">
            <div class="circle"></div>
            <div class="circle"></div>
            <div class="circle"></div>
            <div class="circle"></div>
            <div class="circle"></div>
        </div>
        <div class="menu-text"><MenuText/></div>
    </div>
</button>

<style>

button {
    z-index: 10;
    position: relative;
    width: 90px;
    height: 90px;
    display: block;
    border-radius: 50%;
}

:global(.sidebar .menu) {
    position: absolute;
    right: 2rem;
    top: 39px;
}

:global(.sidebar .menu--closed) {
    display: none;
}

:global(header .menu--open) {
    display: none;
}

.menu-image {
    width: 90px;
    height: 90px;
    border-radius: 50%;
    overflow: hidden;
    position: relative;
    flex-shrink: 0;
    clip-path: circle(49% at 50% 50%); /* prevent logo bleed */
}

.circle {
    --circle-blend-color-1: #702323;
    --circle-blend-color-2: #5445FF;
    width: 110px;
    height: 110px;
    border-radius: 50%;
    position: absolute;
    background: var(--circle-blend-color-1);
    mix-blend-mode: plus-lighter;
}

.circle:nth-child(1) {
    left: 20px;
    top: -15px;
    z-index: 5;
}
.circle:nth-child(2) {
    left: 10px;
    top: -40px;
    z-index: 4;
}
.circle:nth-child(3) {
    left: 25px;
    top: -55px;
    z-index: 3;
}
.circle:nth-child(4) {
    left: 40px;
    top: -70px;
    z-index: 4;
}

.circle:nth-child(5) {
    width: 90px;
    height: 90px;
    background: var(--circle-blend-color-2);
    z-index: 1;
    mix-blend-mode: initial;
}

:global(.menu-image) {
    & svg {
        z-index: 4;
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        margin: auto;
    }
    &:hover {
        cursor: pointer;
    }
    & path {
        transform: translateY(0px);
        transition: transform 200ms ease-in-out;
    }
    &:hover path {
        &:nth-child(1) {
            transform: translateY(-5px);
        }
        &:nth-child(2) {
            transform: translateY(1px);
        }
        &:nth-child(3) {
            transform: translateY(4px);
        }
        &:nth-child(4) {
            transform: translateY(-6px);
        }
    }
    &:active path {
        &:nth-child(1) {
            transform: translateY(-8px);
        }
        &:nth-child(2) {
            transform: translateY(-2px);
        }
        &:nth-child(3) {
            transform: translateY(1px);
        }
        &:nth-child(4) {
            transform: translateY(-9px);
        }
    }
}

</style>