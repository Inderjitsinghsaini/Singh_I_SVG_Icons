(() =>{
   //this is a self invoking function
   

   	console.log('fired');
   	let allImages = document.querySelectorAll("#image-container img")

   	function logMyId(){
 		console.log(this.id);

 		this.style.opacity = 0.5;
 	}
allImages.forEach(item =>{
		item.addEventListener("click",logMyId);
	});



})();