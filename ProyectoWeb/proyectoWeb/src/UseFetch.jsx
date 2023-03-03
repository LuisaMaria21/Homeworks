import { useEffect, useState } from 'react';

function useFetch(url) {

  const [data, setData] = useState(null);

  const [isLoading, setIsLoading] = useState(true);

  const [hasError, setHasError] = useState(null);


  useEffect(() => {
    async function fetchData() {
      try {
        const api = await fetch(url);
        const data = await api.json();
        setData(data);
        setIsLoading(false);
      } catch (error) {
        setHasError(error);
        setIsLoading(false);
      }
    }

    fetchData();
  }, [url]);

  return { data, isLoading, hasError };
}



export default useFetch;
