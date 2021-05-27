//-----------------------------------------------------------------;
// REQUIRES;
//-----------------------------------------------------------------;

var fs = require('fs');
var execSync = require('child_process').execSync;
var iconv = require( "iconv-lite" );
var spawn = require('child_process').spawn;
var http = require('http');
var https = require('https');
var querystring = require('querystring');

//-----------------------------------------------------------------;
// FUNCTION;
//-----------------------------------------------------------------;


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

var check_my_ip = function(cbFunction){
	//D:\workspace_macro\Binary\curl\bin\curl "https://extreme-ip-lookup.com/json/"
	var isAirplaneMode = check_airplane_mode();
	if( isAirplaneMode )
	{
		console.log("Did not connected!")
		check_my_ip();
	}
	else
	{

		var options = { hostname: 'localhost', port : 8889, path: '/myip' };

		var req = http.request(options, function(response){
		  	 var serverData = '';
			response.on('data', function (chunk) { serverData += chunk; });
			response.on('end', function () { 
				console.log("received server data:");
				console.log(serverData);
				cbFunction();
			});
		})
		req.end();
	}
};


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
				//FN00();
			});				
		},3000)
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
				//FN00();
			});		
		},3000)
		
	}
}

FN00();