//your JS code here. If required.
/*let promise = new Promise((resolve,reject) => {
	setTimeout(function(){
		resolve("Hello, world!");
	},1000);
}); 
promise.then((data) => {
	 document.getElementById('output').innerText = data;
});*/
function updateOutput() {
return new Promise((resolve, reject) => {
setTimeout(() => {
resolve("Hello, world!");
}, 1000);
});
}

const outputElement = document.getElementById("output");
updateOutput().then((message) => {
outputElement.innerText = message;
});
