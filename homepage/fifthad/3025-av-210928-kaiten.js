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

var rotate = function (modify,) {
	modify.animate(
		[
			{
				left: Left1, top: Top1
			},
			{
				left: Left2, top: Top2
			},
			{
				left: Left3, top: Top3
			},
			{
				left: Left4, top: Top4
			},
			{
				left: Left5, top: Top5
			},
			{
				left: Left6, top: Top6
			},
			{
				left: Left7, top: Top7
			},
			{
				left: Left8, top: Top8
			},
		], {
		duration: 18000,
		iterations: Infinity,
	}
	);
};
document.body.style.width = "300";
document.body.style.height = "250";
var adArea_div = document.createElement('div');
adArea_div.style.position = "absolute";
adArea_div.style.width = "300px";
adArea_div.style.height = "250px";
adArea_div.style.boxSizing = "content-box";
adArea_div.style.margin = "0 auto";
adArea_div.style.overflow = "hidden";
adArea_div.style.border = "1px solid rgb(170, 169, 169)";
document.body.appendChild(adArea_div);
var box_div1 = document.createElement("div");
box_div1.style.height = "125px";
box_div1.style.display = "flex";
box_div1.style.flexFlow = "row wrap";
adArea_div.appendChild(box_div1);
var box_div2 = document.createElement("div");
box_div2.style.height = "125px";
box_div2.style.display = "flex";
box_div2.style.flexFlow = "row wrap";
adArea_div.appendChild(box_div2);
var class_num = 0;
var posNum = '0px';
ninja_ad_items.slice(0, 4).forEach((item) => {
	var animateBox = document.createElement('div');
	animateBox.className = 'animate' + class_num;
	animateBox.style.width = "75px";
	animateBox.style.animationTimingFunction = "linear";
	animateBox.style.position = 'absolute';
	animateBox.style.left = posNum;
	animateBox.style.zIndex = '1';
	box_div1.appendChild(animateBox);
	switch (posNum) {
		case ('0px'):
			posNum = '75px';
			break;
		case ('75px'):
			posNum = '150px';
			break;
		case ('150px'):
			posNum = '225px';
			break;
	}
	var jumpUrl = document.createElement("a");
	jumpUrl.className = "lists" + class_num;
	jumpUrl.style.height = "125px";
	jumpUrl.style.textDecoration = "none";
	jumpUrl.href = unescapeHTML(item.url);
	jumpUrl.target = "_blank";
	animateBox.appendChild(jumpUrl);
	var ind_box = document.createElement('div');
	ind_box.style.width = '75px';
	ind_box.style.display = 'flex';
	ind_box.style.flexFlow = "row wrap";
	jumpUrl.appendChild(ind_box);
	var top_image = document.createElement('img');
	top_image.src = item.image;
	top_image.style.width = "75px";
	top_image.className = "image" + class_num;
	ind_box.appendChild(top_image);
	var div_textarea = document.createElement('div');
	div_textarea.style.height = '22px';
	div_textarea.style.width = '75px';
	div_textarea.style.bottom = '0';
	div_textarea.style.left = '0';
	div_textarea.style.display = 'flex';
	div_textarea.style.justifyContent = 'center';
	div_textarea.style.alignItems = 'center';
	div_textarea.style.zIndex = '-10';
	div_textarea.style.whiteSpace = 'nowrap';
	div_textarea.style.overflow = 'hidden';
	ind_box.appendChild(div_textarea);
	var text_p = document.createElement("p");
	text_p.className = "title" + class_num;
	text_p.style.marginTop = "10px";
	text_p.style.marginBottom = "5px";
	text_p.style.marginRight = "5px";
	text_p.style.marginLeft = "0px";
	text_p.style.fontSize = "15px";
	text_p.style.color = "#4285F4";
	text_p.style.textOrientation = "upright";
	text_p.style.maxHeight = "290px";
	text_p.style.overflowWrap = "break-word";
	text_p.style.textDecoration = "none";
	text_p.style.textOverflow = "ellipsis";
	text_p.style.animation = "switch 32s linear infinite";
	text_p.innerHTML = item.actress_name;
	div_textarea.appendChild(text_p);
	class_num++;
});
ninja_ad_items.slice(4, 8).forEach((item) => {
	var animateBox2 = document.createElement('div');
	animateBox2.className = 'animate' + class_num;
	animateBox2.style.width = "75px";
	animateBox2.style.animationTimingFunction = "linear";
	animateBox2.style.position = 'absolute';
	animateBox2.style.left = posNum;
	animateBox2.style.zIndex = '1';
	box_div1.appendChild(animateBox2);
	switch (posNum) {
		case ('0px'):
			posNum = '75px';
			break;
		case ('75px'):
			posNum = '150px';
			break;
		case ('150px'):
			posNum = '225px';
			break;
	}
	var jumpUrl2 = document.createElement("a");
	jumpUrl2.className = "lists" + class_num;
	jumpUrl2.style.height = "125px";
	jumpUrl2.style.textDecoration = "none";
	jumpUrl2.href = unescapeHTML(item.url);
	jumpUrl2.target = "_blank";
	animateBox2.appendChild(jumpUrl2);
	var ind_box2 = document.createElement('div');
	ind_box2.style.width = '75px';
	ind_box2.style.display = 'flex';
	ind_box2.style.flexFlow = "row wrap";
	jumpUrl2.appendChild(ind_box2);
	var bottom_image = document.createElement('img');
	bottom_image.src = item.image;
	bottom_image.style.width = "75px";
	bottom_image.className = "image" + class_num;
	ind_box2.appendChild(bottom_image);
	var div_textarea = document.createElement('div');
	div_textarea.style.height = '22px';
	div_textarea.style.width = '75px';
	div_textarea.style.bottom = '0';
	div_textarea.style.left = '0';
	div_textarea.style.display = 'flex';
	div_textarea.style.justifyContent = 'center';
	div_textarea.style.alignItems = 'center';
	div_textarea.style.zIndex = '-10';
	div_textarea.style.whiteSpace = 'nowrap';
	div_textarea.style.overflow = 'hidden';
	ind_box2.appendChild(div_textarea);
	var text_p2 = document.createElement("p");
	text_p2.className = "title" + class_num;
	text_p2.style.marginTop = "10px";
	text_p2.style.marginBottom = "5px";
	text_p2.style.marginRight = "5px";
	text_p2.style.marginLeft = "0px";
	text_p2.style.fontSize = "15px";
	text_p2.style.color = "#4285F4";
	text_p2.style.textOrientation = "upright";
	text_p2.style.maxHeight = "290px";
	text_p2.style.overflowWrap = "break-word";
	text_p2.style.textDecoration = "none";
	text_p2.style.textOverflow = "ellipsis";
	text_p2.style.animation = "switch 32s linear infinite";
	text_p2.innerHTML = item.actress_name;
	div_textarea.appendChild(text_p2);
	class_num++;
});
let Left1 = '', Left2 = '', Left3 = '', Left4 = '', Left5 = '', Left6 = '', Left7 = '', Left8 = '', Top1 = '', Top2 = '', Top3 = '', Top4 = '', Top5 = '', Top6 = '', Top7 = '', Top8 = '';
for (let i = 0; i < 8; i++) {
	var moveBox = document.getElementsByClassName('animate' + i).item(0);
	switch (i) {
		case (0):
			Left1 = '0';
			Left2 = '75px';
			Left3 = '150px';
			Left4 = '225px';
			Left5 = '225px';
			Left6 = '150px';
			Left7 = '75px';
			Left8 = '0';
			Top1 = '0';
			Top2 = '0';
			Top3 = '0';
			Top4 = '0';
			Top5 = '125px';
			Top6 = '125px';
			Top7 = '125px';
			Top8 = '125px';
			rotate(moveBox, Left1, Left2, Left3, Left4, Left5, Left6, Left7, Left8, Top1, Top2, Top3, Top4, Top5, Top6, Top7, Top8);
			break;
		case (1):
			Left1 = '75px';
			Left2 = '150px';
			Left3 = '225px';
			Left4 = '225px';
			Left5 = '150px';
			Left6 = '75px';
			Left7 = '0px';
			Left8 = '0px';
			Top1 = '0';
			Top2 = '0';
			Top3 = '0';
			Top4 = '125px';
			Top5 = '125px';
			Top6 = '125px';
			Top7 = '125px';
			Top8 = '0';
			rotate(moveBox, Left1, Left2, Left3, Left4, Left5, Left6, Left7, Left8, Top1, Top2, Top3, Top4, Top5, Top6, Top7, Top8);
			break;
		case (2):
			Left1 = '150px';
			Left2 = '225px';
			Left3 = '225px';
			Left4 = '150px';
			Left5 = '75px';
			Left6 = '0px';
			Left7 = '0px';
			Left8 = '75px';
			Top1 = '0';
			Top2 = '0';
			Top3 = '125px';
			Top4 = '125px';
			Top5 = '125px';
			Top6 = '125px';
			Top7 = '0';
			Top8 = '0';
			rotate(moveBox, Left1, Left2, Left3, Left4, Left5, Left6, Left7, Left8, Top1, Top2, Top3, Top4, Top5, Top6, Top7, Top8);
			break;
		case (3):
			Left1 = '225px';
			Left2 = '225px';
			Left3 = '150px';
			Left4 = '75px';
			Left5 = '0';
			Left6 = '0';
			Left7 = '75px';
			Left8 = '150px';
			Top1 = '0';
			Top2 = '125px';
			Top3 = '125px';
			Top4 = '125px';
			Top5 = '125px';
			Top6 = '0';
			Top7 = '0';
			Top8 = '0';
			rotate(moveBox, Left1, Left2, Left3, Left4, Left5, Left6, Left7, Left8, Top1, Top2, Top3, Top4, Top5, Top6, Top7, Top8);
			break;
		case (4):
			Left1 = '0';
			Left2 = '0';
			Left3 = '75px';
			Left4 = '150px';
			Left5 = '225px';
			Left6 = '225px';
			Left7 = '150px';
			Left8 = '75px';
			Top1 = '125px';
			Top2 = '0';
			Top3 = '0';
			Top4 = '0';
			Top5 = '0';
			Top6 = '125px';
			Top7 = '125px';
			Top8 = '125px';
			rotate(moveBox, Left1, Left2, Left3, Left4, Left5, Left6, Left7, Left8, Top1, Top2, Top3, Top4, Top5, Top6, Top7, Top8);
			break;
		case (5):
			Left1 = '75px';
			Left2 = '0';
			Left3 = '0';
			Left4 = '75px';
			Left5 = '150px';
			Left6 = '225px';
			Left7 = '225px';
			Left8 = '150px';
			Top1 = '125px';
			Top2 = '125px';
			Top3 = '0';
			Top4 = '0';
			Top5 = '0';
			Top6 = '0';
			Top7 = '125px';
			Top8 = '125px';
			rotate(moveBox, Left1, Left2, Left3, Left4, Left5, Left6, Left7, Left8, Top1, Top2, Top3, Top4, Top5, Top6, Top7, Top8);
			break;
		case (6):
			Left1 = '150px';
			Left2 = '75px';
			Left3 = '0px';
			Left4 = '0';
			Left5 = '75px';
			Left6 = '150px';
			Left7 = '225px';
			Left8 = '225px';
			Top1 = '125px';
			Top2 = '125px';
			Top3 = '125px';
			Top4 = '0';
			Top5 = '0';
			Top6 = '0';
			Top7 = '0';
			Top8 = '125px';
			rotate(moveBox, Left1, Left2, Left3, Left4, Left5, Left6, Left7, Left8, Top1, Top2, Top3, Top4, Top5, Top6, Top7, Top8);
			break;
		case (7):
			Left1 = '225px';
			Left2 = '150px';
			Left3 = '75px';
			Left4 = '0';
			Left5 = '0';
			Left6 = '75px';
			Left7 = '150px';
			Left8 = '225px';
			Top1 = '125px';
			Top2 = '125px';
			Top3 = '125px';
			Top4 = '125px';
			Top5 = '0';
			Top6 = '0';
			Top7 = '0';
			Top8 = '0';
			rotate(moveBox, Left1, Left2, Left3, Left4, Left5, Left6, Left7, Left8, Top1, Top2, Top3, Top4, Top5, Top6, Top7, Top8);
			break;
	}
	}