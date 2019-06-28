<script>
  export let name;
  export let nfrid = "x-nf-request-id";
  export let headers = "potato";
  export let path = document.location.pathname.slice(1);
  if (path.length) {
    fetch(`/.netlify/functions/isNetlify?path=${path}`)
      .then(res => res.json())
      .then(x => {
        headers = x;
        console.log({ headers });
      });
  }
  export let isNetlify = !!headers[nfrid]; // is not properly reactive :(
  export let server = headers["server"];
  // export let isLoading = !!(isNetlify && headers);
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
  .serverheader {
    font-weight: bold;
    color: purple;
  }
  blockquote {
    background-color: lightyellow;
    border-radius: 10px;
    padding: 10px;
  }
  pre {
    background-color: lightgray;
    border-radius: 10px;
    padding: 10px;
  }
</style>

<h1>Is This Netlify?</h1>
<h3>Checking Domain: {path || 'no domain specified!'}</h3>
<p>
  Is This Netlify:
  <span class={headers[nfrid] ? 'success' : 'fail'}>
     {headers[nfrid] ? 'Yup' : 'Nope'}
  </span>
</p>

<p>
  Server Header:
  <span class="serverheader"> {headers['server']} </span>
</p>

<blockquote>
  <p>
    <strong>how to use:</strong>
  </p>
  prepend any url with 'https://is-this.netlify.com', e.g.
  <a href="https://is-this.netlify.com/barstoolsports.com/anything.html">
    https://is-this.netlify.com/barstoolsports.com/anything.html
  </a>
  .
</blockquote>

<h3>Header Dump</h3>
<pre> {JSON.stringify(headers, null, 2)} </pre>

<h3>
  <a href="https://github.com/sw-yx/is-this-netlify">View Source</a>
  for this project
</h3>
