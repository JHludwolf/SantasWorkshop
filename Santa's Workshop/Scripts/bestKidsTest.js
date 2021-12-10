function fillData(){
    var jsonTest = [
        {"ID":1,"NAME":"Aage","LASTNAME":"Andersen","ADDRESS":"9045 Poulsen Crescent. West Minna, NV 55510","COUNTRY":"Denmark","GOODNESS":9.751635515148337e+000,"BIRTHDATE":"2017-05-01"},
        {"ID":2,"NAME":"Aage","LASTNAME":"Bach","ADDRESS":"927 Danielsen Forks Apt. 494. Ronnyfurt, MO 92832","COUNTRY":"Denmark","GOODNESS":8.996054166470318e+000,"BIRTHDATE":"2007-02-07"},
        {"ID":3,"NAME":"Aage","LASTNAME":"Bach","ADDRESS":"413 Pedersen Manor Suite 788. Madsenmouth, IN 74533","COUNTRY":"Denmark","GOODNESS":8.754364548410663e+000,"BIRTHDATE":"2018-09-30"},
        {"ID":4,"NAME":"Aage","LASTNAME":"Berg","ADDRESS":"88785 Clavs Mission Apt. 057. South Bobby, IN 64488","COUNTRY":"Denmark","GOODNESS":8.008707687971636e+000,"BIRTHDATE":"2019-05-16"},
        {"ID":5,"NAME":"Aage","LASTNAME":"Bruun","ADDRESS":"2841 Grete Springs Suite 589. North Wernerview, HI 08076","COUNTRY":"Denmark","GOODNESS":9.465904718748474e+000,"BIRTHDATE":"2013-08-21"},
        {"ID":6,"NAME":"Aage","LASTNAME":"Bruun","ADDRESS":"5072 Tove Spurs. Dagmarshire, MS 32958","COUNTRY":"Denmark","GOODNESS":6.069284193072592e+000,"BIRTHDATE":"2014-02-13"},
        {"ID":7,"NAME":"Aage","LASTNAME":"Christoffersen","ADDRESS":"6638 Larsen Stream. Carlsenmouth, NV 03969","COUNTRY":"Denmark","GOODNESS":9.808400316555922e+000,"BIRTHDATE":"2007-03-09"},
        {"ID":8,"NAME":"Aage","LASTNAME":"Frederiksen","ADDRESS":"5462 Rasmussen Throughway. Nilssonland, PA 77423","COUNTRY":"Denmark","GOODNESS":6.773516374605313e+000,"BIRTHDATE":"2014-11-23"},
        {"ID":9,"NAME":"Aage","LASTNAME":"Friis","ADDRESS":"322 Ester Center Apt. 629. Karolineland, AL 57965","COUNTRY":"Denmark","GOODNESS":7.858294125573135e+000,"BIRTHDATE":"2012-05-29"},
        {"ID":10,"NAME":"Aage","LASTNAME":"Friis","ADDRESS":"361 Mette Dam. Lauritsmouth, MN 68959","COUNTRY":"Denmark","GOODNESS":7.709501702408787e+000,"BIRTHDATE":"2017-09-04"},
        {"ID":11,"NAME":"Aage","LASTNAME":"Gregersen","ADDRESS":"89637 Jessen Dam Apt. 935. West Naja, CT 75903","COUNTRY":"Denmark","GOODNESS":9.213203303678966e+000,"BIRTHDATE":"2017-03-25"}
    ];

    console.log(jsonTest[0].ID);

    /*for(var i=0; i<jsonTest.length; i++){
        console.log(jsonTest[i].NAME);
    }*/

    var table = document.getElementById('table');

    for(var i=0; i<jsonTest.length ; i++){
        var tr = document.createElement('tr');
        var d = jsonTest[i];

        var name = document.createElement('td');
        name.innerHTML = d.NAME;
        tr.appendChild(name);

        var lastName = document.createElement('td');
        lastName.innerHTML = d.LASTNAME;
        tr.appendChild(lastName);

        var country = document.createElement('td');
        country.innerHTML = d.COUNTRY;
        tr.appendChild(country);

        var goodness = document.createElement('td');
        goodness.innerHTML = d.GOODNESS;
        tr.appendChild(goodness);

        table.appendChild(tr);
    }
    
}

function setListeners(){
    var groupBy = document.getElementById('button-addon2');
    groupBy.onclick = function () {
        // Call filtered query
        var country = document.getElementById('countyInput');
        alert('Grouping by country: ' + country.value);
        resetTable();
        fillData();
    }

    var bestKids = document.getElementById('inlineRadio1');
    bestKids.onclick = function () {
        // Call best kids query
        alert('Displaying best kids. . .');
        resetTable();
        fillData();
    }

    var worstKids = document.getElementById('inlineRadio2');
    worstKids.onclick = function () {
        // Call best kids query
        alert('Displaying worst kids. . .');
        resetTable();
        fillData();
    }
}

function resetTable() {
    var table = document.getElementById('table');
    var codeBlock = '<table class="table table-striped" style=" margin-top: 10px; background-color: whitesmoke;" id="table">' + '<tr>' + '<th>Name</th>' + '<th>Last name</th>' + '<th>Country</th>' + '<th>Goodness</th>' + '</tr>' + '</table>';
    table.innerHTML = codeBlock;
}