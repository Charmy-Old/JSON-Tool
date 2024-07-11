function Indent(indent, spaces) {
  try {
    const jsonData = JSON.parse(indent);
    const formattedJson = JSON.stringify(jsonData, null, spaces);
    document.getElementById('resultBlock').value = formattedJson;
  } catch (e) {
    document.getElementById('resultBlock').value = 'Not a valid JSON format';
  }
}