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

.menu {
    --circle-size: 90px;
}

button {
    position: relative;
    display: block;
    width: var(--circle-size);
    height: var(--circle-size);
    border-radius: 50%;
    z-index: 10;
}

:global(.sidebar .menu) {
    position: absolute;
    top: 39px;
    right: 2rem;
}

:global(.sidebar .menu--closed) {
    display: none;
}

:global(header .menu--open) {
    display: none;
}

.menu-image {
    position: relative;
    flex-shrink: 0;
    overflow: hidden;
    width: var(--circle-size);
    height: var(--circle-size);
    border-radius: 50%;
    clip-path: circle(49% at 50% 50%); /* prevent logo bleed */
}

.circle {
    --circle-blend-color-1: #702323;
    --circle-blend-color-2: #5445FF;
    position: absolute;
    width: round(calc(var(--circle-size) * 1.22), 1px);
    height: round(calc(var(--circle-size) * 1.22), 1px);
    background: var(--circle-blend-color-1);
    mix-blend-mode: plus-lighter;
    border-radius: 50%;
}

.circle:nth-child(1) {
    top: round(calc(var(--circle-size) * calc(-15/90)), 1px);
    left: round(calc(var(--circle-size) * calc(20/90)), 1px);
    z-index: 5;
}
.circle:nth-child(2) {
    top: round(calc(var(--circle-size) * calc(-40/90)), 1px);
    left: round(calc(var(--circle-size) * calc(10/90)), 1px);
    z-index: 4;
}
.circle:nth-child(3) {
    top: round(calc(var(--circle-size) * calc(-55/90)), 1px);
    left: round(calc(var(--circle-size) * calc(25/90)), 1px);
    z-index: 3;
}
.circle:nth-child(4) {
    top: round(calc(var(--circle-size) * calc(-70/90)), 1px);
    left: round(calc(var(--circle-size) * calc(40/90)), 1px);
    z-index: 4;
}

.circle:nth-child(5) {
    width: var(--circle-size);
    height: var(--circle-size);
    background: var(--circle-blend-color-2);
    mix-blend-mode: initial;
    z-index: 1;
}

:global(.menu-image) {
    & svg {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        margin: auto;
        z-index: 4;

    }
    &:hover {
        cursor: pointer;
    }
    & path {
        transition: transform 200ms ease-in-out;
        transform: translateY(0px);
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