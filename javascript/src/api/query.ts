const request = {
  spreadsheetId: "1tLcsXib4I6wYr9EJED5uJj_mMfvDwI8hBJ7-dJWnTMk",
  range: "database!A1:T",
  key: "AIzaSyChFa8ete627UC3U9Wlgwffij0QeRdmthc"
};

const parseResult = row => ({
  id: row[0],
  days: row[1],
  birthDate: new Date(row[2]),
  deathDate: new Date(row[3]),
  firstName: row[4],
  lastName: row[5],
  title: row[6],
  description: row[7],
  image: row[8],
  link: row[9],
  categories: row[10].split(","),
  exactDates: row[11] === "TRUE",
  nationality: row[12] ? row[12].split(",") : [],
  mannerOfDeath: row[13],
  causeOfDeath: row[14],
  imdbId: row[15],
  gender: row[16],
  occupations: row[17] ? row[17].split(",") : [],
  deezerId: row[18],
  spotifyId: row[19]
});

const url = `https://sheets.googleapis.com/v4/spreadsheets/${request.spreadsheetId}/values/${request.range}?key=${request.key}`;

const cleanData = data => {
  data.splice(0, 1);
  return data.map(row => parseResult(row)).sort((a, b) => a.days - b.days);
};

export const getAllDatabase = async () => {
  return window.fetch(url).then(response => {
    return response.json().then(res => {
      if (res) {
        return cleanData(res.values);
      }
    });
  });
};

export const getFromId = async id => {
  const allData = await getAllDatabase();
  return allData.filter(p => p.id === id);
};
