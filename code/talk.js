function GameText(){
	this.Texts=new Array();
	this.IsShowing=0;
	this.AddText=function(txt){
		this.Texts[this.Texts.length]=txt;
	}
	this.Show=function(ID){
		GameTime.Pause();
		var obj=document.getElementById("TextOLE");
		obj.children[1].innerHTML=this.Texts[ID];
		obj.style.display="block";
		this.IsShowing=1;//显示结束
	}
	this.ShowMsg=function(txt,face){
		if(face==null)
		{
			face=0;
		}
		var obj=document.getElementById("TextOLE");
		if(face!=0)
		{
			obj.children[0].src="faces/"+face+".gif";
			obj.children[0].style.display="block";
		}
		else
		{
			obj.children[0].style.display="none";
		}
		obj.children[1].innerHTML=txt;
		obj.style.display="block";
		this.IsShowing=1;
		GameTime.Pause();
	}
	this.Hide=function(){
		document.getElementById("TextOLE").style.display="none";
		this.IsShowing=0;
		GameTime.Run();
	}
	this.Memo=function(str){
		var obj=document.getElementById("memo");
		if(GameRoles[0].IsShowInfo){
			obj.innerHTML+="<p>"+str+"</p>";
		}
		document.getElementById("txtBuff").innerHTML+="<p>"+str+"</p>";
	}
	this.SystemInfo=function(str){
		var obj=document.getElementById("systemInfo");
		obj.innerHTML=str;
		if(obj.style.display=="none")
			obj.style.display="block";
		setTimeout("GameText.HideInfo()",1000);
	}
	this.HideInfo=function(){
		var obj=document.getElementById("systemInfo");
		if(obj.style.display=="block")
			obj.style.display="none";
	}
}