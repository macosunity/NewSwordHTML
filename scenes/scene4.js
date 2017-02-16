function Scene4()
{
	n_path="8,32;10,31;11,30;10,30;11,29;12,28;13,28;14,27;13,27;14,26;16,25;15,25;18,23;18,22;20,21;19,21;23,17;24,17;24,16;25,16;25,15;13,26;11,24;11,23;12,24;13,25;10,22;9,21;7,20;5,20;4,21;4,20;3,22;3,21;2,23;2,24;3,23;2,25;2,26;3,26;3,27;2,28;3,29;2,29;2,27;8,25;9,24;8,24;7,21;6,20;9,22;9,23;5,31;6,32;7,33;5,32;6,33;7,34;8,34;9,35;10,36;11,37;12,38;13,39;8,35;9,36;10,37;11,38;12,39;14,38;15,37;16,36;17,36;18,37;19,37;20,36;21,35;22,34;23,33;22,32;21,31;22,30;23,29;24,28;22,31;23,32;23,34;22,35;21,36;20,37;17,37;16,37;15,38;14,39;23,30;24,29;25,27;26,26;27,25;25,28;26,27;27,26;27,24;28,23;28,22;29,21;29,20;30,19;31,18;31,17;30,16;30,20;31,19;29,22;28,24;30,15;29,14;29,13;28,12;27,11;30,14;31,16;29,12;28,11;27,10;26,13;27,15;27,16;28,17;27,18;27,19;26,20;26,21;25,22;27,17;26,19;25,21;24,21;24,20;23,20;23,18;22,19;23,19;19,20;18,19;17,18;16,17;13,14;12,13;11,14;9,16;8,17;7,18;7,19;7,17;8,16;11,13;11,15;11,16;10,16;13,13;14,14;15,15;16,16;17,17;18,18;19,19;18,7;19,8;21,10;22,11;23,12;24,13;23,11;22,10;19,7;17,8;15,10;14,11;13,12;13,11;14,10;17,7;17,9;17,10;16,10;19,9;20,10;20,9;4,31;4,30;4,28;24,12;25,10;24,11;24,10;26,9;25,9;27,9;9,29;8,27;9,28;10,29;15,18;16,19;17,19;16,18;14,16;13,16;14,17;13,15;26,12;27,14;25,11;25,12;25,13;26,14;25,14;8,33;12,29;15,26;19,22;22,18;4,29;5,28;10,23;8,28;21,11;22,12;21,12;22,13;14,25;8,20;18,20;20,20;12,25;8,21;17,20;15,16;15,17;14,15;"

	HTML='<img src="pictures/kzx/kzx6.gif" style="left:322;top:487;z-index:28;"><img src="pictures/kzx/kzx5.gif" style="left:410;top:503;z-index:28;"><img src="pictures/kzx/kzx7.gif" style="left:317;top:541;z-index:33;"><img src="pictures/kzx/kzx8.gif" style="left:384;top:453;z-index:29;"><img src="pictures/kzx/kzx9.gif" style="left:558;top:377;z-index:26;"><img src="pictures/kzx/kzx10.gif" style="left:710;top:296;z-index:22;"><img src="pictures/kzx/kzx16.gif" style="left:873;top:207;z-index:18;"><img src="pictures/kzx/kzx12.gif" style="left:158;top:466;z-index:29;"><img src="pictures/kzx/kzx13.gif" style="left:200;top:426;z-index:28;"><img src="pictures/kzx/kzx14.gif" style="left:278;top:385;z-index:26;"><img src="pictures/kzx/kzx15.gif" style="left:358;top:358;z-index:23;"><img src="pictures/kzx/kzx17.gif" style="left:448;top:371;z-index:25;"><img src="pictures/kzx/kzx18.gif" style="left:401;top:348;z-index:23;"><img src="pictures/kzx/kzx19.gif" style="left:279;top:288;z-index:21;"><img src="pictures/kzx/kzx20.gif" style="left:641;top:243;z-index:20;"><img src="pictures/kzx/kzx21.gif" style="left:600;top:223;z-index:17;"><img src="pictures/kzx/kzx22.gif" style="left:500;top:178;z-index:15;">';
	for(var i=1;i<=40;i++){
		HTML+='<img src="pictures/kzx/kzx_'+i+'.jpg" style="position:static;">';
		if(i%10==0&&i!=40)
			HTML+='<br>';
		WindowImageLoader.Add("pictures/kzx/kzx_"+i+".jpg");
	}

	ClearAllSet();
	for(var i=0;i<6;i++){
		if(i==0){
			if(IsLoad)
				GameRoles[i]=new GamePlayer();
		}
		else if(i<5)
			GameRoles[i]=new GameRole();
		else
			GameRoles[i]=new SellRole();
		GameRoles[i].NUM=i;
		GameRoles[i].EventList=new Array();
	}
	with(GameRoles[0]){
		if(IsFirstIn||IsLoad){
			Name="独孤剑";
			IMG="images/player_asf.gif";
			StandRoles=[[19,0,0,0,56,75,0,4,50],[14,13,0,-1120,95,86,0,-18,50]];
			MoveRoles=[[14,4,-600,0,67,81,0,-6,35]];
			RunRoles=[[11,3,-1248,0,80,88,-3,-14,40]];
			AttackRoles=[[24,0,-1952,0,172,120,-20,-58,30,"9,10,11"]];
			IsPlayer=true;
		}
		init();
	}
	with(GameRoles[1]){
		Name="林寒青";
		D=5;
		X=4;Y=23;
		IMG="images/ss_asf.gif";
		StandRoles=[[14,0,0,0,62,71,0,-3,100]];
		AddEvent(0,"GameText.ShowMsg(this.Name+\"：山雨欲来风满楼...江湖纷争，何处才是净土？\")");
		AddEvent(1,"this.D=this.D;this.SetD();");
		AddEvent(2,"AllEnd()");
		init();
	}
	with(GameRoles[2]){
		Name="钱桂";
		D=3;
		X=13;Y=17;
		IMG="images/116_asf.gif";
		StandRoles=[[18,0,0,0,54,75,0,0,100]];
		AddEvent(0,"GameText.ShowMsg(this.Name+\"：这家客栈属于龙帮旗下，生意一直都不错。只是最近突然住店的人少了许多，看来江湖上又要发生什么事情了！\")");
		AddEvent(1,"this.D=this.D;this.SetD();");
		AddEvent(2,"AllEnd()");
		init();
	}
	with(GameRoles[3]){
		Name="掌柜的";
		D=3;
		X=23;Y=21;
		IMG="images/zg_asf.gif";
		StandRoles=[[9,0,0,0,59,74,0,0,100]];
		AddEvent(0,"GameText.ShowMsg(this.Name+\"：客官要住店吗？\")");
		AddEvent(1,"GameText.ShowMsg(GameRoles[0].Name+\"：不用。\",5)");
		AddEvent(2,"this.D=this.D;this.SetD();");
		AddEvent(3,"AllEnd()");
		init();
	}
	with(GameRoles[4]){
		Name="小二";
		D=3;
		X=21;Y=28;
		IMG="images/xer_asf.gif";
		StandRoles=[[18,0,0,0,56,70,0,0,100]];
		AddEvent(0,"GameText.ShowMsg(this.Name+\"：这几天生意越来越不好了。再过几天，我就回家种地去了。\")");
		AddEvent(1,"GameText.ShowMsg(GameRoles[0].Name+\"：......\",5)");
		AddEvent(2,"this.D=this.D;this.SetD();");
		AddEvent(3,"AllEnd()");
		init();
	}
	with(GameRoles[5]){
		Name="皮货商人";
		D=0;
		X=13;Y=33;
		IMG="images/116_asf.gif";
		StandRoles=[[18,0,0,0,54,75,0,0,100]];
		SellGoods=[21,22,24,28,33];
		AddEvent(0,"GameText.ShowMsg(this.Name+\"：上等的皮货，客官请看。\")");
		AddEvent(1,"this.ShowGoods()#!GameRoles[0].IsSelling");
		AddEvent(2,"this.D=this.D;this.SetD();");
		AddEvent(3,"AllEnd()");
		init();
	}

	document.getElementById("game_eval").run='GameScene.SetNewScene(1280,960);GameRoles[0].SetPlayerScn();';
	if(IsLoad)
		document.getElementById("game_eval").run+='document.getElementById("loadgame").style.display="none";document.getElementById("SystemMenu").style.display="none";';

	GameTime.Init();

	GameEvent.AddEvent("26,10;26,11","ClearAll();GameTime.Pause();GameRoles[0].X=26;GameRoles[0].Y=17;GameRoles[0].D=5;GameScene.GotoScene(2);");
	GameEvent.AddEvent("18,36;19,35;20,34;21,33;22,33;21,34;20,35;19,36","ClearAll();GameTime.Pause();GameRoles[0].X=18;GameRoles[0].Y=8;GameRoles[0].D=2;GameScene.GotoScene(6);");

	WindowImageLoader.Add("images/player_asf.gif");

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

