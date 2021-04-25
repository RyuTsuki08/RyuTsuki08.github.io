
		let cerrar =document.querySelectorAll(".btn_back")[0];
		let abrir =document.querySelectorAll(".Que-es")[0];
		let modal =document.querySelectorAll(".modal")[0];
		let modalC =document.querySelectorAll(".modal-container")[0];

		abrir.addEventListener("click", function(e){
			e.preventDefault();
			modalC.style.opacity = "1";
			modalC.style.visibility = "visible";
			modal.classList.toggle("modal-close");
		});


	cerrar.addEventListener("click", function(e){
		e.preventDefault();
		modalC.style.opacity = "0";
			modalC.style.visibility = "hidden";
			modal.classList.toggle("modal-close");
	});

	window.addEventListener("click", function(e){
		if(e.target == modalC){
			modalC.style.opacity = "0";
			modalC.style.visibility = "hidden";
			modal.classList.toggle("modal-close");
		}
	});