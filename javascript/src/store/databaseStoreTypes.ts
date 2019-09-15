import { Person } from "../api/person";

export type DatabaseStore = Person[];

export interface SerializedPerson {
  id: string;
  days: string;
  birthDate: string;
  deathDate: string;
  firstName: string;
  lastName: string;
  title: string;
  description: string;
  image: string;
  link: string;
  categories: string[];
  exactDates: boolean;
  nationality: string[];
  mannerOfDeath: string;
  causeOfDeath: string;
  imdbId: string;
  gender: string;
  occupations: string[];
  deezerId: string;
  spotifyId: string;
}

export type SerializedDatabaseState = SerializedPerson[];

const deserializedPerson = (serialized: SerializedPerson): Person =>
  new Person(
    serialized.id,
    serialized.days,
    new Date(serialized.birthDate),
    new Date(serialized.deathDate),
    serialized.firstName,
    serialized.lastName,
    serialized.title,
    serialized.description,
    serialized.image,
    serialized.link,
    serialized.categories,
    serialized.exactDates,
    serialized.nationality,
    serialized.mannerOfDeath,
    serialized.causeOfDeath,
    serialized.imdbId,
    serialized.gender,
    serialized.occupations,
    serialized.deezerId,
    serialized.spotifyId
  );

export const deserializeDatabaseState = (
  state: SerializedDatabaseState
): DatabaseStore => {
  return state.map(obj => deserializedPerson(obj));
};
