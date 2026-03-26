let username = prompt("enter username(admin or guest):");

let password = prompt("enter password:");




if((username==="admin"|| username==="guest")&& password==="0000"){
    let role=
    (username==="admin")?
    "full":"limited";


    alert("login successful!access:"+role);


    let name= 
    prompt("enter your name:");

    let tickets=
    Number(prompt("Number of tickets:"));



    let movietype =
   prompt("choose movie type (standard / 3D /IMAX):");

    let price=0;

    if(movietype==="standard"){
        price=5;
    
    }
    else if (movietype==="3D"){
        price=7;
    }
    else if(movietype==="IMAX"){
        price=10;
    }
    else{alert("invalid movie type");}

    let ticketCost= price*tickets;

    let snacks= prompt("DO you want snacks?( yes or no):");
    let snackCost=0;


    if(snacks==="yes"){
        snackCost=tickets*3;
    }

    

    let discount=0;

    if(tickets>3){
        discount=(ticketCost+snackCost)*0.15;

    }



    let subtotal = ticketCost+snackCost-discount;


    let people=
     Number(prompt("Number of people (1,2,4):"))


    let serviceType=prompt("Service fee (none / small / high):");

    let serviceRate=0;

    if(serviceType==="small"){
        serviceRate=0.05;
    }

    else if(serviceType==="high"){
        serviceRate=0.10;
    }



    let serviceFee=subtotal*serviceRate;


    let total=subtotal + serviceFee;

    let perperson=total / people;



    alert(
         "Hello" + name +"!\n" + "movie:" + movietype + "!\n"
        +"tickets cost:$" + ticketCost + "!\n" 
         + "snacks:$" + snackCost + "!\n" + 
        "discount:$" + discount.toFixed(2) + "!\n" +
         "service Fee:$" + serviceFee.toFixed(2) + "!\n"+
        "total:$" + total.toFixed(2) +"!\n"  +
         "Each person pays:$" +perperson.toFixed(2) );

}

else{
    alert("invalid login")
}