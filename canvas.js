// utility functions
const moveCursor = (x,y) => {
	document.getElementById("canvas").getContext("2d").moveTo(x,y);
};
const setDimensions = (x,y) => {
	document.getElementById("canvas").setAttribute("width",x);
	document.getElementById("canvas").setAttribute("height",y);
	document.getElementById("dimens") ? document.getElementById("dimens").innerHTML = "Dimensions: "+x+"x"+y+"<br>Center: "+Math.ceil(x/2)+","+Math.ceil(y/2)
	: ()=>{};
}

var canvasElement = document.getElementById("canvas");
let breadth = Math.floor(0.97*innerWidth);
setDimensions(breadth,breadth);
const dimensions = document.getElementById("dimens");
document.getElementById("dimens").addEventListener("click",()=>{
	document.body.removeChild(document.getElementById("dimens"));
});
canvasElement.addEventListener("load",()=>{
	moveCursor(0,0);
});
const C = canvasElement.getContext("2d");
C.strokeStyle = "#000";
C.fillStyle = "#000";
C.textAlign = "center";
var usedCmd;
const SPECIAL = {
	CLEAR: Symbol("SPECIAL_CLEAR"),
	FAILURE: Symbol("SPECIAL_FAILURE"),
	NOP: Symbol("SPECIAL_NOP"),
}
var enterButton = document.getElementById("enterButton");
enterButton.addEventListener("click",()=>{
	let commandText = document.getElementById("command").value;
	target = interpret(commandText)[0];
	args = interpret(commandText)[1];
	usedCmd = "";
	try {
		switch (target){
			case "nop":
				usedCmd = SPECIAL.NOP;
				break;
			case "var":
				let theValue = args.slice(1,args.length).join(" ");
				variables.setVar(args[0],args[1]);
				break;
			case "resize":
				if(!(isNaN(parseInt(args[0])) || isNaN(parseInt(args[1])))){
					setDimensions(args[0],args[1]);
				}
				else {
					usedCmd = SPECIAL.FAILURE;
					window.alert("The dimensions "+args[0]+" x "+args[1]+" are invalid.");
				}
				break;
			case "fill":
				C.fill();
				break;
			case "moveto":
				moveCursor(args[0],args[1]);
				break;
			case "move":
				moveCursor(args[0],args[1]);
				usedCmd = "moveto";
				break;
			case "lineto":
				C.lineTo(args[0],args[1]);
				moveCursor(args[0],args[1]);
				break;
			case "line":
				C.lineTo(args[0],args[1]);
				moveCursor(args[0],args[1]);
				commandText = "lineto";
				break;
			case "stroke":
				C.stroke();
				break;
			case "beginpath":
				C.beginPath();
				break;
			case "begin":
				C.beginPath();
				usedCmd = "beginpath";
				break;
			case "arc":
				C.arc(...args);
				break;
			case "font":
				let fontArg = args[0].endsWith("px") ? args[0]+" "+args[1] : args[0]+"px "+args[1];
				C.font = fontArg;
				break;
			case "filltext":
				let fillString = args.slice(2,args.length).join(" ") 
				C.fillText(fillString,args[0],args[1]);
				break;
			case "stroketext":
				let strokeString = args.slice(2,args.length).join(" ") 
				C.strokeText(strokeString,args[0],args[1]);
				break;
			case "linewidth":
				C.lineWidth = args[0];
				break;
			case "linecap":
				C.lineCap = args[0];
				break;
			case "linejoin":
				C.lineJoin = args[0];
				break;
			case "fillstyle":
				C.fillStyle = args[0];
				break;
			case "strokestyle":
				C.strokeStyle = args[0];
				break;
			case "closepath":
				C.closePath();
				break;
			case "close":
				C.closePath();
				usedCmd = "closepath";
				break;
			case "end":
				C.closePath();
				C.stroke();
				usedCmd = "closepath<br>stroke"
				break;
			case "strokerect":
				C.strokeRect(...args);
				break;
			case "fillrect":
				C.fillRect(...args);
				break;
			case "quad":
				C.quadraticCurveTo(...args);
				break;
			case "clear":
				C.closePath();
				moveCursor(0,0);
				C.clearRect(0,0,canvasElement.width,canvasElement.height);
				break;
			case "reset":
				moveCursor(0,0);
				C.closePath();
				variables.clear();
				C.strokeStyle = "#000";
				C.fillStyle = "#000";
				C.textAlign = "center";
				C.lineJoin = "miter";
				C.lineCap = "butt";
				C.lineWidth = 1;
				let breadth = Math.floor(0.97*innerWidth);
				setDimensions(breadth,breadth);
				C.clearRect(0,0,canvasElement.width,canvasElement.height);
				usedCmd = SPECIAL.CLEAR;
				break;
			case "eval":
				let code = args.join(" ");
				try {
					eval(code);
				}
				catch (E) {
					window.alert(`Encountered error while executing code "${code}"\n\n${E.name}: ${E.message}`);
					usedCmd = SPECIAL.FAILURE;
				}
				break;
			default:
				usedCmd = SPECIAL.FAILURE;
				window.alert("That command is unrecognised.");
				break;
		}
		if (typeof usedCmd == "string") {
			usedCmd == "" ? usedCmd = target.toLowerCase() : usedCmd = usedCmd.toLowerCase();
			document.getElementById("hist").innerHTML = document.getElementById("hist").innerHTML + "<br>" + usedCmd + " " + args.join(" ");
			document.getElementById("command").value = "";
		}
		else if (usedCmd == SPECIAL.CLEAR){
			document.getElementById("command").value = "";
			document.getElementById("hist").innerHTML = "Executed commands: ";
		}
		else if (usedCmd == SPECIAL.NOP){
			document.getElementById("command").value = "";
			
		}
		else if (usedCmd == SPECIAL.FAILURE){
			
		}
	}
	catch (E) {
		window.alert(E.message);
	}
});
document.addEventListener("keypress",()=>{
	if (event.key == "Enter") {
		enterButton.click();
	}
});