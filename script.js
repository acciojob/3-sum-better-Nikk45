function threeSum(arr, target) {
// write your code here
	let sum = 0;
const len = arr.length;
	for(let i=0;i<len;i++){
	    let k = i;
	    for(let j=1;j<=3;j++){
	        sum+=arr[k];		
		    k++;
	    }
	    if(sum == (target+1)|| sum==(target-1) || sum==target){
		   	return sum;
	    } 
	}
}

let result = threeSum([-1,2,1,-4],1);
alert(result);
module.exports = threeSum;
