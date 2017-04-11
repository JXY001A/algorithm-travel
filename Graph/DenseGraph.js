/**
 * Author:JXY001A
 * Email:JXY001A@aliyu.com
 * version:1.0
 * github:www.github/JXY001A
 * desc:密集图使用领接矩阵记录节点之间的连接边
 */
var DenseGraph = (function() {
	var graph;

	function DenseGraph(num, directed) {
		//n表示图中节点个数
		this.n = num;
		//m表示图中边的个数
		this.m = 0;
		//directed表示该图是否为有向图
		this.directed = directed;
		//使用数组g来表示领接矩阵
		this.g = [];
		for(var i = 0; i < this.n; i += 1) {
			var arr = [];
			for(var j = 0; j < this.n; j += 1) {
				//在初始化时所有的节点都不存在连接
				arr.push(false);
			}
			this.g.push(arr);
		}
	}
	//获取图中节点个数
	DenseGraph.prototype.getNums = function getNums() {
		return this.n;
	}
	//获取图中的边数
	DenseGraph.prototype.getEdges = function getEdges() {
		return this.m;
	}
	//为两个节点之间添加边
	DenseGraph.prototype.addEdge = function addEdge(v, w) {
		//如果v,w越界则程序不执行
		if(v >= this.n || v < 0 || w >= this.n || w < 0) {
			return;
		}
		if(this.hasEdge(v, w)) {
			return;
		}
		//为索引v,w所在节点之间建立一条边
		this.g[v][w] = true;
		//如果是无向图则再添加一条由w指向v的边
		if(!this.directed) {
			this.g[w][v] = true;
		}
		//边数增加1
		this.m += 1;
	}
	//判断两个节点之间是否有连接边
	DenseGraph.prototype.hasEdge = function hasEdge(v, w) {
		if(v >= this.n || v < 0 || w >= this.n || w < 0) {
			return;
		}
		return this.g[v][w];
	}
	//返回密集图对象（采用单例模式）
	function getGraph(num, directed) {
		if(graph) {
			return graph;
		}
		graph = new DenseGraph(num, directed);
		return graph;
	}
	//Iterator 为密集图添加迭代器
	var Iterator = (function() {
		var index;
		var graph;
		var v;

		function initIterator(g, v0) {
			index = -1;
			graph = g;
			v = v0;
		}

		function begin() {
			index = -1;
			return next();
		}

		function next() {
			//index记录着索引的位置，使得下一次调用是能够从上一次结束的位置
			//继续向下查找，直到整个数组查找完毕
			for(index += 1; index < graph.getNums(); index += 1) {
				if(graph.g[v][index]) {

					return index;
				}
				//返回说明-1，索引v代表的节点不与index索引代表的节点有连接边
				
				return -1;
			}

			//表示该节点不与任何节点相连接(表示)
			//每当返回-1时，整个循环终止end成立故-1从来都不会被打印
			//return -1;
		}

		function end() {
			//当索引大于节点个数值说明循环结束
			return index >= graph.getNums();
		}

		//公开迭代器的API
		return {
			initIterator: initIterator,
			begin: begin,
			next: next,
			end: end
		};
	})();

	return {
		getGraph: getGraph,
		Iterator: Iterator
	};
})();