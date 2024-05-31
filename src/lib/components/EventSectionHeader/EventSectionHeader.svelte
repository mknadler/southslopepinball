<script>

</script>

<div class="header-container">
    <h2><slot/></h2>
</div>

<style>
    .header-container {
        background: var(--color-bg);
        height: 4rem;
        background: linear-gradient(to bottom, var(--color-bg) 0rem, var(--color-bg) 3.5rem, transparent 3.5rem, transparent); 
        width: 100%;

        position: sticky;
        display: flex;
        align-items: center;
        top: 10.5rem;
        margin: 4rem auto 1rem auto;
        z-index: 1;
        &:before, &:after {
            content: '';
            display: block;
            height: inherit;
            width: 4rem;
            position: absolute;
            top: 0;
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
        font-size: var(--font-size-headings);
        font-weight: 200;
        font-style: italic;
        text-transform: uppercase;
        display: inline-block;
        position: relative;
        top: .25rem;
        padding: 0 .5rem;
        vertical-align: baseline;
        color: black;
        height: 3rem;
        @media (max-width: calc(800px + 2rem)) {
            left: 0;
        }
        &:after {
            content: '';
            display: block;
            width: 100%;
            height: 100%;
            border: none;
            background: var(--color-pink-light);
            position: absolute;
            top: 0;
            left: 0;
            z-index: -1;
            transform: translateY(-.25rem) skew(-9deg);
        }
    }
</style>