//given an array of numbers, find the greatest value
var arr = [4,3,8,10,1];

function findMax(param) {
	var max = 0;

	for (var i = 0; i < param.length; i++) {
		if (param[i] > max) {
			console.log('am I going into this if check?');
			max=param[i];
		}
		console.log('index',i,'number', param[i]);
	}

	console.log('is max 10?', max);

	return max;
}

console.log('final solution is:', findMax(arr));
