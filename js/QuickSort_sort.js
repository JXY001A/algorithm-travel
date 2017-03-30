/*
 *该快速算法是原始拍速算法的 改进，但是它主要对接近有序的
 * 数组排序会对性能有较大的提升
 * 
*/
var QuickSort_sort = (function() {
	//插入排序
	function insertSortDev(arr, l, r) {
		for(var i = l; i < r; i += 1) {
			var value = arr[i];
			for(var j = i; j > 0 && value < arr[j - 1]; j -= 1) {
				arr[j] = arr[j - 1];
			}
			arr[j] = value;
		}
	}

	//快速排序
	function quickSort(arr) {
		_quicksort(arr, 0, arr.length);
	}

	function _quicksort(arr, l, r) {
		//对于length较短的数组，快速排序的速度优于快速排序，
		//于是进行一下优化
		if(r - l <= 15) {
			insertSortDev(arr, l, r);
			return;
		}
		var n = _sort(arr, l, r);
		_quicksort(arr, l, n - 1);
		_quicksort(arr, n + 1, r);
	}

	function _sort(arr, l, r) {
		//对于与快速排序算法来说，如果数组是一个接近有序的数组，那么对于
		//快速排序来说可能会退化为一个接近o(n^2)的算法，因为每次选中的arr[l],它所在的位置可能就是
		//它排序完成的位置，故而会造成不必要的性能浪费
		//于是我们将arr[l],随机选择为数组中l~r之间的任意数据，便可改变这种现状
		//这样的改进对于排那些接近有序的数组效率会大为提升
		var random = Helper.randomRang(1, l, r);
		Helper.swap(arr, l, random);
		var value = arr[l];
		var j = l;
		for(var i = l + 1; i < r; i += 1) {
			if(value > arr[i]) {
				Helper.swap(arr, j + 1, i);
				j += 1;
			}
		}
		Helper.swap(arr, l, j);
		return j;
	}
	//公开快速排序算法的调动API
	return {
		quickSort: quickSort
	};

})();