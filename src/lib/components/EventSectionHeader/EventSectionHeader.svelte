<script>

</script>

<div class="header-container">
    <h2><slot/></h2>
</div>

<style>
    .header-container {
        position: sticky;
        top: 10.5rem;
        display: flex;
        align-items: center;
        width: 100%;
        height: 4rem;
        margin: 4rem auto 1rem auto;
        background: linear-gradient(to bottom, var(--color-bg) 0rem, var(--color-bg) 3.5rem, transparent 3.5rem, transparent);
        z-index: 1;
        &:before, &:after {
            content: '';
            display: block;
            position: absolute;
            top: 0;
            width: 4rem;
            height: inherit;
            z-index: -1;
        }
        &:before {
            left: -2.5rem;
            background: var(--color-purp);
            border-top-right-radius: 3px;
            border-bottom-right-radius: 3px;
        }
        &:after {
            right: -2.5rem;
            background: var(--color-bg);
        }
    }

    .header-container h2 {
        display: inline-block;
        position: relative;
        top: .25rem;
        height: 3rem;
        padding: 0 .5rem;
        color: black;
        font-size: var(--font-size-headings);
        font-weight: 200;
        font-style: italic;
        text-transform: uppercase;
        vertical-align: baseline;
        @media (max-width: calc(800px + 2rem)) {
            left: 0;
        }
        &:after {
            content: '';
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: var(--color-pink-light);
            border: none;
            transform: translateY(-.25rem) skew(-9deg);
            z-index: -1;
        }
    }
</style>