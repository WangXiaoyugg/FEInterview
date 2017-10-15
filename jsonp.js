
var util = {};

util.indexOf = function (array,item){
	for(var i=0;i<array.length;i++){
		if(arr[i] === item) return i;
	}
	return -1;
}

//ajax
util.json = function (options){
	var opt = {
		url:'',
		type:'get',
		data:{},
		success:function(){},
		error:function(){},
	};

	util.extend(opt,options);

	if(opt.url){
		var xhr = XMLHttpRequest ? new new XMLHttpRequest(): new window.ActiveXObject('Microsoft.XMLHTTP');
		var {data,url,type} = opt;
		type = type.toUpperCase();
		var dataArr = [];

		for(var k in data){
			dataArr.push(k + '=' + data[k]);
		}

		if(type === 'GET'){
			url = url + '?' + dataArr.join('&');
			//删除url结尾的 ？ "http://www.imooc.com?a=1&b=2?"
			xhr.open = (type,url.replace(/\?$/g,''),true);
			xhr.send();
		}

		if(type === 'POST'){
			xhr.open(type,url,true);
			xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
			xhr.send(dataArr.join('&'));
		}

		xhr.onload = function (){
			if(xhr.status === 200 || xhr.status === 304 || xhr.status === 206){
				var res;
				if(opt.success && opt.success instanceof Function){
					res = xhr.responseText;
					if(typeof res === 'string'){
						res = JSON.parse(res);
						opt.success.call(xhr,res);
					}
				}
			}else{
				if(opt.error && opt.error instanceof Function){
					opt.error.call(xhr,res);
				}
			}
		}
	}
}

//jsonp
util.jsonp = function(url,onsuccess,onerror,charset){
	var callbackName = util.getName('tt_player');
	window[callbackName]= function (){
		if(onsuccess && util.isFunction(onsuccess)){
			onsuccess(arguments[0]);
		}
	};

	var script = util.createScript(url + '&callback=' + callbackName,charset);

	script.onload = script.onreadystatechange = function(){
		if(!script.readyState || /load|complete/.test(script.readyState)){
			script.onload = script.onreadystatechange = null;

			if(script.parentNode){
				script.parentNode.removeChild(script);
			}

			window[callbackName] = null;
		}
	};

	script.onerror = function (){
		if(onerror && util.isFunction(onerror)){
			onerror();
		}
	};

	document.getElementsByTagName('head')[0].appendChild(script);

}
