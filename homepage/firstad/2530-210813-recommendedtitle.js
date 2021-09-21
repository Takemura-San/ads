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

document.body.style.width = "300px";
document.body.style.height = "250px";

var box_div = document.createElement("div");
box_div.style.position = "absolute";
box_div.style.width = "298px";
box_div.style.height = "248px";
box_div.style.display = "block";
box_div.style.boxSizing = "content-box";
box_div.style.margin = "0 auto";
box_div.style.overflow = "hidden";
box_div.style.border = "1px solid rgb(170, 169, 169)";
document.body.appendChild(box_div);

var title_a = document.createElement("a");
title_a.style.textDecoration = "none";
title_a.target = "_blank";
title_a.href = ninja_ad_items[0].url;
box_div.appendChild(title_a);

var list_title = document.createElement("h2");
list_title.style.boxSizing = "border-box";
list_title.style.display = "block";
list_title.style.paddingBottom = "8px";
list_title.style.marginTop = "0";
list_title.style.paddingLeft = "0px";
list_title.style.paddingRight = "10px";
list_title.style.paddingTop = "8px";
list_title.style.position = "relative";
list_title.style.fontSize = "14px";
list_title.style.fontStretch = "100%";
list_title.style.fontWeight = "600";
list_title.style.lineHeight = "21px";
list_title.style.textAlign = "center";
list_title.style.color = "rgb(51, 51, 51)";
list_title.style.backgroundColor = "rgb(223, 223, 223)";
list_title.innerHTML = "今話題のおすすめ作品";
title_a.appendChild(list_title);

var list_div = document.createElement("div");
list_div.style.boxSizing = "border-box";
list_div.style.display = "block";
list_div.style.width = "300px";
list_div.style.height = "250px";
list_div.style.color = "rgb(51, 51, 51)";
list_div.style.backgroundColor = "rgb(255, 255, 255)";
list_div.style.borderBottomColor = "rgb(238, 238, 238)";
list_div.style.borderBottomStyle = "solid";
list_div.style.borderBottomWidth = "1px";
list_div.style.borderImageRepeat = "stretch";
list_div.style.borderImageSlice = "100%";
list_div.style.borderImageWidth = "1";
list_div.style.borderLeftColor = "rgb(238, 238, 238)";
list_div.style.borderLeftStyle = "solid";
list_div.style.borderLeftWidth = "1px";
list_div.style.borderRightColor = "rgb(51, 51, 51)";
list_title.appendChild(list_div);

var nav = document.createElement("nav");
nav.style.width = "100%";
nav.style.backgroundRepeat = "noRepeat";
nav.style.borderStyle = "solid";
nav.style.borderWidth = "0";
nav.style.color = "#333";
nav.style.borderStyle = "solid";
list_div.appendChild(nav);

var ul = document.createElement("ul");
ul.style.padding = "0";
nav.appendChild(ul);

ninja_ad_items.forEach((item) => {
  var list_li = document.createElement("li");
  list_li.style.boxSizing = "border-box";
  list_li.style.height = "20px";
  list_li.style.display = "list-item";
  list_li.style.fontSize = "14px";
  list_li.style.fontStretch = "100%";
  list_li.style.fontWeight = "300";
  list_li.style.lineHeight = "21px";
  list_li.style.listStyleType = "none";
  list_li.style.marging = "0";
  list_li.style.padding = "0";
  list_li.style.color = "rgb(51, 51, 51)";
  list_li.style.backgroundColor = "rgb(255, 255, 255)";
  list_li.style.borderBottomColor = "rgb(238, 238, 238)";
  list_li.style.borderBottomStyle = "solid";
  list_li.style.borderBottomWidth = "1px";
  list_li.style.borderLeftStyle = "solid";
  list_li.style.borderLeftWidth = "0px";
  list_li.style.borderRightStyle = "solid";
  list_li.style.borderRightWidth = "0px";
  list_li.style.borderTopStyle = "solid";
  list_li.style.borderTopWidth = "0px";
  list_li.style.listStylePosition = "outside";
  list_li.style.textAlign = "left";
  ul.appendChild(list_li);

  var list_h3 = document.createElement("h3");
  list_h3.style.boxSizing = "border-box";
  list_h3.style.fontSize = "14px";
  list_h3.style.fontWeight = "300";
  list_h3.style.lineHeight = "21px";
  list_h3.style.textAligh = "left";
  list_h3.style.color = "rgb(51, 51, 51)";
  list_h3.style.borderBottomStyle = "solid";
  list_h3.style.borderBottomWidth = "0px";
  list_h3.style.borderLeftStyle = "solid";
  list_h3.style.borderLeftWidth = "0px";
  list_h3.style.borderRightStyle = "solid";
  list_h3.style.borderRightWidth = "0px";
  list_h3.style.borderTopStyle = "solid";
  list_h3.style.borderTopWidth = "0px";
  list_h3.style.listStylePosition = "outside";
  list_li.appendChild(list_h3);

  var list_a = document.createElement("a");
  list_a.style.padding = "0px 40px 0px 5px";
  list_a.style.width = "299px";
  list_a.style.height = "36px";
  list_a.style.padding = "0px 40px 0px 5px";
  list_a.style.textDecoration = "none";
  list_a.style.color = "#1a0dab";
  list_a.style.fontSize = "12px";
  list_a.style.display = "block";
  list_a.style.overflow = "hidden";
  list_a.style.textOverflow = "ellipsis";
  list_a.style.whiteSpace = "nowrap";

  list_a.addEventListener(
    "mouseover",
    () => {
      list_a.style.textDecoration = "underline";
    },
    false
  );

  list_a.addEventListener(
    "mouseleave",
    () => {
      list_a.style.textDecoration = "none";
    },
    false
  );

  list_a.href = item.url;
  list_a.target = "_blank";
  list_a.innerHTML = item.title;
  list_h3.appendChild(list_a);
});
