import MUIList from "@mui/material/List";
import MUIListItem from "@mui/material/ListItem";
import MUIListItemText from "@mui/material/ListItemText";
import MUIChip from "@mui/material/Chip";
import styled from "styled-components";
import Flexbox from "@/components/Flexbox/Flexbox";
import Loading from "@/components/Loading/Loading";
import { Movie } from "@/types";
import { Typography } from "@mui/material";

type Props = {
  data: Movie[]; //remove partial later
  isLoading?: boolean;
};
export default function List({ data, isLoading }: Props) {
  if (!data || data.length === 0) return null;

  if (isLoading) return <Loading />;

  return (
    <StyledList>
      {data.map((movie: Movie, index: number) => (
        <StyledListItem key={`${movie.title}-${index}`}>
          <Flexbox
            spacing={{ xs: 1 }}
            direction="column"
            useFlexGap
            justifyContent={{ xs: "end" }}
            flexWrap="wrap"
            flexGrow={1}
          >
            <Flexbox
              spacing={{ xs: 1 }}
              direction="row"
              justifyContent={{ xs: "end" }}
              flexWrap="wrap"
              flexGrow={1}
            >
              <StyledListItemText
                primary={movie.title}
                secondary={movie.director}
              />
              {movie.genre.map((genre: string, idx: number) => (
                <StyledChip key={`${genre}-${idx}`} label={genre} />
              ))}
            </Flexbox>
            <Flexbox
              spacing={{ xs: 0.5 }}
              direction="row"
              flexGrow={1}
              flexWrap="wrap"
              justifyContent="space-between"
            >
              <div>
                {movie.actors.map((actor: string, actorIdx: number) => (
                  <Typography key={`${actor}-${actorIdx}`} variant="caption">
                    {actor}
                    {actorIdx < movie.actors.length - 1 ? ", " : " | "}
                  </Typography>
                ))}
                <Typography variant="caption">{movie.year}</Typography>
              </div>
              <Typography variant="caption">
                <Flexbox direction="row" alignItems="center">
                  {movie.rating} (rating)
                </Flexbox>
              </Typography>
            </Flexbox>
          </Flexbox>
        </StyledListItem>
      ))}
    </StyledList>
  );
}

const StyledList = styled(MUIList)`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const StyledListItem = styled(MUIListItem)`
  border: 1px solid #ccc;
  background-color: #fff;
`;
const StyledListItemText = styled(MUIListItemText)``;

const StyledChip = styled(MUIChip)``;
