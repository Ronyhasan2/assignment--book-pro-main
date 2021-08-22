document.getElementById('memory-button').addEventListener('click', function() {

const memoryButton = document.getElementById('memory-coast');
const memoryCoast = memoryButton.innerText;
memoryButton.innerText = 180;




console.log(memoryCoast);



})
document.getElementById('memory-first').addEventListener('click', function(){

    const memoryFirst = document.getElementById('memory-coast');
    const memoryScond = memoryFirst.innerText;
    memoryFirst.innerText = 0;
    console.log(memoryScond);
})
document.getElementById('storage-button').addEventListener('click', function(){

    const storageButton = document.getElementById('storage-coast');
    const storageCost = storageButton.innerText;
    storageButton.innerText = 100;




})
document.getElementById('ssd-storage').addEventListener('click', function(){
    const ssdStorage = document.getElementById('storage-coast');
    const secondStorageCoast = ssdStorage.innerText;
    ssdStorage.innerText = 180;
})
document.getElementById('ssd-gb').addEventListener('click', function() {

    const ssdGb = document.getElementById('storage-coast');
    const ssdGbStorage = ssdGb.innerText;
    ssdGb.innerText = 0;
})
document.getElementById('delivery-charge').addEventListener('click', function() {

    const deliveryCharge = document.getElementById('delivery-coast');
    const deliveryCoast =(deliveryCharge.innerText);
    deliveryCharge.innerText = 20;
})
document.getElementById('free-prime').addEventListener('click', function() {

    const deliveryAddCharge = document.getElementById('delivery-coast');
    const deliveryToCoast = deliveryAddCharge.innerText;
    deliveryAddCharge.innerText = 0;
})    
document.getElementById('memory-button').addEventListener('click', function(){

    const memoryButton = document.getElementById('total-price');
    const totalPrice = memoryButton.innerText;
    const totalAddPrice = parseFloat(memoryButton);
    memoryButton.innerText = totalAddPrice + totalPrice;
})
 
