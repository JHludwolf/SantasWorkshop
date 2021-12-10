function kidsCount(){
    var request= new XMLHttpRequest();
 
    var lk="http://localhost:5000/CountryStats/kids";
    request.open('GET',lk);
    request.onload=function(){
        var object =JSON.parse(request.response);
        var jsonTest= object.recordsets;
        console.log(jsonTest);
 
        console.log(jsonTest.length);
 
     var table = document.getElementById('table');
 
     for(var i=0; i<jsonTest[0].length ; i++){
         var tr = document.createElement('tr');
         var d = jsonTest[0][i];
 
         var Country = document.createElement('td');
         Country.innerHTML = d.Country;
         tr.appendChild(Country);
 
         var nNinos = document.createElement('td');
         nNinos.innerHTML = d.nNinos;
         tr.appendChild(nNinos);
 
         table.appendChild(tr);
     }
     
 }
   
    request.send();
 }

 function elfsCount(){
    var request= new XMLHttpRequest();
 
    var lk="http://localhost:5000/CountryStats/elfs";
    request.open('GET',lk);
    request.onload=function(){
        var object =JSON.parse(request.response);
        var jsonTest= object.recordsets;
        console.log(jsonTest);
 
        console.log(jsonTest.length);
 
     var table = document.getElementById('table');
 
     for(var i=0; i<jsonTest[0].length ; i++){
         var tr = document.createElement('tr');
         var d = jsonTest[0][i];
 
         var DELIVERY_COUNTRY = document.createElement('td');
         DELIVERY_COUNTRY.innerHTML = d.DELIVERY_COUNTRY;
         tr.appendChild(DELIVERY_COUNTRY);
 
         var nElfos = document.createElement('td');
         nElfos.innerHTML = d.nElfos;
         tr.appendChild(nElfos);
 
         table.appendChild(tr);
     }
     
 }
   
    request.send();
 }

 function cardsCount(){
    var request= new XMLHttpRequest();
 
    var lk="http://localhost:5000/CountryStats/cards";
    request.open('GET',lk);
    request.onload=function(){
        var object =JSON.parse(request.response);
        var jsonTest= object.recordsets;
        console.log(jsonTest);
 
        console.log(jsonTest.length);
 
     var table = document.getElementById('table');
 
     for(var i=0; i<jsonTest[0].length ; i++){
         var tr = document.createElement('tr');
         var d = jsonTest[0][i];
 
         var Country = document.createElement('td');
         Country.innerHTML = d.Country;
         tr.appendChild(Country);
 
         var nPedidos = document.createElement('td');
         nPedidos.innerHTML = d.nPedidos;
         tr.appendChild(nPedidos);
 
         table.appendChild(tr);
     }
     
 }
   
    request.send();
 }
 
 function setListeners(){
 
     var kids = document.getElementById('inlineRadio1');
     kids.onclick = function () {
         // Call best kids query
         resetTable();
         kidsCount();
     }
 
     var elfs = document.getElementById('inlineRadio2');
     elfs.onclick = function () {
         // Call best kids query
         resetTable();
         elfsCount();
     }

     var cards = document.getElementById('inlineRadio3');
     cards.onclick = function () {
         // Call best kids query
         resetTable();
         cardsCount();
     }
 }
 
 function resetTable() {
     var table = document.getElementById('table');
     var codeBlock = '<table class="table table-striped" style=" margin-top: 10px; background-color: whitesmoke;" id="table">' + '<tr>' + '<th>Country</th>' + '<th>Count</th>' + '</tr>' + '</table>';
     table.innerHTML = codeBlock;
 }
 