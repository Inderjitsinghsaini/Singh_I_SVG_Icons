(() =>{
   //this is a self invoking function
   

   	console.log('fired');
   	
   	let mainHeadLine = document.querySelector(".main-headLine")
   	 allImages = document.querySelectorAll("#image-container img")
   	swapTextButton = document.querySelector(".switch-type")

   	function logMyId(){
 		console.log(this.id);
 		this.style.opacity = 0.5;
 	}
 	function swapText(){
 		mainHeadLine.textContent = "People said the Age of Heroes would never come again._Diana Prince";

 	}

allImages.forEach(item =>{
		item.addEventListener("click",logMyId);}
		);
		
		swapTextButton.addEventListener("click", swapText)

	




})();