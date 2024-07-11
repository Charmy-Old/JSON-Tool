function sortKeys(data) {
  try {
    const jsonData = JSON.parse(data);
    const keys = Object.keys(jsonData);
    const sortedKeys = keys.sort();
    const sortedData = {};
  for (const key of sortedKeys) {
    sortedData[key] = jsonData[key];
  }
  document.getElementById('resultBlock').value = JSON.stringify(sortedData, null, 2);
  } catch (e) {
    document.getElementById('resultBlock').value = 'Not a valid JSON format';
  }
}