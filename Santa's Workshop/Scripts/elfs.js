
function fillDataBestElfs(){
    var request= new XMLHttpRequest();
 
    var lk="http://localhost:5000/elfstopwage";
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
 
         var name = document.createElement('td');
         name.innerHTML = d.NAME;
         tr.appendChild(name);
 
         var DELIVERY_COUNTRY = document.createElement('td');
         DELIVERY_COUNTRY.innerHTML = d.DELIVERY_COUNTRY;
         tr.appendChild(DELIVERY_COUNTRY);
 
         var YEARS_OF_SERVICE = document.createElement('td');
         YEARS_OF_SERVICE.innerHTML = d.YEARS_OF_SERVICE;
         tr.appendChild(YEARS_OF_SERVICE);
 
         var MANUFACTURED_TOYS = document.createElement('td');
         MANUFACTURED_TOYS.innerHTML = d.MANUFACTURED_TOYS;
         tr.appendChild(MANUFACTURED_TOYS);

         var COOKIE_WAGE = document.createElement('td');
         COOKIE_WAGE.innerHTML = d.COOKIE_WAGE;
         tr.appendChild(COOKIE_WAGE);
 
         table.appendChild(tr);
     }
     
 }
   
    request.send();
 }
function fillDataWorstElfs(){
    var request= new XMLHttpRequest();
 
    var lk="http://localhost:5000/elfsworstwage";
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
 
         var name = document.createElement('td');
         name.innerHTML = d.NAME;
         tr.appendChild(name);
 
         var DELIVERY_COUNTRY = document.createElement('td');
         DELIVERY_COUNTRY.innerHTML = d.DELIVERY_COUNTRY;
         tr.appendChild(DELIVERY_COUNTRY);
 
         var YEARS_OF_SERVICE = document.createElement('td');
         YEARS_OF_SERVICE.innerHTML = d.YEARS_OF_SERVICE;
         tr.appendChild(YEARS_OF_SERVICE);
 
         var MANUFACTURED_TOYS = document.createElement('td');
         MANUFACTURED_TOYS.innerHTML = d.MANUFACTURED_TOYS;
         tr.appendChild(MANUFACTURED_TOYS);

         var COOKIE_WAGE = document.createElement('td');
         COOKIE_WAGE.innerHTML = d.COOKIE_WAGE;
         tr.appendChild(COOKIE_WAGE);
 
         table.appendChild(tr);
     }
     
 }
   
    request.send();
 }
function fillDataGoodCountry(){
     var request= new XMLHttpRequest();
 
     var country = document.getElementById('countyInput');
     alert('Grouping by country: ' + country.value);
 
     var lk="http://localhost:5000/elfstopwage" + "?filter=" + country.value;
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

        var name = document.createElement('td');
        name.innerHTML = d.NAME;
        tr.appendChild(name);

        var DELIVERY_COUNTRY = document.createElement('td');
        DELIVERY_COUNTRY.innerHTML = d.DELIVERY_COUNTRY;
        tr.appendChild(DELIVERY_COUNTRY);

        var YEARS_OF_SERVICE = document.createElement('td');
        YEARS_OF_SERVICE.innerHTML = d.YEARS_OF_SERVICE;
        tr.appendChild(YEARS_OF_SERVICE);

        var MANUFACTURED_TOYS = document.createElement('td');
        MANUFACTURED_TOYS.innerHTML = d.MANUFACTURED_TOYS;
        tr.appendChild(MANUFACTURED_TOYS);

        var COOKIE_WAGE = document.createElement('td');
        COOKIE_WAGE.innerHTML = d.COOKIE_WAGE;
        tr.appendChild(COOKIE_WAGE);

        table.appendChild(tr);
      }
      
  }
    
     request.send();
  }
 
  function fillDataWorstCountry(){
    var request= new XMLHttpRequest();

    var country = document.getElementById('countyInput');
    alert('Grouping by country: ' + country.value);

    var lk="http://localhost:5000/elfsworstwage" + "?filter=" + country.value;
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

       var name = document.createElement('td');
       name.innerHTML = d.NAME;
       tr.appendChild(name);

       var DELIVERY_COUNTRY = document.createElement('td');
       DELIVERY_COUNTRY.innerHTML = d.DELIVERY_COUNTRY;
       tr.appendChild(DELIVERY_COUNTRY);

       var YEARS_OF_SERVICE = document.createElement('td');
       YEARS_OF_SERVICE.innerHTML = d.YEARS_OF_SERVICE;
       tr.appendChild(YEARS_OF_SERVICE);

       var MANUFACTURED_TOYS = document.createElement('td');
       MANUFACTURED_TOYS.innerHTML = d.MANUFACTURED_TOYS;
       tr.appendChild(MANUFACTURED_TOYS);

       var COOKIE_WAGE = document.createElement('td');
       COOKIE_WAGE.innerHTML = d.COOKIE_WAGE;
       tr.appendChild(COOKIE_WAGE);

       table.appendChild(tr);
     }
     
 }
   
    request.send();
 }
 
 function setListeners(){
     var groupBy = document.getElementById('button-addon2');
     groupBy.onclick = function () {
         // Call filtered query
         resetTable();
         if (document.getElementById('inlineRadio1').checked) fillDataGoodCountry();
         else fillDataWorstCountry();
     }
 
     var bestKids = document.getElementById('inlineRadio1');
     bestKids.onclick = function () {
         // Call best kids query
         alert('Displaying best kids. . .');
         resetTable();
         fillDataBestElfs();
     }
 
     var worstKids = document.getElementById('inlineRadio2');
     worstKids.onclick = function () {
         // Call best kids query
         alert('Displaying worst kids. . .');
         resetTable();
         fillDataWorstElfs();
     }
 }
 
 function resetTable() {
     var table = document.getElementById('table');
     var codeBlock = '<table class="table table-striped" style=" margin-top: 10px; background-color: whitesmoke;" id="table">' + '<tr>' + '<th>Name</th>' + '<th>Delivery Country</th>' + '<th>Years of Service</th>' + '<th>Manufactured Toys</th>' + '<th>Cookie Wage</th>' + '</tr>' + '</table>';
     table.innerHTML = codeBlock;
 }
 