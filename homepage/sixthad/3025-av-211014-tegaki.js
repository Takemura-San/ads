function unescapeHTML(str) {
  var div = document.createElement("div");
  div.innerHTML = str
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/ /g, "&nbsp;")
    .replace(/\r/g, "&#13;")
    .replace(/\n/g, "&#10;");
  return div.textContent || div.innerText;
}

document.body.style.width = "300";
document.body.style.height = "250";
var adArea_div = document.createElement('div');
adArea_div.className = 'adArea_div';
adArea_div.style.boxShadow = "15px 28px 25px - 18px rgb(0 0 0 / 20 %)";
adArea_div.style.borderBottomLeftRadius = "15px 255px";
adArea_div.style.borderBottomRightRadius = "225px 15px";
adArea_div.style.borderTopLeftRadius = "255px 15px";
adArea_div.style.borderTopRightRadius = "15px 225px";
adArea_div.style.color = "black";
adArea_div.style.alignSelf = "center";
adArea_div.style.borderStyle = "solid";
adArea_div.style.borderWidth = "2px";
adArea_div.style.position = "absolute";
adArea_div.style.width = "295px";
adArea_div.style.height = "245px";
adArea_div.style.boxSizing = "content-box";
adArea_div.style.margin = "0 auto";
adArea_div.style.overflow = "hidden";
adArea_div.style.border = "1.5px solid black";
adArea_div.style.touchAction = "pan-y";
adArea_div.style.zIndex = "1";
adArea_div.style.backgroundSize= "auto auto";
adArea_div.style.backgroundColor= "rgba(255, 255, 255, 1)";
adArea_div.style.backgroundImage= "repeating-linear-gradient(178deg, transparent, transparent 41px, rgba(207, 207, 207, 1) 41px, rgba(207, 207, 207, 1) 42px )";
adArea_div.style.fontFamily = "ヒラギノ丸ゴ Pro W4", "ヒラギノ丸ゴ Pro", "Hiragino Maru Gothic Pro", "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro", "HG丸ｺﾞｼｯｸM-PRO", "HGMaruGothicMPRO";
document.body.appendChild(adArea_div);
var swiperWrapper = document.createElement('div');
swiperWrapper.className = 'swiperWrapper';
swiperWrapper.style.position = "relative";
swiperWrapper.style.width = "100%";
swiperWrapper.style.height = "100%";
swiperWrapper.style.zIndex = "1";
swiperWrapper.style.display = "flex";
swiperWrapper.style.flexDirection = "row";
swiperWrapper.style.boxSizing = "content-box";
adArea_div.appendChild(swiperWrapper);
var swiperButtonNext = document.createElement('img');
swiperButtonNext.className = "buttonNext";
swiperButtonNext.src = 'https://cnobi.jp/v1/dragon/dyn-banner/dmm/211011arrow.png';
swiperButtonNext.style.zIndex = '2';
swiperButtonNext.style.top = '70px';
swiperButtonNext.style.right = '0px';
swiperButtonNext.style.width = '70px';
swiperButtonNext.style.position = 'absolute';
swiperButtonNext.style.cursor = "pointer";
adArea_div.appendChild(swiperButtonNext);
var swiperButtonPrev = document.createElement('img');
swiperButtonPrev.className = "buttonPrev";
swiperButtonPrev.src = 'https://cnobi.jp/v1/dragon/dyn-banner/dmm/211011arrow.png';
swiperButtonPrev.style.zIndex = '2';
swiperButtonPrev.style.top = '70px';
swiperButtonPrev.style.left = '0px';
swiperButtonPrev.style.width = '70px';
swiperButtonPrev.style.position = 'absolute';
swiperButtonPrev.style.transform = 'scaleX(-1)';
swiperButtonPrev.style.cursor = "pointer";
adArea_div.appendChild(swiperButtonPrev);
let class_num = 1;
ninja_ad_items.slice(1, 5).forEach((item) => {
	var slide = document.createElement('div');
	slide.className = "slide" + class_num;
	slide.style.justifyContent = "space-between";
	slide.style.position = "relative";
	slide.style.overflow = "visible";
	slide.style.flexShrink = "0";
	slide.style.transitionProperty = "transform";
	swiperWrapper.appendChild(slide);
	var slide_a = document.createElement('a');
	slide_a.target = "_blank";
	slide_a.href = unescapeHTML(item.url);
	slide_a.style.display = "flex";
	slide_a.style.justifyContent = "center";
	slide_a.style.alignItems = "center";
	slide_a.style.color = "-weblit-link";
	slide_a.style.cursor = "pointer";
	slide_a.style.textDecoration = "underline";
	slide.appendChild(slide_a);
	var image = document.createElement('img');
	image.src = item.image;
	image.style.height = "170px";
	image.style.marginTop = "10px";
	image.style.objectFit = "cover";
	image.style.marginRight = "90px";
	image.style.marginLeft = "90px";
	image.className = "image" + class_num;
	slide_a.appendChild(image);
	var div_textarea = document.createElement('div');
	div_textarea.style.boxShadow = "15px 28px 25px - 18px rgb(0 0 0 / 20 %)";
	div_textarea.style.borderBottomLeftRadius = "50px 255px";
	div_textarea.style.borderBottomRightRadius = "225px 50px";
	div_textarea.style.borderTopLeftRadius = "255px 50px";
	div_textarea.style.borderTopRightRadius = "50px 225px";
	div_textarea.style.backgroundColor = "white";
	div_textarea.style.color = "black";
	div_textarea.style.alignSelf = "center";
	div_textarea.style.backgroundImage = "none";
	div_textarea.style.borderStyle = "solid";
	div_textarea.style.borderWidth = "1.5px";
	div_textarea.style.cursor = "pointer";
	div_textarea.style.fontSize = "1rem";
	div_textarea.style.outline = "none";
	div_textarea.style.padding = "0.75rem";
	div_textarea.style.display = "flex";
	div_textarea.style.alignItems = "center";
	div_textarea.style.justifyContent = "center";
	div_textarea.style.position = "absolute";
	div_textarea.style.bottom = "1px";
	div_textarea.style.left = "9px";
	div_textarea.style.width = "272px";
	div_textarea.style.height = "52px";
	div_textarea.style.padding = "0 5px";
	div_textarea.style.zIndex = "1";
	slide_a.appendChild(div_textarea);

	var simpleTextarea = document.createElement('div');
	simpleTextarea.className  = 'textArea';
	simpleTextarea.style.display  = 'inline';
	simpleTextarea.style.overflow = 'hidden';
	simpleTextarea.style.height = "50px";
	div_textarea.appendChild(simpleTextarea);

	var p_textarea = document.createElement('p');
	p_textarea.className = 'text';
	p_textarea.style.position = "relative";
	p_textarea.style.color = "#4285F4";
	p_textarea.style.fontSize = "13px";
	p_textarea.style.margin = "10px";
	p_textarea.style.overflow = "hidden";
	p_textarea.style.textOverflow = "ellipsis";
	p_textarea.style.display = "block";
	p_textarea.style.display = "-webkit-box";
	p_textarea.style.webkitLineClamp = "2";
	p_textarea.style.textAlign = "center";
	p_textarea.style.verticalAlign= "center";
	p_textarea.style.right = "0px";
	p_textarea.style.left = "0px";
	p_textarea.style.padding = "0";
	p_textarea.style.zIndex = "3";
	p_textarea.innerHTML = item.title;
	simpleTextarea.appendChild(p_textarea);
	class_num++;
})

function chk(i)
{
	var textElement = document.getElementsByClassName('text').item(i);
	var textArea = document.getElementsByClassName('textArea').item(i);
	var height = getComputedStyle(textElement).height;

	if (height == '20px')
	{
		textElement.style.bottom = '-3.5px';
	}
	else
	{
		textElement.style.bottom = '4px';
		textElement.style.height = '40px';
	}

}
chk(0);
chk(1);
chk(2);
chk(3);

var slideChanger = function () {
}
let classIndex = 1;
const automaticSlider = () => {
	switch (classIndex) {
		case 1: case 2: case 3: case 4:
			let showSlide = document.getElementsByClassName('slide' + classIndex).item(0)
			showSlide.style.opacity = '1';
			showSlide.style.display = 'flex';
			for (let i = 1; i < 5; i++) {
				if (i == classIndex) {
					continue;
				}
				else {
					let hideSlide = document.getElementsByClassName('slide' + i).item(0);
					hideSlide.style.opacity = '0';
					hideSlide.style.display = 'none';
				}
			}
			setTimeout(automaticSlider, 4000);
			classIndex++;
			break;
	}
	if (classIndex == 5) {
		classIndex = 1;
	}
}
setTimeout(automaticSlider, 10)
var nextBut = document.getElementsByClassName('buttonNext').item(0);
var prevBut = document.getElementsByClassName('buttonPrev').item(0);
nextBut.addEventListener(
	"click",
	() => {
		let currentNum = parseInt(Array.from(document.getElementsByTagName('div').item(1).childNodes).filter(function (slide) { return slide.style.opacity == '1' })[0].className.replace(/[^0-9]/g, ''));
		let showNum = currentNum + 1;
		let showSlide, hideSlide;
		console.log(showNum);
		switch (currentNum) {
			case 1: case 2: case 3:
				showSlide = document.getElementsByClassName('slide' + showNum).item(0)
				showSlide.style.opacity = '1';
				showSlide.style.display = 'flex';
				for (let i = 1; i < 5; i++) {
					if (i == showNum) {
						continue;
					}
					else {
						hideSlide = document.getElementsByClassName('slide' + i).item(0);
						hideSlide.style.opacity = '0';
						hideSlide.style.display = 'none';
					}
				}
				break;
			case 4:
				showSlide = document.getElementsByClassName('slide1').item(0)
				showSlide.style.opacity = '1';
				showSlide.style.display = 'flex';
				for (let i = 1; i < 5; i++) {
					if (i == 1) {
						continue;
					}
					else {
						hideSlide = document.getElementsByClassName('slide' + i).item(0);
						hideSlide.style.opacity = '0';
						hideSlide.style.display = 'none';
					}
				}
				break;
		}
	}
)
prevBut.addEventListener(
	"click",
	() => {
		let currentNum = parseInt(Array.from(document.getElementsByTagName('div').item(1).childNodes).filter(function (slide) { return slide.style.opacity == '1' })[0].className.replace(/[^0-9]/g, ''));
		let showNum = currentNum - 1;
		let showSlide, hideSlide;
		console.log(showNum);
		switch (currentNum) {
			case 1:
				showSlide = document.getElementsByClassName('slide4').item(0)
				showSlide.style.opacity = '1';
				showSlide.style.display = 'flex';
				for (let i = 1; i < 5; i++) {
					if (i == 4) {
						continue;
					}
					else {
						hideSlide = document.getElementsByClassName('slide' + i).item(0);
						hideSlide.style.opacity = '0';
						hideSlide.style.display = 'none';
					}
				}
				break;
			case 2: case 3: case 4:
				showSlide = document.getElementsByClassName('slide' + showNum).item(0)
				showSlide.style.opacity = '1';
				showSlide.style.display = 'flex';
				for (let i = 1; i < 5; i++) {
					if (i == showNum) {
						continue;
					}
					else {
						hideSlide = document.getElementsByClassName('slide' + i).item(0);
						hideSlide.style.opacity = '0';
						hideSlide.style.display = 'none';
					}
				}
				break;
		}
	}
)