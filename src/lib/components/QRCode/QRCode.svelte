<script lang="ts">
    import { onMount } from 'svelte';
    import QRious from 'qrious';

    export let url: string = '';

    let qrElement;
    onMount(()=> {
        new QRious({
            element: qrElement,
            background: '#FDFCFF',
            foreground: '#7745E6',
            level: 'H',
            padding: 25,
            size: 340,
            value: url
        });
    });
</script>

<canvas bind:this={qrElement}></canvas>

<style>
    canvas {
        height: 50vw;
        width: 50vw;
        border: 6px solid #7745E6;
    }
</style>