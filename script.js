//your JS code here. If required.
let promise = new Promise((resolve,reject) => {
	setTimeout(function(){
		resolve("Hello, world!");
	},1000);
});
function value(promise){
	let ele = document.getElementById('output');
	ele.value = promise;
}
