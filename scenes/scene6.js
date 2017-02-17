function Scene6()
{
	n_path="12,43;13,43;14,42;15,41;16,40;17,39;18,38;19,37;20,37;21,38;22,37;23,36;24,35;25,34;26,33;27,32;28,31;27,29;28,30;28,28;29,27;30,26;31,25;31,18;30,17;29,16;28,15;27,14;26,13;25,12;24,11;23,10;22,9;21,8;20,7;19,7;17,9;16,10;15,11;14,12;14,15;15,16;15,17;14,18;10,22;9,23;8,24;7,23;6,21;8,23;15,18;14,14;14,13;13,14;12,15;11,16;10,17;9,18;8,19;7,19;6,20;6,19;8,18;9,17;10,16;11,15;12,14;17,15;17,14;18,14;18,13;20,19;20,18;21,17;21,18;22,30;5,22;4,22;3,23;2,24;1,25;1,26;5,27;5,26;6,26;6,25;8,30;9,29;10,28;8,29;9,28;12,33;13,32;11,42;10,41;9,40;8,39;7,38;6,37;5,36;4,35;3,34;2,33;1,32;0,31;0,26;0,32;1,33;2,34;3,35;4,36;5,37;6,38;7,39;8,40;9,41;10,42;11,43;14,43;15,42;16,41;17,40;14,38;10,35;11,35;7,31;4,28;3,28;18,34;15,31;11,27;16,20;16,19;17,21;17,20;18,21;21,25;21,24;20,24;20,23;19,23;16,29;17,29;16,28;15,28;15,29;13,26;12,25;13,25;12,24;11,24;18,6;17,7;17,8;17,6;19,6;21,7;22,8;23,9;24,10;25,11;26,12;19,12;17,10;23,16;26,19;30,23;30,22;31,26;30,27;29,28;28,29;31,17;30,16;29,15;28,14;27,13;28,32;27,33;26,34;25,35;24,36;23,37;22,38;14,19;1,24;2,23;3,22;18,39;19,38;20,38;26,26;26,27;22,23;23,22;19,20;14,11;15,10;5,23;6,22;9,22;7,22;6,23;22,31;22,16;22,17;19,13;15,15;24,21;26,20;25,20;24,22;7,25;12,34;14,32;"

	HTML='<div style="width:1280px"><ul style="margin:0;padding:0;overflow:hidden;">';

	for(var i=1;i<=40;i++){
		HTML+='<li style="margin:0;padding:0;list-style-type:none;float:left;width:128px;height:240px;overflow:hidden;"><img src="pictures/dt/dt_'+i+'.jpg" style="display:block;width:128px;height:240px;border:0;margin:0;padding:0;"></li>';
		if(i%10==0&&i!=40)
		{
			HTML+='</ul><ul style="margin:0;padding:0;overflow:hidden;">';
		}
		WindowImageLoader.Add("pictures/dt/dt_"+i+".jpg");
	}

	HTML+='</ul><img src="pictures/dt/dt10.gif" style="left:649;top:366;z-index:21;"><img src="pictures/dt/dt11.gif" style="left:783;top:433;z-index:24;"><img src="pictures/dt/dt12.gif" style="left:664;top:184;z-index:14;"><img src="pictures/dt/dt13.gif" style="left:795;top:250;z-index:18;"><img src="pictures/dt/dt7.gif" style="left:474;top:649;z-index:34;"><img src="pictures/dt/dt8.gif" style="left:534;top:619;z-index:32;"><img src="pictures/dt/dt14.gif" style="left:941;top:415;z-index:22;"><img src="pictures/dt/dt15.gif" style="left:1002;top:385;z-index:20;"><img src="pictures/dt/dt9.gif" style="left:868;top:578;z-index:31;"><img src="pictures/dt/dt5.gif" style="left:197;top:418;z-index:26;"><img src="pictures/dt/dt6.gif" style="left:328;top:484;z-index:29;"><img src="pictures/dt/dt21.gif" style="left:502;top:605;z-index:38;"><img src="pictures/dt/dt22.gif" style="left:365;top:536;z-index:35;"><img src="pictures/dt/dt23.gif" style="left:226;top:468;z-index:31;"><img src="pictures/dt/dt24.gif" style="left:56;top:387;z-index:28;"><img src="pictures/dt/dt41.gif" style="left:670;top:524;z-index:34;"><img src="pictures/dt/dt42.gif" style="left:534;top:456;z-index:31;"><img src="pictures/dt/dt43.gif" style="left:394;top:386;z-index:27;"><img src="pictures/dt/dt44.gif" style="left:224;top:303;z-index:24;"><img src="pictures/dt/dt31.gif" style="left:982;top:370;z-index:26;"><img src="pictures/dt/dt32.gif" style="left:848;top:303;z-index:23;"><img src="pictures/dt/dt33.gif" style="left:707;top:232;z-index:20;"><img src="pictures/dt/dt34.gif" style="left:533;top:148;z-index:16;"><img src="pictures/dt/dt51.gif" style="left:1138;top:294;z-index:22;"><img src="pictures/dt/dt52.gif" style="left:1002;top:226;z-index:19;"><img src="pictures/dt/dt53.gif" style="left:861;top:155;z-index:16;"><img src="pictures/dt/dt54.gif" style="left:688;top:71;z-index:12;"></div>';


	ClearAllSet();
	for(var i=0;i<2;i++){
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
			EventType=2;
			if(IsFirstIn){
				AddEvent(0,"GameText.ShowMsg(this.Name+\"：没想到这里竟然别有洞天！\",5)");
				AddEvent(1,"GameRoles[1].MoveTo([this.X-1,this.Y-1])#GameRoles[1].IsStoping");
				AddEvent(2,"GameRoles[1].D=1;GameRoles[1].SetD();");
				AddEvent(3,"GameText.ShowMsg(GameRoles[1].Name+\"：这里乃龙帮府邸，阁下何人，胆敢在此乱闯！\")");
				AddEvent(4,"GameText.ShowMsg(this.Name+\"：在下衡山独孤剑。方才听武夷派弟子说有一伙强盗在此出没，因此前来查看！\",5)");
				AddEvent(5,"GameText.ShowMsg(GameRoles[1].Name+\"：哦？那为何武夷派的人不来？\")");
				AddEvent(6,"GameText.ShowMsg(this.Name+\"：武夷派掌门不是已经来了吗？\",5)");
				AddEvent(7,"GameText.ShowMsg(GameRoles[1].Name+\"：没有见着。我们一直不与他们为伍，他们也不敢踏入我帮半步。\")");
				AddEvent(8,"GameText.ShowMsg(this.Name+\"：......\",5)");
				AddEvent(9,"GameText.ShowMsg(this.Name+\"：不知阁下可否允许我去找找？\",5)");
				AddEvent(10,"GameText.ShowMsg(GameRoles[1].Name+\"：下面出口过去是我龙帮的恩人的住处。上面是我帮旗下的客栈。\")");
				AddEvent(11,"GameText.ShowMsg(GameRoles[1].Name+\"：哎！今日帮中人都不在，我只是个管家。你找完就走吧。只是江湖行走，不可轻信别人才是！\")");
				AddEvent(12,"GameText.ShowMsg(this.Name+\"：多谢！\",5)");
				AddEvent(13,"GameRoles[1].MoveTo([24,27])#GameRoles[1].IsStoping");
				AddEvent(14,"Event=26;GameRoles[1].D=3;GameRoles[1].SetD();this.IsLocked=false;");
				AddEvent(15,"AllEnd()");
			}
		}
		init();
	}
	with(GameRoles[1]){
		Name="龙帮管家";
		D=3;
		X=24;Y=27;
		IMG="images/gj_asf.gif";
		StandRoles=[[18,0,0,0,53,73,0,4,100]];
		MoveRoles=[[9,3,-584,0,58,77,2,-3,50]];
		AddEvent(0,"GameText.ShowMsg(this.Name+\"：江湖险恶，小心为本！\")");
		AddEvent(1,"this.D=this.D;this.SetD();");
		AddEvent(2,"AllEnd()");
		init();
	}

	document.getElementById("game_eval").run='GameScene.SetNewScene(1280,960);GameRoles[0].SetPlayerScn();';
	if(IsLoad)
		document.getElementById("game_eval").run+='document.getElementById("loadgame").style.display="none";document.getElementById("SystemMenu").style.display="none";';

	if(IsFirstIn)
	{
		document.getElementById("game_eval").SoundRun='audio.PlayBGM("musics/westmoutain.mp3");';
	}

	GameTime.Init();

	GameEvent.AddEvent("18,7;18,8","ClearAll();GameTime.Pause();GameRoles[0].X=19;GameRoles[0].Y=34;GameRoles[0].D=5;GameScene.GotoScene(4);");

	GameEvent.AddEvent("0,27;0,28","ClearAll();GameTime.Pause();GameRoles[0].X=17;GameRoles[0].Y=22;GameRoles[0].D=5;GameScene.GotoScene(5);");

	GameEvent.AddEvent("21,37;22,36;23,35;24,34;25,33;26,32;27,31","if(Event>=40){audio.StopBGM();ClearAll();GameTime.Pause();GameRoles[0].X=8;GameRoles[0].Y=14;GameRoles[0].D=2;GameScene.GotoScene(3);}else{GameText.ShowMsg(\"独孤剑：再四处找找吧，说不定会有收获呢。\",5);}");

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

