/**
 * Author:JXY001A
 * Email:JXY001A@aliyu.com
 * version:1.0
 * github:www.github/JXY001A
 * desc:图的广度优先遍历思路产找两个节点之间的路径
 * Time:2017-4-12 14:51 
 */
var PathShort = (function() {
	//传递进来的图对象
	var graph;
	//图迭代器
	var Iterator;
	//用于就节点是否被访问的数组（true/false）
	var visited = [];
	//接受传入的基点
	var s;
	//记录路径的数组
	var fromm = [];
	//记录遍历到的节点到基节点之间的距离
	var ord = [];

	//初始化方法
	function pathShort(g, Iter, s0) {
		graph = g;
		Iterator = Iter;
		s = s0;
		for(var i = 0; i < g.getNums(); i += 1) {
			visited.push(false);
			fromm.push(-1);
			ord.push(-1)
		}

		var queue = [];
		queue.push(s);
		visited[s] = true;
		ord[s] = 0;
		while(queue.length) {
			//取出数组中的第一个元素
			var v = queue.shift();
			//初始化v节点的迭代器
			Iterator.initIterator(graph, v);
			//迭代循环所有与v节点直接相连的节点
			for(var w = Iterator.begin(); !Iterator.end(); w = Iterator.next()) {
				if(!visited[w]) {
					queue.push(w);
					//w节点被访问
					visited[w] = true;
					//记录w节点的父节点
					fromm[w] = v;
					//记录到基节点的距离
					ord[w] = ord[v] + 1;
				}
			}
		}
	}
	//判断w节点与基节点是否连接
	function hasPath(w) {
		return visited[w];
	}

	function path(w) {
		var pathArr = [];
		var p = w;
		while(p != -1) {
			pathArr.push(p);
			p = fromm[p];
		}
		//将存储路径的数组翻转后返回
		return pathArr.reverse();
	};
	//打印显示路径
	function showPath(w) {
		var pathArr = path(w);
		var data = '';
		pathArr.forEach(function each(o, i) {
			if(i == this.length) {
				data += o;
			} else {
				data += o + '->';
			}
		});
		console.log(data);
	}
	//返回某个节点到基节点之间的路径长度
	function length(w) {
		return ord[w];
	}

	return {
		pathShort: pathShort,
		hasPath: hasPath,
		showPath: showPath,
		length: length
	};
})();