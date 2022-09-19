export const getSearchLatLong = (search: string) => {
  const [latqs, lngqs] = search.substring(1).split('&');
  const lat = latqs.split('=')[1];
  const lng = lngqs.split('=')[1];
  return { lat, lng };
};
