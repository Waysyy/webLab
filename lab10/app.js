const progressBar = require("progress-bar-cli");

let loop_len = 2000;
let startTime = new Date();


console.log("загрузка чего-то");

function load() {
    for (i = 0; i < loop_len; ++i) {
        progressBar.progressBar(i, loop_len, startTime);
    }
    console.log("загрузка чего-то завершена!");
}
setTimeout(load, 1000);