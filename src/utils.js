export const throttle = (func, limit) => {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

export const pingNetlifyApi = async (path) => {
  if (path.startsWith('https://')) path = path.slice(8);
  if (path.startsWith('http://')) path = path.slice(7);
  const nurl = new URL(`https://${path}`);
  if (nurl.host.split('.').length < 3) {
    // attempt to append www if no subdomain (e.g. www.swyx.io)
    // but it could be no subdomain is correct (e.g. reactjs.org)
    const promise_1 = fetch('https://api.netlify.com/api/v1/sites/' + path);
    const promise_2 = fetch('https://api.netlify.com/api/v1/sites/www.' + path);
    const promises = [promise_1, promise_2];
    return Promise.allSettled(promises).then(async (results) => {
      const a = await results[0].value;
      const b = await results[1].value;
      if (a.ok) return a.json();
      if (b.ok) return b.json();
      throw new Error('nope');
    });
  } else {
    // got all 3 parts of the host subdomain.domain.com
    return fetch('https://api.netlify.com/api/v1/sites/' + path).then((res) =>
      res.json()
    );
  }
};
