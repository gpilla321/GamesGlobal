import Input from "@/components/Input/Input";
import Flexbox from "../../Flexbox/Flexbox";
import Select from "@/components/Input/Select";
import { useMemo } from "react";
import Button from "@/components/Button/Button";

type Props = {
  search: string;
  genre: string;
  genres: string[];
  onChangeSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeGenre: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  applyFilter: () => void;
  clearFilters: () => void;
};

export default function ListSearch({
  search,
  genre,
  genres,
  onChangeSearch,
  onChangeGenre,
  applyFilter,
  clearFilters,
}: Props) {
  const genresAsOptions = useMemo(
    () => genres.map((genre) => ({ key: genre, value: genre })),
    [genres]
  );

  return (
    <Flexbox
      spacing={{ xs: 1 }}
      direction="row"
      useFlexGap
      justifyContent={{ xs: "end" }}
    >
      <Input
        type="text"
        onChange={onChangeSearch}
        value={search}
        label="Search"
        placeholder="Search"
      />
      <Select
        options={genresAsOptions}
        value={genre}
        onChange={onChangeGenre}
        placeholder="Genre filter"
      />
      <Button onClick={applyFilter} variant="contained" data-testid="apply-filters">
        Apply
      </Button>
      <Button onClick={clearFilters} variant="outlined" data-testid="clear-filters">
        Clear filters
      </Button>
    </Flexbox>
  );
}
