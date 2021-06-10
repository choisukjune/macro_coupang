//-------------------------------------------------------;
var fileNm = "js/cp.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//-------------------------------------------------------;
(function(){
//-------------------------------------------------------;
// REQUIRE;
//-------------------------------------------------------;

var fs = require( "fs" );
var execSync = require('child_process').execSync;
var iconv = require( "iconv-lite" );
var spawn = require('child_process').spawn;
var https = require('https');
var querystring = require('querystring');

//-------------------------------------------------------;
// VARIABLE;
//-------------------------------------------------------;

var ROOT_PATH = process.cwd();

var CP_COMMAND = {};
	CP_COMMAND.MONGO = "..\\Binary\\Mongodb\\mongodb-win32-x86_64-windows-4.4.6\\bin\\mongo";

	//CP_COMMAND.MONGO = "mongo";

var DBJS_DIRECTORY_PATH = ROOT_PATH + "/dbjs/";
var _tDbjs_PATH = ROOT_PATH + "/tdbjs/";

//-------------------------------------------------------;
// FUNCTION;
//-------------------------------------------------------;
//-------------------------;
//-------------------------;
//-------------------------;
//-------------------------;
//-------------------------;

/*
 * @function
 * @param {String} dbjsNm
 * @param {boolean} bResult
 * @return {String} r
 */
var exec_query_DB = function( dbjsNm, bResult ){

	var DBJS_NM = dbjsNm;
	var FILE_PATH = ROOT_PATH + "/dbjs/" + DBJS_NM;

	var _t_command = CP_COMMAND.MONGO + " --username <!=ID=!> --password <!=PWD=!> --authenticationDatabase admin --host <!=HOST=!> --port <!=PORT=!> admin \"<!=FILE_PATH=!>\"";
	if( bResult ) _t_command = _t_command + " > " + dbjsNm + "__" + Date.now() + ".result";
	
	var command = _t_command.replace( "<!=ID=!>", global.CONST.MongoDB.OPTIONS.self.ID )
		.replace( "<!=PWD=!>", global.CONST.MongoDB.OPTIONS.self.PWD )
		.replace( "<!=HOST=!>", global.CONST.MongoDB.OPTIONS.self.HOST )
		.replace( "<!=PORT=!>", global.CONST.MongoDB.OPTIONS.self.PORT )
		.replace( "<!=FILE_PATH=!>", FILE_PATH );
	console.log( command )
	var r = cp.execSync( command ).toString();
		r = deleteLines( r , 4 )
	return r;
};

//-------------------------;
//-------------------------;
//-------------------------;
//-------------------------;
//-------------------------;
/*
 * @function
 * @param {String} str
 * @param {Number} n
 * @return {String} str
 */
var deleteLines = function( str, n ){
	var i = 0,iLen = n,io;
	for(;i<iLen;++i){ str = str.slice(str.indexOf("\n") + 1, str.length ); }
	//str = str.replace( /\t/g, '' );
	//str = str.replace( /\r\n/g, '' );
	return str;
};
//-------------------------;
//-------------------------;
//-------------------------;
//-------------------------;
//-------------------------;
/*
 * @function
 * @param {String} url
 * @return {Object} o
 */
var paramToObject = function( url ){
	
	var r =  url.split("?")[ 1 ];
	var a = r.split("&");
	var o = {};
	var i = 0,iLen = a.length,io;
	
	for(;i<iLen;++i){
		io = a[ i ];
		var _ta = io.split( "=" );
		o[ _ta[0] ] = _ta[ 1 ];
	}
	console.log( o )
	return o;
};
//-------------------------;
//-------------------------;
//-------------------------;
//-------------------------;
//-------------------------;
/*
 * @function
 * @return {Number} r
 */
var check_airplane_mode = function(){	
	var command = "adb shell settings get global airplane_mode_on";
	try
	{
		var stdout = execSync('..\\Binary\\platform-tools\\' + command );
		console.log( iconv.decode( stdout, "euc-kr") );
		return iconv.decode( stdout, "euc-kr") * 1;	
	}
	catch( er )
	{
		return 1;
	}
	

}

//-------------------------;
//-------------------------;
//-------------------------;
//-------------------------;
//-------------------------;
/*
 * @function
 * @param {Function} cbFunction
 */
var check_my_ip = function(cbFunction){
	//D:\workspace_macro\Binary\curl\bin\curl "https://extreme-ip-lookup.com/json/"
	
	var command = `check_my_ip.bat`;
	var bat = spawn('cmd.exe', ['/c', command ]);
	bat.stdout.on('data', function(data){ 
		console.log( iconv.decode( data, "euc-kr") ); 
		cbFunction( iconv.decode( data, "euc-kr")  );
	});
	bat.stderr.on('data', function(data){ 
		console.log( iconv.decode( data, "euc-kr") )
	});
	bat.on('exit', function(code){
		if( code == 6 )
		{
			console.log(`Child exited with code ${code}`);
			console.log("re Start!") 
			FN00();
		}
		else if( code == 28 )
		{
			console.log(`Child exited with code ${code}`);
			console.log("re Start! - Time out!") 
			FN00();
		}
		else
		{
			console.log(`Child exited with code ${code}`); 
			console.log(`정상종료`); 
		}
		
	});

}

//-------------------------;
//-------------------------;
//-------------------------;
//-------------------------;
//-------------------------;
/*
 * @function
 * 
 */
var FN00 = function(){

	var isAirplaneMode = check_airplane_mode();
	if( isAirplaneMode )
	{
		console.log("airplaneMode Status : Off")
		console.log("airplaneMode : On")
		var command = "airplaneModeOn.bat";

		var stdout = execSync( command );
		console.log( iconv.decode( stdout, "euc-kr") );
		setTimeout(function(){
			check_my_ip(function(){
				var command = "run_coupang.ahk";
				var stdout = execSync( command );
				console.log( iconv.decode( stdout, "euc-kr") );
			});				
		},20000)
	}
	else
	{
		console.log("airplaneMode Status : On")
		console.log("airplaneMode : Refresh")
		
		var command = "airplaneModeOn.bat";
		var stdout = execSync( command );
		console.log( iconv.decode( stdout, "euc-kr") );
		
		var command = "airplaneModeOn.bat";
		var stdout = execSync( command );
		console.log( iconv.decode( stdout, "euc-kr") );
		
		setTimeout(function(){
			check_my_ip(function(){
				var command = "run_coupang.ahk";
				var stdout = execSync( command );
				console.log( iconv.decode( stdout, "euc-kr") );
			});		
		},20000)
		
	}
}

var dateFormat_YYMMDDHHMMSS = function( date ){
	date = date || new Date();

	var YYYY = date.getFullYear();
	var MM = pad( date.getMonth() + 1, 2 );
	var DD = pad( date.getDate(), 2 );
	var H = pad( date.getHours(), 2 );
	var M = pad( date.getMinutes(), 2 );
	var S = pad( date.getSeconds(), 2 );

	return YYYY + MM + DD + H +  M + S;
};

var dateFormat_YYMMDD = function( date ){
	date = date || new Date();

	var YYYY = date.getFullYear();
	var MM = pad( date.getMonth() + 1, 2 );
	var DD = pad( date.getDate(), 2 );
//	var H = pad( date.getHours(), 2 );
//	var M = pad( date.getMinutes(), 2 );
//	var S = pad( date.getSeconds(), 2 );

	return YYYY + MM + DD;// + H +  M + S;
};

var pad = function(n, width){
	n = n + '';
	return n.length >= width ? n : new Array(width - n.length + 1).join('0') + n;
}

//-------------------------------------------------------;
// ROUTER;
//-------------------------------------------------------;
//-------------------------;
//-------------------------;
//-------------------------;
//-------------------------;
//-------------------------;
	/**
	 * 쿼리파일을 실행하는 라우터
	 * @function
	 * @param {http.ClientRequest} req
	 * <code>
		{

		}
	* </code>
	*
	* @param {http.ClientResponse} res
	* <code>
		{

		}
	* </code>
	*
	* @example
	* <code>
		http://localhost:8888/find?brand=varihope&page=1
	* </code>
	*/
	global.server.addRouter("/myip",function( req, res ){
		
		var routerNm = req.url.split("?")[0];
		//var paramsO = paramToObject( req.url );
		var _tdbjs_nm = "insert_ip";

		res.statusCode = 200;
		res.setHeader( "Access-Control-Allow-Headers", "Content-Type" );
		res.setHeader( "Access-Control-Allow-Origin", "*" );
		res.setHeader( "Access-Control-Allow-Methods", "OPTIONS,POST,GET" );
		console.log( _tDbjs_PATH + "/" + _tdbjs_nm + ".tdbjs" ); 
		
		check_my_ip(function(d){
			var r = JSON.parse( d );
			
			try
			{
				var _tQuery = fs.readFileSync( _tDbjs_PATH + "/" + _tdbjs_nm + ".tdbjs" ).toString();
			}
			catch( err )
			{
				console.log( routerNm + " - DBJS File Not Found! - " + err );
				res.end("{ sucess : 0, data : null }");
			}

			var query = _tQuery.replace( "<!=DATETIME=!>", dateFormat_YYMMDDHHMMSS() )
			.replace( "<!=DATE=!>", dateFormat_YYMMDD() )
			.replace( "<!=INFO=!>", "{ ip : \"" + r.query + "\" }" )

			var dbjs_nm = _tdbjs_nm + ".dbjs";

			var FILE_PATH = DBJS_DIRECTORY_PATH + dbjs_nm;
			
			console.log( FILE_PATH )

			fs.writeFileSync( DBJS_DIRECTORY_PATH + dbjs_nm , query, { flag : "w" } );
			var _r = exec_query_DB( dbjs_nm )


			res.end( JSON.stringify( r, null, 4 ) )		
//			res.end( r.query )		
		})
		

	});

})();

//-------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//-------------------------------------------------------;
