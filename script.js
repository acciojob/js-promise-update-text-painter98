//your JS code here. If required.
let promise = new Promise((resolve,reject) => {
	setTimeout(function(){
		resolve("Hello, world!");
	},1000);
}); 
promise.then((data) => {
document.querySelector('div').value=data;
					   });
