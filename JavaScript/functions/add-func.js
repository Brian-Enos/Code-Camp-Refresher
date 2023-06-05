let myPoints = 3 ;

function remove1Point() {
  myPoints = myPoints - 1 ;
}

function add3Points() {
  myPoints = myPoints + 3;
}

remove1Point();
add3Points();
add3Points();
remove1Point();
add3Points();

console.log(myPoints)
