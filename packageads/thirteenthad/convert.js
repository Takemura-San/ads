const fs = require('fs');
let file = process.argv[2];
console.log("-----------");
console.log(file);
let text = fs.readFileSync(file, 'utf-8');
let ps = text.split("\n");
let data = "";
ps.forEach(function (item) {
    item = item.replace(/\\/g, "\\\\")
        .replace(/'/g, "\\'")
        .replace(/< *\/ *script *>/g, "</scr' + 'ipt>")
        .replace(/\{ *@ninja_ad_items\[([0-9]|[1-9][0-9])\]\.([a-zA-Z_]+) *\}/g, "' + ninja_ad_items[$1].$2 + '");
    let line = "document.write('" + item + "'+\"\\n\");";
    console.log(line);
    data = data + line + "\n";
});
fs.writeFileSync(file + ".js", data);
