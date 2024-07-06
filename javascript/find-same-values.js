function findSameValues(jsonData) {
  const firstValue = {};
  for (let key in jsonData) {
    let value = jsonData[key];
    if (!(value in firstValue)) {
      firstValue[value] = [key];
    } else {
      const keys = firstValue[value];
      if (!keys.includes(key)) {
        keys.push(key);
      }
    }
  }

  let resultText = '';
  Object.keys(firstValue).forEach(value => {
    if (firstValue[value].length > 1) {
      resultText += `Value '${value}' appears in '${firstValue[value].join("' and '")}'.\n`;
    }
  });
  document.getElementById('resultBlock').value = resultText || 'No duplicate values found.';
}
