let lk='http://localhost:5000/bestboys';
		fetch(lk).then(res => res.json()).then(data => Mostrar(data)).catch(error => console.error(error));
		const Mostrar = (data) =>  {
			console.log(data)
			let codigo=''
			for(let i=0;i<data.length;i++){
				
				codigo+=`<tr><td>${data[i].Name}</td><td>${data[i].LASTNAME}</td><td>${data[i].Country}</td><td>${data[i].Goodness}</td></tr>`
			}
			document.getElementById('clave').innerHTML=codigo


		}