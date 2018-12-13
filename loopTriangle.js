/*Looping a triangle
Write a loop that makes seven calls to console.log to output the following triangle:
#
##
###
####
#####
######
#######
*/

// Your code here.
//First approach
console.log("I");
let counter = 0;
for (let hash = "#"; counter < 7; counter++)
{
  console.log(hash);
  hash = hash + "#";
}

//Second approach
console.log("II");
for (let hash = "#"; hash.length <= 7; )
{
  console.log(hash);
  hash = hash + "#";
}
