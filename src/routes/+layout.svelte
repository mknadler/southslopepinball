<script>
    import '$lib/assets/css/main.css'
    import { setMenuContext } from '$lib/stores/menuStore.ts';

  // Initialize menu context
  setMenuContext();
</script>

<slot />