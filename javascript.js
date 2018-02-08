buildBoard(50);

function changeColor(e){
  var color = (document.getElementById("radioBlack").checked)? "black" : "random" ;

  if (color == "black") document.getElementById(e.target["id"]).style.backgroundColor = "black";
  else document.getElementById(e.target["id"]).style.backgroundColor = randomColor();
}

function buildBoard(n){
  var container = document.getElementById("container");
  while (container.firstChild){
    container.removeChild(container.firstChild);
  }

  for (i=0 ; i<n*n ; i++){
    var div = document.createElement("div");
    div.setAttribute("id", "div"+(i+1));
    div.style.backgroundColor = "white";
    div.style.border = "thin solid grey";
    div.style.gridColumn = i%n +1;
    document.getElementById("container").appendChild(div);
    document.getElementById("div" + (i+1)).addEventListener("mouseover" , function(e){changeColor(e);});
  }
}

function reset(){
  var squares = document.getElementById("container").getElementsByTagName("*");

  for (i = 0 ; i < squares.length ; i++ ){
    square = squares[i];
    square.style.backgroundColor = "white";
  }

}

function setupBoard(){
  var n = "z" ;
  while (isNaN(n) || n === "" ){
    n = prompt("Combien de cases de côté ? (max 50)");
  }
  if (n < 0) n = -n ;
  if (n>50) n=50 ;
  if (n != null) buildBoard(n);
}

function randomColor(){
  r = Math.random() * 256 ;
  g = Math.random() * 256 ;
  b = Math.random() * 256 ;
  return "rgb(" + r + "," + g + "," + b +")";
}
