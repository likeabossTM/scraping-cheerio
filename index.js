var cheerio = require('cheerio');
var request = require('request');
var fs = require('fs');
var mongoose = require('mongoose');


var busqueda = process.argv[2];
var primeraParte = 'https://duckduckgo.com/?q=';
var Final = '&t=hf&ia=web';


function UrlConstructor(P, S, F) {
	// body...
	this.P = P;
	this.S = S;
	this.F = F;
	this.urlLista = function () {
		// body...
		return this.P + this.S + this.F;
	}
}

var url = new UrlConstructor(primeraParte, busqueda, Final);



//console.log(url.urlLista());




//'https://duckduckgo.com/?q='+'hola+a+todos'+'&t=hf&ia=web'


//mongoose.connect('mongodb://localhost/scraping-adshort-searches')

request({url: url.urlLista(), encoding: 'utf-8'}, function (err, resp, body) {

	if (!err && resp.statusCode ==200){
		var $ = cheerio.load(body);
		$('title').each(function () {
			var titulo = $(this).text();
			console.log(titulo)
		});
		
		
		
	} 
	
})

console.log('aqui empieza el juego');