function FindPath(p_start,p_end){
	this.openlist=new Array();//从起点寻路用的开启列表
	this.closelist=new Array();//从起点寻路用的关闭列表
	this.openlist_end=new Array();//从终点寻路用的开启列表
	this.closelist_end=new Array();//从终点寻路用的关闭列表
	this.p_start=p_start;//起始点
	this.p_end=p_end;//目的地
	var num,num2;
	var h=(Math.abs(this.p_end[0]-this.p_start[0])+Math.abs(this.p_end[1]-this.p_start[1]))*gw;
	this.s_path=[h,0,h,this.p_start,this.p_start];//定义从起点寻路用的当前点
	this.s_path_end=[h,0,h,this.p_end,this.p_end];//定义从终点寻路用的当前点
	this.GetRound=function(pos){//得到周围的八个方块
		var a=new Array();
		a[0]=(pos[0]+1)+","+(pos[1]-1);
		a[1]=(pos[0]+1)+","+pos[1];
		a[2]=(pos[0]+1)+","+(pos[1]+1);
		a[3]=pos[0]+","+(pos[1]+1);
		a[4]=(pos[0]-1)+","+(pos[1]+1);
		a[5]=(pos[0]-1)+","+pos[1];
		a[6]=(pos[0]-1)+","+(pos[1]-1);
		a[7]=pos[0]+","+(pos[1]-1);
		return a;
	}
	this.GetF=function(arr,open,close,start,end,path){//求出各有用方块的F值
		var t,G,H,F;
		for(var i=0;i<arr.length;i++){
			t=arr[i].split(",");
			t[0]=parseInt(t[0]);t[1]=parseInt(t[1]);
			if(IsOutScreen([t[0],t[1]])||IsPass(arr[i])||InClose([t[0],t[1]],close)||IsStart([t[0],t[1]],start))//判断是否在这五种情况中||!IsInTurn([t[0],t[1]],path[3])
				continue;
			if((t[0]-path[3][0])*(t[1]-path[3][1])!=0)//得到G值，与当前方块的G值相加得到周围方块的G值
				G=path[1]+gwh;
			else
				G=path[1]+gw;
			if(InOpen([t[0],t[1]],open)){//判断节点是否在开启列表中，如果在就将原来的G值与现在算的G值比大小
				if(G<open[num][1]){//如果现在算的小，就把原来节点的G，F值更改，并将该节点的父节点指向当前节点
					open[num][0]=(G+open[num][2]);
					open[num][1]=G;
					open[num][4]=path[3];
				}
			}
			else{//如果不在，就创建新的元素，放到开启列表中。元素记录了F，G，H，当前坐标以及父节点的坐标
				H=(Math.abs(end[0]-t[0])+Math.abs(end[1]-t[1]))*gw;
				F=G+H;
				arr[i]=new Array();
				arr[i][0]=F;arr[i][1]=G;arr[i][2]=H;arr[i][3]=[t[0],t[1]];arr[i][4]=path[3];
				open[open.length]=arr[i];
			}
		}
	}
	function IsOutScreen(arr){
		if(arr[0]<0||arr[1]<0)
			return true;
		return false;
	}
	function IsStart(arr,arr2){//判断是否为起始点
		if(arr[0]==arr2[0]&&arr[1]==arr2[1])
			return true;
		return false;
	}
	function InOpen(arr,arr2){//判断是否在开启列表中
		var bool=false;
		for(var i=0;i<arr2.length;i++){
			if(arr[0]==arr2[i][3][0]&&arr[1]==arr2[i][3][1]){
				bool=true;num=i;break;}
		}
		return bool;
	}
	function InClose(arr,arr2){//判断是否在关闭列表中
		var bool=false;
		for(var i=0;i<arr2.length;i++){
			if((arr[0]==arr2[i][3][0])&&(arr[1]==arr2[i][3][1])){
				bool=true;num2=i;break;}
		}
		return bool;
	}
	function IsPass(pos){//判断是否可以通过
		if((";"+n_path+";").indexOf(";"+pos+";")!=-1)
			return true;
		return false;
	}
	function IsInTurn(arr,arr2){//判断下一步是否在拐角处
		if(arr[0]>arr2[0]){
			if(arr[1]>arr2[1]){
				if(IsPass((arr[0]-1)+","+arr[1])||IsPass(arr[0]+","+(arr[1]-1)))
					return false;
			}
			else if(arr[1]<arr2[1]){
				if(IsPass((arr[0]-1)+","+arr[1])||IsPass(arr[0]+","+(arr[1]+1)))
					return false;
			}
		}
		else if(arr[0]<arr2[0]){
			if(arr[1]>arr2[1]){
				if(IsPass((arr[0]+1)+","+arr[1])||IsPass(arr[0]+","+(arr[1]-1)))
					return false;
			}
			else if(arr[1]<arr2[1]){
				if(IsPass((arr[0]+1)+","+arr[1])||IsPass(arr[0]+","+(arr[1]+1)))
					return false;
			}
		}
		return true;
	}
	function Sort(arr){//对开启列表按F值进行排序，由高->低
		var temp;
		for(var i=0;i<arr.length;i++){
			if(arr.length==1)break;
			if(arr[i][0]<=arr[i+1][0]){
				temp=arr[i];
				arr[i]=arr[i+1];
				arr[i+1]=temp;
			}
			if((i+1)==(arr.length-1))
				break;
		}
	}
	function GetPath(close,start,n){
		var str="",t;
		if(n==null||n=="undefined")
			t=close[close.length-1][4];
		else{
			t=close[n][4];
			str+=close[n][3].join(",")+";";
		}
		while(1){//路径求出后，根据父节点求出最短路径
			str+=t.join(",")+";";
			for(var i=0;i<close.length;i++){
				if(close[i][3][0]==t[0]&&close[i][3][1]==t[1]){
					t=close[i][4];
					break;
				}
			}
			if(t[0]==start[0]&&t[1]==start[1])
				break;
		}
		return str;
	}
	this.main=function(){//主函数
		var str="";
		var arr,arr_end;
		if(IsPass(this.p_end.join(","))||IsStart(this.p_end,this.p_start))
			return str;
		while(1){
			this.GetF(this.GetRound(this.s_path[3]),this.openlist,this.closelist,this.p_start,this.p_end,this.s_path);
			this.GetF(this.GetRound(this.s_path_end[3]),this.openlist_end,this.closelist_end,this.p_end,this.p_start,this.s_path_end);

			Sort(this.openlist);
			Sort(this.openlist_end);

			this.s_path=this.openlist[this.openlist.length-1];//排序后，把F值最小的元素给当前节点，作为下一步
			this.s_path_end=this.openlist_end[this.openlist_end.length-1];

			this.closelist[this.closelist.length]=this.s_path;//把该节点放入到关闭列表中
			this.closelist_end[this.closelist_end.length]=this.s_path_end;
			
			if(this.openlist.length==0||this.openlist_end.length==0)
				return str;
			this.openlist[this.openlist.length-1]=null;//把开启列表中的该元素置为NULL
			this.openlist.length=this.openlist.length-1;//删除该元素
			this.openlist_end[this.openlist_end.length-1]=null;
			this.openlist_end.length=this.openlist_end.length-1;

			if(InClose(this.s_path[3],this.closelist_end)){
				arr=GetPath(this.closelist,this.p_start);
				arr=arr.substring(0,arr.length-1).split(";");
				arr_end=GetPath(this.closelist_end,this.p_end,num2);
				arr_end=arr_end.substring(0,arr_end.length-1).split(";");
				arr_end=arr_end.reverse();
				arr_end=arr_end.concat(arr);
				str=arr_end.join(";");
				break;
			}
			else if(InClose(this.s_path_end[3],this.closelist)){
				arr=GetPath(this.closelist,this.p_start,num2);
				arr=arr.substring(0,arr.length-1).split(";");
				arr_end=GetPath(this.closelist_end,this.p_end);
				arr_end=arr_end.substring(0,arr_end.length-1).split(";");
				arr_end=arr_end.reverse();
				arr_end=arr_end.concat(arr);
				str=arr_end.join(";");
				break;
			}
			else if((this.s_path[3][0]==this.p_end[0])&&(this.s_path[3][1]==this.p_end[1])){//如果该节点的坐标与终点坐标相等，就退出
				str=GetPath(this.closelist,this.p_start);
				str=str.substring(0,str.length-1);
				break;
			}
			else if((this.s_path_end[3][0]==this.p_start[0])&&(this.s_path_end[3][1]==this.p_start[1])){
				arr=GetPath(this.closelist_end,this.p_end);
				arr=arr.substring(0,arr.length-1);
				arr=arr.split(";").reverse();
				str=arr.join(";");
				break;
			}
		}
		return str;
	}
}