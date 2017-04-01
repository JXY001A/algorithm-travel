/**
 * Author:JXY001A
 * Email:JXY001A@aliyu.com
 * version:1.0
 * github:www.github/JXY001A
 * desc:该快速排序是针对，排序算法对重复性较高，及几乎有序的数据怕排序
 * 效率低下的问题，进行的最终优化
 */
var QuickSortThreeWays = (function() {
	function quickSortThreeWays(arr) {
		_threeWaysSort(arr, 0, arr.length - 1);
	}

	function _threeWaysSort(arr, l, r) {
		if(l >= r) {
			return;
		}
		//lt 记录小于vlaue的左侧数组界限
		var lt = l;
		//gt 记录大于value的左侧数组界限
		var gt = r + 1;
		//i 用于记录等于value的数组界限
		var i = l + 1;
		//为了防止快速排序对有序数组排序效率低下的问题，进行的规避调整
		Helper.swap(arr, l, Helper.randomRang(1, l, r));
		var value = arr[l];
		//i=gt 时说明数组已经排好序了（除了arr[l]）
		while(i < gt) {
			//arr[i] < value 的情况下，arr[i]可能和自身交换，也可能与等于value的值交换
			if(arr[i] < value) {
				Helper.swap(arr, i, lt + 1);
				//当交换完成功时，说明小于value的数组元素增加一个，故边界自增1
				lt += 1;
				//使数组向前遍历
				i += 1;
			} else if(arr[i] > value) {
				Helper.swap(arr, i, gt - 1);
				//当大于value的数组增加的时候，其边界也自增1
				gt -= 1;
				//需要注意的是，此时交换过去的值在i位置上，且这个值没有经过比较，故i不能增加
			} else {
				//如果等于value 时i自增1
				i += 1;
			}
		}
		//当循环结束时，只有arr[l]'未就绪'，故将它与最后一个小于它的值的位置交换
		Helper.swap(arr, l, lt);
		//注意此时，再递归排序的时候，需要避开已排序完成的等于value的数组部分
		_threeWaysSort(arr, l, lt - 1);
		_threeWaysSort(arr, gt, r);
	}
	//公开调用API
	return {
		quickSort: quickSortThreeWays
	};
})();