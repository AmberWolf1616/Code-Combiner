document.getElementById('startButton').addEventListener('click', () => {
  document.getElementById('landingPage').style.display = 'none';
  document.getElementById('combiningPage').style.display = 'block';
});

document.getElementById('combineButton').addEventListener('click', () => {
  const html = document.getElementById('html').value;
  const css = document.getElementById('css').value;
  const js = document.getElementById('js').value;

  const combinedCode = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Combined Code</title>
  <style>
      ${css}
  </style>
</head>
<body>
  ${html}
  <script>
      ${js}
  </script>
</body>
</html>
  `.trim();

  document.getElementById('result').value = combinedCode;
  document.getElementById('resultContainer').style.display = 'block';
});

document.getElementById('copyButton').addEventListener('click', () => {
  const resultTextarea = document.getElementById('result');
  resultTextarea.select();
  document.execCommand('copy');
  alert('Combined code copied to clipboard!');
});

document.getElementById('downloadButton').addEventListener('click', () => {
  const combinedCode = document.getElementById('result').value;
  const blob = new Blob([combinedCode], { type: 'text/html' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'combined_code.html';
  a.click();
  URL.revokeObjectURL(url);
});
