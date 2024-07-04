const importData = '../data/sort-keys.json';

function sortKeys(jsonData) {
  const keys = Object.keys(jsonData);
  const sortedKeys = keys.sort();
  const sortedData = {};
  for (const key of sortedKeys) {
    sortedData[key] = jsonData[key];
  }
  console.log(sortedData);
}

fetch(importData)
  .then(response => response.json())
  .then(data => {
    sortKeys(data);
  })
  .catch(error => {
    console.error('Error fetching the JSON data:', error);
  });
