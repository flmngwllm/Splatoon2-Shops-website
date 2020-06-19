// Get the modal
var modal = document.getElementById('myModal');
var modal2 = document.getElementById('myModal2');
var modal3= document.getElementById('myModal3');
var modal4 = document.getElementById('myModal4');
var modal5= document.getElementById('myModal5');
var modal6 = document.getElementById('myModal6');
var modal7= document.getElementById('myModal7');
var modal8 = document.getElementById('myModal8');
var modal9= document.getElementById('myModal9');
var modal10 = document.getElementById('myModal10');
var modal11= document.getElementById('myModal11');

// Get the button that opens the modal
var at = document.getElementById("auto");
var bt = document.getElementById("burst");
var cur = document.getElementById("curl");
var min = document.getElementById("mine");
var sen = document.getElementById("sensor");
var splsh = document.getElementById("splash");
var spla = document.getElementById("splat");
var sprink = document.getElementById("sprinkler");
var beak = document.getElementById("beakon");
var suc = document.getElementById("suction");
var tox = document.getElementById("toxic");

// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("close")[0];
var span2= document.getElementsByClassName("close1")[0]
var span3 = document.getElementsByClassName("close2")[0];
var span4= document.getElementsByClassName("close3")[0]
var span5 = document.getElementsByClassName("close4")[0];
var span6= document.getElementsByClassName("close5")[0]
var span7 = document.getElementsByClassName("close6")[0];
var span8= document.getElementsByClassName("close7")[0]
var span9 = document.getElementsByClassName("close8")[0];
var span10= document.getElementsByClassName("close9")[0]
var span11 = document.getElementsByClassName("close10")[0];

// When the user clicks on the button, open the modal 
at.onclick = function() {
    modal.style.display = "block";
}
bt.onclick = function() {
    modal2.style.display = "block";
}
cur.onclick = function() {
    modal3.style.display = "block";
}
min.onclick = function() {
    modal4.style.display = "block";
}
sen.onclick = function() {
    modal5.style.display = "block";
}
splsh.onclick = function() {
    modal6.style.display = "block";
}

splat.onclick = function() {
    modal7.style.display = "block";
}


sprink.onclick = function() {
    modal8.style.display = "block";
}
beak.onclick = function() {
    modal9.style.display = "block";
}
suc.onclick = function() {
    modal10.style.display = "block";
}
tox.onclick = function() {
    modal11.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
    modal.style.display = "none";
}
span2.onclick = function() {
    modal2.style.display = "none";
}

span3.onclick = function() {
    modal3.style.display = "none";
}

span4.onclick = function() {
    modal4.style.display = "none";
}
span5.onclick = function() {
    modal5.style.display = "none";
}

span6.onclick = function() {
    modal6.style.display = "none";
}

span7.onclick = function() {
    modal7.style.display = "none";
}
span8.onclick = function() {
    modal8.style.display = "none";
}

span9.onclick = function() {
    modal9.style.display = "none";
}
span10.onclick = function() {
    modal10.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";

    } else if (event.target == modal) {
        modal2.style.display = "none";

    } else if (event.target == modal) {
        modal3.style.display = "none";

    } else if (event.target == modal) {
        modal4.style.display = "none";

    } else if (event.target == modal) {
        modal5.style.display = "none";

    } else if (event.target == modal) {
        modal6.style.display = "none";

    } else if (event.target == modal) {
        modal7.style.display = "none";

    } else if (event.target == modal) {
        modal8.style.display = "none";

    } else if (event.target == modal) {
        modal9.style.display = "none";

    } else if (event.target == modal) {
        modal10.style.display = "none";

    } else if (event.target == modal) {
        modal11.style.display = "none";
    } 

}


//Image Gallery SetInterval
var begin_deco = 1;
var begin_custom =1;
var begin_tek = 1;
var begin_foil = 1;
var begin_kensa = 1;
var begin_neo = 1;
var begin_nouveau = 1;
var begin_sorella = 1;
var begin_splat = 1;



function change_deco(){

    setInterval(deco_gal, 2000);
    }
function deco_gal(){
    var deco_data;
    if(begin_deco==1){
        deco_data= "../Images/Weapons gallery/Deco_52.jpg";
    }  else if(begin_deco== 2){ 
        deco_data = "../Images/Weapons gallery/Deco_Rapid_Blaster_Pro.jpg";
    } else if(begin_deco== 3){ 
        deco_data = "../Images/Weapons gallery/Carbon_Roller_Deco.jpg";
    }else {
    begin_deco = 1;

}
    document.getElementById("deco").src = " " + deco_data;
    begin_deco++;
}

function change_custom(){

    setInterval(custom_gal, 2000);
    }
function custom_gal(){
    var custom_data;
    if(begin_custom==1){
        custom_data= "../Images/Weapons gallery/C_Explosher.jpg";
    }  else if(begin_custom== 2){ 
        custom_data = "../Images/Weapons gallery/Custom_Dualie_Squelchers.jpg";
    } else if(begin_custom== 3){ 
        custom_data = "../Images/Weapons gallery/Custom_Blaster.jpg";
    } else {
    begin_custom = 1;

}
    document.getElementById("custom").src = " " + custom_data;
    begin_custom++;
}




function change_foil(){

    setInterval(foil_gal, 2000);
    }
function foil_gal(){
    var foil_data;
    if(begin_foil==1){
        foil_data="../Images/Weapons gallery/Squeezer.jpg";
    } else if(begin_foil == 2){ 
       foil_data = "../Images/Weapons gallery/Foil_Squeezer.jpg";
    } else if(begin_foil== 4){ 
        foil_data = "I../mages/Weapons gallery/Foil_Flingza_Roller.jpg";
    } else {
    begin_foil = 1;

}
    document.getElementById("foil").src = " " + foil_data;
    begin_foil++;
}



function change_kensa(){

    setInterval(kensa_gal, 2000);
    }
function kensa_gal(){
    var kensa_data;
    if(begin_kensa==1){
        kensa_data="../Images/Weapons gallery/Kensa_Splattershot.jpg"
    } else if(begin_kensa == 2){ 
       kensa_data = "../Images/Weapons gallery/Kensa_Charger.jpg";
    } else if(begin_kensa == 3){ 
        kensa_data = "../Images/Weapons gallery/Kensa_Splat_Roller.jpg";
    } else {
    begin_kensa = 1;

}
    document.getElementById("kensa").src = " " + kensa_data;
    begin_kensa++;
}




function change_neo(){

    setInterval(neo_gal, 2000);
    }
function neo_gal(){
    var neo_data;
    if(begin_neo==1){
        neo_data="../Images/Weapons gallery/Neo_Splash-o-matic.jpg"
    } else if(begin_neo == 2){ 
       neo_data = "../Images/Weapons gallery/Neo_Sploosh-o-matic.jpg";
    } else if(begin_neo == 3){ 
        neo_data = "../Images/Weapons gallery/Luna_Blaster_Neo.jpg";
    } else {
    begin_neo = 1;

}
    document.getElementById("neo").src = " " + neo_data;
    begin_neo++;
}



function change_nouveau(){

    setInterval(nouveau_gal, 2000);
    }
function nouveau_gal(){
    var nouveau_data;
    if(begin_nouveau==1){
        nouveau_data="../Images/Weapons gallery/Inkbrush_Nouveau.jpg";
    } else if(begin_nouveau == 2){ 
       nouveau_data = "../Images/Weapons gallery/Octobrush_Nouveau.jpg";
    } else if(begin_nouveau == 3){ 
        nouveau_data = "../Images/Weapons gallery/Tri-Slosher_Nouveau.jpg";
    } else {
    begin_nouveau = 1;

}
    document.getElementById("nouveau").src = " " + nouveau_data;
    begin_nouveau++;
}



function change_sorella(){

    setInterval(sorella_gal, 2000);
    }
function sorella_gal(){
    var sorella_data;
    if(begin_sorella == 1){
        sorella_data="../Images/Weapons gallery/Sorella_Brella.jpg";
    } else if(begin_sorella == 2){ 
       sorella_data = "../Images/Weapons gallery/Tenta_Sorella_Brella.jpg";
    } else if(begin_sorella== 3){ 
        sorella_data = "../Images/Weapons gallery/Undercover_Brella.jpg";
    } else {
    begin_sorella = 1;

}
    document.getElementById("sorella").src = " " + sorella_data;
    begin_sorella++;
}


function change_ten(){

    setInterval(tentatek_gal, 2000);
    }
function tentatek_gal(){
    var tentatek_data;
    if(begin_tek==1){
        tentatek_data="../Images/Weapons gallery/Dark_Tetra_Dualies.jpg";
    } else if(begin_tek == 2){ 
       tentatek_data = "../Images/Weapons gallery/Light_Tetra_Dualies.jpg";
    }  else if(begin_tek == 3){ 
        tentatek_data = "../Images/Weapons gallery/Light_Tetra_Dualies.jpg";
     }else {
        begin_tek = 1;

}
    document.getElementById("tentatek").src = " " + tentatek_data;
    begin_tek++;
}

function change_splat(){

    setInterval(splat_gal, 2000);
    }
function splat_gal(){
    var splat_data;
    if(begin_splat==1){
        splat_data="../Images/Weapons gallery/Splattershot.jpg"
    } else if(begin_splat == 2){ 
       splat_data = "../Images/Weapons gallery/Splattershot_Jr.jpg";
    } else if(begin_splat== 3){ 
        splat_data = "../Images/Weapons gallery/Splattershot_Pro.jpg";
    } else {
    begin_splat = 1;

}
    document.getElementById("splat").src = " " + splat_data;
    begin_splat++;
}



