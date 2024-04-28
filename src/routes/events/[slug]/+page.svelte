<script>
  // import mdocc from '@markdoc/markdoc';
  // import Markdoc from 'sveltejs-markdoc';

  export let data;
  let event = data.event;
  let location = data.location;

</script>

{@html event.description.content}