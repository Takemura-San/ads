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

var box_div = document.createElement("div");
box_div.style.backgroundColor = "#FFB6C1";
box_div.style.position = "relative";
box_div.style.fontSize = "10pt";
box_div.style.fontFamily = "sans-serif";
box_div.style.overflow = "hidden";
box_div.style.width = "290px";
box_div.style.height = "250px";
box_div.className = "box";
document.body.appendChild(box_div);

var default_img = document.createElement("img");
default_img.src = "https://cnobi.jp/v1/dragon/dyn-banner/21970min.PNG";
default_img.className = "default_image";
box_div.appendChild(default_img);

var texts_div = document.createElement("div");
texts_div.style.position = "absolute";
texts_div.style.zIndex = "1";
texts_div.style.width = "270px";
texts_div.style.height = "170px";
texts_div.style.top = "60px";
texts_div.style.left = "30px";
box_div.appendChild(texts_div);

var list_ul = document.createElement("ul");
list_ul.style.padding = "0";
texts_div.appendChild(list_ul);

var page_nume = 1;

var pagenum_p = document.createElement("p");
pagenum_p.style.position = "absolute";
pagenum_p.style.opacity = "0";
pagenum_p.style.fontSize = "17px";
pagenum_p.style.left = "110px";
pagenum_p.style.bottom = "0px";
texts_div.appendChild(pagenum_p);

var class_num = 0;

ninja_ad_items.forEach((item) => {
  var list_a = document.createElement("a");
  list_a.className = "lists" + class_num;
  list_a.style.padding = "0px 40px 0px 5px";
  list_a.style.width = "260px";
  list_a.style.height = "36px";
  list_a.style.padding = "0px 40px 0px 5px";
  list_a.style.textDecoration = "none";
  list_a.style.color = "#1a0dab";
  list_a.style.opacity = "0";
  list_a.style.fontSize = "12px";
  list_a.style.display = "none";
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

  if (class_num === 2 || class_num === 5 || class_num === 8)
    list_a.style.textDecoration = "underline";

  list_a.href = unescapeHTML(item.url);
  list_a.target = "_blank";
  list_a.innerHTML = item.title;
  list_ul.appendChild(list_a);

  class_num++;
});

function sleep(waitSec, callbackFunc) {
  var spanedSec = 0;

  var id = setInterval(function () {
    spanedSec++;

    if (spanedSec >= waitSec) {
      clearInterval(id);

      if (callbackFunc) callbackFunc();
    }
  }, 2000);
}
var image = document.getElementsByClassName("default_image").item(0);
var count = 0;
var img_id = 0;
var img_bool = true;

const setTimer = function () {
  console.log(img_id);
  image.src = "https://cnobi.jp/v1/dragon/dyn-banner/2197" + img_id + "min.PNG";
  if (img_id <= 7 && img_bool) {
    img_id++;
    if (img_id === 8) img_bool = false;
  } else if (img_id <= 8 && !img_bool) {
    img_id--;
    if (img_id === 0) img_bool = true;
  }

  var current_img = image.getAttribute("src");
  console.log(current_img);
  if (current_img === "https://cnobi.jp/v1/dragon/dyn-banner/21972min.PNG") {
    for (let i = count; i < count + 3; i++) {
      var delete_var = document.getElementsByClassName("lists" + i).item(0);
      delete_var.style.opacity = "0";
      delete_var.style.display = "none";
    }
    count < 6 ? (count += 3) : (count = 0);

    var delete_pagenum = document.getElementsByTagName("p").item(0);
    delete_pagenum.style.opacity = "0";
    delete_pagenum.style.display = "none";

    switch (page_nume) {
      case 1:
        page_nume = 3;
        break;
      case 3:
        page_nume = 2;
        break;
      case 2:
        page_nume = 1;
        break;
    }
  }

  if (current_img === "https://cnobi.jp/v1/dragon/dyn-banner/21970min.PNG") {
    img_id = 0;

    if (count > 7) count = 0;

    for (let i = count; i < count + 3; i++) {
      var add_var = document.getElementsByClassName("lists" + i).item(0);
      add_var.style.opacity = "1";
      add_var.style.display = "inline-block";
    }

    var add_pagenum = document.getElementsByTagName("p").item(0);
    add_pagenum.style.opacity = "1";
    add_pagenum.style.display = "inline-block";
    add_pagenum.innerHTML = page_nume + "/3";

    sleep(1, function () {
    return (img_id = 1);
    });
    // clearInterval(setTimer, 2000);
  }
};

setInterval(setTimer, 60);
