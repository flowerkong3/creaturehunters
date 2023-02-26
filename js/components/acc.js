const accType1Item = document.querySelectorAll(".acc-type1 .acc-item");
		for(var i=0; i < accType1Item.length; i++){
			accType1Item[i].addEventListener("click",function() {
				this.classList.toggle("show");
			})
		}