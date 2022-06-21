const BASE_URL = 'https://api.themoviedb.org/3';

const getEnvVariableOrThrowError = (envVarName: string) => {
  if (!process.env[envVarName]) {
    throw new Error(`${envVarName} environment variable is not set`);
  }

  return process.env[envVarName] as string;
};

const API_KEY = getEnvVariableOrThrowError('REACT_APP_API_KEY');

export const getURLWithAPIKeyParam = (apiPath: string) => {
  const url = new URL(`${BASE_URL}${apiPath}`);
  url.searchParams.append('api_key', API_KEY);

  return url.toString();
};

// https://developers.themoviedb.org/3/getting-started/images
export const getImageURLWithAPIKeyParam = (
  baseUrl: string,
  fileSize: String,
  imagePath: string,
) => {
  return `${baseUrl}${fileSize}${imagePath}`;
};

async function apiFetch<T>(apiPath: string, init?: RequestInit): Promise<T> {
  const result = await fetch(getURLWithAPIKeyParam(apiPath), init);

  if (!result.ok) {
    throw Error(`API fetch failed, path: ${apiPath}`);
  }

  const resultJson = await result.json();

  return resultJson;
}

export default apiFetch;
