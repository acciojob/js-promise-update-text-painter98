//your JS code here. If required.
function output(){
	return promise;
}
let promise = new Promise((resolve,reject) => {
	setTimeout(function(){
		resolve("Hello, world!");
	},1000);
});
console.log(output());