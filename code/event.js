function GameEvent()
{
	this.Events=new Array();
	this.AddEvent=function(Pos,code,IsTuch)//位置，代码，是否接触
	{
		var a=new Array();
		a.pos=Pos;
		a.event=code.split("#");
		a.isNull=false;
		if(IsTuch==null)
			a.istuch=false;
		else
			a.istuch=IsTuch;
		for(var i in this.Events)
		{
			if(this.Events[i]==null)
			{
				this.Events[i]=a;
				return;
			}
		}
		this.Events[this.Events.length]=a;
		return;
	}
	this.RunEvent=function(ID)
	{
		if(this.Events[ID].event[1]==""||this.Events[ID].event[1]==null)
		{
			eval(this.Events[ID].event[0]);return;
		}
	}
}