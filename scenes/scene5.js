function Scene5()
{
	n_path="18,22;17,23;16,24;15,24;14,25;13,26;12,27;11,28;10,28;9,27;8,26;7,25;7,23;11,18;12,18;13,17;15,14;16,13;17,13;16,14;18,12;19,13;20,14;21,15;22,16;21,16;22,17;21,18;20,19;19,20;19,21;19,22;20,20;21,19;22,18;18,23;17,24;15,25;14,26;13,27;12,28;9,28;8,27;7,26;6,21;5,20;4,19;5,19;3,19;3,18;3,17;4,16;4,15;5,14;6,12;5,13;7,13;8,14;9,15;10,15;11,16;12,17;12,16;11,15;9,14;10,14;9,13;8,12;7,12;8,13;4,14;3,16;5,12;6,22;5,21;6,23;7,24;7,22;8,22;21,14;20,13;19,12;12,7;13,8;14,8;13,7;11,8;11,9;10,9;8,11;11,7;14,9;14,10;15,11;15,10;16,12;16,11;17,12;13,16;10,24;11,24;11,23;10,23;9,25;11,25;10,25;12,25;9,9;8,10;8,9;12,14;12,15;11,14;"

	HTML='<img src="pictures/rj/rj2.gif" style="left:381;top:442;z-index:25;"><img src="pictures/rj/rj3.gif" style="left:299;top:130;z-index:14;"><img src="pictures/rj/rj4.gif" style="left:163;top:374;z-index:24;"><img src="pictures/rj/rj9.gif" style="left:252;top:284;z-index:22;"><img src="pictures/rj/rj5.gif" style="left:406;top:195;z-index:18;"><img src="pictures/rj/rj6.gif" style="left:581;top:150;z-index:15;"><img src="pictures/rj/rj7.gif" style="left:669;top:126;z-index:12;">';
	for(var i=1;i<=40;i++){
		HTML+='<img src="pictures/rj/rj_'+i+'.jpg" style="position:static;">';
		if(i%10==0&&i!=40)
			HTML+='<br>';
		WindowImageLoader.Add("pictures/rj/rj_"+i+".jpg");
	}

	ClearAllSet();
	for(var i=0;i<3;i++){
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
		Name="展廷";
		D=3;
		X=18;Y=15;
		IMG="images/116_asf.gif";
		StandRoles=[[18,0,0,0,54,75,0,0,100]];
		AddEvent(0,"GameText.ShowMsg(this.Name+\"：先祖积德，这些年龙帮帮了我们很多忙，我展廷作牛作马也无以为报啊！\")");
		AddEvent(1,"if(Event==30||Event>=40)this.EventGoto(10);");
		AddEvent(2,"GameText.ShowMsg(GameRoles[0].Name+\"：(龙帮以德报德，作风到是不差...)\",5)");
		AddEvent(3,"if(Event<40)this.EventGoto(4);");
		AddEvent(4,"if(Event<30&&Event!=29)this.EventGoto(8);");
		AddEvent(5,"GameText.ShowMsg(GameRoles[0].Name+\"：(听刚才管家的话，好象有什么难言之隐......不好，我中了武夷派调虎离山之计了。\")");
		AddEvent(6,"GameText.Memo(\"在龙帮内没有发现可疑之处。发现中计，赶快前往武夷派。\")");
		AddEvent(7,"Event=40;this.EventGoto(10);");
		AddEvent(8,"GameText.ShowMsg(GameRoles[0].Name+\"：(这里没有什么可疑的，还是去客栈瞧瞧)\")");
		AddEvent(9,"Event=30");
		AddEvent(10,"this.D=this.D;this.SetD();");
		AddEvent(11,"AllEnd()");

		init();
	}
	with(GameRoles[2]){
		Name="展莹";
		D=0;
		X=13;Y=20;
		IMG="images/tjnh_asf.gif";
		StandRoles=[[16,0,0,0,58,61,0,-5,70]];
		CanTurn=false;
		AddEvent(0,"GameText.ShowMsg(this.Name+\"：龙大叔经常带我出去玩呢。看，这个毽子就是他带给我的。他人可好了！\")");
		AddEvent(1,"this.D=this.D;this.SetD();");
		AddEvent(2,"AllEnd()");
		init();
	}

	document.getElementById("game_eval").run='GameScene.SetNewScene(960,640);GameRoles[0].SetPlayerScn();';
	if(IsLoad)
		document.getElementById("game_eval").run+='document.getElementById("loadgame").style.display="none";document.getElementById("SystemMenu").style.display="none";';

	GameTime.Init();

	GameEvent.AddEvent("16,23;17,22;18,21","ClearAll();GameTime.Pause();GameRoles[0].X=0;GameRoles[0].Y=28;GameRoles[0].D=1;GameScene.GotoScene(6);");

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
