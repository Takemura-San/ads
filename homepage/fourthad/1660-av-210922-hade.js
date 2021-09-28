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

var title_zoom = function (modify) {
	modify.animate(
		[
			{
				opacity: '0', filter: 'blur(20px)', transform: 'scale(12)'
			},
			{
				opacity: '1', filter: 'blur(0)', transform: 'scale(1)'
			},
			{
				opacity: '1', filter: 'blur(0)', transform: 'scale(.9)'
			},
			{
				opacity: '0', filter: 'blur(10px)', transform: 'scale(.1)'
			},
			{
				opacity: '0'
			}
		], {
		duration: 7200,
		iterations: 1
	}
	);
}
document.body.style.width = "160";
document.body.style.height = "600";
var box_div = document.createElement("div");
box_div.style.position = "absolute";
box_div.style.width = "160px";
box_div.style.height = "600px";
box_div.style.backgroundColor = "black";
box_div.style.display = "block";
box_div.style.boxSizing = "content-box";
box_div.style.margin = "0 auto";
box_div.style.overflow = "hidden";
box_div.style.border = "1px solid rgb(170, 169, 169)";
document.body.appendChild(box_div);

var list_title = document.createElement("h2");
list_title.style.writingMode = "vertical-rl";
list_title.className = "recommend"
list_title.style.opacity = "0";
list_title.style.display = "none";
list_title.style.margin= "auto";
list_title.style.marginTop = "20%";
list_title.style.fontSize = "90px";
list_title.style.fontWeight = "400";
list_title.style.lineHeight = "21px";
list_title.style.textAlign = "center";
list_title.style.color = "#FFF";
list_title.style.weight = "bold";
list_title.style.textShadow = "\
0 0 7px #fff,\
0 0 10px #fff,\
0 0 21px #fff,\
0 0 42px #5190FF,\
0 0 82px #5190FF,\
0 0 92px #5190FF,\
0 0 102px #5190FF,\
0 0 151px #5190FF";
list_title.innerHTML = "おすすめ作品";
list_title.type = 'text/css';
box_div.appendChild(list_title);
var columns_div = document.createElement("div");
columns_div.className = "animated_elements";
columns_div.style.width = "160px";
columns_div.style.height = "600px";
columns_div.style.display = "flex";
columns_div.style.flexDirection = "column";
columns_div.style.flexWrap = "wrap";
box_div.appendChild(columns_div);
var top_div = document.createElement("div");
top_div.className = 'top_half';
top_div.style.width = "160px";
top_div.style.height = "400px";
top_div.style.writingMode = "vertical-rl";
columns_div.appendChild(top_div);
var bottom_div = document.createElement("div");
bottom_div.className = 'bottom_half';
bottom_div.style.width = "160px";
bottom_div.style.height = "200px";
bottom_div.style.writingMode = "vertical-rl";
columns_div.appendChild(bottom_div);
var last_div = document.createElement("div");
last_div.className = 'last';
last_div.style.opacity = '0';
last_div.style.display = 'none';
last_div.style.flexWrap = 'nowrap';
columns_div.appendChild(last_div);
var class_num = 0;
ninja_ad_items.forEach((item) => {
	var list_a = document.createElement("a");
	list_a.className = "lists" + class_num;
	list_a.style.height = "400px";
	list_a.style.textDecoration = "none";
	list_a.href = unescapeHTML(item.url);
	list_a.target = "_blank";
	top_div.appendChild(list_a);

	var image_url = document.createElement('a');
	image_url.target = '_blank';
	image_url.href = unescapeHTML(item.url);
	bottom_div.appendChild(image_url);


	var image = document.createElement('img');
	image.src = item.image;
	image.style.width = "80px";
	image.style.marginTop = "30px";
	image.style.opacity = "0";
	image.className = "image" + class_num;
	image_url.appendChild(image);

	var list_div = document.createElement("div");
	list_div.className = "text-box" + class_num;
	list_div.style.textOrientation = "upright";
	list_div.style.width = "80px";
	list_div.style.display = "flex";
	list_div.style.whiteSpace = "nowrap";
	list_div.style.alightItems = "center";
	list_div.style.opacity = "0";
	list_a.appendChild(list_div);
	var text_p = document.createElement("p");
	text_p.className = "title" + class_num;
	text_p.style.marginTop = "10px";
	text_p.style.marginBottom = "5px";
	text_p.style.marginRight = "5px";
	text_p.style.marginLeft = "0px";
	text_p.style.fontSize = "45px";
	text_p.style.textOrientation = "upright";
	text_p.style.color = "white";
	text_p.style.maxHeight = "290px";
	text_p.style.overflowWrap = "break-word";
	text_p.style.textDecoration = "none";
	text_p.style.textOverflow = "ellipsis";
	text_p.style.animation = "switch 32s linear infinite";
	text_p.innerHTML = item.title;
	list_div.appendChild(text_p);

	var last_each_div = document.createElement('div');
	last_each_div.style.marginBottom = '2px';
	last_div.appendChild(last_each_div);

	var last_url = document.createElement('a');
	last_url.style.marginTop = '110px';
	last_url.style.marginLeft = 'auto';
	last_url.style.marginRight = 'auto';
	last_url.style.textAlign = 'center';
	last_url.style.width = '75px';
	last_url.style.position = 'absolute';
	last_url.style.textDecorationColor= '#DCDCDC';
	last_url.target = '_blank';
	last_url.href = unescapeHTML(item.url);
	last_each_div.appendChild(last_url);

	var last_title = document.createElement('p');
	last_title.style.fontSize = '10px';
	last_title.style.fontFamily = 'serif';
	last_title.style.color = 'white';
	last_title.style.display = '-webkit-box';
	last_title.style.webkitBoxOrient = 'vertical';
	last_title.style.webkitLineClamp = '5';
	last_title.style.overflow = 'hidden';
	last_title.innerHTML = item.title;
	last_url.appendChild(last_title);

	var last_imgurl = document.createElement('a');
	last_imgurl.target = '_blank'
	last_imgurl.href = unescapeHTML(item.url);
	last_each_div.appendChild(last_imgurl);

	var last_img = document.createElement('img');
	last_img.style.width = '80px';
	last_img.style.marginTop = '5px';
	last_img.style.marginBottom = '83px';
	last_img.src = item.image;
	last_imgurl.appendChild(last_img);
	class_num++;
});
document.getElementsByClassName("recommend").item(0).animate(
	[
		{
			textShadow:
				'0 0 7px #fff,\
			0 0 10px #fff,\
			0 0 21px #fff,\
			0 0 42px #5190FF,\
			0 0 82px #5190FF,\
			0 0 92px #5190FF,\
			0 0 102px #5190FF,\
			0 0 151px #5190FF'
		},
		{
			textShadow:
				'0 0 7px #fff,\
			0 0 10px #fff,\
			0 0 21px #fff,\
			0 0 42px black,\
			0 0 82px black,\
			0 0 92px black,\
			0 0 102px black,\
			0 0 151px black'
		}
	], {
	duration: 1500,
	iterations: Infinity
}
);
let state = 0;
const titles =
	[
		document.getElementsByClassName("text-box0").item(0),
		document.getElementsByClassName("text-box1").item(0),
		document.getElementsByClassName("text-box2").item(0),
		document.getElementsByClassName("text-box3").item(0),
		document.getElementsByClassName("text-box4").item(0),
		document.getElementsByClassName("text-box5").item(0),
	];
const images =
	[
		document.getElementsByClassName('image0').item(0),
		document.getElementsByClassName('image1').item(0),
		document.getElementsByClassName('image2').item(0),
		document.getElementsByClassName('image3').item(0),
		document.getElementsByClassName('image4').item(0),
		document.getElementsByClassName('image5').item(0),
	];
const titles_setting =
	[
		document.getElementsByClassName("title0").item(0),
		document.getElementsByClassName("title1").item(0),
		document.getElementsByClassName("title2").item(0),
		document.getElementsByClassName("title3").item(0),
		document.getElementsByClassName("title4").item(0),
		document.getElementsByClassName("title5").item(0),
	]
var animated = document.getElementsByClassName('animated_elements').item(0);
var recommend = document.getElementsByTagName('h2').item(0);
var hide_titles = document.getElementsByClassName('top_half').item(0);
var hide_images = document.getElementsByClassName('bottom_half').item(0);
var show_last = document.getElementsByClassName('last').item(0);
const step = () => {
	switch (state) {
		case 0:
			hide_titles.style.opacity = '1';
			hide_titles.style.display = null;
			hide_images.style.opacity = '1';
			hide_images.style.display = null;
			show_last.style.opacity = '0';
			show_last.style.display = 'none';
			show_last.style.flexWrap = null;
			recommend.style.opacity = "1";
			recommend.style.display = null;
			animated.style.opacity = "0";
			animated.style.display = "none";
			setTimeout(step, 2000);
			state++;
			break;
		case 1:
			animated.style.opacity = "1";
			animated.style.display = "flex";
			recommend.style.opacity = "0";
			recommend.style.display = "none";
			for (let i = 4; i < 6; i++) {
				titles[i].style.opacity = "0";
				titles[i].style.display = "none";
				images[i].style.opacity = "0";
				images[i].style.display = "none";
			}
			for (let i = 0; i < 2; i++) {
				titles[i].style.opacity = "1";
				titles[i].style.display = "flex";
				images[i].style.opacity = "1";
				images[i].style.display = "flex";
				title_zoom(titles[i]);
				title_zoom(images[i]);
			}
			setTimeout(step, 5000);
			state++;
			break;
		case 2:
			for (let i = 0; i < 2; i++) {
				titles[i].style.opacity = "0";
				titles[i].style.display = "none";
				images[i].style.opacity = "0";
				images[i].style.display = "none";
			}
			for (let i = 2; i < 4; i++) {
				titles[i].style.opacity = "1";
				titles[i].style.display = "flex";
				images[i].style.opacity = "0";
				images[i].style.display = "flex";
				title_zoom(titles[i]);
				title_zoom(images[i]);
			}
			setTimeout(step, 5000);
			state++;
			break;
		case 3:
			for (let i = 2; i < 4; i++) {
				titles[i].style.opacity = "0";
				titles[i].style.display = "none";
				images[i].style.opacity = "0";
				images[i].style.display = "none";
			}
			for (let i = 4; i < 6; i++) {
				titles[i].style.opacity = "1";
				titles[i].style.display = "flex";
				images[i].style.opacity = "1";
				images[i].style.display = "flex";
				title_zoom(titles[i]);
				title_zoom(images[i]);
			}
			setTimeout(step, 6000);
			state++;
			break;
		case 4:
			hide_titles.style.opacity = '0';
			hide_titles.style.display = 'none';
			hide_images.style.opacity = '0';
			hide_images.style.display = 'none';
			show_last.style.opacity = '1';
			show_last.style.display = 'flex';
			show_last.style.flexWrap = 'wrap';
			setTimeout(step, 10000);
			state++;
			break;
	}
	if (state > 4) {
		state = 0;
	}
};
setTimeout(step, 1000);