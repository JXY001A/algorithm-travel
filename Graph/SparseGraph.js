/**
 * Author:JXY001A
 * Email:JXY001A@aliyu.com
 * version:1.0
 * github:www.github/JXY001A
 * 稀疏图使用领接表来实现（每个节点只记录与自己想连接的节点的索引）
 */
var SparseGraph = (function() {
	//图中节点的个数
	var n;
	//图中所有的边数
	var m;
	//表示该图是否是有向图
	var directed;
	//使用数组来表示领接表
	var g = [];
	//初始化图
	function initSparseGraph(num, direct) {
		n = num;
		m = 0;
		directed = direct;
		for(var i = 0; i < n; i += 1) {
			g.push([]);
		}
	}

	function getNum() {
		return n;
	}

	function getEdge() {
		return m;
	}
	//添加边
	function addEdge(v, w) {
		if(v > n || v < 0 && w > n || w < 0) {
			return;
		}
		//如果v,w之间没有连接边则添加之
		if(!hasEdge(v, w)) {
			g[v].push(w);
		}
		//当v不是自身，同时该图不是有向图时
		if(v != w && !directed) {
			g[w].push(v);
		}
		//变数增加1
		m += 1;
	}

	function hasEdge(v, w) {
		if(v > n || v < 0 && w > n || w < 0) {
			return;
		}
		var arr = g[v];
		arr.forEach(function(o) {
			if(o == w) {
				return true;
			}
		});
		return false;
	}

	return {
		initSparseGraph: initSparseGraph,
		getNum: getNum,
		getEdge: getEdge,
		addEdge: addEdge
	};
})();