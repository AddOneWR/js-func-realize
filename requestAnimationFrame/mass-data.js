// 10w个li渲染，点击时alret其内容
// 通过requestAnimation分片渲染，事件委托

(function(){
  const parent = document.getElementById('parent');

  const total = 100000;
  const batchSize = 4;
  const batchCount = total / batchSize;
  let batchDone = 0;

  function append() {
    const fragment = document.createDocumentFragment();

    for(let i = 0 ; i < batchSize ; i++) {
      const li = document.createElement('li');
      li.innerText = batchDone * batchSize + i;
      fragment.appendChild(li);
    }

    parent.appendChild(fragment);

    batchDone++;

    handleBatch();
  }

  function handleBatch() {
    if(batchDone < batchCount) {
      requestAnimationFrame(append);
    }
  }

  handleBatch();

  parent.addEventListener('click', function(e) {
    if(e.target.tagName === 'LI') {
      alert(e.target.innerText);
    }
  })
})()