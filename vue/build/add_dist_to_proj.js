const fs = require("fs"),
      rm = require("rimraf"),
      ncp = require('ncp').ncp;

let base_dir = "./../../webapp/";

let html = "@model webapp.Models.Model1\n" + fs.readFileSync("./../index.html", "utf8");
fs.writeFileSync( base_dir + "Views/RazorView.cshtml", html, "utf8");

let static_dir = base_dir + "Assets/static/";

if(fs.existsSync(static_dir)){
    rm(static_dir);
}

ncp.limit = 16;

ncp("./../dist/static/",static_dir, function (err) {
    if (err) {
        return console.error(err);
    }
    console.log('done!');
});