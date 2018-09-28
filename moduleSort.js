
var numList = [];

function pushNum (num) {
  numList.push(num)
}


function sortList (num) {
	numList.sort(function(a,b){
		return a - b;
	});
	console.log(numList);
}


module.exports = {

  pushNum: pushNum,
  sortList: sortList
}