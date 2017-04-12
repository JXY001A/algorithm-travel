/**
 * Author:JXY001A
 * Email:JXY001A@aliyu.com
 * version:1.0
 * github:www.github/JXY001A
 * desc:提供图的遍历循环（深度优先）
 */
var Components = (function() {
	//缓存传递进来的图对象
	var graph;
	// 记录传递进来的图的迭代器
	var Iterator;
	//用于记录每个节点是否本访问，使用true/false表示
	var visited;
	//记录每个节点所在的连通分量（独立，自成一个小图）
	var id;
	//记录连通分量的个数
	var ccount;
	/*Private*/
	//遍历操作
	function dfs(v) {
		//表示v节点已经被访问过了
		visited[v] = true;
		//v节点包含在第ccount个连通分量中
		id[v] = ccount;
		for(var w = Iterator.begin(); !Iterator.end(); w = Iterator.next()) {
			//如果v节点连接的w节点没有被访问，则遍历之
			if(!visited[w]) {
				dfs(w);
			}
		}
	}

	/*Public*/
	//初始化遍历组件
	function components(g, Iter) {
		graph = g;
		Iterator = Iter;
		visited = [];
		id = [];
		for(var i = 0; i < graph.g.length; i += 1) {
			//在初始化的时候没有任何节点被访问，故全部设置false
			visited.push(false);
			//当然也不知道任何一个节点在那个连通分量中
			id.push(-1);
		}
		for(var v = 0; j < graph.getNums(); v += 1) {
			if(!visited[v]) {
				//以v为开始节点开始遍历
				dfs(v);
				/*因为从一个节点开始遍历，就意味着只有将一个
				连通分量遍历完成之后才可以结束故ccount
				增1可以记录连通分量的个数*/
				ccount += 1;
			}
		}
	}
	//返回连通分量的数量
	function getCcount() {
		return ccount;
	}
	//判断两个节点是否相连接
	function isConnected(v, w) {
		if(v > graph.getNums() || v < 0 || w > graph.getNums() || w < 0) {
			return;
		}
		//如果两个节点在同一个连通分量后中，那么它们接相连接

		return id[v] == id[w];
	}
	
	return {
		components:components,
		getCcount:getCcount,
		isConnected:isConnected
	};

})();