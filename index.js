// Code your solutions in this file
//const gifts = ["teddy bear", "drone", "doll"];

//function wrapGifts(gifts) {
  //  for (let i = 0; i < gifts.length; i++ ) {
    //    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    //}

    //return gifts;
//}

//wrapGifts(gifts);

// const names = ["Sam", "Kat", "Ray"];
function writeCards(array, event) {
    let aNewArray = []
    for (let a = 0; a < array.length; a++) {
    aNewArray.push(`Thank you, ${array[a]}, for the wonderful ${event} gift!`);
    }
    return aNewArray
}

function countDown(number){
    while (number >= 0) {
        console.log(number);
        number--;
    }
}