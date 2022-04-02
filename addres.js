let form=document.getElementById("formad").addEventListener("submit",(event)=>{
    event.preventDefault();
    let city=document.getElementById("country").value;
    let name=document.getElementById("name").value;
    let phone=document.getElementById("number").value;
    let pin=document.getElementById("postal_code").value;
    let address=document.getElementById("address").value;
    let obj={
        city,
        name,
        phone,
        pin,
        address
    }
    let arr=[]
   arr.push(obj)
   localStorage.setItem("address",JSON.stringify(arr))
   window.location.href="payment.html"
    
})