<script lang="ts">
    export let isOpen: boolean = false;
</script>

{#if isOpen}
    <section class="modal" on:pointerup={()=>{isOpen = false}}>
        <section class="modal-inner">
            <slot/>
        </section>
        <div class="modal-controls">
            <button type="button" on:click={() => {isOpen = false}}>
                <span>Close</span>
            </button>
        </div>
    </section>
{/if}

<style>
    .modal {
        position: fixed;
        width: 100vw;
        height: 100vh;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        background: rgba(0, 0, 0, .8);
        z-index: 3;
    }
    .modal-inner {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .modal-controls {
        position: absolute;
        top: 1rem;
        right: 2rem;
    }
    button {
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        background: rgba(200, 200, 200, .2);
        font-weight: bold;
        font-size: 24px;
        border: 2px solid #CCC;
        padding: .25rem .5rem 0 .5rem;
        cursor: pointer;
        &:hover {
            color: #CCC
        }
    }
</style>