export interface MovieStructure {
  id: number;
  name: string;
  director: string;
  year: number;
  summary: string;
  actor: string;
  picture: string;
  isSeen: boolean;
}

export interface MoviesStateStructure {
  movies: MovieStructure[];
}
