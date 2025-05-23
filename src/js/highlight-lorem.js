export function HighlightLorem(el) {
  let loremNodes = [];
  let textNodes = [];
  let node;

  const walker = document.createTreeWalker(
    document.body, 
    NodeFilter.SHOW_TEXT, 
    null, 
    false
  );


  while(node = walker.nextNode()) {
    textNodes.push(node);
  }


  textNodes.forEach(function(e) {
    if (e.nodeValue.toLowerCase().includes("lorem") || e.nodeValue.toLowerCase().includes("dolor")  || e.nodeValue.toLowerCase().includes("nisi") ) {
      loremNodes.push(e);
    }
  });


  document.addEventListener("keyup", function(e) {
    if (e.key.toLowerCase() == 't') {
      loremNodes.forEach(function(e) {
        let parentNode = e.parentNode;
        let classes = e.parentNode.classList;
        if (classes.contains('bg-claret')) {
          e.parentNode.classList.remove(...['bg-claret', 'text-pink']);
        } else {
          e.parentNode.classList.add(...['bg-claret', 'text-pink']);
        }
      });
    }
  });
}