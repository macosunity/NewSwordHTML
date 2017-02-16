function WindowAudio()
{
	this.Volume=100;//当前音量
	this.BGS="";//当前BGS  环境音效
	this.BGM="";//当前BGM  背景音乐
	this.init=function()
	{
		var s="";
		document.getElementById("DivSEME").innerHTML=s;
	}
	this.StopBGM=function(){
		var DIV=document.getElementById("DivBGM");
		DIV.innerText="";
		this.BGM="";
	}
	this.PlayBGM=function(BGM)
	{
		if(this.BGM==BGM)return;
		this.BGM=BGM;
		var DIV=document.getElementById("DivBGM");
		DIV.innerText="";
		// DIV.innerHTML='<audio volume='+this.Volume+' id=BGM src="'+this.BGM+'" controls="controls"></audio>';
		DIV.innerHTML='<audio controls="controls" loop="true" autoplay="true"><source src="'+this.BGM+'" type="audio/mpeg"></audio>';
	}
	this.PlaySE=function(ID)
	{
		//var SE=document.getElementById("SE01");
		//SE.GotoFrame(0);
		//SE.GotoFrame(ID);
		//SE.Play();
	}
}