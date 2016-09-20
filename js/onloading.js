function onloading() {
	var audio = document.getElementById('music');
	var bg = document.getElementById('music_bg');
	var str = bg.src.substring(bg.src.length - 9);
	var lastStr = bg.src.substring(0, bg.src.length - 9);
	if (audio !== null) {
		//检测播放是否已暂停.audio.paused 在播放器播放时返回false.
		//alert(audio.paused);
		if (audio.paused) {
			audio.play(); //audio.play();// 这个就是播放  
			bg.src = lastStr + "pause.png";
			bg.alt = "播放";
		} else {
			audio.pause(); // 这个就是暂停
			bg.src = lastStr + "plays.png";
			bg.alt = "暂停";
		}
	}
	if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))){
		audio.pause(); // 这个就是暂停
		bg.src = lastStr + "plays.png";
		bg.alt = "暂停";
	}else{
		audio.play(); //audio.play();// 这个就是播放  
		bg.src = lastStr + "pause.png";
		bg.alt = "播放";
	}
}
