function Scene1()
{
	console.log("current scene 1");

	n_path="8,25;9,24;10,23;11,22;11,23;12,24;13,24;14,23;15,22;15,21;14,20;14,19;15,18;16,17;17,16;18,15;19,14;19,13;18,12;17,11;16,11;15,11;14,12;13,13;12,14;11,14;10,13;7,13;6,12;14,9;13,8;12,8;11,9;10,10;9,11;5,13;4,14;3,15;2,16;2,17;2,18;2,19;2,20;3,20;4,21;5,22;6,23;7,24;14,14;15,14;15,13;13,12;12,13;14,11;15,10;15,9;14,8;11,8;10,9;9,10;8,11;18,11;19,12;19,15;18,16;17,17;15,15;14,15;16,14;16,18;15,19;15,20;15,23;14,24;11,24;10,24;9,25;7,25;6,24;5,23;4,22;3,21;2,15;3,14;4,13;5,12;7,12;11,13;6,19;7,18;5,20;6,18;5,19;9,21;9,20;9,19;8,19;8,20;8,21;4,16;5,15;5,16;6,16;5,17;4,17;8,12;10,12;11,12;12,12;"

	HTML='<img src="pictures/xjs/xjs6.gif" style="left:554px;top:257px;z-index:-1"><img src="pictures/xjs/xjs5.gif" style="left:156px;top:303px;z-index:-1"><img src="pictures/xjs/xjs1.gif" style="left:211px;top:310px;z-index:-1"><img src="pictures/xjs/xjs2.gif" style="left:396px;top:172px;z-index:-1"><img src="pictures/xjs/xjs3.gif" style="left:54px;top:160px;z-index:-1"><img src="pictures/xjs/xjs4.gif" style="left:303px;top:375px;z-index:-1">';
	for(var i=1;i<=40;i++){
		HTML+='<img src="pictures/xjs/xjs_'+i+'.jpg" style="position:static;">';
		if(i%10==0&&i!=40)
			HTML+='<br>';
		WindowImageLoader.Add("pictures/xjs/xjs_"+i+".jpg");
	}

	ClearAllSet(1);

	for(var i=0;i<4;i++){
		if(i==0){
			if(IsLoad)
				GameRoles[i]=new GamePlayer();
		}
		else
			GameRoles[i]=new GameRole();
		GameRoles[i].NUM=i;
		GameRoles[i].EventList=new Array();
	}
	with(GameRoles[0]){
		GameRoles[0].X=12;
		GameRoles[0].Y=20;
		GameRoles[0].D=5;

		EventList=new Array();
		Name="独孤剑";
		IMG="images/player_asf.gif";
		StandRoles=[[19,0,0,0,56,75,0,4,50],[14,13,0,-1120,95,86,0,-18,50]];
		MoveRoles=[[14,4,-600,0,67,81,0,-6,35]];
		RunRoles=[[11,3,-1248,0,80,88,-3,-14,40]];
		AttackRoles=[[24,0,-1952,0,172,120,-20,-58,30,"9,10,11"]];
		IsPlayer=true;
		if(IsFirstIn&&Event<10){
			EventType=2;
			AddEvent(0,"GameText.ShowMsg(this.Name+\"：终于到了，这路还真长呢。\",5)");
			AddEvent(1,"GameText.ShowMsg(this.Name+\"：小二，来点酒菜！......咦！\",5)");
			AddEvent(2,"GameText.ShowMsg(\"强盗甲：快把钱通通交出来，否则要你好看！\")");
			AddEvent(3,"GameText.ShowMsg(\"酒家老板：大爷饶了小的吧，小的做的薄本生意，就放过小的吧\")");
			AddEvent(4,"GameText.ShowMsg(\"强盗乙：少废话。不识抬举就把你这店给砸了！\")");
			AddEvent(5,"this.MoveTo([11,17])#this.IsStoping");
			AddEvent(6,"this.D=5;this.SetD();");
			AddEvent(7,"GameText.ShowMsg(this.Name+\"：住手！光天化日之下竟敢抢劫，还有王法吗？\",5)");
			AddEvent(8,"GameRoles[1].D=1;GameRoles[1].SetD();GameRoles[2].D=1;GameRoles[2].SetD();");
			AddEvent(9,"GameText.ShowMsg(\"强盗甲：你小子是哪里来的，竟然管大爷的闲事！\")");
			AddEvent(10,"this.ChangeState(\"TOstand\",1)");
			AddEvent(11,"GameText.ShowMsg(this.Name+\"：不管我哪里来的，让我遇上算你们倒霉吧！\",5)");
			AddEvent(12,"GameText.Memo(\"消灭强盗！\")");
			AddEvent(13,"AllEnd()");
		}
		init();
	}
	with(GameRoles[3]){
		Name="酒家老板";
		IMG="images/xer_asf.gif";
		StandRoles=[[18,0,0,0,56,70,0,0,100]];
		D=3;
		X=11;Y=11;
		AddEvent(0,"if(Event==10)this.EventGoto(3);");
		AddEvent(1,"GameText.ShowMsg(this.Name+\"：客官来点什么？\")");
		AddEvent(2,"this.EventGoto(6);");
		AddEvent(3,"GameText.ShowMsg(this.Name+\"：多谢大侠拔刀相助，这里有几坛老酒，答谢大侠！\")");
		AddEvent(4,"GameRoles[0].GetGood(GameGood.Goods[0]);GameRoles[0].GetGood(GameGood.Goods[0]);GameRoles[0].GetGood(GameGood.Goods[0]);");
		AddEvent(5,"GameText.SystemInfo(\"得到三坛\"+GameGood.Goods[0].NAME);Event=11;");
		AddEvent(6,"this.D=this.D;this.SetD();");
		AddEvent(7,"AllEnd()");
		init();
	}
	if(Event<10){
		with(GameRoles[1]){
			Name="强盗甲";
			IMG="images/mmsd_asf.gif";
			StandRoles=[[10,0,0,0,97,78,0,-29,100]];
			MoveRoles=[[14,0,0,-1067,103,88,-10,-21,40]];
			AttackRoles=[[21,0,-1712,0,163,126,-34,-58,50,"13,14,15"]];
			DeadRoles=[[16,0,-704,0,140,126,-35,-49,35]];
			BeAttackRoles=[[6,0,0,-2612,94,82,-4,-28,50]];
			D=7;
			Kind=2;
			X=9;Y=12;
			init();
		}
		with(GameRoles[2]){
			Name="强盗乙";
			IMG="images/mmsd_asf.gif";
			StandRoles=[[10,0,0,0,97,78,0,-29,100]];
			MoveRoles=[[14,0,0,-1067,103,88,-10,-21,40]];
			AttackRoles=[[21,0,-1712,0,163,126,-34,-58,50,"13,14,15"]];
			DeadRoles=[[16,0,-704,0,140,126,-35,-49,35]];
			BeAttackRoles=[[6,0,0,-2612,94,82,-4,-28,50]];
			D=7;
			Kind=2;
			X=9;Y=13;
			init();
		}
		GameTime.Add("if(!GameRoles[0].OnRole){document.getElementById(\"bloodrect\").style.display=\"none\";}",2,false,true);
		GameTime.Add("if(!GameRoles[1].WantAttack&&GameRoles[0].EventType!=2&&Math.abs(GameRoles[1].X-GameRoles[0].X)<=5&&Math.abs(GameRoles[1].Y-GameRoles[0].Y)<=5){GameRoles[1].AttackTo([GameRoles[0].X,GameRoles[0].Y]);}",5,false,true);
		GameTime.Add("if(!GameRoles[2].WantAttack&&GameRoles[0].EventType!=2&&Math.abs(GameRoles[2].X-GameRoles[0].X)<=5&&Math.abs(GameRoles[2].Y-GameRoles[0].Y)<=5){GameRoles[2].AttackTo([GameRoles[0].X,GameRoles[0].Y]);}",5,false,true);
		GameTime.Add("if(GameScene.CheckDead(1,2)&&GameRoles[0].IsStoping&&Event<10){console.log('Event is ', Event);Event=10;DoEvent1();}",5,false,true);
	}
	document.getElementById("game_eval").run='GameScene.SetNewScene(840,600);GameRoles[0].SetPlayerScn();';
	if(IsLoad)
		document.getElementById("game_eval").run+='document.getElementById("loadgame").style.display="none";document.getElementById("SystemMenu").style.display="none";';

	GameTime.Init();

	GameEvent.AddEvent("13,23;12,23;13,22;14,22","if(Event>=10){ClearAll();GameTime.Pause();GameRoles[0].X=18;GameRoles[0].Y=1;GameRoles[0].D=2;GameScene.GotoScene(0);}");

	WindowImageLoader.Add("pictures/xjs/xjs1.gif");
	WindowImageLoader.Add("pictures/xjs/xjs2.gif");
	WindowImageLoader.Add("pictures/xjs/xjs3.gif");
	WindowImageLoader.Add("pictures/xjs/xjs4.gif");
	WindowImageLoader.Add("pictures/xjs/xjs5.gif");
	WindowImageLoader.Add("pictures/xjs/xjs6.gif");
	WindowImageLoader.Add("images/player_asf.gif");
	WindowImageLoader.Add("images/mmsd_asf.gif");

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


function DoEvent1()
{
	console.log("Do Event!");
	document.getElementById("game_eval").DoEventGo='for(var i in GameRoles){if(GameRoles[i].IsDead)GameRoles[i].HideRole();}';
	with(GameRoles[0]){
		EventType=2;
		AddEvent(0,"GameText.ShowMsg(this.Name+\"：一群败类。把我吃饭的兴致都弄没了。\",5)");
		AddEvent(1,"AllEnd()");
	}
}