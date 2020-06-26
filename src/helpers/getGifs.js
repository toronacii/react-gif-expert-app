export async function getGifs(category) {
  const categoryParam = encodeURI(category);
  const url = `https://api.giphy.com/v1/gifs/search?q=${categoryParam}&limit=10&api_key=J5jUPD9MgICiV0j5LIsBLLGayV64VPmy`;
  const response = await fetch(url)
  const { data } = await response.json();
  return data.map(({ id, title, images }) => ({ id, title, ...images.downsized_medium }));
}