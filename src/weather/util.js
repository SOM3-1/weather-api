export const manageApi = async (locationName) => {
  const BASE_URL =
    "https://api.weatherapi.com/v1/current.json?key=3ddafd9eb53941e6b7d110835221804 &q=";
  const parsedQuery = locationName.replaceAll(" ", "+");
  const url = `${BASE_URL}${parsedQuery}&aqi=no`;
  const fetchUrl = await fetch(url);
  const some = await fetchUrl.json();
  console.log(some);
  return some;
};

export const existingLocation = (suggestions, some) => {
  return suggestions.filter(
    (value) =>
      value.location.name.toLowerCase() === some.location.name.toLowerCase()
  );
};


export const removeExistingLocation = (suggestions, payload) => {
  return suggestions.filter(
    (value) => value.location.name.toLowerCase() !== payload.toLowerCase()
  );
}