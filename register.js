window.onload=function(){

	let button=document.getElementById('register');

	button.addEventListener("click",function(e){

		e.preventDefault();
			let fullname=document.getElementById('fullname').value;
	let address=document.getElementById('address').value;
	let phone= document.getElementById('phone').value;
	let password=document.getElementById('password').value;
	let email=document.getElementById('email').value;
	let usertype="";
		console.log(fullname);
		fetch('http://localhost:3000/register',{
			method:'POST',
			headers:{
				"Content-Type":"application/json"
			},
			body:JSON.stringify({
				fullname,
				address,
				phone,
				password,
				email,
				usertype
			})
		})
		.then(data=>{
			console.log(data);
		})
		.catch(error=>{
			console.log(error);
		})
	})
}