function fillDataGoodCountry(){
     var request= new XMLHttpRequest();
 
     var country = document.getElementById('kidIDInput');
     alert('Grouping by country: ' + country.value);
 
     var lk="http://localhost:5000/toysrequest" + "?filter=" + country.value;
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
  
          var NAME = document.createElement('td');
          NAME.innerHTML = d.NAME;
          tr.appendChild(NAME);
  
          var AVAILABLE = document.createElement('td');
          AVAILABLE.innerHTML = d.AVAILABLE;
          tr.appendChild(AVAILABLE);
  
          var ID = document.createElement('td');
          ID.innerHTML = d.ID;
          tr.appendChild(ID);
  
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
         fillDataGoodCountry();
 }
 }
 
 function resetTable() {
     var table = document.getElementById('table');
     var codeBlock = '<table class="table table-striped" style=" margin-top: 10px; background-color: whitesmoke;" id="table">' + '<tr>' + '<th>NAME</th>' + '<th>AVAILABLE</th>' + '<th>ID</th>' + '</tr>' + '</table>';
     table.innerHTML = codeBlock;
 }
 