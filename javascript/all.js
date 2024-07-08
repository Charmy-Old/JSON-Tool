document.getElementById('findSameValues').addEventListener('click', () => {
  const inputBlock = document.getElementById('inputBlock').value;
  try {
    const jsonData = JSON.parse(inputBlock);
    findSameValues(jsonData);
  } catch (e) {
    document.getElementById('resultBlock').value = 'Not a valid JSON format';
  }
});

document.getElementById('sortKeys').addEventListener('click', () => {
  const inputBlock = document.getElementById('inputBlock').value;
  try {
    const jsonData = JSON.parse(inputBlock);
    sortKeys(jsonData);
  } catch (e) {
    document.getElementById('resultBlock').value = 'Not a valid JSON format';
  }
});

document.getElementById('organize').addEventListener('click', () => {
  const inputBlock = document.getElementById('inputBlock').value;
  organize(inputBlock);
});
