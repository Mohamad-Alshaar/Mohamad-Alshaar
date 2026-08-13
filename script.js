let first=document.getElementById("first")
let sec=document.getElementById("sec")
let op=document.getElementById("op")
let submit=document.getElementById("submit")
let result=document.getElementById("result")



submit.addEventListener("click",function(){
    let first_num=Number(first.value)
let sec_num=Number(sec.value)
let opr=op.value
if(opr=="-"){
    let res_min=first_num-sec_num

    result.innerText="The Result Of (  " +  first_num +  " - " + sec_num + ") = " + res_min

    }
    else{
    let res_plus=first_num+sec_num

    result.innerText="The Result Of  ( " + first_num +  " + " + sec_num + " ) =   " + res_plus


    }
})




