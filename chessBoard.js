*/Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.

Passing this string to console.log should show something like this:

 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #

When you have a program that generates this pattern, define a binding size = 8 and change the program so that it works for any size, outputting a grid of the given width and height.
*/

// Your code here.
let pos = " "
let black = "#";

for(let len = 0; len < 8 ; len++)
{
  for (let width = 0; width < 8; width++)
  {
    if((len + width) % 2 == 0)
      pos = pos + " "
    else
      pos = pos + black
  }
  pos = pos + "\n";
}
console.log(pos);
