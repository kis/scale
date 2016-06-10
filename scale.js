/* @flow */

import './scale.css';

const SCALE_WIDTH: number = 50;
const SCALE_HEIGHT: number = 10;
const BLOCK_WIDTH: number = 20;

var marks = [];

for (var i=0; i<SCALE_WIDTH; i++) {
  marks.push({type: Math.floor(Math.random() * (SCALE_HEIGHT - 1) + 1) });
}

var container = document.getElementsByClassName('ruler-container')[0];

var rulerInnerView = container;

function renderRulers() {
  rulerInnerView.innerHTML = '';
  
  marks.forEach(function(mark, markNum) {
    let rulerItem = document.createElement('div');
    rulerItem.className = "ruler-row";    
    renderRow(rulerItem, mark, markNum);
    rulerInnerView.appendChild(rulerItem);
  });
}

function renderRow(rulerItem, mark, markNum) {
  for (var i=0; i<SCALE_HEIGHT; i++) {
    let markItem = document.createElement('div');
    markItem.setAttribute("data-type", mark.type - 1 == i ? mark.type : i + 1);
    markItem.className = mark.type - 1 == i ? "mark pinned" : "mark empty";

    if (mark.type - 1 <= i) markItem.className += " painted";

    if (mark.type - 1 == i && markNum < marks.length - 1) {
      let lineItem = document.createElement('div');
      lineItem.className = "line";
      let lineOpts = calculateLineOptions(i+1, marks[markNum+1].type);
      lineItem.setAttribute("style", `width: ${lineOpts.width}; transform: ${lineOpts.transform};`);
      markItem.appendChild(lineItem);
    }

    rulerItem.appendChild(markItem);
  }
}

/*    /B
     /|
    / |
   /__|
  A    C */

function calculateLineOptions(currentMark: number, nextMark: number) {
  let AC: number = BLOCK_WIDTH, 
      BC: number = Math.abs(nextMark - currentMark) * BLOCK_WIDTH;
  let AB: number = Math.hypot( AC, BC );
  let angleA: number = Math.fround( Math.asin( BC / AB ) * 180 / Math.PI);

  if (nextMark < currentMark) angleA = -angleA;

  return {
    width: `${AB}px`,
    transform: `rotate(${angleA}deg)`
  };
}

function reset(e) {
  for (var i=0; i<SCALE_WIDTH; i++) {
    marks[i].type = Math.floor(Math.random() * (SCALE_HEIGHT - 1) + 1);
  }
  
  renderRulers();
}

renderRulers();

container.addEventListener('click', reset);