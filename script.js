import { data } from "./data.js";

function getCatigory(Data, catigory) {
  return Data.filter((Data) => Data.category === catigory);
}

function sortData(data, sortBy, order) {
  return data.sort((a, b) => {
    if (order === "asc") {
      return a[sortBy] - b[sortBy];
    } else {
      return b[sortBy] - a[sortBy];
    }
  });
}

console.log(getCatigory(data, "Vegetable"));
console.log(getCatigory(data, "Fruit"));
console.log(getCatigory(data, "Protein"));
console.log(getCatigory(data, "Nuts"));
console.log(getCatigory(data, "Grain"));
console.log(getCatigory(data, "Dairy"));
console.log(data.filter((i) => i.calorie >= 100));
console.log(data.filter((i) => i.calorie <= 100));
console.log(sortData(data, "protiens"));
console.log(sortData(data, "cab", "asc"));