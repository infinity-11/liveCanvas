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
			case "nOp":
				usedCmd = SPECIAL.NOP;
				break;
			case "var":
				let theValue = args.slice(1,args.length).join(" ");
				variables.setVar(args[0],args[1]);
				break;
			case "resize":
				setDimensions(args[0],args[1]);
				break;
			case "fill":
				C.fill();
				break;
			case "moveTo":
				moveCursor(args[0],args[1]);
				break;
			case "move":
				moveCursor(args[0],args[1]);
				usedCmd = "moveTo";
				break;
			case "lineTo":
				C.lineTo(args[0],args[1]);
				moveCursor(args[0],args[1]);
				break;
			case "line":
				C.lineTo(args[0],args[1]);
				moveCursor(args[0],args[1]);
				commandText = "lineTo";
				break;
			case "stroke":
				C.stroke();
				break;
			case "beginPath":
				C.beginPath();
				break;
			case "begin":
				C.beginPath();
				usedCmd = "beginPath";
				break;
			case "arc":
				C.arc(...args);
				break;
			case "font":
				let fontArg = args[0].endsWith("px") ? args[0]+" "+args[1] : args[0]+"px "+args[1];
				C.font = fontArg;
				break;
			case "fillText":
				let fillString = args.slice(2,args.length).join(" ") 
				C.fillText(fillString,args[0],args[1]);
				break;
			case "strokeText":
				let strokeString = args.slice(2,args.length).join(" ") 
				C.strokeText(strokeString,args[0],args[1]);
				break;
			case "lineWidth":
				C.lineWidth = args[0];
				break;
			case "lineCap":
				C.lineCap = args[0];
				break;
			case "lineJoin":
				C.lineJoin = args[0];
				break;
			case "fillStyle":
				C.fillStyle = args[0];
				break;
			case "strokeStyle":
				C.strokeStyle = args[0];
				break;
			case "closePath":
				C.closePath();
				break;
			case "close":
				C.closePath();
				usedCmd = "closePath";
				break;
			case "end":
				C.closePath();
				C.stroke();
				usedCmd = "closePath<br>stroke"
				break;
			case "strokeRect":
				C.strokeRect(...args);
				break;
			case "fillRect":
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
					window.alert(`Encountered error while executing code "${code}" \n${E.name}: ${E.message}`);
					usedCmd = SPECIAL.FAILURE;
				}
				break;
			default:
				usedCmd = SPECIAL.FAILURE;
				break;
		}
		if (typeof usedCmd == "string") {
			usedCmd == "" ? usedCmd = target : ()=>{} 
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
			window.alert("That command is unrecognised.");
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