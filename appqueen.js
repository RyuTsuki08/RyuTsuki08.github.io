//definir variables del documento HTML
		let cerrar =document.querySelectorAll(".btn_back")[0];
		let abrir =document.querySelectorAll(".Algo-mas")[0];
		let modal =document.querySelectorAll(".modal")[0];
		let modalC =document.querySelectorAll(".modal-container")[0];

		//abrir ventana modal container

		abrir.addEventListener("click", function(e){
			e.preventDefault();
			modalC.style.opacity = "1";
			modalC.style.visibility = "visible";
			modal.classList.toggle("modal-close");
		});

		//cerrar ventana modal container en su boton de volver


	cerrar.addEventListener("click", function(e){
		e.preventDefault();
		modalC.style.opacity = "0";
			modalC.style.visibility = "hidden";
			modal.classList.toggle("modal-close");
	});

	//cerrar ventana modal container al presionar fuera de la ventana 

	window.addEventListener("click", function(e){
		if(e.target == modalC){
			modalC.style.opacity = "0";
			modalC.style.visibility = "hidden";
			modal.classList.toggle("modal-close");
		}
	});