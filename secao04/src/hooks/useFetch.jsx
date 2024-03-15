import { useEffect, useState } from 'react';

// 4 - custom hook
export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [config, setConfig] = useState(null);
  const [method, setMethod] = useState(null);
  const [callFetch, setCallFetch] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [itemId, setItemId] = useState(null);

  const httpConfig = (requestData, requestMethod) => {
    if (requestMethod === 'POST') {
      setConfig({
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });

      setMethod('POST');
    } else if (requestMethod === 'DELETE') {
      setConfig({
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      setMethod('DELETE');
      setItemId(requestData);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(url);
        const json = await res.json();
        setData(json);
        setMethod(null);
        setError(null);
      } catch (error) {
        console.log(error.message);
        setError('Houve um erro ao carregar os dados!');
      }
      setLoading(false);
    };
    fetchData();
  }, [url, callFetch]);

  useEffect(() => {
    const httpRequest = async () => {
      if (method === 'POST') {
        setLoading(true);
        try {
          const res = await fetch(url, config);
          const json = await res.json();
          setCallFetch(json);
        } catch (error) {
          console.log(error.message);
          setError('Houve um erro ao enviar os dados!');
        }
      } else if (method === 'DELETE') {
        try {
          const deleteUrl = `${url}/${itemId}`;
          const res = await fetch(deleteUrl, config || {});
          const json = await res.json();
          setCallFetch(json);
        } catch (error) {
          console.log(error.message);
          setError('Houve um erro ao excluir os dados!');
        }
      }
      setLoading(false);
    };
    if (config !== null) {
      httpRequest();
    }
  }, [config]);

  return { data, httpConfig, loading, error };
};
