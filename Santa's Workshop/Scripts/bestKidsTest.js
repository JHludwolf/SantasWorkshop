function fillDataBestBoys(){
   var request= new XMLHttpRequest();

   var lk="http://localhost:5000/bestboys";
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
        name.innerHTML = d.Name;
        tr.appendChild(name);

        var lastName = document.createElement('td');
        lastName.innerHTML = d.LASTNAME;
        tr.appendChild(lastName);

        var country = document.createElement('td');
        country.innerHTML = d.Country;
        tr.appendChild(country);

        var goodness = document.createElement('td');
        goodness.innerHTML = d.GOODNESS;
        tr.appendChild(goodness);

        table.appendChild(tr);
    }
    
}
  
   request.send();
}
function fillDataBadBoys(){
    var request= new XMLHttpRequest();
 
    var lk="http://localhost:5000/worstboys";
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
         name.innerHTML = d.Name;
         tr.appendChild(name);
 
         var lastName = document.createElement('td');
         lastName.innerHTML = d.LASTNAME;
         tr.appendChild(lastName);
 
         var country = document.createElement('td');
         country.innerHTML = d.Country;
         tr.appendChild(country);
 
         var goodness = document.createElement('td');
         goodness.innerHTML = d.GOODNESS;
         tr.appendChild(goodness);
 
         table.appendChild(tr);
     }
     
 }
   
    request.send();
 }

 function fillDataGoodCountry(){
    var request= new XMLHttpRequest();

    var country = document.getElementById('countyInput');
    alert('Grouping by country: ' + country.value);

    var lk="http://localhost:5000/bestboys" + "?filter=" + country.value;
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
         name.innerHTML = d.Name;
         tr.appendChild(name);
 
         var lastName = document.createElement('td');
         lastName.innerHTML = d.LASTNAME;
         tr.appendChild(lastName);
 
         var country = document.createElement('td');
         country.innerHTML = d.Country;
         tr.appendChild(country);
 
         var goodness = document.createElement('td');
         goodness.innerHTML = d.GOODNESS;
         tr.appendChild(goodness);
 
         table.appendChild(tr);
     }
     
 }
   
    request.send();
 }

 function fillDataBadCountry(){
    var request= new XMLHttpRequest();

    var country = document.getElementById('countyInput');
    alert('Grouping by country: ' + country.value);

    var lk="http://localhost:5000/worstboys" + "?filter=" + country.value;
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
         name.innerHTML = d.Name;
         tr.appendChild(name);
 
         var lastName = document.createElement('td');
         lastName.innerHTML = d.LASTNAME;
         tr.appendChild(lastName);
 
         var country = document.createElement('td');
         country.innerHTML = d.Country;
         tr.appendChild(country);
 
         var goodness = document.createElement('td');
         goodness.innerHTML = d.GOODNESS;
         tr.appendChild(goodness);
 
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
        else fillDataBadCountry();
    }

    var bestKids = document.getElementById('inlineRadio1');
    bestKids.onclick = function () {
        // Call best kids query
        alert('Displaying best kids. . .');
        resetTable();
        fillDataBestBoys();
    }

    var worstKids = document.getElementById('inlineRadio2');
    worstKids.onclick = function () {
        // Call best kids query
        alert('Displaying worst kids. . .');
        resetTable();
        fillDataBadBoys();
    }
}

function resetTable() {
    var table = document.getElementById('table');
    var codeBlock = '<table class="table table-striped" style=" margin-top: 10px; background-color: whitesmoke;" id="table">' + '<tr>' + '<th>First Name</th>' + '<th>Last name</th>' + '<th>ID</th>' + '</tr>' + '</table>';
    table.innerHTML = codeBlock;
}
