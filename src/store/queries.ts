import fetch from "node-fetch";
import { config } from "../config";

const baseApiUrl = "https://api.themoviedb.org/3";

export const queryDiscover = async (setSearchResults: (data: any) => void) => {
  const response = await fetch(
    `${baseApiUrl}/discover/movie?api_key=${config.apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`
  );

  const data = await response.json();
  setSearchResults(data.results);
};

export const searchBasedOnQuery = async (
  query: string,
  setSearchResults: (data: any) => void
) => {
  const response = await fetch(
    `${baseApiUrl}/search/movie?api_key=${config.apiKey}&language=en-US&query=${query}&page=1&include_adult=false`
  );
  const data = await response.json();
  setSearchResults(data.results);
};

export const queryConfiguration = async (
  setConfig: (base_url: string, backdrop: string) => void
) => {
  const response = await fetch(
    `${baseApiUrl}/configuration?api_key=${config.apiKey}`
  );
  const data: any = await response.json();
  setConfig(
    data.images.secure_base_url + data.images.backdrop_sizes[2],
    data.images.secure_base_url + data.images.poster_sizes[4]
  );
};

export const loadMovieDetails = async (showId: string) => {
  const response = await fetch(
    `${baseApiUrl}/movie/${showId}'?api_key=${config.apiKey}&language=en-US`
  );
  const data = await response.json();
  return data;
};
