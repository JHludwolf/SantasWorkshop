function fillDataToys(){
    var request= new XMLHttpRequest();
 
    var lk="http://localhost:5000/greedykids";
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
 
         var KID_ID = document.createElement('td');
         KID_ID.innerHTML = d.KID_ID;
         tr.appendChild(KID_ID);
 
         var NAME = document.createElement('td');
         NAME.innerHTML = d.NAME;
         tr.appendChild(NAME);
 
         var LASTNAME = document.createElement('td');
         LASTNAME.innerHTML = d.LASTNAME;
         tr.appendChild(LASTNAME);
 
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
 	var country = document.getElementById('countryInput');
    var lk="http://localhost:5000/greedykids?filter="+country.value;
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
 
         var KID_ID = document.createElement('td');
         KID_ID.innerHTML = d.KID_ID;
         tr.appendChild(KID_ID);
 
         var NAME = document.createElement('td');
         NAME.innerHTML = d.NAME;
         tr.appendChild(NAME);
 
         var LASTNAME = document.createElement('td');
         LASTNAME.innerHTML = d.LASTNAME;
         tr.appendChild(LASTNAME);
 
         var nRegalos = document.createElement('td');
         nRegalos.innerHTML = d.nRegalos;
         tr.appendChild(nRegalos);
 
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
	var c = document.getElementById('countryInput');
	if(c.value==""){
		fillDataToys();
	}
	else{
		fillDataToy();
	}
	
	
         
     }

 }
 
 function resetTable() {
     var table = document.getElementById('table');
     var codeBlock = '<table class="table table-striped" style=" margin-top: 10px; background-color: whitesmoke;" id="table">' + '<tr>' + '<th>Kid ID</th>' + '<th>First Name</th>' + '<th>Last Name</th>' + '<th>Wishlist Length</th>' + '</tr>' + '</table>';
     table.innerHTML = codeBlock;
 }



 