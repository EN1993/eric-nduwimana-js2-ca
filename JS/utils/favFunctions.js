export function getExistingFavs() {
  const favs = localStorage.getItem("favourite");
  if (favs === null) {
    return [];
  } else {
    return JSON.parse(favs);
  }
}