//----------------------------------------------------------------------------------------------------;
var fileNm = "Server/index.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;
//-------------------------------------------------------;
// REQUIRE;
//-------------------------------------------------------;

var cp = require( "child_process" );
var fs = require('fs');
var http = require('http');
var path = require('path');

//-------------------------------------------------------;
// VARIABLE;
//-------------------------------------------------------;
// 정리해야함 ---- 생각나는데로 하고있음.....;
//-------------------------;
//-------------------------;
//-------------------------;
//-------------------------;

global.server = {};
global.server.addRouter = function(a,b){ return global.ROUTER_LIST[ a ] = b; };

//-------------------------;
//-------------------------;
//-------------------------;
//-------------------------;
//-------------------------;

global.ROUTER_LIST = {};

//-------------------------;
//-------------------------;
//-------------------------;
//-------------------------;
//-------------------------;


global.CONST = {};
global.CONST.MongoDB = {};
global.CONST.MongoDB.OPTIONS = {
	"self" : { ID : "admin", PWD : "tjrwns2482", HOST : "localhost", PORT : 59320 }	
};

//-------------------------;
//-------------------------;
//-------------------------;
//-------------------------;

var CWD = global.process.cwd();
var server_port = 8889;

console.log( "============================================================" )
console.log( "============================================================" )

console.log( "host : localhost || "+ " port : " +  server_port )

console.log( "============================================================" )
console.log( "============================================================" )

var ROUTER_DIRECTORY_PATH = CWD + "/js/";

//router등록을 한다.
(function(){
	var ROUTER_FILE_LIST = fs.readdirSync( ROUTER_DIRECTORY_PATH );
	var i =0,iLen = ROUTER_FILE_LIST.length,io;
	for(;i<iLen;++i){
		//라우터를 등록한다;
		eval( fs.readFileSync( ROUTER_DIRECTORY_PATH + ROUTER_FILE_LIST[ i ] ).toString() );
	}
})();
//-------------------------;
//-------------------------;
//-------------------------;
//-------------------------;

//-------------------------------------------------------;
// LOGIC;
//-------------------------------------------------------;

global.server = http.createServer(function(req, res){

    req.on('error', function( err ){
        console.error(err);
        res.statusCode = 400;
        res.end('400: Bad Request');
        return;
    });

    res.on('error', function( err ){ console.error(err); });

	var routerNm = req.url//.replace(/\//,"");

	if (req.method == 'POST') {
        var jsonString = '';

        req.on('data', function (data) {
			debugger;
            jsonString += data;
        });

        req.on('end', function () {
			//console.log(JSON.parse(jsonString));
			debugger;
			res.statusCode = 200;
			global.ROUTER_LIST[ routerNm ]( req, res, JSON.parse(jsonString) );
        });
    }
	else
	{
		if( req.url == "/" )
		{
			res.end( JSON.stringify( fs.readdirSync( ROUTER_DIRECTORY_PATH ) ) );
		}
		else if( global.ROUTER_LIST[ routerNm ] )
		{
			res.statusCode = 200;
			global.ROUTER_LIST[ routerNm ]( req, res );
		}
		else
		{
			var filePath = '.' + req.url.split("?")[0];
			console.log( filePath );
			var extname = path.extname(filePath);
			
			var _oContentTypes = {
				'.html' : "text/html"
				, '.js' : 'text/javascript'
				, '.css' : 'text/css'
				, '.json' : 'application/json'
				, '.png' : 'image/png'
				, '.jpg' : 'image/jpg'
				, '.wav' : 'audio/wav'
			};
			var contentType = _oContentTypes[ extname ];
			
			fs.readFile(filePath, function(error, content) {
				if(error)
				{
					if(error.code == 'ENOENT')
					{
						res.statusCode = 404;
						res.end('404: File Not Found');
					}
					else
					{
						res.writeHead(500);
						res.end('Sorry, check with the site admin for error: '+error.code+' ..\n');
						res.end(); 
					}
				}
				else
				{
					
					res.writeHead(200, { 'Content-Type': contentType });
					res.end(content, 'utf-8');
				}
			});
		}

	}

	return;

}).listen( server_port );

//-------------------------;
//-------------------------;
//-------------------------;
//-------------------------;
//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;