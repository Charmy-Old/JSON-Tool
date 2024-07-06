function sortKeys(jsonData) {
  const keys = Object.keys(jsonData);
  const sortedKeys = keys.sort();
  const sortedData = {};
  for (const key of sortedKeys) {
    sortedData[key] = jsonData[key];
  }
  document.getElementById('resultBlock').value = JSON.stringify(sortedData, null, 2);
}
