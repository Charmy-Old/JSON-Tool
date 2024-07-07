function organize(inputData) {
  const expectedData = {};
  const organizingData = inputData.split(',').map(pair => pair.trim());

  organizingData.forEach(pair => {
    const [key, value] = pair.split(':').map(part => part.trim().replace(/['"]/g, ''));
    expectedData[key] = value;
  });
  
  let resultText = '{\n';
  Object.keys(expectedData).forEach((key, index, array) => {
    resultText += `"${key}": "${expectedData[key]}"`;
    if (index < array.length - 1) {
      resultText += ',';
    }
    resultText += '\n';
  });
  resultText += '}';
  
  document.getElementById('resultBlock').value = resultText;
}
