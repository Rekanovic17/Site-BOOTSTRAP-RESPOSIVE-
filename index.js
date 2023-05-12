function add(){
    let btn=document.querySelector(".btn");
    
    if(btn.innerText==="Menu"){ 
        let hamburger=document.querySelector("#hm");
        hamburger.style.display="block"
        btn.innerHTML="Close";
    }else if(btn.innerText==="Close"){
        let hamburger=document.querySelector("#hm");
        hamburger.style.display="none"
        btn.innerHTML="Menu";
    }
}