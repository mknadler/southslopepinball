<script>
  import mdocc from '@markdoc/markdoc';
  import Markdoc from 'sveltejs-markdoc';
  export let data
  let event = data.event;
  let location = data.location;


  let source = event.description;
  let ast = mdocc.parse(source);
  let content = mdocc.transform(ast);
</script>

{event.description}

<Markdoc content={JSON.stringify(content)} />