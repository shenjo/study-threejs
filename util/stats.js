function addPerformanceInfo() {
  if (typeof Stats !== 'function') {
    return createErrorDiv('请先引入stats.js,在build目录下');
  } else {
    const stats = new Stats();
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.left = '0px';
    stats.domElement.style.top = '0px';
    document.body.appendChild(stats.domElement);
    return stats;
  }


  function createErrorDiv(message) {
    const div = document.createElement('div');
    div.style.position = 'absolute';
    div.style.left = 0;
    div.style.right = 0;
    div.style.top = 0;
    div.style.border = '1px solid red';
    div.style.color = 'red';
    div.innerHTML = message;
    document.body.appendChild(div);
  }

}
