document.write("<!DOCTYPE html>" + "\n");
document.write("" + "\n");
document.write("<html>" + "\n");
document.write("" + "\n");
document.write("<head>" + "\n");
document.write('	<meta charset="utf-8">' + "\n");
document.write("	<title>creative ad test</title>" + "\n");
document.write("	<style>" + "\n");
document.write("		.talk .talk_left p:before {" + "\n");
document.write("			content: '';" + "\n");
document.write("			position: absolute;" + "\n");
document.write("			top: 8px;" + "\n");
document.write("			left: -20px;" + "\n");
document.write("			border: 12px solid transparent;" + "\n");
document.write("			border-right: 12px solid white;" + "\n");
document.write("		}" + "\n");
document.write("" + "\n");
document.write("		.talk .talk_left p {" + "\n");
document.write("			display: inline-block;" + "\n");
document.write("			position: relative;" + "\n");
document.write("			background-color: white;" + "\n");
document.write("			border-radius: 10px;" + "\n");
document.write("			padding: 6px 10px 6px 10px;" + "\n");
document.write("			margin: 0 0 0 10px;" + "\n");
document.write("		}" + "\n");
document.write("" + "\n");
document.write("		a+a {" + "\n");
document.write("			margin-top: 10px;" + "\n");
document.write("			display: block;" + "\n");
document.write("		}" + "\n");
document.write("" + "\n");
document.write("		a>p {" + "\n");
document.write("			margin: 0;" + "\n");
document.write("			padding: 0;" + "\n");
document.write("		}" + "\n");
document.write("	</style>" + "\n");
document.write("</head>" + "\n");
document.write("" + "\n");
document.write("<body>" + "\n");
document.write("	<script>" + "\n");
document.write("" + "\n");
document.write("		function unescapeHTML(str) {" + "\n");
document.write('			var div = document.createElement("div");' + "\n");
document.write("			div.innerHTML = str" + "\n");
document.write('				.replace(/</g, "&lt;")' + "\n");
document.write('				.replace(/>/g, "&gt;")' + "\n");
document.write('				.replace(/ /g, "&nbsp;")' + "\n");
document.write('				.replace(/\\r/g, "&#13;")' + "\n");
document.write('				.replace(/\\n/g, "&#10;");' + "\n");
document.write("			return div.textContent || div.innerText;" + "\n");
document.write("		}" + "\n");
document.write("" + "\n");
document.write("" + "\n");
document.write("		var num = 0;" + "\n");
document.write("		var nummy = 0;" + "\n");
document.write("		var text_bubble = function () {" + "\n");
document.write(
  '			var add_anime = document.getElementsByClassName("anime" + num).item(0);' +
    "\n"
);
document.write(
  '			var delete_anime = document.getElementsByClassName("anime" + nummy).item(0);' +
    "\n"
);
document.write(
  '			var parent = document.getElementsByClassName("talk_left").item(0);' + "\n"
);
document.write(
  "			var existence = Array.from(parent.childNodes).filter((element, index, array) => { return array[index].style.opacity == 1; });" +
    "\n"
);
document.write("			if (existence.length < ninja_ad_items.length) {" + "\n");
document.write('				add_anime.style.opacity = "1";' + "\n");
document.write("				num++;" + "\n");
document.write("" + "\n");
document.write("				if (existence.length >= 4) {" + "\n");
document.write('					delete_anime.style.display = "none";' + "\n");
document.write("" + "\n");
document.write("					nummy++;" + "\n");
document.write("				}" + "\n");
document.write("			}" + "\n");
document.write("			else if (num == ninja_ad_items.length) {" + "\n");
document.write('				delete_anime.style.display = "none";' + "\n");
document.write(
  '				document.getElementsByClassName("anime" + (nummy + 1)).item(0).style.display = "none";' +
    "\n"
);
document.write(
  '				document.getElementsByClassName("anime" + (nummy + 2)).item(0).style.display = "none";' +
    "\n"
);
document.write("				var img = document.createElement('img');" + "\n");
document.write('				img.className = "stamp";' + "\n");
document.write("				img.src = './stamp.PNG';" + "\n");
document.write("				parent.appendChild(img);" + "\n");
document.write("" + "\n");
document.write("				num++" + "\n");
document.write("			}" + "\n");
document.write("			else if (num == (ninja_ad_items.length + 1)) {" + "\n");
document.write("" + "\n");
document.write("				for (let i = 0; i < ninja_ad_items.length; i++) {" + "\n");
document.write(
  '					var child_anime = document.getElementsByClassName("anime" + i).item(0);' +
    "\n"
);
document.write("					child_anime.style.display = null;" + "\n");
document.write('					child_anime.style.opacity = "0";' + "\n");
document.write("				};" + "\n");
document.write(
  '				document.getElementsByClassName("stamp").item(0).remove();' + "\n"
);
document.write("				num = 0;" + "\n");
document.write("				nummy = 0;" + "\n");
document.write("			}" + "\n");
document.write("			else { return };" + "\n");
document.write("		}" + "\n");
document.write("		var seti = 0;" + "\n");
document.write("" + "\n");
document.write('		var talk_div = document.createElement("div");' + "\n");
document.write('		talk_div.style.backgroundColor = "rgb(113, 147, 193)";' + "\n");
document.write('		talk_div.style.padding = "1em";' + "\n");
document.write('		talk_div.style.fontSize = "10pt";' + "\n");
document.write('		talk_div.style.fontFamily = "sans-serif";' + "\n");
document.write('		talk_div.style.overflow = "hidden";' + "\n");
document.write('		talk_div.style.width = "300px";' + "\n");
document.write('		talk_div.style.height = "250px";' + "\n");
document.write('		talk_div.className = "talk";' + "\n");
document.write("		document.body.appendChild(talk_div);" + "\n");
document.write("" + "\n");
document.write('		var talkLeft_div = document.createElement("div");' + "\n");
document.write('		talkLeft_div.className = "talk_left";' + "\n");
document.write("		talk_div.appendChild(talkLeft_div);" + "\n");
document.write("" + "\n");
document.write("		ninja_ad_items.forEach(item => {" + "\n");
document.write('			var right_a = document.createElement("a");' + "\n");
document.write('			right_a.style.opacity = "0";' + "\n");
document.write('			right_a.style.margin = "10px 0px 10px 0px";' + "\n");
document.write("			right_a, type = 'text/css';" + "\n");
document.write("			right_a.href = unescapeHTML(item.url);" + "\n");
document.write('			right_a.className = "bubbles";' + "\n");
document.write('			right_a.className = "anime" + seti;' + "\n");
document.write('			right_a.target = "_blank";' + "\n");
document.write("" + "\n");
document.write("			talkLeft_div.appendChild(right_a);" + "\n");
document.write("" + "\n");
document.write('			var right_bubble = document.createElement("p");' + "\n");
document.write("			right_a.appendChild(right_bubble);" + "\n");
document.write("" + "\n");
document.write('			var right_div = document.createElement("div");' + "\n");
document.write('			right_div.style.width = "250px";' + "\n");
document.write('			right_div.style.maringTop = "5px";' + "\n");
document.write('			right_div.style.maringBottom = "5px";' + "\n");
document.write('			right_div.style.overflow = "hidden";' + "\n");
document.write('			right_div.style.textOverflow = "ellipsis";' + "\n");
document.write('			right_div.style.whiteSpace = "nowrap";' + "\n");
document.write("" + "\n");
document.write('			var title = document.createElement("span");' + "\n");
document.write('			right_div.style.color = "black";' + "\n");
document.write("			right_div.innerHTML += item.title;" + "\n");
document.write("" + "\n");
document.write('			var br = document.createElement("br");' + "\n");
document.write("			right_div.appendChild(br);" + "\n");
document.write("" + "\n");
document.write('			var url = document.createElement("span");' + "\n");
document.write('			url.style.textDecoration = "underline";' + "\n");
document.write('			url.style.color = "rgb(6,69,173)";' + "\n");
document.write(
  "			const random_string = Math.random().toString(36).substring(2, 14);" + "\n"
);
document.write(
  '			var random_url = "https://book.dmm.com/detail/" + random_string + "/";' +
    "\n"
);
document.write("			url.innerHTML += random_url;" + "\n");
document.write("			right_div.appendChild(url);" + "\n");
document.write("" + "\n");
document.write("			right_bubble.appendChild(right_div);" + "\n");
document.write("" + "\n");
document.write("" + "\n");
document.write("			seti++;" + "\n");
document.write("" + "\n");
document.write("		});" + "\n");
document.write("		setInterval(text_bubble, 2000);" + "\n");
document.write("" + "\n");
document.write("	</scr" + "ipt>" + "\n");
document.write("" + "\n");
document.write("</body>" + "\n");
document.write("" + "\n");
document.write("</html>" + "\n");
