require('./scale.css');

var marks = [];

for (var i=0; i<50; i++) {
  marks.push({type: Math.floor(Math.random() * (10 - 1) + 1) });
}

var cont = document.getElementsByClassName('ruler-container')[0];

var rulerInnerView = cont;

function render() {
  rulerInnerView.innerHTML = '';
  
  marks.forEach(function(mark) {
    var rulerItem = document.createElement('div');
    rulerItem.className = "ruler-row";
    
    for (var i=0; i<10; i++) {
      var markItem = document.createElement('div');
      markItem.setAttribute("data-type", mark.type - 1 == i ? mark.type : i + 1); 
      markItem.className = mark.type - 1 == i ? "mark" : "mark empty";
      rulerItem.appendChild(markItem);
    }

    rulerInnerView.appendChild(rulerItem);
  }); 
}

render();

function reset(e) {
  for (var i=0; i<50; i++) {
    marks[i].type = Math.floor(Math.random() * (10 - 1) + 1);
  }
  
  render();
}

cont.addEventListener('click', reset);