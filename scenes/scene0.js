function Scene0()
{
	console.log("current scene 0");

	n_path="0,27;1,27;2,26;2,25;2,24;3,23;3,22;3,21;3,20;4,19;3,19;5,18;6,18;6,17;6,16;7,15;8,14;9,14;10,14;11,14;12,14;13,14;14,14;15,14;16,14;17,15;18,15;19,15;18,17;19,17;20,17;20,14;20,13;20,12;20,11;20,10;19,9;18,8;18,7;17,6;17,5;16,4;16,3;16,2;16,1;16,0;20,0;20,1;21,3;22,5;24,9;24,10;25,11;26,12;27,13;28,13;29,13;30,13;31,13;32,13;33,12;34,11;35,11;36,10;37,9;38,8;39,7;40,6;41,5;41,4;41,3;42,2;43,1;46,1;46,0;46,2;45,3;45,4;45,5;44,6;44,7;44,8;44,9;44,10;43,11;42,12;41,13;41,14;40,15;39,15;38,16;38,17;37,18;36,19;35,20;34,21;33,21;32,21;31,21;30,21;29,21;28,21;27,21;26,20;25,20;24,19;23,18;22,17;21,17;17,18;17,19;17,20;17,21;16,22;15,22;14,23;13,24;12,25;11,26;10,27;9,28;8,29;7,30;6,31;5,32;4,33;3,34;2,34;1,34;0,34;1,26;2,23;4,18;6,15;7,14;17,14;18,18;17,22;15,23;14,24;13,25;12,26;11,27;10,28;9,29;8,30;7,31;6,32;5,33;4,34;19,14;19,10;18,9;17,7;23,17;24,18;25,19;27,20;16,5;21,2;22,4;23,6;25,10;26,11;27,12;32,12;33,11;35,10;36,9;35,21;36,20;37,19;38,18;39,16;41,15;37,8;38,7;39,6;40,5;41,2;46,3;45,6;44,11;43,12;42,13;43,0;42,1;20,2;21,4;24,7;24,8;23,5;24,6;"

	HTML='<div style="width:1920px"><ul style="margin:0;padding:0;overflow:hidden;">';

	for(var i=1;i<=40;i++){
		HTML+='<li style="margin:0;padding:0;list-style-type:none;float:left;width:192px;height:175px;overflow:hidden;"><img src="pictures/wys/wys_'+i+'.jpg" style="display:block;width:192px;height:175px;border:0;margin:0;padding:0;"></li>';
		if(i%10==0&&i!=40)
		{
			HTML+='</ul><ul style="margin:0;padding:0;overflow:hidden;">';
		}
		WindowImageLoader.Add("pictures/wys/wys_"+i+".jpg");
	}

	HTML+='</ul><img src="pictures/wys/wys3.gif" style="left:35px;top:341px;z-index:36"><img src="pictures/wys/wys2.gif" style="left:566px;top:0px;z-index:36"><img src="pictures/wys/wys4.gif" style="left:1107px;top:349px;z-index:36"><img src="pictures/wys/wys1.gif" style="left:1210px;top:51px;z-index:36"></div>';

	ClearAllSet(0);
	
	for(var i=0;i<2;i++){
		if(i==0){
			if(IsFirstIn||IsLoad)
				GameRoles[i]=new GamePlayer();
		}
		else
			GameRoles[i]=new BaseRole();
		GameRoles[i].NUM=i;
		GameRoles[i].EventList=new Array();
	}
	with(GameRoles[0]){
		if(IsFirstIn||IsLoad){
			D=0;
			X=1;Y=29;
			Name="独孤剑";
			IMG="images/player_asf.gif";
			StandRoles=[[19,0,0,0,56,75,0,4,50],[14,13,0,-1120,95,86,0,-18,50]];
			MoveRoles=[[14,4,-600,0,67,81,0,-6,35]];
			RunRoles=[[11,3,-1248,0,80,88,-3,-14,40]];
			AttackRoles=[[24,0,-1952,0,172,120,-20,-58,30,"9,10,11"]];
			IsPlayer=true;
			if(IsFirstIn){
				Goods[0]=GameGood.Goods[4];
				Goods[0].NUM=1;
				Goods[0].SELLMONEY=0;
				PutZB(GameGood.Goods[1],"add");
				PutZB(GameGood.Goods[3],"add");
				PutZB(GameGood.Goods[2],"add");
				EventType=2;
				AddEvent(0,"GameText.ShowMsg(this.Name+\"：终于到了！这就是武夷山吧，果然山清水秀，别有一番姿态！\",5)");
				AddEvent(1,"GameText.Memo(\"好几天的跋山涉水，独孤剑终于来到武夷山！\")");
				AddEvent(2,"AllEnd()");
			}
		}
		init();
	}
	with(GameRoles[1]){
		Name="锄草人";
		IMG="images/ccnm_asf.gif";
		StandRoles=[[20,0,0,0,65,70,0,-18,50]];
		X=15;Y=21;
		CanTurn=false;
		AddEvent(0,"if(Event<5)this.EventGoto(3)");
		AddEvent(1,"GameText.ShowMsg(this.Name+\"：世风日下啊！\")");
		AddEvent(2,"this.EventGoto(12)");
		AddEvent(3,"GameText.ShowMsg(GameRoles[0].Name+\"：请问老伯，这附近可有酒家啊？\",5)");
		AddEvent(4,"GameText.ShowMsg(this.Name+\"：上方出口过去有个酒家，不过现在世风日下，最近那里强盗不少啊。不过看你身背长剑，估计也是个武林侠士，对付几个毛贼应该不成问题吧。\")");
		AddEvent(5,"GameText.ShowMsg(GameRoles[0].Name+\"：见笑了。在下衡山掌门独孤剑。\",5)");
		AddEvent(6,"GameText.ShowMsg(this.Name+\"：原来是独孤少侠啊，不错不错，真是年轻有为啊！(暗想：现在冒牌那么多，谁知道你是不是啊，我又没有见过衡山掌门啥样...)\")");
		AddEvent(7,"GameText.ShowMsg(GameRoles[0].Name+\"：......\",5)");
		AddEvent(8,"GameText.ShowMsg(this.Name+\"：咳咳...右下方的路是通往客栈的...\")");
		AddEvent(9,"GameText.ShowMsg(GameRoles[0].Name+\"：......\",5)");
		AddEvent(10,"GameText.ShowMsg(GameRoles[0].Name+\"：谢谢老伯！\",5)");
		AddEvent(11,"Event=5");
		AddEvent(12,"AllEnd()");
		init();
	}

	document.getElementById("game_eval").run='GameScene.SetNewScene(1920,700);GameRoles[0].SetPlayerScn();';
	if(IsLoad)
		document.getElementById("game_eval").run+='document.getElementById("loadgame").style.display="none";document.getElementById("SystemMenu").style.display="none";';
	document.getElementById("game_eval").SoundRun='audio.PlayBGM("musics/ningxian.mp3");';

	GameTime.Init();

	GameGood.ShowGood(0,10,15,15);

	GameEvent.AddEvent("19,0;18,0;17,0;","ClearAll();if(Event<5){GameText.ShowMsg(\"这条路也不知道通往哪里的，还是先问问路吧。\",5);}else{audio.StopBGM();ClearAll();GameTime.Pause();GameScene.GotoScene(1);console.log('go to game scene 1');}");
	GameEvent.AddEvent("44,0;45,0;44,1;45,1","if(Event<5){GameText.ShowMsg(\"这条路也不知道通往哪里的，还是先问问路吧。\",5);}else if(Event<10){GameText.ShowMsg(\"日当正午，我还是先去上面酒家吧。\",5);}else{audio.StopBGM();ClearAll();GameTime.Pause();GameRoles[0].X=3;GameRoles[0].Y=90;GameRoles[0].D=7;GameScene.GotoScene(3);console.log('go to game scene 3');}");

	WindowImageLoader.Add("pictures/wys/wys1.gif");
	WindowImageLoader.Add("pictures/wys/wys2.gif");
	WindowImageLoader.Add("pictures/wys/wys3.gif");
	WindowImageLoader.Add("pictures/wys/wys4.gif");
	WindowImageLoader.Add("images/player_asf.gif");
	WindowImageLoader.Add("images/ccnm_asf.gif");
	WindowImageLoader.Load();

	GameScene.ScenesData[GameScene.SceneID][1]=false;
	GameScene.ScenesData[GameScene.SceneID][2]=false;
	state="new";
}

function ClearAll(){
	for(var i in GameRoles){
		window.clearTimeout(GameRoles[i].Times);
		GameRoles[i].Times=null;
	}
}