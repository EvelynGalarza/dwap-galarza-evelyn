const hbs = require('hbs');

var fs = require('fs');
var obj = JSON.parse(fs.readFileSync('./data/datas.json', 'utf8'));

hbs.registerHelper('getProduct',function(){
    var pro = "";
    obj.forEach(Object => {
        pro += '<div class="contenedor">';
        pro += '<img src="'+ Object.img +'"class="t1" alt=""';
        pro += '<figcaption >$'+Object.p+ ' </figcaption>';
        pro += '<h4>'+Object.nombre+'</h4>';
        pro += '</div>';  
    });
    return new hbs.SafeString(pro);
});