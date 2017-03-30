var Helper = {
	//swap方法用于交换数组的两个 指定元素的值
	swap: function(arr, i, minIndex) {
		var buffer = arr[i];
		arr[i] = arr[minIndex];
		arr[minIndex] = buffer;
	},
	//randomRang方法用于产生指定数量和范围的随机数，一数组形式返回
	randomRang:function(num,rangL,rangR){
		var arr=[];
		for (var i=0;i<num;i++) {
			arr.push(~~(Math.random()*(rangR-rangL+1)+rangL));
		}
		return arr;
	},
	//getTime方法返回 1970 年 1 月 1 日至今的秒数
	getTime:function(){
		var date=new Date();
		return date.getTime()/1000;
	},
	//testSortArr 方法用于测试 排序是否成功，默认测试升序
	testSortArr:function(arr){
		for (var i=0;i<arr.length;i++) {
			if (arr[i]>arr[i+1]) {
				return false;
			}
			return true;
		}
	},
	//showResult 方法用于输出排序的结果
	showResult:function(obj){
		if (obj.realy) {
			document.write(obj.desc+"排序成功，共花费时间为"+obj.spendTime+"秒<br/>");
		}else{
			document.write("sorry,"+ obj.desc+"排序出现错误，请检查后再试！");
		}
		
	},
	//testSort方法由于测试算法，就收排序方法，描述，排序的数量，最大值
	testSort:function(sortFunction,desc,num,max){
		var arr=this.randomRang(num,0,max);
		var startTiemr=this.getTime();
		sortFunction(arr);
		var endTiemr=this.getTime();
		var time=endTiemr-startTiemr;
		var realy=this.testSortArr(arr);
		this.showResult({'realy':realy,'spendTime':time.toFixed(3),'desc':desc});
		return  arr;
	}
}