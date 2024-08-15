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

document.getElementById('copyResult').addEventListener('click', async () => {
  const resultBlock = document.getElementById('resultBlock').value;
  try {
    await navigator.clipboard.writeText(resultBlock);
    alert('Copied successfully');
  } catch (err) {
    alert('Copy failed');
  }
});
