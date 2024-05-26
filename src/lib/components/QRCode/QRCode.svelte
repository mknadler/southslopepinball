<script lang="ts">
    import { onMount } from 'svelte';
    import QRious from 'qrious';

    export let url: string = '';

    let qrElement;
    let qrCode;
    onMount(()=> {
        qrCode = new QRious({
            element: qrElement,
            background: '#FDFCFF',
            foreground: '#7745E6',
            level: 'H',
            size: 340,
            value: url
        });
        console.log(qrCode);
    });
</script>

<canvas bind:this={qrElement}></canvas>

<style>
    canvas {
        height: 50vw;
        width: 50vw;
        border: 6px solid #FDFCFF;
    }
</style>