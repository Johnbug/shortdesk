var child = require('child_process');
var fs = require('fs');
var execonfig;
fs.readFile('config.json',function(err,data){
	
	var str = data.toString();
	//console.log(typeof(str))
	execonfig = JSON.parse(str);
	//console.log(config);
	$("#modal").hide();
});

$(function(){
	$("#modal").html("加载配置中。。。");
	$("#input-control").focus().keydown(function(ev){
		if(ev.keyCode == 13) {
			//$("#modal").show();
			var short_cut = $(this).val(),exe_d,exe_o;
			exe_d = execonfig.default[short_cut];
			exe_o = execonfig.option[short_cut];
			if(exe_d)
			child.exec(exe_d,function(){
				$("#modal").hide();
			});
			else if(exe_o) {
				//console.log(exe_o);

				var s = child.execFile(exe_o,function(){
					console.log("33");
					//child.kill("SIGTERM");
					$("#modal").hide();
				});
				console.log(s);
			}
		}
	});	
});
