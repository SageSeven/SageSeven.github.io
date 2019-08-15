$(()=>{
	let count = 0, time = 5;
	const btn = document.getElementById('clickbtn');
	$("#settime").click(()=>{
		time = +$("#time").val();
	})
	let event0 = function(){
		if(count === 0){
			setTimeout(() => {
				btn.removeEventListener("click",event0);	
			},time * 1000);
		}
		count++;
		$(".screen p").text(count + "");
	}
	btn.addEventListener("click",event0);
});