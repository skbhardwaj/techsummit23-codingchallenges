export { weightedSort };

const weightedSort = (text) => {
  const getSum = (arr) => arr.reduce((acc, x) => acc + x, 0);
  const cc = (s) => s.charCodeAt();
  const compareAscii = (a, b) => {
    if (cc(a[0][0]) > cc(b[0][0])) return -1;
    if (cc(a[0][0]) < cc(b[0][0])) return 1;
    else return b[0].localeCompare(a[0]);
  };
  const words = text
    .replace(/[^\w ]/g, "")
    .split(" ")
    .filter(Boolean);
  const magic = [...new Set(words)]
    .map((word) => {
      const ascii = word.split("").reduce((acc, x) => {
        acc.push(cc(x));
        return acc;
      }, []);
      return [word, getSum(ascii)];
    })
    .sort((a, b) => {
      if (a[1] > b[1]) return -1;
      if (a[1] < b[1]) return 1;
      else return compareAscii(a, b);
    })
    .map((x) => x.join("|"));
  return magic.join("\n");
};
