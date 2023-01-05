const apiServerUrl = process.env.REACT_APP_API_SERVER_URL;

async function getData(URL, config) {
  try {
    const response = await fetch(URL, config);
    const data = await response.json();

    return {
      data: data,
      error: null,
    };
  } catch (error) {
    console.error(error);

    return {
      data: null,
      error: error,
    };
  }
}

export async function getPublicData() {
  const URL = `${apiServerUrl}/api/messages/public`;
  const config = {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  };

  const { data, error } = await getData(URL, config);

  return {
    data: data || null,
    error: error || null,
  };
}
