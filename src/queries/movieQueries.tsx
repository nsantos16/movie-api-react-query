import { useQuery } from "react-query";
import apiFetch from "../utils/apiFetch";

const useDiscoverMovieQuery = () => {
  return useQuery("movies", async () => {
    const movies = await apiFetch("/discover/movie", { method: "GET" });

    return movies;
  })
}

export default useDiscoverMovieQuery;