window.onload=function(e){

	
	let bar=document.getElementById('barcode');
	let tb= document.getElementById('tbody');
  let quant = document.getElementById('quantity');
  let billcode=document.getElementById('bill');
  let print=document.getElementById('print');
    let totdi=document.getElementById("totfin");
	let rg=[];

var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var cdate=today.getDate();
var dateTime = date+"-"+time;
let gp=[];
let finalquantity=0;
console.log(date);
 
    fetch(`http://localhost:3000/getoffer`)
      .then(re => re.json())
      .then(res => {
        console.log(res)
        let dat=res.data;
        let da= [...dat];
        let gj=da.filter(function(val,i){let a= val.dateto;let d= val.datefrom;
var toda = new Date();
 let gh=toda.getFullYear()+'-'+(toda.getMonth()+1)+'-'+toda.getDate(); let b="";let day1= new Date(a);let day2= new Date(d);  console.log(day1);if (toda>=day1 && toda<=day2) {
          b+=val;
        };return b})
        gp.push(gj);
      });
   e.preventDefault();
   
 quant.addEventListener('keypress',function(e){
  if (e.key === 'Enter') {
  e.preventDefault();

 
    billcode.innerHTML=(Math.floor((Math.random() * 100000) + 1))+"-"+dateTime;
    let barcode= bar.value;
    let quantity=quant.value;
    
    fetch(`http://localhost:3000/getstock?page=${barcode}`)
      .then(re => re.json())
      .then(res => {
        console.log(res.data);
        console.log(gp[0][0].offerdiscount)
        let final=0;
      

                           dat=res.data;
                             let html="";

                          
                                rg.push({"id":dat[0].id,"itemname":dat[0].itemname,"quantity":quantity,"price":dat[0].price,"discount":dat[0].discount});
                                console.log(rg);
                                     for (var i = 0; i <rg.length; i++) {
                           let tot=(quantity*rg[i].price);
                           let dis=rg[i].discount;
                           let finaldis=(tot-(tot *(dis/100)));
                         
                         

                              html+=`<tr><td>${rg[i].itemname}</td><td>${rg[i].quantity}</td><td>${rg[i].price}</td><td>${rg[i].discount}%</td><td>${finaldis}</td><td><button data-delete="${rg[i].id}">Delete</button></td></tr>`;
                               console.log(html);
                              final+=finaldis;
                             
                        
                       }
                        let iquant=parseInt(quantity)
                              finalquantity+=iquant;
                        document.getElementById('tbodyone').innerHTML=html;
                          console.log(final)
                          let specialoff=gp[0][0].offerdiscount;
                          let finaltotal=(final-(final * (specialoff/100)));
                          console.log(finaltotal);
                          totdi.innerHTML=final;


   })

    
      if (barcode!=="") {
        bar.value="";
        quant.value="";
      }
// 	scan.addEventListener("click", function(e){
// 		e.preventDefault();
//     let rand=Math.floor((Math.random() * 10000) + 1);

//     billcode.innerHTML=Math.floor((Math.random() * 10000) + 1);
// 		let barcode= bar.value;
//     let quantity=quant.value;
// 		console.log(rand);
// 		fetch(`http://localhost:3000/getstock?page=${barcode}`)
//       .then(re => re.json())
//       .then(res => {
//       	console.log(res)

//                            dat=res.data;
//                              let html="";

                          
//                              	  rg.push(dat);
//                              	       for (var i = 0; i <rg.length; i++) {
//                            let tot=(quantity*rg[i][0].price);
//                            console.log(tot)

//                               html+=`<tr><td>${rg[i][0].itemname}</td><td>${1}</td><td>${rg[i][0].price}</td><td><button data-delete="${rg[i][0].id}">Delete</button></td></tr>`;
//                                console.log(html);
                              
                        
//                        }
//                         document.getElementById('tbodyone').innerHTML=html;
  

// // else
// // {
	  
// // 	  console.log(rg)
// // 	for (var i = 0; i <rg.length; i++) {
// // 		let rk=(1-1);

// //                        //     	// let gh=rg[([i]-1)][0].itemname;
// //                        //     	// if(i!==0){
// //                        //     	let gh=rg[i-1][0].barcode;
// //                        //      let lr=parseInt(barcode);

// //                        //     	// console.log(barcode);

// //                        //     	if (gh==lr){
                           		
// //                        //        console.log('fck')
// //                        //        rg.pop()
// //                        //     	}
// //                        // //     	 else{
                       
// //                        // //     	rg.push(dat);
                           	

// //                        // //        html+=`<tr><td>${rg[i][0].barcode}</td><td>${rg[i][0].itemname}</td><td>${1}</td><td>${rg[i][0].price}</td><td><button data-delete="${rg[i][0].id}">Delete</button></td></tr>`;
// //                        // //         console.log(html);
                              
                        
// //                        // // }
// //                        //     // 	    	console.log(i)
// //                        //     // }
// //                        //    else{
                       
                           	
// //                            	rg.push(dat);

// //                               html+=`<tr><td>${rg[i][0].barcode}</td><td>${rg[i][0].itemname}</td><td>${1}</td><td>${rg[i][0].price}</td><td><button data-delete="${rg[i][0].id}">Delete</button></td></tr>`;
// //                                console.log(html);
                              
                        
// //                        // }
// //                    }
// //                         document.getElementById('tbodyone').innerHTML=html;
  


                           
// //                       }


                    
//       })
}
 console.log(rg)    
	})
print.addEventListener("click",function(e){
  e.preventDefault();
  console.log(finalquantity)
    let billno=billcode.innerHTML;
    let total=totdi.innerHTML;
    let gquantity=finalquantity;
      let cashier="me";
     for (var i = 0; i <rg.length; i++) {
    
      let productname=rg[i].itemname;
      let quantity=rg[i].quantity;
      let price=rg[i].price;
      
      console.log(billno,total)
      fetch('http://localhost:3000/bill',{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({
     billno,
     productname,
      price,
      quantity,
      total,
      cashier
    })
  })
  .then(data =>{
    console.log(data)
  })
  .catch(error =>{
    console.log(error)
  })

     }
     fetch('http://localhost:3000/datas',{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({
     billno,
      quantity:gquantity,
      total,
      cashier
    })
  })
  .then(data =>{
    console.log(data)
  })
  .catch(error =>{
    console.log(error)
  })


})
}