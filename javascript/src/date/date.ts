// Code copied from https://stackoverflow.com/a/15289883

const _MS_PER_DAY = 1000 * 60 * 60 * 24;

export const dateDiffInDays = (a: Date, b: Date): number => {
  // Discard the time and time-zone information.
  const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

  return Math.floor((utc2 - utc1) / _MS_PER_DAY);
};

export const diffWithTodayInDays = (date: Date | undefined): number =>
  date ? dateDiffInDays(date, new Date()) : 0;

function pad(num: number): string {
  var s = "00" + num;
  return s.substr(s.length - 2);
}

export const formatDate = (date: Date) => {
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(
    date.getDate()
  )}`;
};
