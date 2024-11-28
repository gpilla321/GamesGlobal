import MovieList from "@/components/Lists/MovieList";
import { useQuery } from "react-query";
import { Movie } from "@/types";
import ListSearch from "./components/Lists/Search/ListSearch";
import { useState } from "react";
import Container from "@/components/Container/Container";
import _ from "lodash";

const API_URL = import.meta.env.VITE_API_URL;

export default function Home() {
  const [search, setSearch] = useState<string>("");
  const [genre, setGenre] = useState<string>("");
  const [genres, setGenres] = useState<string[]>([]);
  const [movies, setMovies] = useState<Movie[]>([]);

  const { data, isLoading } = useQuery<Movie[]>({
    queryKey: ["movies"],
    queryFn: () => fetch(`${API_URL}/Movie`).then((res) => res.json()),
    onSuccess(data: Movie[]) {
      const genresArr = _.sortBy(_.uniq(_.flatMap(data, "genre")));
      setGenres(genresArr);
      setMovies(data);
    },
    refetchOnWindowFocus: false,
  });

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSearch = event.target.value;
    setSearch(newSearch);
  };

  const handleGenre = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newGenre = event.target.value;
    setGenre(newGenre);
  };

  const applyFilter = () => {
    let newData = data;

    if (genre !== "default")
      newData = _.filter(newData, (movie: Movie) =>
        movie.genre.includes(genre)
      );

    if (search !== "")
      newData = _.filter(
        newData,
        (movie: Movie) =>
          movie.title.toLowerCase().indexOf(search.toLowerCase()) !== -1
      );

    setMovies(newData ?? []);
  };

  const clearFilters = () => {
    setMovies(data ?? []);
    setGenre("");
    setSearch("");
  };

  return (
    <Container>
      <ListSearch
        search={search}
        genre={genre}
        genres={genres}
        onChangeSearch={handleSearch}
        onChangeGenre={handleGenre}
        applyFilter={applyFilter}
        clearFilters={clearFilters}
      />
      <MovieList data={movies} isLoading={isLoading} />
    </Container>
  );
}
