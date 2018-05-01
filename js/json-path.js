function jsonPath(jsonObj,val)
{
	var i,obj,pathCnt,path;

	path=val.split("/");
	pathCnt = path.length;

	for(i=0;i<pathCnt;i++)
	{		
		if(typeof(obj)=="object")
		{	
			obj = obj[path[i]];
		}else{
			obj = jsonObj[path[i]];
		}

		if(typeof(obj) == "undefined") 
		{
			obj = "";
			break;
		}
    }

	return obj;
}

function jsonTemplate(doc,jsonObj)
{
	if (typeof(doc)=="string")
	{ 
		doc = document.getElementById(doc)
	}

	var qs = doc.querySelectorAll("*[data-json-path]");
	
	var cnt = qs.length;
	
	var nodeName, nodeValue;

	for(var i=0; i < cnt; i++)
	{
		nodeName = qs[i].nodeName.toLowerCase();
		nodeValue = jsonPath(jsonObj,qs[i].dataset.jsonPath);

		if (nodeName=="p" || nodeName=="span" || nodeName=="td" || nodeName=="div")
			qs[i].innerText = nodeValue;

		if (nodeName=="img" || nodeName=="source")
			qs[i].src = nodeValue;

		if (nodeName=="input" || nodeName=="textarea")
			qs[i].value = nodeValue;

	}
}