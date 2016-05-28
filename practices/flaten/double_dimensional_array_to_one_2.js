'use strict';

function double_to_one(collection) {
	var array=One(collection);
	return noRepeat(array);
}
function One(collection)	
{
	var arr=[];
	for(var i=0;i<collection.length;i++)
	{
		arr=arr.concat(collection[i]);
	}
	return arr;
}
function noRepeat(one_arr)
{
	var array=[];
	for(var i=0;i<one_arr.length;i++)
	{
		if(array.indexOf(one_arr[i])==-1)
		{
			array.push(one_arr[i]);
		}
	}
	return array;
}
module.exports = double_to_one;
