/**
 * Author:JXY001A
 * Email:JXY001A@aliyu.com
 * version:1.0
 * github:www.github/JXY001A
 * desc:最大堆索引实现
 */
var IndexMaxHeap = (function() {
	var data;
	var indexes;
	var count;
	//private
	function shiftUp(k) {
		while(k > 1 && data[indexes[parseInt(k / 2)]] < data[indexes[k]]) {

			Helper.swap(indexes, parseInt(k / 2), k);
			k = parseInt(k / 2);
		}
	}
	//从堆中给定的位置开始，向下查找，直到找到适合该数据在堆中恰当的位置
	function shiftDown(k) {
		//获取给定位置的数据的索引
		var value = indexes[k];
		while(2 * k < count) {
			//计算出指定节点的左孩子节点的位置索引
			var j = 2 * k;
			//在数据索引小于堆中的数据量的同时，得到给定节点的左右孩子节点中最大的孩子节点的索引
			if(j + 1 < count && data[indexes[j + 1]] > data[indexes[j]]) {
				j += 1;
			}
			//如果该孩子节点小于其父节点，则终止执行
			if(data[indexes[j]] < value) {
				break;
			}
			//否则将该孩节点的数据移动到其父节点的位置中
			indexes[k] = indexes[j];
			//将位置索引设置为该孩子节点
			k = j;
		}
		//当循环结束时，说明已经为开始时传入的位置索引表示的数据找到了适合的位置
		indexes[k] = value;
	}

	//public
	//初始化堆
	function initIndexMaxHeap() {
		data = [];
		indexes = [];
		count = 0;
	}
	//=向堆中插入数据
	function insert(item) {
		data[count + 1] = item;
		indexes[count + 1] = count + 1;
		shiftUp(count + 1);
		//堆中的数据量自增1
		count += 1;
	}
	//判断数堆是否为空
	function isEmpty() {
		return count == 0;
	}
	//得到堆中的数据量
	function size() {
		return count;
	}
	//从堆中取出数据
	function extractIndexMax() {
		//得到堆中的最大元素
		var ret = data[indexes[1]];
		//将堆中最后一个位置与第一个位置数据交换
		Helper.swap(indexes, count, 1);
		count -= 1;
		shiftDown(1);
		return ret;
	}
	//获取堆中的最大值
	function getMax() {
		return data[indexes[1]];
	}
	//改变指定的某个数据项
	function change(i, item) {
		data[i] = item;
		//循环遍历找到在堆中的data[i]的位置j
		indexes.forEach(function(o, j) {
			if(o == i) {
				//shiftUp，shiftDown操作为改变后的数据找到合适的位置
				shiftUp(j);
				shiftDown(j);
				return;
			}
		});
	}

	//Public API
	return {
		initIndexMaxHeap: initIndexMaxHeap,
		insert: insert,
		extractIndexMax: extractIndexMax,
		isEmpty: isEmpty,
		getMax: getMax,
		size: size,
		change: change
	};
})();