//code for swaping divs - starts
let tds=document.getElementsByTagName('td')
let dragged_td=undefined;

for(let i=0;i<tds.length;i++){
 
  tds[i].ondrag=()=>{
    dragged_td=tds[i]
  }

  tds[i].ondragover=(event) => {
    event.preventDefault();
  }

  tds[i].ondrop= (event)=>{
    event.preventDefault();

    let source_div=dragged_td.innerHTML;
    let target_div=tds[i].innerHTML;
    if (tds[i]!=dragged_td){
      dragged_td.innerHTML=target_div;
      tds[i].innerHTML=source_div;

      //adding last action to to history
      addMoveToHistory(dragged_td,tds[i]);
    }

  }
}
//code for swaping divs ends

//code for undo - starts
const undoButton = document.getElementById("undoButton");
const history = [];

undoButton.onclick= ()=> {
    if (history.length === 0) return;

    const { source, destination } = history.pop();
    const temp = destination.innerHTML;
    destination.innerHTML = source.innerHTML;
    source.innerHTML = temp;
}

function addMoveToHistory(source, destination) {
    history.push({ source, destination });
}
//code for undo - ends