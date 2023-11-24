const API_URL = "https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=spain&api_key=cce6efb5c865eafd8753e3803d256c29&format=json";

async function fetchArtistData(url) {
  const response = await fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data;
}

async function fetchDeezerData(artistName) {
  const url = `https://api.deezer.com/search?q='${artistName}'`;
  const data = await fetchArtistData(url);
  return data.data[0].artist.picture_medium;
}

async function getMusicData() {
  const data = await fetchArtistData(API_URL);
  const artists = data.topartists.artist;

  const promises = artists.map(async (artist) => {
    const image = await fetchDeezerData(artist.name);
    return {
      id: artist.mbid,
      name: artist.name,
      listener: artist.listeners,
      streamable: artist.streamable,
      image: image,
    };
  });

  return Promise.all(promises);
}

export { getMusicData };
