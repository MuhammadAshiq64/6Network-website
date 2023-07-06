function johnmartinlikebtn() {
   
    if(document.getElementById('johnthum').className ==="thumbg  bi-hand-thumbs-up"){
        (document.getElementById('johnthum').className ="thumbg bi-hand-thumbs-up-fill")
    }
    else{
        document.getElementById('johnthum').className ="thumbg  bi-hand-thumbs-up"
    }
}
function mariagnislikebtn(){
    if(document.getElementById('maristhum').className ==="thumbg  bi-hand-thumbs-up"){
        (document.getElementById('maristhum').className ="thumbg bi-hand-thumbs-up-fill")
    }
    else{
        document.getElementById('maristhum').className ="thumbg  bi-hand-thumbs-up"
    }

}
function jokerlikebtn(){
    if(document.getElementById('jokerthum').className ==="thumbg  bi-hand-thumbs-up"){
        (document.getElementById('jokerthum').className ="thumbg bi-hand-thumbs-up-fill")
    }
    else{
        document.getElementById('jokerthum').className ="thumbg  bi-hand-thumbs-up"
    }

}






function jokerdislikebtn(){
    if(document.getElementById('jokerthumdislike').className ==="thumbg  bi-hand-thumbs-down"){
        (document.getElementById('jokerthumdislike').className ="thumbg bi-hand-thumbs-down-fill")
    }
    else{
        document.getElementById('jokerthumdislike').className ="thumbg  bi-hand-thumbs-down"
    }

}

function mariagnisdislikebtn(){
    if(document.getElementById('maristhumdislike').className ==="thumbg  bi-hand-thumbs-down"){
        (document.getElementById('maristhumdislike').className ="thumbg bi-hand-thumbs-down-fill")
    }
    else{
        document.getElementById('maristhumdislike').className ="thumbg  bi-hand-thumbs-down"
    }

}



function displaycontactmaridivs () {
    if(document.getElementById('maricontactbtn').innerHTML === "Contact"){
        document.getElementById('maricontactdiv').className ='contactjson'
        document.getElementById('maricontactbtn').innerHTML="Protfolio"
    }
    else{
        document.getElementById('maricontactbtn').innerHTML="Contact"
        document.getElementById('maricontactdiv').className ='contactjs'
    }
}


function displaycontactjokerdivs () {
    if(document.getElementById('jokercontactbtn').innerHTML === "Contact"){
        document.getElementById('jokercontactdiv').className ='contactjson'
        document.getElementById('jokercontactbtn').innerHTML="Protfolio"
    }
    else{
        document.getElementById('jokercontactbtn').innerHTML="Contact"
        document.getElementById('jokercontactdiv').className ='contactjs'
    }
}





function displaycontactjohndivs () {
    if(document.getElementById('johncontactbtn').innerHTML === "Contact"){
        document.getElementById('johncontactdiv').className ='contactjson'
        document.getElementById('johncontactbtn').innerHTML="Protfolio"
    }
    else{
        document.getElementById('johncontactbtn').innerHTML="Contact"
        document.getElementById('johncontactdiv').className ='contactjs'
    }
}




