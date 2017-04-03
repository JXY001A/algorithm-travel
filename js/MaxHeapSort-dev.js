/**
 * Author:JXY001A
 * Email:JXY001A@aliyu.com
 * version:1.0
 * github:www.github/JXY001A
 * desc:堆排序算法的最终优化版本
 */
var MaxHeapSort3=(function(){
		function heapSort3(arr){
				_heapify(arr,arr.length-1);
			}
			function _heapify(arr,n){
				//得到最后一个非叶子节点(数据索引从0开始时)
				//var i=parseInt((n-1)/2);
				for (var i=parseInt((n-1)/2);i>=0;i-=1) {
					_shiftDown(arr,i,n);
				}
				
				for (var j=n;j>0;j-=1) {
					Helper.swap(arr,0,j);
					_shiftDown(arr,0,j);
				}
			}
			function _shiftDown(arr,k,n){
				var e=arr[k] ;
				while(k*2+1<n){
					//就计算出索引为k的节点的左子树（数据索引从0开始）
					var j=k*2+1;
					if (arr[j]<arr[j+1] && j+1<n) {
						j+=1;
					}
					if (e>arr[j]) {
						break;
					}
					//此处与原始shiftDown不同在于没有直接交换
					//而是进行了优化，也就是直到找到e合适的位置再进行赋值操作，减少了交换的次数
					//达到优化的目的
					arr[k]=arr[j];
					k=j;
				}
				arr[k]=e;
			}
		return{
			heapSort3:heapSort3
		};
})();
