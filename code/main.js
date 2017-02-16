function BaseRole()
{
	this.Name=null;
	this.ID="";
	this.IMG="";
	this.OnIMG="";
	this.Frames=4;
	this.X=0;
	this.Y=0;
	this.Z=0;

	this.RectW=40;
	this.RectH;
	this.RectT;
	this.RectL;
	this.ImgW;
	this.ImgH;
	this.ImgT;
	this.ImgL;
	this.ImgOffL;
	this.ImgOffT;
	this.DirOffT;
	this.DirOffL;

	this.F=0;
	this.D=0;
	this.Blood=100;
	this.IsLocked=false;
	this.IsNull=false;
	this.IsPlayer=false;
	this.Path=null;
	this.Timer=null;
	this.NUM=null;
	this.Speed=2;
	this.Times=null;
	this.Kind=0;//0-普通人，1-友人，2-敌人
	this.CanTurn=true;

	this.IsMoving=false;
	this.IsStoping=true;
	this.IsRunning=false;
	this.IsAttacking=false;
	this.IsDeading=false;
	this.IsBeAttacking=false;
	this.IsDead=false;
	this.IsLocked=false;

	this.StandRoles=new Array();
	this.MoveRoles=new Array();
	this.RunRoles=new Array();
	this.DeadRoles=new Array();
	this.BeAttackRoles=new Array();

	this.FirstFrame=0;
	this.State="stand";
	this.HasStopAct=true;
	this.HasMoveAct=true;
	this.HasRunAct=true;
	this.SD=40;//动画速度

	this.EventType=0;
	this.EventState=0;
	this.EventNode=0;
	this.EventList=new Array();

	this.StandRoles=new Array();
	this.MoveRoles=new Array();
	this.RunRoles=new Array();
	this.AttackRoles=new Array();
	this.WantAttack=false;
	this.Attacked=false;

	this.init=function()
	{
		var s="",top;
		this.GetValue(this.StandRoles[0]);

		if(this.RectH==null)
			this.RectH=this.ImgH;
		this.InitRect();
		this.InitImg();

		this.Z=this.Y+1;
		this.ID="role"+this.NUM;
		s+="<span id=\""+this.ID+"\" style=\"width:"+this.ImgW+";height:"+this.ImgH+";left:"+this.ImgL+";top:"+this.ImgT+";z-index:"+this.Z+";overflow:hidden\">";
		if(this.D>=8)
			this.D=0;
		top=-(this.D*this.ImgH)+this.DirOffT;
		s+="<img src=\""+this.IMG+"\" style=\"top:"+top+";left:0px\">";
		s+="</span>";
		s+="<img src=\"images/blank.gif\" id=\"mask"+this.ID+"\" onmouseover=\"GameRoles["+this.NUM+"].MouseOver();\" onmouseout=\"GameRoles["+this.NUM+"].MouseOut();\" style=\"width:"+this.RectW+";height:"+this.RectH+";left:"+this.RectL+";top:"+this.RectT+";z-index:"+(this.NUM==0?0:500)+"\">";
		document.all("map").insertAdjacentHTML("afterbegin",s);
		if(this.NUM==0){
			GameRoles[0].SetHeight(GetElm("tiliIMG"),GameRoles[0].ShuXing[6]);
			GameRoles[0].SetHeight(GetElm("manaIMG"),GameRoles[0].ShuXing[8]);
			GameRoles[0].SetHeight(GetElm("lifeIMG"),GameRoles[0].ShuXing[4]);
			GameTime.Add("GameRoles[0].ChangeSX(5,4,3);",50,false,true);
		}
		GameTime.Add("GameRoles["+this.NUM+"].EventCycle()",5,false,true);
		GameTime.Add("GameRoles["+this.NUM+"].Move();",this.Speed,false,false);
		GameTime.Add("GameRoles["+this.NUM+"].Act();",1,true,true);
	}
	this.MouseOver=function(){
		var obj=GetElm(this.ID).firstChild;
		if(this.Kind==2&&!this.IsDead){
			GameRoles[0].OnRole=true;
			GetElm("allblood").style.left=(640-GameRoles[this.NUM].ShuXing[2][1])/2;
			GetElm("allblood").style.width=GameRoles[this.NUM].ShuXing[2][1];
			GetElm("newblood").style.width=GameRoles[this.NUM].ShuXing[2][0];
			GetElm("newblood").style.left=(640-GameRoles[this.NUM].ShuXing[2][1])/2;
			GetElm("bloodrect").lastChild.innerHTML=this.Name;
			GetElm("bloodrect").style.display="block";
		}
	}
	this.MouseOut=function(){
		var obj=GetElm(this.ID).firstChild;
		if(this.Kind==2&&GetElm("bloodrect").style.display!="none")
			GetElm("bloodrect").style.display="none";
	}
	this.SetZ=function(){
		GetElm(this.ID).style.zIndex=this.Z;
	}
	this.SetF=function(){
		GetElm(this.ID).firstChild.style.left=-(this.F*this.ImgW)+this.DirOffL;
	}
	this.SetD=function(){
		GetElm(this.ID).firstChild.style.top=-(this.D*this.ImgH)+this.DirOffT;
	}
	this.SetImgLT=function(){
		GetElm(this.ID).style.left=this.ImgL;
		GetElm(this.ID).style.top=this.ImgT;
	}
	this.SetRectLT=function(){
		GetElm("mask"+this.ID).style.left=this.RectL;
		GetElm("mask"+this.ID).style.top=this.RectT;
	}
	this.InitRect=function(){
		this.RectL=this.X*gw;
		this.RectT=(this.Y+1)*gh-this.RectH;
	}
	this.InitImg=function(){
		this.ImgL=this.RectL+this.ImgOffL;
		this.ImgT=this.RectT+this.ImgOffT;
	}

	this.HideRole=function(){
		if(GetElm("mask"+this.ID))
			GetElm("mask"+this.ID).style.display="none";
		GetElm(this.ID).style.display="none";
	}
	this.ShowRole=function(){
		if(GetElm("mask"+this.ID))
			GetElm("mask"+this.ID).style.display="block";
		GetElm(this.ID).style.display="block";
	}
	
	this.MoveTo=function(pos){
		var event = window.event;
		if (!event && arguments && arguments.callee && arguments.callee.caller) {
			event = arguments.callee.caller.arguments[0];
		}
		this.Path=(new FindPath([this.X,this.Y],pos)).main();
		if(this.Path!=null&&this.Path!=""){
			if((";"+this.Path+";").indexOf(";"+pos.join(",")+";")==-1)
				this.Path=pos.join(",")+";"+this.Path;
			this.Path=this.Path.split(";");
			this.IsStoping=false;
			this.State="move";
			if(this.IsPlayer&&event&&event.shiftKey)
				this.State="run";
		}else{
			this.ChangeState("TOstand");
		}
	}
	this.AttackTo=function(pos){
		this.AttackPos=pos;
		this.WantAttack=true;
		this.MoveTo(pos);
	}
	this.Move=function(){
		if(!this.IsStoping&&this.Path!=null&&this.Path!=""){
			if(this.Path.length<=1){
				this.SelFD(this.Path[0].split(","));
				if(this.IsPlayer){
					if(GameRoles[0].IsInEvent!=0){
						this.ChangeState("TOstand");
						if(GameRoles[0].IsInEvent==1){
							if(this.WantAttack){
								this.ChangeState("TOattack");
							}
							else{
								if(GameRoles[0].EventRole.CanTurn)
									GetElm(GameRoles[0].EventRole.ID).lastChild.style.top=-(((this.D+4)%8)*GameRoles[0].EventRole.ImgH);
								GameRoles[0].EventRole.DoEvent();
							}
						}
						else if(GameRoles[0].IsInEvent==2){
							GameRoles[0].ReplaceGood(GameRoles[0].EventRole,null,"floor");
							GameText.SystemInfo("得到"+GameRoles[0].EventRole.NAME);
							GameGood.DelGood(GameRoles[0].EventRole.ID);
							GameScene.ScenesData[GameScene.SceneID][0]+=GameRoles[0].EventRole.X+","+GameRoles[0].EventRole.Y+";";
						}
						this.Path=null;
						GameRoles[0].IsInEvent=0;GameRoles[0].EventRole=null;return;
					}
				}
				else{
					if(this.WantAttack){
						this.ChangeState("TOattack");
						this.Path=null;
						return;
					}
				}
			}
			var offw=6,offh=3;
			if(this.State=="run"){
				offw=12;offh=6;
			}
			var a=this.Path[this.Path.length-1].split(",");
			var epx=gw*parseInt(a[0]);
			var epy=gh*parseInt(a[1]);
			var spx=this.RectL;
			var spy=this.RectT+this.RectH-gh;
			if(Math.abs(spx-epx)<offw)
				spx=epx;
			if(Math.abs(spy-epy)<offh)
				spy=epy;
			var dpx=epx==spx?0:(epx>spx?1:-1);
			var dpy=epy==spy?0:(epy>spy?1:-1);
			if(dpx==0&&dpy==0){
				this.X=parseInt(a[0]);
				this.Y=parseInt(a[1]);
				if(this.State=="run"){
					if(GameRoles[0].ShuXing[6][0]<=0){
						GameText.SystemInfo("体力不足!");
						this.State="move";
					}
					else{
						GameRoles[0].ChangeSX(-6,null,null);
					}
				}
				this.Path[this.Path.length-1]=null;this.Path.length-=1;
				for(var i in GameEvent.Events){
					if(this.IsPlayer&&(";"+GameEvent.Events[i].pos+";").indexOf(";"+this.X+","+this.Y+";")!=-1&&GameEvent.Events[i].istuch){
						this.Path.length=0;
						GameEvent.RunEvent(i);
						break;
					}
				}
			}
			this.SelFD(a);
			if(!this.IsMoving&&this.State=="move")
				this.ChangeState("TOmove");
			if(!this.IsRunning&&this.State=="run")
				this.ChangeState("TOrun");
			this.RectL=spx+(dpx*offw);
			this.RectT=spy+(dpy*offh)+gh-this.RectH;
			this.InitImg();
			this.SetImgLT();
			this.SetRectLT();
			if(this.IsPlayer)
				this.CamaraMove();
			this.Z=Math.ceil((this.RectT+this.RectH-gh/2)/gh);
			this.SetZ();
			if(this.Path.length==0){
				this.Path=null;
				this.ChangeState("TOstand");
				for(var i in GameEvent.Events){
					if(this.IsPlayer&&(";"+GameEvent.Events[i].pos+";").indexOf(";"+this.X+","+this.Y+";")!=-1){
						GameEvent.RunEvent(i);break;
					}
				}
				return;
			}
		}
	}
	this.SelFD=function(a){
		var dx=parseInt(a[0])-this.X;
		var dy=parseInt(a[1])-this.Y;
		switch(dx+","+dy){
			case "-1,-1":
				this.D=5;break;
			case "-1,0":
				this.D=4;break;
			case "-1,1":
				this.D=3;break;
			case "0,1":
				this.D=2;break;
			case "1,1":
				this.D=1;break;
			case "1,0":
				this.D=0;break;
			case "1,-1":
				this.D=7;break;
			case "0,-1":
				this.D=6;break;
		}
		this.SetD();
	}
	this.GetValue=function(arr){
		this.Frames=arr[0];
		this.F=arr[1];
		this.DirOffT=arr[2];
		this.DirOffL=arr[3];
		this.ImgW=arr[4];
		this.ImgH=arr[5];
		this.ImgOffT=arr[6];
		this.ImgOffL=arr[7];
		this.SD=arr[8];
		if(arr[9]!=null&&arr[9]!="")
			this.AttackFrames=arr[9];
		else
			this.AttackFrames="";
	}
	this.ChangeState=function(str,num){
		if(num==null)num=0;
		if(str=="TOmove"){
			this.IsStoping=false;
			this.IsMoving=true;
			this.IsRunning=false;
			this.IsAttacking=false;
			this.IsDeading=false;
			this.IsBeAttacking=false;
			this.GetValue(this.MoveRoles[num]);
		}
		else if(str=="TOstand"){
			this.IsStoping=true;
			this.IsMoving=false;
			this.IsRunning=false;
			this.IsAttacking=false;
			this.IsDeading=false;
			this.IsBeAttacking=false;
			this.GetValue(this.StandRoles[num]);
			this.State="stand";
		}
		else if(str=="TOrun"){
			this.IsStoping=false;
			this.IsMoving=false;
			this.IsRunning=true;
			this.IsAttacking=false;
			this.IsDeading=false;
			this.IsBeAttacking=false;
			this.GetValue(this.RunRoles[num]);
		}
		else if(str=="TOattack"){
			this.IsAttacking=true;
			this.IsStoping=false;
			this.IsMoving=false;
			this.IsRunning=false;
			this.IsDeading=false;
			this.IsBeAttacking=false;
			this.GetValue(this.AttackRoles[num]);
		}
		else if(str=="TOdead"){
			this.IsAttacking=false;
			this.IsStoping=false;
			this.IsMoving=false;
			this.IsRunning=false;
			this.IsDeading=true;
			this.IsBeAttacking=false;
			this.GetValue(this.DeadRoles[num]);
		}
		else if(str=="TObeattack"){
			this.IsBeAttacking=true;
			this.IsAttacking=false;
			this.IsStoping=false;
			this.IsMoving=false;
			this.IsRunning=false;
			this.IsDeading=false;
			this.GetValue(this.BeAttackRoles[num]);
		}
		this.InitImg();
		this.SetF();this.SetD();
		GetElm(this.ID).firstChild.src=this.IMG;
		GetElm(this.ID).style.width=this.ImgW;
		GetElm(this.ID).style.height=this.ImgH;
		this.SetImgLT();
	}
	this.Act=function(){
		// console.log("Acting isMoving", this.IsMoving);
		// console.log("Acting running", this.IsRunning);
		// console.log("Acting stop", this.IsStoping);
		if(this.IsMoving||this.IsStoping||this.IsRunning||this.IsAttacking||this.IsDeading||this.IsBeAttacking){
			if((!this.HasStopAct&&this.IsStoping))return;
			this.F++;
			if(this.F>this.Frames){
				if(this.IsAttacking||this.IsBeAttacking){
					this.WantAttack=false;
					this.ChangeState("TOstand",Math.floor(this.StandRoles.length*Math.random()));
					//return;
				}
				else if(this.IsDeading){
					this.IsDeading=false;
					this.IsNull=true;
					GetElm(this.ID).style.zIndex=0;
					return;
				}
				else
					this.F=this.FirstFrame;
			}
			else{
				if((","+this.AttackFrames+",").indexOf(","+this.F+",")==-1){
					this.Attacked=false;
				}
				else if(this.IsAttacking&&!this.Attacked){
					if(this.IsPlayer){
						for(var i=1;i<GameRoles.length;i++){
							if(!GameRoles[i].IsNull&&GameRoles[i].Kind==2&&this.AttackPos[0]==GameRoles[i].X&&this.AttackPos[1]==GameRoles[i].Y){
								GameRoles[i].ShuXing[2][0]-=50;
								if(GameRoles[i].ShuXing[2][0]<=0){
									this.OnRole=false;
									GameRoles[i].IsDead=true;
									//GetElm("map").removeChild(GetElm("mask"+GameRoles[i].ID));
									GameRoles[i].ChangeState("TOdead");
								}
								document.getElementById("newblood").style.width=GameRoles[i].ShuXing[2][0];
							}
						}
					}
					else{
						if(this.AttackPos[0]==GameRoles[0].X&&this.AttackPos[1]==GameRoles[0].Y){
							GameRoles[0].ShuXing[4][0]-=10;
							if(GameRoles[0].ShuXing[4][0]<0)
								GameRoles[0].ShuXing[4][0]=0;
						}
					}
					this.Attacked=true;
				}
			}
			this.SetF();
		}
		GameRoles[this.NUM].Times=window.setTimeout("GameRoles["+this.NUM+"].Act();",GameRoles[this.NUM].SD);
	}

	this.AddEvent=function(ID,EV){
		var AutoAdd=false;
		var iEV=EV.split("#");
		if(iEV.length==1)
			AutoAdd=true;
		else
			if(iEV[1]=="")AutoAdd=true;
		if(AutoAdd){
			if(EV.slice(0,8)=="GameText")
				EV=iEV[0]+"#GameText.IsShowing==0";
			if(EV.slice(0,8)=="AllEnd()")
				EV="this.EventNode=this.EventList.length-1;this.EventType=9";
		}
		EV=EV.replace(/this./g,"GameRoles["+this.NUM+"].");
		this.EventList[ID]=EV;
	}
	this.DoEvent=function(){
		if(this.IsNull)return;
		if(this.EventState==0)this.RunEvent();
	}
	this.EventGoto=function(ID){
		this.EventNode=ID-1;
	}
	this.RunEvent=function(){
		if(this.EventNode==this.EventList.length){
			this.EventState=0;
			this.EventNode=0;
			return;
		}
		var iEvent=this.EventList[this.EventNode].split("#");
		if(this.EventState!=1){
			eval(iEvent[0]);
			this.EventState=1;
		}
		if(iEvent[1]==""||iEvent[1]==null||eval(iEvent[1])){
			this.EventState=2;
			this.EventNode++;
			this.RunEvent();
		}
		else{
			GameTime.Add("GameRoles["+this.NUM+"].RunEvent()",5,true,true);
		}
		return;
	}
	this.EventCycle=function(){
		if(this.EventType==2){
			if(this.EventList.length>0&&this.EventState==0)
				this.DoEvent();
		}
	}
	function GetElm(ID){
		return document.getElementById(ID);
	}
}
GameRole.prototype=new BaseRole();
function GameRole(){
	this.ShuXing=new Array([100],[100],[300,300],[5]);
	this.hit=3000;//攻击力
	this.fangshou=1500;//防守力
}
GamePlayer.prototype=new GameRole();
function GamePlayer(){
	this.Goods=new Array();
	this.UseGoods=new Array(9);
	this.ShuXing=new Array([100],[100],[100],[100],[1000,1000],[100],[1000,1000],[100],[1000,1000]);
	this.EventRole=null;
	this.AllMoney=10000;
	this.IsInEvent=0;
	this.IsSelling=false;
	this.IsShowGoods=false;
	this.IsShowZB=false;
	this.IsShowInfo=false;
	this.OnRole=false;//鼠标是否在人物上
	this.ShowGoods=function(){
		if(this.IsShowGoods)return;
		var obj=document.getElementById("goodsOLE");
		var t='<div onmousedown="SellGood();" style="left:82px;top:115px;width:174px;height:225px;overflow:hidden;">';
		t+='<span style="width:174px;">';//height:225px;
		for(var i in this.Goods){
			var arr=this.Goods[i];
			if(arr===null)continue;
			var s='<span class="span2" title="'+arr.NUM+'" id="myGood'+i+'">';
			s+='<span id="goodsnum">'+arr.NUM+'</span>';
			s+='<img src="'+arr.ICON+'" style="left:'+Math.ceil((50-arr.WIDTH)/2)+';top:'+Math.ceil((65-arr.HEIGHT)/2)+'"></span>';
			t+=s;
		}
		t+='</span></div>';
		t+='<span id="allmoney">'+this.AllMoney+'</span>';
		obj.innerHTML=t;
		obj.style.backgroundImage="url(images/wupin.gif)";
		if(obj.style.display=="none")
			obj.style.display="block";
		if(this.IsShowInfo)this.IsShowInfo=false;
		this.IsShowGoods=true;
	}
	this.HideGoods=function(){
		if(this.IsShowGoods){
			document.getElementById("goodsOLE").innerHTML="";
			document.getElementById("goodsOLE").style.display="none";
			this.IsShowGoods=false;
		}
	}
	this.ShowInfo=function(){
		if(this.IsShowInfo)return;
		var obj=document.getElementById("goodsOLE");
		var t='<div style="left:86px;top:129px;width:168px;height:190px;line-height:16px;overflow:hidden">';
		t+='<div id="memo" style="width:168px;font-size:14px;">'+document.getElementById("txtBuff").innerHTML+'</div>';
		t+='</div>';
		obj.innerHTML=t;
		obj.style.backgroundImage="url(images/xiaoxi.gif)";
		if(obj.style.display=="none")
			obj.style.display="block";
		if(this.IsShowGoods)this.IsShowGoods=false;
		this.IsShowInfo=true;
	}
	this.HideInfo=function(){
		if(this.IsShowInfo){
			document.getElementById("goodsOLE").innerHTML="";
			document.getElementById("goodsOLE").style.display="none";
			this.IsShowInfo=false;
		}
	}
	this.ReplaceGood=function(arr1,arr2,type){//arr1-地上的或穿着的物品，arr2-物品袋中的物品，type-判断是否是地上的物品
		if(arr2!=null){
			if(arr2.TYPE>8||arr2.TYPE<0)return;
			var arr=arr1;
			if(arr1!=null){
				if(arr1.ID==arr2.ID)return;
				this.PutZB(arr1,"del");
				this.GetGood(arr);
			}
			this.LoseGood(arr2);
			this.PutZB(arr2,"add");
		}
		else{
			if(type!="floor")
				this.PutZB(arr1,"del");
			this.GetGood(arr1);
		}
	}
	this.PutZB=function(arr,type){
		if(arr==null)return;
		var e=arr.EFFECT.split(";");
		var t;
		for(var i in e){
			e[i]=e[i].split(":");
			switch(e[i][0]){
				case "ming":
					t=4;break;
				case "gong":
					t=5;break;
				case "ti":
					t=6;break;
				case "fang":
					t=7;break;
				case "nei":
					t=8;break;
			}
			this.ChangeValue(t,parseInt(e[i][1]),type);
		}
		if(this.IsShowZB){
			var obj=document.getElementById("zb"+arr.TYPE);
			if(type=="del"){
				obj.style.display="none";
			}
			else if(type=="add"){
				if(obj!=null){
					document.getElementById("zbshow").removeChild(obj);
				}
				var s='<span id="zb'+arr.TYPE+'" class="zb" style="left:'+(arr.TYPE%3)*59+';top:'+Math.floor(arr.TYPE/3)*80+';">';
				s+='<img src="'+arr.ICON+'" style="left:'+Math.ceil((50-arr.WIDTH)/2)+';top:'+Math.ceil((65-arr.HEIGHT)/2)+';">';
				s+='</span>';
				document.getElementById("zbshow").insertAdjacentHTML("beforeend",s);
			}
		}
		if(type=="del")
			this.UseGoods[arr.TYPE]=null;
		else if(type=="add")
			this.UseGoods[arr.TYPE]=arr;
	}
	this.LoseGood=function(arr){
		for(var i in this.Goods){
			if(this.Goods[i].ID==arr.ID)
				break;
		}
		if(this.Goods[i].NUM>=1){
			this.Goods[i].NUM--;
		}
		var obj=document.getElementById("myGood"+i);
		if(this.Goods[i].NUM<1){
			this.Goods[i].ISNULL=true;
			if(this.IsShowGoods){
				obj.style.display="none";
			}
		}
		else{
			if(this.IsShowGoods){
				obj.firstChild.innerText=this.Goods[i].NUM;
			}
		}
	}
	this.GetGood=function(arr){
		if(arr==null)return;
		var flag=false;
		for(var i in this.Goods){
			if(this.Goods[i].ID==arr.ID){
				this.Goods[i].NUM++;
				if(this.Goods[i].ISNULL){
					if(this.IsShowGoods){
						if(document.getElementById("myGood"+i)!=null){
							document.getElementById("goodsOLE").children(0).firstChild.removeChild(document.getElementById("myGood"+i));
						}
					}
					this.Goods[i].ISNULL=false;
				}
				else{
					if(this.IsShowGoods){
						document.getElementById("myGood"+i).firstChild.innerText=arr.NUM;
					}
					return;
				}
				flag=true;
				break;
			}
		}
		if(!flag){
			i=this.Goods.length;
			this.Goods[i]=arr;
			this.Goods[i].NUM=1;
			this.Goods[i].SELLMONEY=Math.floor(arr.MONEY/2);
		}
		if(this.IsShowGoods){
			var s='<span class="span2" title="'+this.Goods[i].NUM+'" id="myGood'+i+'">';
			s+='<span id="goodsnum">'+this.Goods[i].NUM+'</span>';
			s+='<img src="'+this.Goods[i].ICON+'" style="left:'+Math.ceil((50-this.Goods[i].WIDTH)/2)+';top:'+Math.ceil((65-this.Goods[i].HEIGHT)/2)+'"></span>';
			document.getElementById("goodsOLE").firstChild.firstChild.insertAdjacentHTML("beforeend",s);
		}
	}
	this.ShowZB=function(){
		var obj=document.getElementById("szOLE");
		var t='<span style="width:44px;height:83px;left:7px;top:50px;overflow:hidden"><img src="images/dgj.gif" style="left:-88px;"></span>'
		t+='<span style="width:45px;height:80px;left:7px;top:133px;overflow:hidden"><img src="images/zlx.gif"></span>'
		t+='<span style="width:45px;height:82px;left:7px;top:213px;overflow:hidden"><img src="images/zrm.gif"></span>'
		t+='<span style="width:44px;height:75px;left:7px;top:295px;overflow:hidden"><img src="images/yy.gif"></span>'
		t+='<div id="zbshow" onmousedown="ChangeGood();">';
		for(var i in this.UseGoods){
			var s="";
			if(this.UseGoods[i]==null||i==1||i==7)continue;
			var arr=this.UseGoods[i];
			s+='<span id="zb'+i+'" class="zb" style="left:'+(i%3)*59+';top:'+Math.floor(i/3)*80+';">';
			s+='<img src="'+arr.ICON+'" style="left:'+Math.ceil((50-arr.WIDTH)/2)+';top:'+Math.ceil((65-arr.HEIGHT)/2)+';">';
			s+='</span>';
			t+=s;
		}
		t+='</div><div id="sxOLE">';
		for(var i in this.ShuXing){
			var s="";
			var arr=this.ShuXing[i];
			s+='<span id="sx'+i+'" class="sx" style="left:'+(i%2)*90+';top:'+Math.floor(i/2)*19+';">';
			if(arr.length>1)
				s+=arr[0]+'/'+arr[1];
			else
				s+=arr[0];
			s+='</span>';
			t+=s;
		}
		t+='</div>';
		obj.innerHTML=t;
		obj.style.width="409px";
		obj.style.backgroundImage="url(images/zhuangbei.gif)";
		if(obj.style.display=="none")
			obj.style.display="";
		this.IsShowZB=true;		
	}
	this.HideZB=function(){
		if(this.IsShowZB){
			document.getElementById("szOLE").innerHTML="";
			document.getElementById("szOLE").style.display="none";
			this.IsShowZB=false;
		}
	}
	this.CloseSell=function(){
		if(this.IsSelling){
			document.getElementById("szOLE").innerHTML="";
			document.getElementById("szOLE").style.display="none";
			this.HideGoods();
			this.IsSelling=false;
		}
	}
	this.ChangeValue=function(i,v,t){
		var arr=this.ShuXing[i];
		if(t!="add")
			v=-v;
		if(arr.length>1){
			arr[1]+=v;
			if(arr[1]<0)arr[1]=0;
			if(arr[0]>arr[i])arr[0]=arr[1];
			if(this.IsShowZB)
				document.getElementById("sx"+i).innerText=arr[0]+"/"+arr[1];
		}
		else{
			arr[0]+=v;
			if(this.IsShowZB)
				document.getElementById("sx"+i).innerText=arr[0];
		}
	}

	this.FocusGoods=function(){	
		if(this.IsSelling)return;
		if(this.IsShowGoods)
			this.HideGoods();
		else
			this.ShowGoods();
	}
	this.FocusZB=function(){
		if(this.IsSelling)return;
		if(this.IsShowZB)
			this.HideZB();
		else
			this.ShowZB();
	}
	this.FocusMsg=function(){
		if(this.IsSelling)return;
		if(this.IsShowInfo)
			this.HideInfo();
		else
			this.ShowInfo();
	}
	this.CamaraMove=function(){
		var gl=320-this.RectW/2;
		var gt=240+gh/2-this.RectH;
		var left=0,top=0;
		if(this.RectL>gl&&this.RectL<(gl+(GameScene.AllXTile-16)*gw))
			left=gl-this.RectL;
		else if(this.RectL>=(gl+(GameScene.AllXTile-16)*gw))
			left=-(GameScene.AllXTile-16)*gw;
		if(this.RectT>gt&&this.RectT<(gt+(GameScene.AllYTile-24)*gh))
			top=gt-this.RectT;
		else if(this.RectT>=(gt+(GameScene.AllYTile-24)*gh))
			top=-(GameScene.AllYTile-24)*gh;
		GameScene.SetSceneLT(left,top);
	}
	this.SetPlayerScn=this.CamaraMove;
	this.SetHeight=function(obj,arr){
		var b=obj.offsetHeight+obj.offsetTop;
		obj.style.height=Math.ceil(arr[0]/arr[1]*obj.firstChild.offsetHeight);
		obj.style.top=b-obj.offsetHeight;
		obj.firstChild.style.top=obj.offsetHeight-obj.firstChild.offsetHeight;
	}
	this.ChangeSX=function(t,q,x){
		if(t!=null){
			this.ShuXing[6][0]+=t;
			if(this.ShuXing[6][0]>this.ShuXing[6][1])
				this.ShuXing[6][0]=this.ShuXing[6][1];
			if(this.ShuXing[6][0]<0)
				this.ShuXing[6][0]=0;
			this.SetHeight(document.getElementById("tiliIMG"),this.ShuXing[6]);
			if(this.IsShowZB)
				document.getElementById("sx6").innerText=this.ShuXing[6][0]+"/"+this.ShuXing[6][1];
		}
		if(q!=null){
			this.ShuXing[8][0]+=q;
			if(this.ShuXing[8][0]>this.ShuXing[8][1])
				this.ShuXing[8][0]=this.ShuXing[8][1];
			if(this.ShuXing[8][0]<0)
				this.ShuXing[8][0]=0;
			this.SetHeight(document.getElementById("manaIMG"),this.ShuXing[8]);
			if(this.IsShowZB)
				document.getElementById("sx8").innerText=this.ShuXing[8][0]+"/"+this.ShuXing[8][1];
		}
		if(x!=null){
			this.ShuXing[4][0]+=x;
			if(this.ShuXing[4][0]>this.ShuXing[4][1])
				this.ShuXing[4][0]=this.ShuXing[4][1];
			if(this.ShuXing[4][0]<0)
				this.ShuXing[4][0]=0;
			this.SetHeight(document.getElementById("lifeIMG"),this.ShuXing[4]);
			if(this.IsShowZB)
				document.getElementById("sx4").innerText=this.ShuXing[4][0]+"/"+this.ShuXing[4][1];
		}
	}
}
SellRole.prototype=new BaseRole();
function SellRole(){
	this.SellGoods=new Array();
	this.AddSellGoods=function(arr){
		this.SellGoods=arr;
	}
	this.ShowGoods=function(){
		GameRoles[0].ShowGoods();
		var obj=document.getElementById("szOLE");
		var t='<div onmousedown="BuyGood();" style="left:54px;top:116px;width:174px;height:225px;overflow:hidden;">';
		t+='<span style="width:174px;">';
		for(var i in this.SellGoods){
			var arr=GameGood.Goods[this.SellGoods[i]];
			var s='<span class="span" title="sellGood'+i+'" sid="'+arr.ID+'" id="sellGood'+i+'">';
			s+='<img src="'+arr.ICON+'" style="left:'+Math.ceil((50-arr.WIDTH)/2)+';top:'+Math.ceil((65-arr.HEIGHT)/2)+'"></span>';
			t+=s;
		}
		t+='</span></div>';
		t+='<span style="width:193px;height:27px;left:45px;top:346px;overflow:hidden;"><img onclick="GameRoles[0].CloseSell();" onmousedown="this.style.left=-193;" onmouseup="this.style.left=0;" onmouseout="this.style.left=0;" src="images/close.gif" style="left:0px;"></span>';
		obj.innerHTML=t;
		obj.style.width="309px";
		obj.style.backgroundImage="url(images/maimai.gif)";
		if(obj.style.display=="none")
			obj.style.display="block";
		GameRoles[0].IsSelling=true;
	}
}

function GameTime(){
	this.Functions=new Array();
	this.Time=0;
	this.PauseTime=0;
	this.IsPause=false;
	this.IsRunning=false;
	this.Init=function(){
		this.IsPause=true;
		if(!this.IsRunning){
			window.setInterval("GameTime.Running();",10);
			this.IsRunning=true;
		}
	}
	this.Add=function(cmd,time,onlyone,ispause){
		var newf=new Array();
		newf.Time=time;
		newf.Cmd=cmd;
		newf.OnlyOne=onlyone;
		newf.AddTime=this.Time;
		newf.IsPause=ispause;
		newf.IsNull=false;
		for(var i=0;i<this.Functions.length;i++){
			var f=this.Functions[i];
			if(f.IsNull){
				f.Time=time;
				f.Cmd=cmd;
				f.OnlyOne=onlyone;
				f.AddTime=this.Time;
				f.IsPause=ispause;
				f.IsNull=false;
				return i;
			}
		}
		this.Functions[this.Functions.length]=newf;
		return this.Functions.length-1;
	}
	this.Running=function(){
		this.Time++;
		for(var i=0;i<this.Functions.length;i++){
			var f=this.Functions[i];
			if(this.IsPause){
				if(!f.IsPause&&!f.IsNull&&((this.Time-f.AddTime)%f.Time==0)){
					eval(f.Cmd);
					if(f.OnlyOne)
						this.Delete(i);
				}
			}else{
				if(!f.IsNull&&((this.Time-f.AddTime)%f.Time==0)){
					eval(f.Cmd);
					if(f.OnlyOne)
						this.Delete(i);
				}
			}
		}
	}
	this.Delete=function(id){
		if(this.Functions[id]!=null)
			this.Functions[id].IsNull=true;
	}
	this.Pause=function(){
		this.IsPause=true;
		this.PauseTime=this.Time;
	}
	this.Run=function(){
		this.IsPause=false;
		this.Time=this.PauseTime;
	}
	this.Sleep=function(t){
		this.Pause();
		window.setTimeout("GameTime.Run()",t);
	}
}