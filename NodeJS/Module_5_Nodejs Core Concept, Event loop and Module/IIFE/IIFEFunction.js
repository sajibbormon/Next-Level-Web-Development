
function sameFunction() {
    console.log("Sajib");
}


function sameFunction() {
    console.log("Payel");
}


sameFunction(); // it will print 'Payel' as it is the recent delcarion of the same function.

(function sameFunction() {
    console.log("Sajib");
})();


(function sameFunction() {
    console.log("Payel");
})();