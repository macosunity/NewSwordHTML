function GameGood(){
	this.Goods=new Array();
	this.AddGood=function(id,name,width,height,icon,effect,money,type){
		var a=new Array();
		a.ID=id;
		a.NAME=name;
		a.WIDTH=width;
		a.HEIGHT=height;
		a.ICON=icon;
		a.EFFECT=effect;
		a.MONEY=money;
		a.ISNULL=false;
		a.TYPE=type;//0-头戴，2-颈挂，3-护腕，4-身穿，5-手持，6-脚踩，8-背披，9-药水，(-1)-剧情物品
		this.Goods[id]=a;
	}
	this.ShowGood=function(id,x,y,zindex){
		this.Goods[id].X=x;
		this.Goods[id].Y=y;
		if((";"+GameScene.ScenesData[GameScene.SceneID][0]+";").indexOf(";"+x+","+y+";")!=-1)
			return;
		var s='<span id="good'+id+'" style="z-index:'+zindex+';left:'+this.GetLeft(id,x)+';top:'+this.GetTop(id,y)+';width:'+this.Goods[id].WIDTH+';height:'+this.Goods[id].HEIGHT+';overflow:hidden">';
		s+='<img title="'+this.Goods[id].ID+'\n'+this.Goods[id].NAME+'\n'+this.Goods[id].WIDTH+'\n'+this.Goods[id].HEIGHT+'\n'+this.Goods[id].ICON+'\n'+this.Goods[id].EFFECT+'\n'+this.Goods[id].MONEY+'" src="'+this.Goods[id].ICON+'" style="left:0px;top:0px;">';
		s+='</span>';
		document.getElementById("map").insertAdjacentHTML("beforeend",s);
	}
	this.DelGood=function(id){
		document.getElementById("map").removeChild(document.getElementById("good"+id));
	}
	this.GetLeft=function(id,x){
		return Math.floor(x*gw-(this.Goods[id].WIDTH-gw)/2);
	}
	this.GetTop=function(id,y){
		return Math.floor(y*gh-(this.Goods[id].HEIGHT-gh)/2);
	}
}