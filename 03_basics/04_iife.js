// Immediately Invoked Function Expressions (IIFE)

(function chai(){
    console.log(`DB CONNECTED`);
})();                                        // ; is important to again use IIFE

(() => {
    console.log(`DB CONNECTED TO`);
})();
((name) => {
    console.log(`DB CONNECTED TO ${name}`);
})("Ayush")