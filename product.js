window.onload=function(){
	let button= document.getElementById('update');
	let barcod=document.getElementById('bar');
	let scan=document.getElementById('scan');
	scan.addEventListener("click",function(e){
		e.preventDefault();
		let bar=barcod.value;
		console.log(bar);
		if (bar==="") {
			alert('please scan the product')
		}
		else{
		 fetch(`https://api.barcodelookup.com/v2/products?barcode=${bar}&formatted=y&key=cgvmwxex9qtxtc8xpkq2gyzj5nup6n`)
                  .then(re => re.json())
                  .then(res => {
                  	console.log(res.products[0])
                  	const dat=res.products[0];
                  	document.getElementById('itemname').value=dat.product_name;
                  		document.getElementById('category').value=dat.category;
                  			document.getElementById('size').value=dat.weight;
                  				document.getElementById('manufacturer').value=dat.brand;
                  					document.getElementById('quantity').value=1;
                  });
		}
		
	})
	button.addEventListener('click',function(e){
		e.preventDefault();
		let bar=barcod.value;
		const barcode=bar;
		const itemname=document.getElementById('itemname').value;
	const category=document.getElementById('category').value;
	const size=document.getElementById('size').value;
	const manufacturer=document.getElementById('manufacturer').value;
	const price= document.getElementById('price').value;
	const quantity=document.getElementById('quantity').value;
	const discount=0;
	const total = (quantity * price);
	console.log(total)
	if (itemname!=="") {
	fetch('http://localhost:3000/stock',{
		method:"POST",
		headers:{
			"Content-Type":"application/json"
		},
		body:JSON.stringify({
			barcode,
			itemname,
			category,
			size,
			manufacturer,
			price,
			quantity,
			total,
			discount
		})
	})
	.then(data =>{
		console.log(data)
	})
	.catch(error =>{
		console.log(error)
	})
}
	})

}