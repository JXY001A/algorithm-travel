/**
 * Author:JXY001A
 * Email:JXY001A@aliyu.com
 * version:1.0
 * github:www.github/JXY001A
 * desc:最大堆实现
 */
var MaxHeap = (function() {
	//对中存储的数量
	var count;
	//存储对数据的数组
	var data;

	/*privite*/
	//为新插入的数组找到在队中的合适位置
	function shiftUp(k) {
		//k>1 是因为，根节点是堆中的最后一个节点
		while(k > 1 && data[k] > data[parseInt(k / 2)]) {
			Helper.swap(data, k, parseInt(k / 2));
			k = parseInt(k / 2);
		}
	}

	function shiftDown(k) {
		//while的判断条件是，确保 k索引位置的节点有左子树
		//完全二叉树 
		while(2 * k <= count) {
			var j = 2 * k;
			//得到k索引处节点的左右两个节点中最大值的索引
			if(j + 1 <= count && data[j + 1] > data[j]) {
				j += 1;
			}
			//判断左右两个节点中最大的节点是否小于父节点
			//如果是，则终止循环
			if(data[j] < data[k]) {
				break;
			}
			Helper.swap(data, j, k);
			k = j;
		}
	}

	/* public*/
	//初始化堆
	function maxHeap() {
		data = [];
		count = 0;
	}
	
	//获取对中的数据量
	function getSize() {
		return count;
	}
	//判断堆是否为空
	function isEmpty() {
		return count == 0;
	}
	//向堆中插入数据
	function insert(obj) {
		//堆中数组存储从1开始
		data[count + 1] = obj;
		count += 1;
		//将插入的数据放置到堆中合适的位置
		shiftUp(count);
	};
	//从堆中取出数据
	function extractMax() {
		if(count > 0) {
			var ret = data[1];
			//将根节点的数据与堆中最后一个节点的数据交换
			//（确保一颗完整二叉树）
			Helper.swap(data, 1, count);
			count -= 1;
			//将挪到根节点的数据在堆中找到合适的位置
			shiftDown(1);
			return ret;
		} else {
			return;
		}
	}
	//将数组直接拷贝进入data数组中
	function arrToData(arr){
		//注意count记录的是填入堆中的数据的数量
		count=arr.length;
		for (var i=0;i<arr.length;i+=1) {
			data[i+1]=arr[i];
		}
	}
	//公开堆调用的API
	return {
		maxHeap: maxHeap,
		getSize: getSize,
		insert: insert,
		isEmpty: isEmpty,
		extractMax: extractMax,
		arrToData:arrToData,
		shiftDown:shiftDown
	};
})();