/*
 *原始的快速排序算法实现 
 */
var QuickSort_origin = (function() {
	//quickSort的公开调用接口
	function quickSort(arr) {
		_quicksort(arr, 0, arr.length - 1);
	}
	//快速 排序中递归数组（也就是将 数组不断地分割，知道 最小单位<一个元素>）
	function _quicksort(arr, l, r) {
		//如果已分割的数组只有一个元素时，终止函数执行
		if(l >= r) {
			return;
		}
		var p = _quick(arr, l, r);
		//此处使用p-1,p+1,分别为r,l表示跳过了一排好位置的arr[l]
		_quicksort(arr, l, p - 1);
		_quicksort(arr, p + 1, r);
	}
	//将传递进来的数组分割成三部分：
	//左侧：大于第一个元素的
	//中间：第一个元素的位置
	//右侧：下雨第一个元素 的
	function _quick(arr, l, r) {
		//j始终保持为小于value的数组元素的最后一位
		var j = l;
		//一般选择数组的一个元素为快速排序参照
		var value = arr[l]; //l(L)
		for(var i = l + 1; i <= r; i += 1) {
			if(arr[i] < value) {
				Helper.swap(arr, i, j + 1);
				//交换之后小于value的数组长度加1，j也后移一位
				j += 1;
			}
		}
		//当循环结束时，j为小于value数组的最后一个元素的索引
		//将value值与j索引位置的值交换，也就是说arr[l]==value这个
		//值在数组中找到了数组有序时它应该在的位置
		Helper.swap(arr, j, l);
		return j;
	}
	//返回quickSort调用API
	return {
		quickSort: quickSort
	};
})();