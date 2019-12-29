simpleCart({
    cartColumns: [{
        attr: "name",
        label: "Abito: "
    }, ],
    // "div" or "table" - builds the cart as a 
    // table or collection of divs
    cartStyle: "table",

});
simpleCart.bind("afterAdd", function() {
    var updatedCart = $('table').text();
    console.log(updatedCart);
    $('textarea').val(updatedCart);
});