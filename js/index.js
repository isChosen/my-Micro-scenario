var mySwiper = new Swiper ('.swiper-container', {
	direction: 'vertical',
	scrollbarHide: true,
	// 分页器
	pagination: '.swiper-pagination',
	onInit: function(swiper){
		swiperAnimateCache(swiper);
		swiperAnimate(swiper);
	},
	onSlideChangeEnd: function(swiper){
		swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
 		cssDefault(swiper.activeIndex);
        if(swiper.activeIndex==1){
        	$(".swiper-slide.two").find("p").eq(2).css("-webkit-animation","axiom 3s 1s steps(6) forwards");
        	$(".swiper-slide.two").find("img").eq(0).css("-webkit-animation","scaleLarge  1.2s ease-out forwards");
        	$(".swiper-slide.two").find("img").eq(1).css("-webkit-animation","scaleLarge  1.2s ease-out forwards");
    	}else if(swiper.activeIndex==3) {
			$(".swiper-slide.four").find("div").eq(0).css("-webkit-animation","fourDivOne 1.5s ease-in forwards");
			$(".swiper-slide.four").find("div").eq(1).css("-webkit-animation","fourDivTwo 1.2s 1s ease-in forwards");
			$(".swiper-slide.four").find("div").eq(2).css("-webkit-animation","fourDivThree 1.2s 1.5s ease-in forwards");
			$(".swiper-slide.four").find("div").eq(3).css("-webkit-animation","fourDivFour 1.2s 2s ease-in forwards");
			$(".swiper-slide.four").find("div").eq(4).css("-webkit-animation","fourDivFive 1.2s 3s ease-in forwards");
		}else if(swiper.activeIndex==4) {
			$(".swiper-slide.five").find(".shipTxt").children('span').css("-webkit-animation","marginVal 1.5s 0.5s ease-in-out forwards");
		}else if(swiper.activeIndex==5) {
			$(".swiper-slide.six").find(".bg-btm").css("-webkit-animation","carsl 10s infinite linear");
		}
	}
});

function cssDefault(falg) {	
	$(".swiper-slide.two").find("p").eq(2).css("-webkit-animation",null);
	$(".swiper-slide.two").find("img").css("-webkit-animation",null);
	$(".swiper-slide.four").find("div").eq(0).css("-webkit-animation",null);
	$(".swiper-slide.four").find("div").eq(1).css("-webkit-animation",null);
	$(".swiper-slide.four").find("div").eq(2).css("-webkit-animation",null);
	$(".swiper-slide.four").find("div").eq(3).css("-webkit-animation",null);
	$(".swiper-slide.four").find("div").eq(4).css("-webkit-animation",null);
	$(".swiper-slide.five").find(".shipTxt").children('span').css("-webkit-animation",null);
	$(".swiper-slide.six").find(".bg-btm").css("-webkit-animation",null);
	// console.log(1);
}

// 播放/暂停音乐
flag = true;
$('.music').click(function() {
	if(flag) {
		$(this).css('background-image','url(img/musicBtnOff.png)');
		$('#mus')[0].pause();
		flag = false;
	} else {
		$(this).css('background-image','url(img/musicBtn.png)');
		$('#mus')[0].play();
		flag = true;
	}
});

//钟表
var oC = document.getElementById('c');
var oGC = oC.getContext('2d');

function toDraw() {
	var x = 60;
	var y = 60;
	var r = 60;
	oGC.clearRect(0,0,oC.width,oC.height);
	var oDate = new Date();
	var oHours = oDate.getHours();
	var oMin = oDate.getMinutes();
	var oSen = oDate.getSeconds();

	var oHoursVal = (-90 + oHours*30 + oMin/2)*Math.PI/180;
	var oMinVal = (-90 + oMin*6)*Math.PI/180;
	var oSenVal = (-90 + oSen*6)*Math.PI/180;

	//小刻度
	oGC.beginPath();
	for(var i = 0; i < 60; i++) {
		oGC.moveTo(x,y);
		oGC.arc(x,y,r,6*i*Math.PI/180,6*(i+1)*Math.PI/180,false);
	}
	oGC.closePath();
	oGC.stroke();
	
	//覆盖小刻度
	oGC.fillStyle = 'white';
	oGC.beginPath();
	oGC.moveTo(x,y);
	oGC.arc(x,y,r*19/20,0,360*Math.PI/180,false);
	oGC.closePath();
	oGC.fill();

	//大刻度
	oGC.beginPath();
	oGC.lineWidth = 3;
	for(var i = 0; i < 12; i++) {
		oGC.moveTo(x,y);
		oGC.arc(x,y,r,30*i*Math.PI/180,30*(i+1)*Math.PI/180,false);
	}
	oGC.closePath();
	oGC.stroke();

	//覆盖大刻度
	oGC.fillStyle = 'white';
	oGC.beginPath();
	oGC.moveTo(x,y);
	oGC.arc(x,y,r*18/20,0,360*Math.PI/180,false);
	oGC.closePath();
	oGC.fill();

	//时针
	oGC.beginPath();
	oGC.lineWidth = 3;
	oGC.moveTo(x,y);
	oGC.arc(x,y,r*10/20,oHoursVal,oHoursVal,false);
	oGC.closePath();
	oGC.stroke();

	//分针
	oGC.beginPath();
	oGC.lineWidth = 2;
	oGC.moveTo(x,y);
	oGC.arc(x,y,r*16/20,oMinVal,oMinVal,false);
	oGC.closePath();
	oGC.stroke();

	//秒针
	oGC.beginPath();
	oGC.lineWidth = 1;
	oGC.moveTo(x,y);
	oGC.arc(x,y,r*17/20,oSenVal,oSenVal,false);
	oGC.closePath();
	oGC.stroke();
}
setInterval(toDraw,1000);