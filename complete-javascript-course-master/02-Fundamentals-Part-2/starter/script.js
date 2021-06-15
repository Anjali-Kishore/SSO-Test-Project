const calcAverage=(a,b,c) => (a + b + c) / 3;
const dolphinescore = calcAverage(44,23,71);
const koalasscore = calcAverage(65,54,49);

function checkWinner(avgDolpins,avgKoalas){
if (avgDolpins>= 2* avgKoalas){
    console.log('dolphines are winner');
}
else if(avgKoalas> 2* avgDolpins) {
    console.log('Koalas are winner');
}
else{
    console.log('No Team Wins');
}
}

checkWinner(dolphinescore,koalasscore);