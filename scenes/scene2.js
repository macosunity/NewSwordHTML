function Scene2()
{
	n_path="29,23;28,24;27,25;26,26;24,28;29,21;29,22;25,27;27,16;26,15;25,14;24,14;26,14;27,15;23,15;22,16;20,18;19,19;23,14;22,15;19,18;18,18;17,17;15,15;14,14;13,12;14,13;15,14;16,16;16,15;17,16;18,17;14,11;15,10;16,9;17,8;18,8;19,9;19,8;16,8;14,10;13,11;20,10;20,11;21,12;22,13;23,13;22,12;21,11;20,9;12,14;13,14;9,16;8,17;10,17;11,18;13,20;14,21;16,23;17,24;18,25;20,27;21,28;22,29;22,28;21,27;23,28;18,24;17,23;16,22;15,21;14,20;11,17;8,16;7,18;6,19;5,20;5,21;4,21;3,22;3,23;3,24;2,25;2,26;3,26;3,27;3,28;3,29;4,30;2,24;5,31;6,32;7,33;8,34;9,35;10,36;12,38;13,39;17,35;18,34;19,33;20,32;21,31;22,30;22,31;21,32;20,33;18,35;17,36;12,39;9,36;8,35;7,34;3,30;3,21;6,22;11,27;12,28;13,29;16,32;17,33;18,33;17,32;13,28;12,27;10,28;10,25;6,21;6,18;6,31;6,33;10,29;14,36;15,35;15,36;14,38;16,36;14,37;14,39;12,36;11,36;11,35;12,37;16,24;15,24;14,24;12,26;13,25;13,24;12,25;11,26;14,23;15,23;15,22;19,29;20,29;19,30;20,30;11,14;13,13;28,17;5,19;10,16;16,10;5,29;6,28;7,27;8,26;8,27;7,28;6,29;5,30;8,18;9,18;10,15;10,14;16,31;15,31;9,24;9,25;9,30;9,31;8,31;8,32;7,32;10,27;10,26;9,26;9,29;28,18;27,20;26,19;25,18;28,21;28,23;27,24;26,25;25,26;24,27;28,20;27,19;26,18;29,19;29,18;29,20;28,16;9,19;14,35;18,30;";

	HTML='<div style="width:1280px"><ul style="margin:0;padding:0;overflow:hidden;">';

	for(var i=1;i<=40;i++){
		HTML+='<li style="margin:0;padding:0;list-style-type:none;float:left;width:128px;height:240px;overflow:hidden;"><img src="pictures/kzs/kzs_'+i+'.jpg" style="display:block;width:128px;height:240px;border:0;margin:0;padding:0;"></li>';
		if(i%10==0&&i!=40)
		{
			HTML+='</ul><ul style="margin:0;padding:0;overflow:hidden;">';
		}
		WindowImageLoader.Add("pictures/kzs/kzs_"+i+".jpg");
	}

	HTML+='</ul><img src="pictures/kzs/kzs11.gif" style="left:842;top:173;z-index:15;"><img src="pictures/kzs/kzs12.gif" style="left:764;top:249;z-index:18;"><img src="pictures/kzs/kzs21.gif" style="left:680;top:236;z-index:18;"><img src="pictures/kzs/kzs22.gif" style="left:528;top:160;z-index:15;"><img src="pictures/kzs/kzs31.gif" style="left:784;top:424;z-index:28;"><img src="pictures/kzs/kzs32.gif" style="left:600;top:332;z-index:24;"><img src="pictures/kzs/kzs33.gif" style="left:504;top:284;z-index:21;"><img src="pictures/kzs/kzs34.gif" style="left:393;top:229;z-index:17;"><img src="pictures/kzs/kzs41.gif" style="left:640;top:524;z-index:33;"><img src="pictures/kzs/kzs42.gif" style="left:581;top:495;z-index:31;"><img src="pictures/kzs/kzs43.gif" style="left:362;top:386;z-index:28;"><img src="pictures/kzs/kzs44.gif" style="left:309;top:359;z-index:24;"><img src="pictures/kzs/kzs45.gif" style="left:213;top:313;z-index:22;"><img src="pictures/kzs/kzs51.gif" style="left:480;top:353;z-index:25;"><img src="pictures/kzs/kzs52.gif" style="left:240;top:431;z-index:28;"><img src="pictures/kzs/kzs53.gif" style="left:201;top:514;z-index:30;"><img src="pictures/kzs/kzs61.gif" style="left:1079;top:368;z-index:20;"><img src="pictures/kzs/kzs62.gif" style="left:1022;top:333;z-index:18;"><img src="pictures/kzs/kzs4.gif" style="left:739;top:565;z-index:30;"><img src="pictures/kzs/kzs3.gif" style="left:911;top:423;z-index:28;"></div>';

	ClearAllSet();

	for(var i=0;i<6;i++){
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
		Name="慕容雨";
		D=2;
		X=18;Y=11;
		IMG="images/nv_asf.gif";
		StandRoles=[[21,0,0,0,57,68,0,6,100]];
		AddEvent(0,"GameText.ShowMsg(this.Name+\"：你怎么乱闯人家房间？\")");
		AddEvent(1,"this.D=this.D;this.SetD();");
		AddEvent(2,"AllEnd()");
		init();
	}
	with(GameRoles[2]){
		Name="南宫白";
		D=7;
		X=10;Y=21;
		IMG="images/sj_asf.gif";
		StandRoles=[[16,0,0,0,100,81,7,-23,100]];
		MoveRoles=[[14,0,0,-1700,110,86,2,-25,40]];
		AttackRoles=[[16,0,-1592,0,150,131,-34,-37,50,"5,6,9,10"]];
		DeadRoles=[[16,0,-688,0,182,113,6,-74,35]];
		AddEvent(0,"GameText.ShowMsg(this.Name+\"：看兄台英气逼人，定是非凡之人。不知可否加入我青合帮？\")");
		AddEvent(1,"GameText.ShowMsg(GameRoles[0].Name+\"：......\",5)");
		AddEvent(2,"GameText.ShowMsg(this.Name+\"：天下帮派，唯我青合独尊！\")");
		AddEvent(3,"this.D=this.D;this.SetD();");
		AddEvent(4,"AllEnd()");
		init();
	}
	with(GameRoles[3]){
		Name="白沙禾";
		D=0;
		X=11;Y=32;
		IMG="images/gj_asf.gif";
		StandRoles=[[18,0,0,0,53,73,0,4,100]];
		MoveRoles=[[9,3,-584,0,58,77,2,-3,50]];
		CanTurn=false;
		AddEvent(0,"GameText.ShowMsg(\"白沙禾：许兄听到江湖上最近有什么动静吗？\")");
		AddEvent(1,"GameText.ShowMsg(\"许平：不知白兄指的是......\")");
		AddEvent(2,"GameText.ShowMsg(\"白沙禾：还指什么啊，就是五色教和龙帮的事啊。两大帮派已经明争暗斗很久了，这次竟然直接公然对决，不知是什么原因。\")");
		AddEvent(3,"GameText.ShowMsg(\"许平：不错！兄弟从关洛那带过来，也听大家都在议论纷纷。这样激化，会不会因为......\")");
		AddEvent(4,"GameText.ShowMsg(\"白沙禾：兄弟不可多言，小心隔墙有耳！\")");
		AddEvent(5,"AllEnd()");
		init();
	}
	with(GameRoles[4]){
		Name="许平";
		D=4;
		X=12;Y=32;
		IMG="images/116_asf.gif";
		StandRoles=[[18,0,0,0,54,75,0,0,100]];
		CanTurn=false;
		AddEvent(0,"GameText.ShowMsg(\"白沙禾：许兄听到江湖上最近有什么动静吗？\")");
		AddEvent(1,"GameText.ShowMsg(\"许平：不知白兄指的是......\")");
		AddEvent(2,"GameText.ShowMsg(\"白沙禾：还指什么啊，就是五色教和龙帮的事啊。两大帮派已经明争暗斗很久了，这次竟然直接公然对决，不知是什么原因。\")");
		AddEvent(3,"GameText.ShowMsg(\"许平：不错！兄弟从关洛那带过来，也听大家都在议论纷纷。这样激化，会不会因为......\")");
		AddEvent(4,"GameText.ShowMsg(\"白沙禾：兄弟不可多言，小心隔墙有耳！\")");
		AddEvent(5,"AllEnd()");
		init();
	}
	with(GameRoles[5]){
		Name="叶知秋";
		D=5;
		X=24;Y=22;
		IMG="images/bt_asf.gif";
		StandRoles=[[15,0,0,0,50,70,1,3,100]];
		AddEvent(0,"if(Event>30||Event>=40)this.EventGoto(18);");
		AddEvent(1,"GameText.ShowMsg(GameRoles[0].Name+\"：看阁下容貌，莫非是叶老前辈？\",5)");
		AddEvent(2,"GameText.ShowMsg(this.Name+\"：老夫正是叶知秋。\")");
		AddEvent(3,"GameText.ShowMsg(GameRoles[0].Name+\"：果然。我是独孤剑，前辈定然不识。家师柳中原，曾与前辈有过一面之缘。\",5)");
		AddEvent(4,"GameText.ShowMsg(this.Name+\"：是啊，如今是老了。\")");
		AddEvent(5,"GameText.ShowMsg(GameRoles[0].Name+\"：前辈已经归隐多年，不知什么事惊动了前辈？\",5)");
		AddEvent(6,"GameText.ShowMsg(this.Name+\"：还不是些帮派之争。五色教是恶名昭著，我是来看看这龙帮的名声如何的？\")");
		AddEvent(7,"GameText.ShowMsg(GameRoles[0].Name+\"：老前辈查到什么没有？\",5)");
		AddEvent(8,"GameText.ShowMsg(this.Name+\"：通过我这几天的调查，这龙帮行事倒不脱侠义本色。\")");
		AddEvent(9,"GameText.ShowMsg(GameRoles[0].Name+\"：这样啊...有老前辈的话，晚辈就放心了。实不相瞒，晚辈来此也是来确认龙帮的所作所为的，既然老前辈在此，晚辈就先走一步。日后还请老前辈到衡山一游。\",5)");
		AddEvent(10,"GameText.ShowMsg(this.Name+\"：那就他日再叙。\")");
		AddEvent(11,"GameText.ShowMsg(GameRoles[0].Name+\"：晚辈告辞！\",5)");
		AddEvent(12,"this.D=this.D;this.SetD();");
		AddEvent(13,"if(Event==30){Event=40;}else{Event=29;}");
		AddEvent(14,"if(Event<40)this.EventGoto(21);");
		AddEvent(15,"GameText.ShowMsg(GameRoles[0].Name+\"：（看这情形，我真是上了武夷派的当了。还是快点赶去，说不定还来的及）\",5)");
		AddEvent(16,"GameText.Memo(\"赶去武夷派。\")");
		AddEvent(17,"this.EventGoto(21);");
		AddEvent(18,"GameText.ShowMsg(this.Name+\"：据我这几天调查，龙帮内部倒是侠义分明。\")");
		AddEvent(19,"GameText.ShowMsg(GameRoles[0].Name+\"：有老前辈的话，晚辈就放心了。\",5)");
		AddEvent(20,"this.D=this.D;this.SetD();");
		AddEvent(21,"AllEnd()");
		init();
	}

	document.getElementById("game_eval").run='GameScene.SetNewScene(1280,960);GameRoles[0].SetPlayerScn();';
	if(IsLoad)
		document.getElementById("game_eval").run+='document.getElementById("loadgame").style.display="none";document.getElementById("SystemMenu").style.display="none";';

	GameTime.Init();

	GameEvent.AddEvent("27,17;26,17","ClearAll();GameTime.Pause();GameRoles[0].X=26;GameRoles[0].Y=11;GameRoles[0].D=1;GameScene.GotoScene(4);");

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