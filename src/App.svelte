<script>
  export let name;
  export let nfrid = "x-nf-request-id";
  export let headers = "no headers loaded yet";
  export let path = document.location.pathname.slice(1);
  if (path.length) {
    fetch(`/.netlify/functions/isNetlify?path=${path}`)
      .then(res => res.json())
      .then(x => {
        headers = x;
        console.log({ headers });
      });
  } else {
    document.location = "https://is-this.netlify.com/netlify.com";
  }
  export let isNetlify = !!headers[nfrid]; // is not properly reactive :(
  export let server = headers["server"];
  // export let isLoading = !!(isNetlify && headers);
</script>

<style>
  h1 {
    color: lightcyan;
  }
  .bigtext {
    font-weight: bold;
    font-size: 10rem;
  }
  .domaininput {
    /* font-size: calc(30px + (100 - 30) * ((100vw - 300px) / (1600 - 300))); */
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    font-size: 5vw;
    font-weight: bold;
    color: orangered;
    line-height: calc(1.3em + (1.5 - 1.2) * ((100vw - 300px) / (1600 - 300)));
  }
  .success {
    color: green;
  }
  .fail {
    color: red;
  }
  .serverheader {
    font-weight: bold;
    color: lightcyan;
  }
  blockquote {
    display: inline-block;
    background-color: lightyellow;
    border-radius: 10px;
    padding: 10px;
    color: black;
    overflow-x: scroll;
    overflow-y: hidden;
    /* white-space: nowrap; */
  }
  pre {
    background-color: lightgray;
    border-radius: 10px;
    padding: 10px;
    color: black;
    overflow-x: scroll;
    overflow-y: hidden;
    max-width: 80vw;
  }
  main {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    grid-template-rows: 1fr 100px 2fr 100px;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    height: 90vh;
  }
  main .header {
    text-align: center;
    grid-area: 1 / 1 / 2 / 4;
  }
  main .middle {
    text-align: center;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    padding: 1rem;
    grid-area: 2 / 1 / 3 / 4;
    background-color: hsla(300, 100%, 50%, 0.1);
  }
  main .status {
    text-align: center;
    grid-area: 3 / 1 / 4 / 4;
  }
  main .footerLeft {
    grid-area: 4 / 1 / 5 / 2;
  }
  main .footerMid {
    grid-area: 4 / 2 / 5 / 3;
  }
  main .footerRight {
    grid-area: 4 / 3 / 5 / 4;
    text-align: right;
  }
</style>

<main>
  <div class="header">

    <h3 style="display: inline">Entered Domain</h3>

    <div class="domaininput"> {path || 'none'} </div>
  </div>
  <div class="middle">
    <h1>Is This Netlify?</h1>

  </div>
  <div class="status">

    <p>
      <span class={'bigtext ' + (headers[nfrid] ? 'success' : 'fail')}>
         {headers[nfrid] ? 'Yup' : 'Nope'}
      </span>
    </p>

    <p>
      Server Header:
      <span class="serverheader"> {headers['server']} </span>
    </p>

    <details>
      <summary>
        (
        <i style="color: lightblue">How to use?</i>
        )
      </summary>
      <blockquote>
        Prepend any url with 'https://is-this.netlify.com', e.g.
        <ul>
          <li>
            <a
              href="https://is-this.netlify.com/barstoolsports.com/anything.html">
              https://is-this.netlify.com/barstoolsports.com/anything.html
            </a>
          </li>
          <li>
            <a href="https://is-this.netlify.com/https://copaamerica.com">
              https://is-this.netlify.com/https://copaamerica.com
            </a>
          </li>
          <li>
            <a href="https://is-this.netlify.com/www.reactjs.org/hooks">
              https://is-this.netlify.com/www.reactjs.org/hooks
            </a>
          </li>
        </ul>

      </blockquote>
    </details>

  </div>
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
      for this project
    </div>
  </div>
</main>
