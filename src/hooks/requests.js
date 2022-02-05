const API_URL = "https://api.drpaul-clinic.com";

async function httpGetPackage() {
  const response = await fetch(`${API_URL}/package`);
  return await response.json();
}

async function httpSubmitPackage() {
  // TODO: Once API is ready.
  // Submit given launch data to launch system.
}

export { httpGetPackage, httpSubmitPackage };
