const BASE_URL = 'https://api.themoviedb.org/3';

const getEnvVariableOrThrowError = (envVarName: string) => {
  if (!process.env[envVarName]) {
    throw new Error(`${envVarName} environment variable is not set`);
  }

  return process.env[envVarName];
}

const API_BEARER_TOKEN = getEnvVariableOrThrowError('REACT_APP_API_BEARER_TOKEN');

async function apiFetch(
  apiPath: string,
  init?: RequestInit
): Promise<Response> {
  const url = new URL(`${BASE_URL}${apiPath}`);

  const options = { ...init, headers: {
    Authorization: `Bearer ${API_BEARER_TOKEN}`,
  } };

  const result = await fetch(url.toString(), options);

  if (!result.ok) {
    throw Error (`API fetch failed, path: ${apiPath}`);
  }

  const resultJson = await result.json();

  return resultJson;
}

export default apiFetch;