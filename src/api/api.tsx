export const getCountryCoords = (countryName: string) => {
  const url2 = `https://api.openweathermap.org/geo/1.0/direct?q=${countryName}&limit=5&appid=905fadfb744c938d89363e46fc9169cb`;

  return fetch(url2).then(res => res.json()).then(res => res);
}

export const getCountryMetricData = (lat: number, lon: number) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&exclude=current&units=metric&appid=905fadfb744c938d89363e46fc9169cb`

  return fetch(url).then(res => res.json()).then(res => res);
}