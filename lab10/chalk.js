const ProgressBar = require("progress");

const bar = new ProgressBar(":bar", { total: 10 });
const timer = setInterval(() => {
	bar.tick();
	if (bar.complete) {
		console.log("\nПотрачено");
		clearInterval(timer);
	}
}, 200);