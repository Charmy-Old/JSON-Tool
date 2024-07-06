document.getElementById('findSameValues').addEventListener('click', () => {
  const inputBlock = document.getElementById('inputBlock').value;
  const jsonData = JSON.parse(inputBlock);
  findSameValues(jsonData);
});

document.getElementById('sortKeys').addEventListener('click', () => {
  const inputBlock = document.getElementById('inputBlock').value;
  const jsonData = JSON.parse(inputBlock);
  sortKeys(jsonData);
});
