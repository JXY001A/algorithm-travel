/**
 * Author:JXY001A
 * Email:JXY001A@aliyu.com
 * version:1.0
 * github:www.github/JXY001A
 * desc:针对快速排序算法对重复性 较大的数组排序性能低下情况的优化方案
 */
var QuickSort_repeat = (function() {
	//快速排序算法（针对大量重复性的数组优化）
	function quickSout(arr) {
		_quickSort(arr, 0, arr.length);
	}

	function _quickSort(arr, l, r) {
		if(l >= r) {
			return;
		}
		var p = _sort(arr, l, r);
		_quickSort(arr, l, p - 1);
		_quickSort(arr, p + 1, r);
	}
	//
	function _sort(arr, l, r) {
		//针对大量重复性的数组，会出现这样的情况
		//因为我们的判断条件是arr[i]<value，这就导致
		//等于vlaue的元素被分配到了右区间数组（大于value的部分）
		//而大量重复性的数组，就会导致数组的分配极不平衡
		//右区间数组的元素远远多于左区间数组，这样就会导致
		//快速排序退化为一个O（n^2）的算法，使性能严重下降
		/*
		 * var value=arr[l];
		 * var j=l;
		 * for (var i=l+1;i<r;i+=1) {
			if (arr[i]<value) {
				Helper.swap(arr,i,j+1);
				j+=1;
			}
		}
		Helper.swap(arr,l,j);
		*/

		//改进型
		var i = l + 1,
			j = r;
		var value = arr[l];
		while(true) {

			/*这样的操作实质上是将相等的元素较为均匀的
			分配到了左右两个数组区间，从而避免了数组非配
			不均匀的情况，避免退化到近似O(n^2)的情况*/

			//第一个while寻找大于等于value的数据的索引（从左侧开始）						
			while(arr[i] < value && i < r) { i += 1; }
			//第二个while寻找小于等于vlaue的数据的索引（从右侧开始）
			while(arr[j] > value && j > l + 1) { j -= 1 }
			//i>j时说明
			//左侧数组区间元素(<=value)
			//右侧数组区间元素(>=value)
			if(i > j) {
				break;
			}
			//在交换时，两个数据分别为大于等于value和小于等于value
			//这样就会使等于value的元素较为均匀的非配到了左右两个数组区间
			//避免前面描述的O(n^2)问题
			Helper.swap(arr, i, j);
			//推动while向下一个元素循环
			i += 1;
			j -= 1;
		}
		//因为当外层while循环结束时，i>j，j也就成为了左侧
		//数组区间的最后一个元素的索引,（i-1）也是可以的
		Helper.swap(arr, j, l);
		return j;
	}
	//公开经过优化的快速排序的API
	return {
		quickSout: quickSout
	};
})();