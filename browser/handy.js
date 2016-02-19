'use strict';

var util = {};
//All bout file manipulate
util.file = {};

// sources:
// http://stackoverflow.com/questions/190852/how-can-i-get-file-extensions-with-javascript
util.file.getFileExtension = function (fileName) {
	return fileName.slice((Math.max(0, fileName.lastIndexOf('.')) || Infinity) + 1);
};

//usage: changeFileName('ding.js', 'dong'); => dong.js
util.file.changeFileName = function (originalName, newName) {
	var extension = this.getFileExtension(originalName);
	return newName + '.' + extension;
};