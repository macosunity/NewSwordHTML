function WindowImageLoader(){
	this.Images=new Array();
	this.LoadedCount=0;
	this.Add=function(src){
		if(src=="")return;
		for(var i in this.Images){
			if(this.Images[i].src==src)
				return;
		}
		var img=new Array();
		img.id=this.Images.length;
		img.src=src;
		img.isLoaded=false;
		this.Images[img.id]=img;
	}
	this.Load=function(){
		var obj=document.getElementById("IMGbuf");
		for(var i in this.Images){
			var s="<img src=\""+this.Images[i].src+"\" id=\"imagelist"+this.Images[i].id+"\" width=10 height=10>";
			obj.insertAdjacentHTML("afterbegin",s);
		}
		this.LoadedCount=0;
		document.getElementById("loadpic").style.display="";
		this.Loading();
	}
	this.Loading=function(){
		for(var i=0;i<this.Images.length;i++){
			if(this.Images[i].isLoaded)continue;
			if(document.getElementById("imagelist"+this.Images[i].id).complete){
				this.LoadedCount++;
				this.Images[i].isLoaded=true;
				continue;
			}
		}
		document.getElementById("loadpic").style.width=this.GetPercentLoaded(264);
		if(this.GetLoadedCount()==this.GetAllCount()){
			document.getElementById("map").innerHTML+=HTML;
			document.getElementById("IMGbuf").innerHTML="";
			document.getElementById("loadpic").style.display="none";
			document.getElementById("loadpic").style.width=0;
			eval(document.getElementById("game_eval").run);
			if(LoadedData[2]!=null){
				eval(LoadedData[2]);
				LoadedData=new Array();
			}
			GameScene.FadeIn();
			return;
		}
		setTimeout("WindowImageLoader.Loading()",200/this.GetAllCount());
	}
	this.GetAllCount=function(){
		return this.Images.length;
	}
	this.GetLoadedCount=function(){
		return this.LoadedCount;
	}
	this.GetPercentLoaded=function(num){
		return Math.floor(this.GetLoadedCount()/this.GetAllCount()*num);
	}
}