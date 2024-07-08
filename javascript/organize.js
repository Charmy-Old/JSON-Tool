function organize(inputData) {
  let expectedData;

  try {
    expectedData = JSON.parse(inputData);
  } catch (e) {
    expectedData = {};
    const organizingData = inputData.split(',').map(pair => pair.trim());

    organizingData.forEach(pair => {
      const [key, value] = pair.split(':').map(part => part.trim().replace(/['"]/g, ''));
      expectedData[key] = value;
    });
  }

  const resultText = JSON.stringify(expectedData, null, 2);
  if (resultText === '{}') {
    document.getElementById('resultBlock').value = 'Cannot organize this data';
  } else {
    document.getElementById('resultBlock').value = resultText;
  }
}
