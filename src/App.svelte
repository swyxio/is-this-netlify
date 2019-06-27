<script>
  export let name;
  export let header = "potato";
  export let path = document.location.pathname.slice(1);
  if (path.length) {
    // there's a path to try!
    fetch(`/.netlify/functions/isNetlify?path=${path}`)
      .then(res => res.json())
      .then(x => {
        header = x;
        console.log({ header });
      });
  }
  export let isNetlify = header.server && header.server === "Netlify";
  // export let isLoading = !!(isNetlify && header);
</script>

<style>
  h1 {
    color: purple;
  }
  .success {
    font-weight: bold;
    color: green;
  }
  .fail {
    font-weight: bold;
    color: red;
  }
</style>

<h1>Is This Netlify?</h1>
<h3>Checking Domain: {path}</h3>
<p>
  Is This Netlify:
  <span class={header.server === 'Netlify' ? 'success' : 'fail'}>
     {header.server === 'Netlify' ? 'Yes' : 'No'}
  </span>
</p>
