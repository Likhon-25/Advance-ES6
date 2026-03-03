// // document.getElementById('#btn').addEventListener('click', function (event) {

// // })
// // addEventListener('click', function (event) {

// // })

// function settleLife(name, isBCS, marriage) {
//     if (isBCS) {
//         marriage(PartnerAsa)
//     }
// }
// function boloKobul(PartnerAsa) {
//     console.log('Kobul', PartnerAsa);
// }
// settleLife('tomal', true, boloKobul, 'nari')
// // boloKobul();


function welcomeMessage(name, callback){
    callback(name)
}

function sayHello(name){
    console.log("Hello" + name);
}
function sayGoodBye(name){
    console.log("buy"+ name);
}

welcomeMessage("Likhon ", sayHello);
welcomeMessage("Misba ", sayGoodBye);



// * pass different function
function createKitchen(dish, action){
    action(dish)
}
const cookRich = (dish) => console.log(dish + "Ranna kora hossa");
createKitchen("ploao", cookRich)


