# liveCanvas by javascriptboss
liveCanvas is a webpage which takes a command (a function from the HTMLCanvasElement class) and renders it to an HTML Canvas element.  

## Why I created this
I created this simple project to learn more about the HTML tag \<canvas\> and to practise my HTML, CSS and JavaScript skills.  

## Syntax
liveCanvas commands are written like this:      
*command argument1 argument2* ... *argumentN*  
for example,   
*moveTo 360 360*   

## Supported commands
liveCanvas currently accepts the following commands:
### beginPath
beginPath executes the JavaScript canvas command beginPath().  
A path is the path taken by the canvas cursor through a series of moveTo and lineTo commands (among other stroking commands).
beginPath is used to define the beginning of a path.  
beginPath takes zero arguments. Therefore, arguments supplied here will not have any effect.  
(the syntax for this command is: *beginPath*)
#### begin
begin is a shortcut command for beginPath.  
Wherever beginPath is used, begin can be used instead.  
### closePath
closePath executes the JavaScript canvas command closePath().  
closePath is used to define the end of a path.  
closePath causes the cursor to move back to the start of the current path. 
It tries to draw a straight line from the current point to the start.  
Immediately after executing closePath, execute stroke to render the path.
closePath takes zero arguments. Therefore, arguments supplied here will not have any effect.  
(the syntax for this command is: *closePath*)
#### close
close is a shortcut command for closePath.  
Wherever closePath is used, close can be used instead.
### end
end is a custom command.  
end executes the command closePath, then stroke..
end takes zero arguments. Therefore, arguments supplied here will not have any effect.  
(the syntax for this command is: *end*)
### stroke
stroke executes the JavaScript canvas command stroke().  
stroke renders the result of the previous path created by beginPath and closePath to the canvas as a single connected line.   
stroke takes zero arguments. Therefore, arguments supplied here will not have any effect.  
(the syntax for this command is: *stroke*)
### clear
clear executes the JavaScript canvas command clearRect().  
clear is used to wipe the canvas clean of all drawings, rectangles, text, etc.  
clear takes zero arguments. Therefore, arguments supplied here will not have any effect.  
(the syntax is: *clear*)
#### reset
reset is used to completely reset the canvas, returning the canvas to the state at which it was when the page first loaded.  
Font settings, color settings, size settings and more will be reset.
reset takes zero arguments. Therefore, arguments supplied here will not have any effect.  
(the syntax is: *reset*)
### moveTo
moveTo executes the JavaScript canvas function moveTo(x,y).   
moveTo moves the canvas cursor to a point so that you can begin drawing objects from that point.   
moveTo should be used immediately after beginPath to define the first point of the path.  
moveTo takes two arguments: x and y.  
(the syntax for this command is: *moveTo x y*)  
x and y are the x-coordinate and y-coordinate, respectively, of the position you wish to move the cursor to.  
Example: *moveTo 40 40*
#### move
move is a shortcut command for moveTo.  
Wherever moveTo is used, move can be used instead.  
### lineTo
lineTo executes the JavaScript canvas command lineTo(x,y).  
lineTo draws a line from the canvas cursor position to the given position.   
lineTo takes two arguments: x and y.  
(the syntax for this command is: *lineTo x y*)  
x and y are the x-coordinate and y-coordinate, respectively, of the position you wish to draw a line to.  
Example: *lineTo 80 40*
#### line
line is a shortcut command for lineTo.  
Wherever lineTo is used, line can be used instead.
### var
var is a custom command.  
var creates a variable and sets a value for it, or selects an existing variable and updates its value.  
var takes two arguments: n and v.  
(the syntax for this command is: *var n v*)  
n is the name of the variable.  
v is the value of the variable.  
Example: *var XPosition 25*  
See Operators → Variable reference
### lineWidth
lineWidth represents the JavaScript canvas property lineWidth.  
lineWidth is used to set the width of the line.  
lineWidth takes one argument: s.  
(the syntax is: *lineWidth s*)  
s is the width of the line, in pixels.  
Example: *lineWidth 2*
### lineCap
lineCap represents the JavaScript canvas property lineCap.  
lineCap is used to set the value of the lineCap property, that is, how the ends of lines are drawn.  
lineCap takes one argument: c.  
(the syntax is: *lineCap c*)  
c is the type of cap at the end of lines. c must be *butt*, *round* or *square*.  
Example: *lineCap round*
### lineJoin
lineJoin represents the JavaScript canvas property lineJoin.  
lineJoin is used to set the type of corner applied to the meeting point of two lines.  
lineJoin takes one argument: j.  
(the syntax is: *lineJoin j*)  
j is the style for corners. j must be *round*, *bevel*, or *miter*.  
Example: *lineJoin round*
### arc
arc executes the JavaScript canvas command arc(x,y,r,g,a).  
arc is used to draw a part of a circle (an arc) or circle.  
arc takes five arguments: x, y, r, g and a.  
(the syntax for this command is: *arc x y r g a*)  
x and y are the x-coordinate and y-coordinate, respectively, of the position of the arc's center.  
r is the radius, or distance of the arc from the center.  
g is the starting angle in radians, ranging from 0 to 2π (360°).
a is the ending angle in radians, ranging from 0 to 2π (360°).  
Example: *arc 200 200 50 0 6.2831853071795*   
**Note: see the "Operators" section for information about inserting angles into commands.**
### font
font represents the JavaScript canvas property font.  
font is used to set the font size of the text before drawing it.  
font takes two arguments: w and t.  
(the syntax for this command is: *font w t*)  
w is the size of the text being generated. w must be an whole number.  
t is the style of the text being generated. t must be either "serif" or "sans-serif".  
Example: *font 200 sans-serif*
### fillText
fillText executes the JavaScript canvas command fillText(s,x,y).  
fillText is used to print text to the canvas.  
Use the font command beforehand to set the font size.  
fillText takes three arguments: x, y and s.  
(the syntax for this command is: *fillText x y s*)  
x and y are the x-coordinate and y-coordinate, respectively, of the position you wish to draw the text at.  
s is the text you wish to print.  
Example: *fillText 200 100 A sentence of words.*
### strokeText
strokeText executes the JavaScript canvas command strokeText(s,x,y).  
strokeText is used to print outlined text to the canvas.  
Use the font command beforehand to set the font size.  
strokeText takes three arguments: x, y and s.  
(the syntax for this command is: *strokeText x y s*)  
x and y are the x-coordinate and y-coordinate, respectively, of the position you wish to draw the text at.  
s is the text you wish to print.  
Example: *strokeText 200 100 A sentence of words.*
### fillRect
fillRect executes the JavaScript canvas command fillRect(x,y,w,h).  
fillRect is used to draw filled in rectangles.  
fillRect takes four arguments: x, y, w and h.  
(the syntax is: *fillRect x y w h*)  
x and y are the x-coordinate and y-coordinate, respectively, of the top-left corner of the rectangle.
w and h are the width and height, respectively, of the rectangle.  
Example: *fillRect 0 0 410 410*
### strokeRect
strokeRect executes the JavaScript canvas command strokeRect(x,y,w,h).  
strokeRect is used to draw outlines of rectangles.  
strokeRect takes four arguments: x, y, w and h.  
(the syntax is: *strokeRect x y w h*)  
x and y are the x-coordinate and y-coordinate, respectively, of the top-left corner of the rectangle.
w and h are the width and height, respectively, of the rectangle.  
Example: *strokeRect 0 0 410 410*
### fillStyle
fillStyle represents the JavaScript canvas property fillStyle.  
fillStyle is used to set the colour of the lines drawn using fill-type commands. (e.g. fillRect, fillText)  
fillStyle takes one argument: c.  
(the syntax is: *fillStyle c*)  
c is a colour, in hexadecimal.  
Example: *fillStyle #0F0*  
See the section on Colours.  
### strokeStyle
strokeStyle represents the JavaScript canvas property strokeStyle.  
strokeStyle is used to set the colour of the lines drawn using stroke-type commands. (e.g. stroke, strokeRect, strokeText)  
strokeStyle takes one argument: c.  
(the syntax is: *strokeStyle c*)  
c is a colour, in hexadecimal.  
Example: *strokeStyle #0F0*  
See the section on Colours.  
### quad
quad executes the JavaScript canvas command qudraticCurveTo(x,y,w,h).  
quad is used to draw quadratic curves. 
The curve starts at the last point in the path (the cursor position), arches towards the turning point, then goes to the end point.
quad takes four arguments: p, q, x and y.  
(the syntax is: *quad p q x y*)  
p and q are the x-coordinate and y-coordinate, respectively, of the turning point of the curve.  
x and y are the x-coordinate and y-coordinate, respectively, of the stopping point of the curve.  
Example: *quad 200 300 410 410*
### resize
resize is a custom command.  
resize sets the size of the canvas to the given dimensions.  
resize takes two arguments: w and h.  
(the syntax for this command is: *resize w h*)  
w is the width of the canvas.  
h is the height of the canvas.  
Example: *resize 400 400*  

## Examples
### Up arrow
The following sequence of commands draws an arrow:  

	lineWidth 2  
	beginPath  
	moveTo 100 400  
	lineTo 100 100  
	moveTo 100 400  
	lineTo 100 100  
	lineTo 0 100  
	lineTo 200 0  
	lineTo 400 100  
	lineTo 300 100  
	lineTo 300 400  
	lineTo 100 400  
	closePath  
	stroke  
### Pokéball 
The following sequence of commands draws a Pokéball icon:  
  
	resize 415 415  
	var C 208   
	arc $C $C 206 0 2PI  
	stroke  
	closePath  
	arc $C $C 75 0 2PI   
	stroke   
	closePath  
	beginPath  
	moveTo 133 $C  
	line 2 $C  
	stroke  
	closePath   

## Colours
Colours are made using a mixture of the basic colours red, green and blue.  
The amount of each colour to add is expressed as a "number" in the range 0 - F, 
where 0 = 0, 1 = 1, ... until 9. Then, A = 10, B = 11, C = 12, D = 13, E = 15 and F = 16.  
So each colour is actually described as a number from 0 to 16, but the numbers 10-16 are replaced with the letters A - F.  
Colours must be prefixed with the hash symbol (#).
Here are some examples of colours:  
- #F00 is red. (this colour is a combination of 16 (maximum) red, 0 green and 0 blue)
- #0F0 is green. (this colour is a combination of 0 red, 16 (maximum) green and 0 blue)
- #00F is blue. (this colour is a combination of 0 red, 0 green and 16 (maximum) blue)
- #FF0 is yellow. (this colour is a combination of 16 red, 16 green and 0 blue)
- #F0F is magenta. (this colour is a combination of 16 red, 0 green and 16 blue)
- #0FF is cyan. (this colour is a combination of 0 red, 16 green and 16 blue)
- #FFF is white. (this colour is a combination of 16 red, 16 green and 16 blue)
- #000 is black. (this colour is a combination of 0 red, 0 green and 0 blue)
- #04F is light blue. (this colour is a combination of 0 red, 4 green and 16 blue)

## Co-ordinates
Co-ordinates are taken as the offset from the top left of the canvas.  
For example, an x-coordinate of 200 means that that position is 200 pixels away from the top left corner of the canvas.  
Similarly, a y-coordinate of 350 means that that position is 300 pixels away from the top left of the canvas.  

## Information boxes 
liveCanvas provides extra information in the form of text boxes under the canvas.
### Dimensions
The width and height of the canvas in pixels is shown here.  
You can click on this to hide it (however, you cannot show it again).
### Executed commands
Everytime a command is executed successfully, it is shown here.  
This list lets you keep track of commands you've executed, paths you've created and variables you've set.  
This list shows the commands that were actually executed, not what was entered into the text box. The full values of variables and constants will be shown, and command names will be shown in their full form, where shortcut commands were used.

## Operators
### Replay
The replay operator, *>>*, allows you to save commands and repeat them easily at a later time.  
This can be useful if you have to do the same thing many times.  
Save a command by putting *>>* before it, for example, 
*>>moveTo 0 0*  
Do not put a space between *>>* and the command name.  
Don't do this:  
*>> moveTo 0 0*.  
Note that a command saved using the replay operator is still executed when it is saved.  
To execute the saved command, simply type *<<*.  
Here is an example of the use of the replay operator:  

	resize 400 400   
	lineWidth 2   
	beginPath   
	>>moveTo 200 200   
	line 100 200   
	<<   
	line 100 100   
	<<   
	line 200 100   
	<<   
	line 300 100   
	<<   
	line 300 200   
	<<   
	line 300 300   
	<<   
	line 200 300   
	<<   
	line 100 300   
	<<   
	closePath   
	stroke     
### Variable reference
A variable is a symbol that represents a number or text.
Variables can be referenced in commands with the symbol $.  
For example, after you do this:                  
*var CircleRadius 100*  
you can do this:      
*arc 0 0 $CircleRadius 0 6*  
and the "Executed commands" list will show this:      
*arc 0 0 100 0 6*  
Referencing a variable which hasn't been created yet will result in the whole reference being treated as a string instead.  
### Degrees to radians  
To insert a degree value into a command argument where an argument in radians is expected, you can use the *Deg* operator.  
To do this, add the number of degrees before the *Deg*, like this: *360Deg*.  
This is especially useful when using the arc command.  
Angles are measured clockwise from the right.
#### Pi
***You don't need this anymore because of the new Deg operator.***  
The constant π (3,1415926535897) can be inserted directly into commands.
To do this, write ***x**PI*, where x is the coefficient you wish to multiply PI by.
For example, writing *3PI* results in 9,4247779607693.
In a command, this would look like this:      
*arc 200 200 50 0 2PI*  
If you look at the "Executed commands" section after executing the above command, you'll see this:      
*arc 200 200 50 0 6,2831853071795*  
  
If you want to use the actual word PI instead of the value π, simply write PI.  
So, the command below,  
*strokeText 0 0 my favourite food is PI*  
will draw the text "my favourite food is PI".  
If you want to refer to the value 1π (or 3.1415926535897), you must write *1PI*.  
### Square root
The square root of a number can be inserted directly into commands.
To do this, write *SQRT**x***, where x is the number you wish to take the square root of.
For example, writing *SQRT2* results in 1,4142135623730.
In a command, this would look like this:      
*lineTo SQRT2 SQRT2*  
If you look at the "Executed commands" section after executing the above command, you'll see this:      
*lineTo 1,4142135623730 1,4142135623730*   
You can also add a number before the "SQRT" to multiply the square root by a number, for example, *10SQRT3*.  

## Warnings
- Do not insert string arguments or identifiers where numerical values are expected.  
- When writing decimal numbers, it is recommended that you use the dot character (".") and not the comma character (",").   
liveCanvas can handle numbers written with the comma, however, it is better to use the dot.  
- **Do not mix operators.** Do not use many operators simultaneously, in the same expression.  
The operators that cannot be combined are *SQRT*, *PI* and *$*.
For example, this is an invalid argument: *"SQRT$two"*.   
However, this is a valid command:  
*arc $centerX $centerY SQRT2 1PI 2PI*   
You can use one operator per argument.  
One exception to this is the *>>* operator. You can use the *>>* operator and have other operators in your command.  