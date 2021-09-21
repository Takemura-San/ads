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
default_img.src = "https://cnobi.jp/v1/dragon/dyn-banner/21971min.PNG";
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
pagenum_p.innerHTML = "1/3";
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

let state = 1;
let pagenum = 1;
var count = 0;

var image = document.getElementsByClassName("default_image").item(0);
var modi_pagenum = document.getElementsByTagName("p").item(0);

const step = () => {
  switch (state) {
    case 1:
      image.src = "https://cnobi.jp/v1/dragon/dyn-banner/21971min.PNG";
      modi_pagenum.style.opacity = "1";
      modi_pagenum.style.display = "inline-block";
      modi_pagenum.innerHTML = pagenum + "/3";

      if (count > 7) count = 0;

      for (let i = count; i < count + 3; i++) {
        var add_var = document.getElementsByClassName("lists" + i).item(0);
        add_var.style.opacity = "1";
        add_var.style.display = "inline-block";
      }

      setTimeout(step, 4500) ;
      state++;
      break;

    case 2:
      image.src = "https://cnobi.jp/v1/dragon/dyn-banner/21972min.PNG";
      modi_pagenum.style.opacity = "0";
      modi_pagenum.style.display = "none";
      for (let i = count; i < count + 3; i++) {
        var delete_var = document.getElementsByClassName("lists" + i).item(0);
        delete_var.style.opacity = "0";
        delete_var.style.display = "none";
      }
      count < 6 ? (count += 3) : (count = 0);
      setTimeout(step, 60) ;
      state++;
      pagenum++;
      break;

    case 3:
      image.src = "https://cnobi.jp/v1/dragon/dyn-banner/21973min.PNG";
      setTimeout(step, 60) ;
      state++;
      break;

    case 4:
      image.src = "https://cnobi.jp/v1/dragon/dyn-banner/21974min.PNG";
      setTimeout(step, 60) ;
      state++;
      break;

    case 5:
      image.src = "https://cnobi.jp/v1/dragon/dyn-banner/21975min.PNG";
      setTimeout(step, 60) ;
      state++;
      break;

    case 6:
      image.src = "https://cnobi.jp/v1/dragon/dyn-banner/21976min.PNG";
      setTimeout(step, 60) ;
      state++;
      break;

    case 7:
      image.src = "https://cnobi.jp/v1/dragon/dyn-banner/21977min.PNG";
      setTimeout(step, 60) ;
      state++;
      break;

    case 8:
      image.src = "https://cnobi.jp/v1/dragon/dyn-banner/21978min.PNG";
      setTimeout(step, 60);
      state++;
      break;

    case 9:
      image.src = "https://cnobi.jp/v1/dragon/dyn-banner/21977min.PNG";
      setTimeout(step, 60) ;
      state++;
      break;

    case 10:
      image.src = "https://cnobi.jp/v1/dragon/dyn-banner/21976min.PNG";
      setTimeout(step, 60) ;
      state++;
      break;

    case 11:
      image.src = "https://cnobi.jp/v1/dragon/dyn-banner/21975min.PNG";
      setTimeout(step, 60) ;
      state++;
      break;

    case 12:
      image.src = "https://cnobi.jp/v1/dragon/dyn-banner/21974min.PNG";
      setTimeout(step, 60) ;
      state++;
      break;

    case 13:
      image.src = "https://cnobi.jp/v1/dragon/dyn-banner/21973min.PNG";
      setTimeout(step, 60) ;
      state++;
      break;

    case 14:
      image.src = "https://cnobi.jp/v1/dragon/dyn-banner/21972min.PNG";
      setTimeout(step, 60) ;
      state++;
      break;
  }

  if (state === 15) {
    state = 1;
  }
  if (pagenum === 3) {
    pagenum = 1;
  }
};
setTimeout(step, 1000);
