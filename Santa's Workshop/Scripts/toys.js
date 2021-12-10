function fillDataToys(){
    var request= new XMLHttpRequest();
 
    var lk="http://localhost:5000/mostwantedtoys";
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
 
         var TOY_ID = document.createElement('td');
         TOY_ID.innerHTML = d.TOY_ID;
         tr.appendChild(TOY_ID);
 
         var NAME = document.createElement('td');
         NAME.innerHTML = d.NAME;
         tr.appendChild(NAME);
 
         var AVAILABLE = document.createElement('td');
         AVAILABLE.innerHTML = d.AVAILABLE;
         tr.appendChild(AVAILABLE);
 
         var nRegalos = document.createElement('td');
         nRegalos.innerHTML = d.nRegalos;
         tr.appendChild(nRegalos);
 
         table.appendChild(tr);
     }
     
 }
   
    request.send();
 }
 
  function fillDataToy(){
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
 
 function setListeners(){
     var groupBy = document.getElementById('button-addon2');
     groupBy.onclick = function () {
         // Call filtered query
         resetTable();
         fillDataToy();
     }

 }
 
 function resetTable() {
     var table = document.getElementById('table');
     var codeBlock = '<table class="table table-striped" style=" margin-top: 10px; background-color: whitesmoke;" id="table">' + '<tr>' + '<th>Toy ID</th>' + '<th>Name</th>' + '<th>Available</th>' + '<th>Requested Count</th>' + '</tr>' + '</table>';
     table.innerHTML = codeBlock;
 }

 fillDataToys();
 