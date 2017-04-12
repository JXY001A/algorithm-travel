/**
 * Author:JXY001A
 * Email:JXY001A@aliyu.com
 * version:1.0
 * github:www.github/JXY001A
 * desc:使用深度优先遍历来求得两个节点之间的路径
 */
var PathDeepth = (function() {
	//传入的图对象
	var graph;
	//图对象的迭代器
	var Iterator;
	//揭露遍历路径的数组
	var from = [];
	//记录节点是否遍历的数组（true/false）
	var visited = [];
	//在查找两个点的路径是首先需要确定的一个点
	var s;
	
	/*Private*/
	//寻路算法
	function dfs(v) {
		//表示v节点已经被访问
		visited[v] = true;
		for(var w = Iterator.begin(); !Iterator.end(); w = Iterator.next()) {
			if(!visited[w]) {
				//form数组中每个节点对应的位置记录着该节点在遍历过程中的上一个节点
				from[w] = v;
				dfs(w);
			}
		}

	}
	
	//将需要的路径从from数组中提取出来
	function path (w,pathArr) {
		if (w>graph.getNums();|| w<0) {
			return;
		}
		var p=w;
		pathArr.push(p);
		while(p!=-1){
			p = from[p];
			pathArr.push(p);	
		}
		//将记录的路径顺序翻转
		pathArr.reverse();
		
		return pathArr;
	}
	
	/*Public*/
	//初始化路径查询方法
	function pathDeepth(g, Iter, s0) {
		graph = g;
		Iterator = Iter;
		s = s0;
		for(var i = 0; i < graph.getNums(); i += 1) {
			visited.push(false);
			from.push(-1);
		}
		dfs(j);
	}
	//判断两个节点之间是否有路径
	function hasPath(w) {
		/*应为我们只是循环了传入基点节点所在的连通分量
		所以只要是没有被访问到的节点都与该基点节点没有连通
		*/
		return visited[w];
	}
	//打印显示节点w和初始化时的基点之间的路径
	function showPath (w) {
		var pathArr = [];
		//显式表明pathArr被修改
		pathArr = path (w,pathArr);
		var data = w+':';
		pathArr.forEach(function each (o,i) {
			if (i==this.length-1) {
				data+=o;
			}else{
				data+=o+'->'
			}
		});
	}
	
	return {
		pathDeepth:pathDeepth,
		hasPath:hasPath,
		showPath:showPath
	};
})();