<script>
  export let name;
  export let header = "no site applied";
  export let path = document.location.pathname.slice(1);
  if (path.length) {
    // there's a path to try!
    var req = new XMLHttpRequest();
    console.log({ path: `https://${path}` });
    req.open("GET", `https://${path}`);
    req.send(null);
    req.onreadystatechange = function() {
      header = req.getResponseHeader("server");
      console.log({ header });
    };
  }
</script>

<style>
  h1 {
    color: purple;
  }
</style>

<h1>Hello {name}!</h1>
<h3>{path}</h3>
<p>header: {header}</p>
