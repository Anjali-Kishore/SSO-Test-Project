// let a= 'anjali';
// console.log(Number(a));
// console.log(typeof NaN);

// let Dolphine = (96+120+89)/3;
// console.log("Average score of Dolphine team is " +Dolphine);
// let Koalas =(97+76+101)/3;
// console.log("Average score of Koalas team is " +Koalas);

// if (Dolphine > Koalas)
// {
//     console.log("Dolphine is Winner");
// }
// else if (Dolphine < Koalas)
// {
//     console.log("Koalas is Winner");
// }
// else if (Dolphine===Koalas){
//     console.log("Match is draw");
// }

// let minimumScore =100;
// if (Dolphine>=minimumScore && Dolphine > Koalas)
// {
//     console.log("Dolphine is Winner");
// }
// else if (Koalas>=minimumScore && Koalas>Dolphine)
// {
//     console.log("Koalas is Winner");
// }
// else if (Dolphine===Koalas){
//     console.log("Match is draw");

// // }

// const bills = 275;
// const tip = bills>=50 && bills <=300 ? bills * 0.15 : bills *0.2;
// console.log(`Bill of ${bills}, and the tip was ${tip}, and th etotal bill is ${bills + tip}`);

//  bills =40;
// tip = bills>=50 && bills <=300 ? bills * 0.15 : bills *0.2;
// console.log('Bill of 40' +tip);
//  bills =430;
//  tip = bills>=50 && bills <=300 ? bills * 0.15 : bills *0.2;
// console.log('Bill of 430' +tip);


// Function declaration
function calcAge1(birthYeah) {
    return 2037 - birthYeah;
  }
  const age1 = calcAge1(1991);
  const age2 = calcAge2(1991);
  // Function expression
  const calcAge2 = function (birthYeah) {
    return 2037 - birthYeah;
  }
 console.log("hello");
 console.log("hello");
  
  console.log(age1, age2);
  