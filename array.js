var arr=new Array(10,20,30);
var arr1=[55,22,33,44];
console.log(arr.length);
console.log(arr1.length);
var sum=0;
for(var i=0; i<arr.length; i++)
{
	sum+=arr[i];
}
console.log("array 1:"+sum);

for(var i=0; i<arr1.length; i++)
{
	sum+=arr1[i];
}
console.log("array 2:"+sum);

var x=10;
for(var i=0; i<arr.length; i++)
{
	
	if(arr[i]==x)
	{
		console.log("element found:"+x);
		break;

	}
	if(i>arr.length)
	{
		console.log("not element found:");
	}
}