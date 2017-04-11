/**
 * Author:JXY001A
 * Email:JXY001A@aliyu.com
 * version:1.0
 * github:www.github/JXY001A
 * desc:密集图使用领接矩阵记录节点之间的连接边
 */
var DenseGraph = (function() {
	//n表示图中节点个数
	var n;
	//m表示图中边的个数
	var m;
	//directed表示该图是否为有向图
	var directed;
	//使用数组g来表示领接矩阵
	var g = [];
	//初始化邻接矩阵
	function initDenseGraph(num, direct) {
		n = num;
		directed = direct;
		for(var i = 0; i < n; i += 1) {
			var arr = [];
			for(var j = 0; j < n; j += 1) {
				//在初始化时所有的节点都不存在连接
				arr.push(false);
			}
			g.push(arr);
		}
	}
	//获取图中节点个数
	function getNums() {
		return n;
	}
	//获取图中的边数
	function getEdges() {
		return m;
	}
	//为两个节点之间添加边
	function addEdge(v, w) {
		//如果v,w越界则程序不执行
		if(v >= n || v < 0 && w >= n || w < 0) {
			return;
		}
		if(hasEdge(v, w)) {
			return;
		}
		//为索引v,w所在节点之间建立一条边
		g[v][w] = true;
		//如果是无向图则再添加一条由w指向v的边
		if(!directed) {
			g[w][v] = true;
		}
		//边数增加1
		m += 1;
	}
	//private
	//判断两个节点之间是否有连接边
	function hasEdge(v, w) {
		if(v >= n || v < 0 && w >= n || w < 0) {
			return;
		}
		return g[v][w];
	}

	return {
		initDenseGraph: initDenseGraph,
		getNums: getNums,
		getEdges: getEdges,
		addEdge: addEdge
	};
})();