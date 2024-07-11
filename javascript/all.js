document.getElementById('findSameValues').addEventListener('click', () => {
  const inputBlock = document.getElementById('inputBlock').value;
  findSameValues(inputBlock);
});

document.getElementById('sortKeys').addEventListener('click', () => {
  const inputBlock = document.getElementById('inputBlock').value;
  sortKeys(inputBlock);
});

document.getElementById('organize').addEventListener('click', () => {
  const inputBlock = document.getElementById('inputBlock').value;
  organize(inputBlock);
});

document.getElementById('indent').addEventListener('click', () => {
  const inputBlock = document.getElementById('inputBlock').value;
  const spaces = parseInt(document.getElementById('indentSpaces').value, 10);
  Indent(inputBlock, spaces);
});
