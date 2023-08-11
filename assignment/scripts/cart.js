console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];
console.log(basket);

function addItem( nameOfItem ) {
    console.log('Adding ',nameOfItem);
    basket.push( nameOfItem );
    return true
}// end of addItem
console.log(basket);



function listItems(basket){
    console.log('in listItems');
    for (let item of basket){
        console.log(item);
    }//end of for loop
}// end of listItems
console.log('The items in the basket are', basket);

function empty(basket) {
    console.log('in empty');
    basket = [];
    return basket
}// end of empty
console.log('now our basket is empty', empty(basket));

// stretch goals: 
const maxItems = 5
function isFull() {
    if (basket.length < maxItems ){
        return false;
    }// end of if
    else {
        return true;
    } //end of else
}// end of isFull
console.log('Is the basket full?', isFull());
console.log('Adding items (expect true)', addItem('apples'), addItem('oranges'), isFull(basket));




// DO NOT MODIFY
// Used for automated testing
try {
    module.exports = {
        basket: typeof basket !== 'undefined' ? basket : undefined,
        addItem: typeof addItem !== 'undefined' ? addItem : undefined,
        listItems: typeof listItems !== 'undefined' ? listItems : undefined,
        maxItems: typeof maxItems !== 'undefined' ? maxItems : undefined,
        empty: typeof empty !== 'undefined' ? empty : undefined,
        isFull: typeof isFull !== 'undefined' ? isFull : undefined,
        removeItem: typeof removeItem !== 'undefined' ? removeItem : undefined,
    };
} catch(e) {
    // Do nothing
}
