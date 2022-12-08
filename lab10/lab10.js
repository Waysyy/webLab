function hello() {
    console.log("hello");
}

setTimeout(hello, 1000);

setInterval(function () {hello();}, 1000); 
