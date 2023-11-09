import { MovieStructure } from "../store/feature/movies/types";

const mockMovies: MovieStructure[] = [
  {
    id: 1,
    name: "The Godfather",
    director: "Francis Ford Coppola",
    year: 1972,
    summary: "Power and corruption in the mafia family of the Corleones.",
    actor: "Marlon Brando",
    picture: "https://i.ibb.co/ZG5qBtw/good-Father.webp",
    isSeen: false,
  },
  {
    id: 2,
    name: "Goodfellas",
    director: "Martin Scorsese",
    year: 1990,
    summary: "Rise and fall of a gangster in the Italian mafia.",
    actor: "Ray Liotta",
    picture: "https://i.ibb.co/z8rwzsd/good-Fellas.webp",
    isSeen: false,
  },
  {
    id: 3,
    name: "Scarface",
    director: "Brian De Palma",
    year: 1983,
    summary: "Cuban immigrant becomes a powerful drug lord in Miami.",
    actor: "Al Pacino",
    picture: "https://i.ibb.co/qgmGnWq/scarface.webp",
    isSeen: false,
  },
];

export default mockMovies;
