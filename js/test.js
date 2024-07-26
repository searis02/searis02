var mySwiper = new Swiper ('.swiper-container', {
	loop: true,
	slidesPerView: 2,
  	spaceBetween: 10,
  	centeredSlides : true,
	pagination: '.swiper-pagination',
	nextButton: '.swiper-button-next',
	prevButton: '.swiper-button-prev',
	breakpoints: {
		767: {
			slidesPerView: 1,
			spaceBetween: 0
		}
	}
}) 

$('slider-3').slick({
	autoplay: true,
	autoplaySpeed: 2000,
	speed: 400,
})

$(function () {
	$('#js-slider-3').slick({
	  arrows: true, // 前・次のボタンを表示する
	  dots: true, // ドットナビゲーションを表示する
	  appendDots: $('.dots-3'), // ドットナビゲーションの生成位置を変更
	  speed: 1000, // スライドさせるスピード（ミリ秒）
	  slidesToShow: 1, // 表示させるスライド数
	  centerMode: true, // slidesToShowが奇数のとき、現在のスライドを中央に表示する
	  variableWidth: true, // スライド幅の自動計算を無効化
	  autoplay: true,
	  autoplaySpeed: 2800,
	});
  });




//const p = document.getElementById("myid");
//console.log(p);


const div = document.getElementById("wrap");
div.innerHTML = '<p><strong>こ</strong>んにちは！</p>';
//基本要素 書き換え

const h1 = document.createElement('h1');
      
h1.textContent = 'こんにちは';

document.body.appendChild(h1);

console.log(h1);

let fruits = "apple";
console.log(fruits);


const buttonadd = document.getElementById('button-add');
const buttonClear = document.getElementById('button-clear');
const list = document.getElementById('list');

buttonadd.addEventListener('click', function(){
	const element = document.createElement('li');
	element.innerHTML = '中身の要素';
	list.appendChild(element);// listにelementを追加する
});

buttonClear.addEventListener('click', function(){
	list.removeChild(list.lastChild);
});


const twitter = document.getElementById('twitter');
twitter.innerHTML = '<img src="img/twitter.png" class="smalllogo"><a href="https://x.com" class="twitter" id="none">twitter</a> <br>';
//const username = document.getElementById('none');
//username.innerHTML = ''
//function Replace(){
	let link = document.getElementById('none');
	let url = "https://x.com/kiri__tsuki";

	link.setAttribute('href', url);

var sampleElement = document.getElementById("twitter2");
	result = sampleElement.classList.contains(twitter2);
	
console.log(result);


var p = $("p").hasclass("twitter2");
 
if( p ) {
 
	console.log('検出されました！');
	
  } else {
	
	console.log('検出できませんでした！');
	
  }