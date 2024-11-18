const sharedElements = document.getElementById('head-elements');
fetch('head.html')
  .then(response => response.text())
  .then(html => {
    sharedElements.innerHTML = html;
  });