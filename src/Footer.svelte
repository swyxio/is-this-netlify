<script>
  export let headers
</script>
<style>

  .footerLeft {
    grid-area: 4 / 1 / 5 / 2;
  }
  .footerMid {
    grid-area: 4 / 2 / 5 / 3;
  }
  .footerRight {
    grid-area: 4 / 3 / 5 / 4;
    text-align: right;
  }
</style>
<div class="footerLeft">
  <details>
    <summary>
      <code>Full Header Dump</code>
    </summary>
    <pre> {JSON.stringify(headers, null, 2)} </pre>
  </details>
</div>
<div class="footerMid" />
<div class="footerRight">

  <div>
    <a href="https://github.com/sw-yx/is-this-netlify">
      View Source and Request Features
    </a>
    for this project or <a href="https://github.com/netlify/netlify-browser-extension">get the browser extension</a>
  </div>
</div>