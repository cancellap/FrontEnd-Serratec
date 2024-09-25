function asyncFunction() {
    setTimeout(() => {
        console.log("async function");
    }, 4000)
}
console.log("incio do programa");
asyncFunction();
console.log("fim do programa");

