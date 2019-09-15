export class Person {
  constructor(
    public id: string,
    public days: string,
    public birthDate: Date,
    public deathDate: Date,
    public firstName: string,
    public lastName: string,
    public title: string,
    public description: string,
    public image: string,
    public link: string,
    public categories: string[],
    public exactDates: boolean,
    public nationality: string[],
    public mannerOfDeath: string,
    public causeOfDeath: string,
    public imdbId: string,
    public gender: string,
    public occupations: string[],
    public deezerId: string,
    public spotifyId: string
  ) {}
}

export const getPerson = (row: string[]) =>
  new Person(
    row[0],
    row[1],
    new Date(row[2]),
    new Date(row[3]),
    row[4],
    row[5],
    row[6],
    row[7],
    row[8],
    row[9],
    row[10] ? row[10].split(",") : [],
    row[11] === "TRUE",
    row[12] ? row[12].split(",") : [],
    row[13],
    row[14],
    row[15],
    row[16],
    row[17] ? row[17].split(",") : [],
    row[18],
    row[19]
  );
