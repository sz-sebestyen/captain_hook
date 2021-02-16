import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // data fetching function
  async function fetchUrl() {
    // await for the promise
    const response = await fetch(url);

    // convert response body to object
    const json = await response.json();
    setData(json);
    setLoading(false);
  }

  // only fetch once per render
  useEffect(() => {
    fetchUrl();
  }, []);

  return [data, loading];
}

export { useFetch };
