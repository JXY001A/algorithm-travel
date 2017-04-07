/**
 * Author:JXY001A
 * Email:JXY001A@aliyu.com
 * version:1.0
 * github:www.github/JXY001A
 * desc:个人代码工具箱
 */
var ToolsBox = {
	//将一个字符串分解为一个个单词，以数组的形式返回，注意字符串string[string.length-1]只能是非字母
	readStringToWords: function(str) {
		var start = 0;
		var arr = [];
		//返回字符串第一个单词首字母的位置
		function _firstWordsIndex(str, start) {
			for(var i = start; i < str.length; i += 1) {
				if(_isLettler(str[i])) {
					return i;
				}
			}
			return str.length;
		}

		//判断一个字符是不是字母
		function _isLettler(char) {
			var code = char.charCodeAt(0);
			if(code <= 122 && code >= 97 || code >= 65 && code <= 90) {
				return true;
			} else {
				return false;
			}
		}
		//获取字符串中第一个单词的位置首字母位置
		start = _firstWordsIndex(str, start);
		for(var i = start; i < str.length;) {
			if(!_isLettler(str[i])) {
				arr.push(str.substr(start, i - start));
				start = _firstWordsIndex(str, i);
				//避免死循环发生
				i = start + 1;
			} else {
				i++;
			}
		}
		return arr;
	}//readStringToWords尾
};