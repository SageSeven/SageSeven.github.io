$(()=>{
	let count = 0, time = 5;
	const scr = document.getElementById('screen');
	const btn = document.getElementById('btn');
	$("#settime").click(()=>{
		time = +$("#time").innerHTML;
	})
	let event0 = function(){
		if(count === 0){
			setTimeout(() => {
				btn.removeEventListener("click",event0);	
			},time * 1000);
		}
		count++;
		scr.textContent = count + "";
	}
	btn.addEventListener("click",event0);
});