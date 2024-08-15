function isValidJSON(enterContent) {
  try {
    JSON.parse(enterContent);
    return true;
  } catch (e) {
    return false;
  }
}

document.getElementById('findSameValues').addEventListener('click', () => {
  const inputBlock = document.getElementById('inputBlock').value;
  if (isValidJSON(inputBlock)) {
    findSameValues(inputBlock);
  } else {
    document.getElementById('resultBlock').value = 'Not a valid JSON format';
  }
});

document.getElementById('sortKeys').addEventListener('click', () => {
  const inputBlock = document.getElementById('inputBlock').value;
  if (isValidJSON(inputBlock)) {
    sortKeys(inputBlock);
  } else {
    document.getElementById('resultBlock').value = 'Not a valid JSON format';
  }
});

document.getElementById('organize').addEventListener('click', () => {
  const inputBlock = document.getElementById('inputBlock').value;
  if (isValidJSON(inputBlock)) {
    organize(inputBlock);
  } else {
    document.getElementById('resultBlock').value = 'Not a valid JSON format';
  }
});

document.getElementById('indent').addEventListener('click', () => {
  const inputBlock = document.getElementById('inputBlock').value;
  const spaces = parseInt(document.getElementById('indentSpaces').value, 10);
  if (isValidJSON(inputBlock)) {
    Indent(inputBlock, spaces);
  } else {
    document.getElementById('resultBlock').value = 'Not a valid JSON format';
  }
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
