const importData = '../data/data.json';

function findSameValues(jsonData) {
  const firstValue = {};
  for (let key in jsonData) {
    let value = jsonData[key];
    console.log(value);
    if (!(value in firstValue)) {
      firstValue[value] = [key];
    } else {
      const keys = firstValue[value];
      console.log(keys);
      if (!keys.includes(key)) {
        keys.push(key);
      }
    }
  }

  Object.keys(firstValue).forEach(value => {
    if (firstValue[value].length > 1) {
      // console.log(`Value '${value}' appears in '${firstValue[value].join("' and '")}'.`);
    }
  });
}

fetch(importData)
  .then(response => response.json())
  .then(data => {
    findSameValues(data);
  })
  .catch(error => {
    console.error('Error fetching the JSON data:', error);
  });
