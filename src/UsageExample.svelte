<style>
  .UsageExample-summary {
    color: lightblue;
  }

  .UsageExample-summary-text {
    font-style: normal;
    font-weight: 500;
  }

  .UsageExample-blockquote {
    text-align: left;
    display: inline-block;
    background-color: #111;
    border-radius: 10px;
    padding: 0 15px 15px;
    color: white;
    font-weight: 400;
    line-height: 1.5em;
    overflow-x: auto;
    overflow-y: hidden;
    box-shadow: rgba(50, 70, 70, 0.5) 0 0 1px 4px;
    /* white-space: nowrap; */
  }

  .UsageExample-introduction {
    font-weight: 500;
    line-height: 1.6em;
    margin: 0;
  }

  .UsageExample-introduction code {
    font-weight: 600;
    letter-spacing: 0.005em;
    background-color: #222;
    padding: 0.7ex 1ex;
  }

  .UsageExample-introduction-footer {
    margin-bottom: 0;
  }

  .UsageExample-list {
    margin: 1ex 0 0;
    padding-top: 0;
    padding-left: 1em;
  }

  .UsageExample-list-item {
    color: lightblue;
    margin: 0;
    padding: 0;
  }

  .UsageExample-list-item a {
    color: lightblue;
  }

  .UsageExample-list-item a span {
    font-weight: 500;
  }

</style>

<!--
  Temporary way to debug `<details>` visual layout
  is to add `open` attribute to the element.

  For example:
    `<details open>`

  More details:
  - https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details
-->

<details>
  <summary class="UsageExample-summary">
    <span class="UsageExample-summary-text">Usage Examples</span>
  </summary>
  <blockquote class="UsageExample-blockquote">
    <div class="UsageExample-introduction">
      <p>
        Prepend any URL address with<br>
        <code>https://is-this.netlify.com/</code>
      </p>
      <p class="UsageExample-introduction-footer">
        For example:
      </p>
    </div>
    <ul class="UsageExample-list">
      <li class="UsageExample-list-item">
        <a href="https://is-this.netlify.com/barstoolsports.com/anything.html">
          https://is-this.netlify.com/<span>barstoolsports.com/anything.html</span>
        </a>
      </li>
      <li class="UsageExample-list-item">
        <a href="https://is-this.netlify.com/https://copaamerica.com">
          https://is-this.netlify.com/<span>https://copaamerica.com</span>
        </a>
      </li>
      <li class="UsageExample-list-item">
        <a href="https://is-this.netlify.com/www.reactjs.org/hooks">
          https://is-this.netlify.com/<span>www.reactjs.org/hooks</span>
        </a>
      </li>
    </ul>
  </blockquote>
</details>
