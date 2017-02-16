function GameScene()
{
	this.SceneID=null;
	this.AllXTile=16;
	this.AllYTile=24;
	this.ScenesData=new Array();

	this.FadeIn=function()
	{
		var obj=document.getElementById("master").style;
		var num=obj.opacity;
		num=parseFloat(num)-2/100.0;
		if(num<=0)
		{
			obj.display="none";
			GameTime.Run();
			if(document.getElementById("game_eval").SoundRun!="")
			{
				eval(document.getElementById("game_eval").SoundRun);
				document.getElementById("game_eval").SoundRun="";
			}
			return;
		}
		obj.opacity=num;
		window.setTimeout("GameScene.FadeIn()",0);
	}

	this.FadeOut=function()
	{
		var obj=document.getElementById("master").style;
		if(obj.display=="none")
			obj.display="block";
		var num=obj.opacity;
		num=parseFloat(num)+2/100.0;
		if(num>=1)
		{
			document.getElementById("title").style.display="none";
			document.getElementById("scene").style.display="block";
			document.getElementById("bottom").style.display="block";
			this.LoadScene();
			return;
		}
		obj.opacity=num;
		window.setTimeout("GameScene.FadeOut()",0);
	}

	this.SetNewScene=function(w,h,url)
	{
		if(url==null)
			url="";
		document.getElementById("map").style.backgroundImage="url('"+url+"')";
		document.getElementById("map").style.width=w;
		document.getElementById("map").style.height=h;
		this.AllXTile=w/gw;
		this.AllYTile=h/gh;
	}

	this.SetSceneLT=function(l,t)
	{
		document.getElementById("map").style.left=l;
		document.getElementById("map").style.top=t;
	}

	this.CheckDead=function()
	{
		for(var i=0;i<arguments.length;i++)
		{
			if(!GameRoles[parseInt(arguments[i])].IsDead)
				return false;
		}
		console.log("Enemies are all dead!");
		return true;
	}

	this.GotoScene=function(ID)
	{
		if(this.SceneID==null||GameScene.ScenesData[ID]=="undefined"||GameScene.ScenesData[ID]==null)
		{
			GameScene.ScenesData[ID]=["",true,false];
		}
		this.SceneID=ID;
		this.FadeOut();
	}

	this.LoadScene=function()
	{
		eval("Scene"+this.SceneID+"()");
	}

	this.SystemFadeOut=function()
	{
		var obj=document.getElementById("SceneFadeDiv").style;
		if(obj.display=="none")
			obj.display="block";
		var num=obj.alpha;
		num+=4/100.0;
		if(num>=1)
		{
			if(document.getElementById("game_eval").DoEventGo!="")
			{
				eval(document.getElementById("game_eval").DoEventGo);
				document.getElementById("game_eval").DoEventGo="";
			}
			this.SystemFadeIn();
			return;
		}
		obj.opacity=num;
		window.setTimeout("GameScene.SystemFadeOut()",0);
	}

	this.SystemFadeIn=function()
	{
		var obj=document.getElementById("SceneFadeDiv").style;
		var str=obj.filter.replace("\"","");
		var num=parseInt(str.replace("alpha(opacity=",""));
		num-=4/100.0;
		if(num<=0)
		{
			obj.display="none";
			GameTime.Run();
			return;
		}
		obj.opacity=num;
		window.setTimeout("GameScene.SystemFadeIn()",0);
	}
}