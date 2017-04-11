/**
 * Author:JXY001A
 * Email:JXY001A@aliyu.com
 * version:1.0
 * github:www.github/JXY001A
 * 稀疏图使用领接表来实现（每个节点只记录与自己想连接的节点的索引）
 */
var SparseGraph = (function() {
	var graph=null;
	//模拟稀疏图类
	//稀疏图构造函数
	function SparseGraph(n, directed) {
		//图中节点的个数
		this.n=n;
		//图中所有的边数
		this.m=0;
		//表示该图是否是有向图
		this.directed=directed;
		//使用数组来表示领接表
		this.g = [];
		for(var i = 0; i < this.n; i += 1) {
			this.g.push([]);
		}
	}

	SparseGraph.prototype.getNum = function getNum() {
		return this.n;
	}
	SparseGraph.prototype.getEdge = function getEdge() {
		return this.m;
	}
	//向两个节点之间添加边
	SparseGraph.prototype.addEdge = function addEdge(v, w) {
		if(v >= this.n || v < 0 || w >= this.n || w < 0) {
			return;
		}
		//如果v,w之间没有连接边则添加之
		if(!this.hasEdge(v, w)) {
			this.g[v].push(w);
		}
		//当v不是自身，同时该图不是有向图时
		if(v != w && !this.directed) {
			this.g[w].push(v);
		}
		//变数增加1
		this.m += 1;
	}
	//判断两个节点之间是否有边
	SparseGraph.prototype.hasEdge = function hasEdge(v, w) {
		if(v >= this.n || v < 0 || w >= this.n || w < 0) {
			return;
		}
		var arr = this.g[v];
		arr.forEach(function(o) {
			if(o == w) {
				return true;
			}
		});
		return false;
	}
	//返回一个稀疏数组对象（采用单例模式）
	function getGraph(n, directed){
		if (graph) {
			return graph;
		}
		graph = new SparseGraph(n, directed);
		return graph; 
	}
	//为SparseGraph 添加迭代器
	var Iterator = (function() {
		var Graph;
		var index;
		var v;
		//初始化迭代器
		function initIterator(graph,v0) {
			Graph = graph;
			v=v0;
			index=0;
		}

		function begin() {
			index = 0;
			if(Graph.g[v].length) {
				return Graph.g[v][index];
			}
			//表示不存在
			return -1;
		}

		function next() {
			index += 1;
			if(index < Graph.g[v].length) {
				return Graph.g[v][index];
			}
			return -1;
		}

		function end() {
			return index >= Graph.g[v].length;
		}

		return {
			initIterator: initIterator,
			begin: begin,
			next: next,
			end: end
		};
	})();
	
	return {
		getGraph:getGraph,
		Iterator: Iterator,
	};
})();