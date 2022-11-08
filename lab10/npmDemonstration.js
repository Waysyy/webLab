const ProgressBar = require("progress");

const bar = new ProgressBar(":bar", { total: 10 });
const timer = setInterval(() => {
    bar.tick();
    if (bar.complete) {
        console.log("\nготово");
        clearInterval(timer);
    }
}, 200);

const chalk = require("chalk");
const log = console.log;
log(
    chalk.red("Строка красного цвета\n") +
    chalk.green("Строка зеленого цвета\n") +
    chalk.blue("Строка синего цвета")
);