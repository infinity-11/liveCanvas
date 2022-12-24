var replay;
function interpret (commandText) {
	let c = commandText;
	let parts = c.split(" ");
	let targetCommand = parts[0];
	parts.splice(0,1);
	let args = parts;
	for(var i = 0; i < args.length; i++){
		if (args[i].endsWith("PI")){
			let constant = args[i]
			let coefficient = constant.substr(0,constant.indexOf("PI"));
			coefficient = Number.parseFloat(coefficient);
			if(!Number.isNaN(coefficient)){
				args[i] = coefficient*Math.PI;
			}
		}
		else if(args[i].includes("SQRT")){
			let term = args[i];
			let num = term.substr(term.lastIndexOf("T") + 1,term.length);
			let coeff = term.substr(0,term.indexOf("S"));
			num = Number.parseFloat(num);
			coeff = Number.parseFloat(coeff);
			if(!Number.isNaN(num)){
				Number.isNaN(coeff) ? args[i] = Math.sqrt(num) : args[i] = Math.sqrt(num) * coeff;
			}
		}
		else if (args[i].includes("$")) {
			let r = args[i];
			let reference = r.substr(1,r.length);
			for (var v of variables.vars) {
				if (reference == v.name) {
					args[i] = v.value;
				}
			}
		}
	}
	let returnVal;
	if (targetCommand.startsWith(">>")){
		let theCommand = targetCommand.substr(2,targetCommand.length);
		replay = [theCommand,args];
		returnVal = [theCommand,args];
	}
	else if (targetCommand == "<<"){
		returnVal = replay;
	}
	else {
		returnVal = [targetCommand,args];
	}
	return returnVal;
}

var variables = {
	vars: [],
	setVar: (nm,ve)=>{
		let ks = [];
		for(var v of variables.vars){
			ks.push(v.name);
		}
		if(!ks.includes(nm)){
			variables.vars.push({name: nm,value: ve});
		}
		else {
			let I = ks.indexOf(nm);
			variables.vars[I].value = ve;
		}
	},
	getVar: (nm)=>{
		let ks = [];
		for (var v of variables.vars){
			ks.push(v.name);
		}
		let I = ks.indexOf(nm);
		if (I >= 0){
			return variables.vars[I].value;}
		else { return null;}
	},
	clear: ()=>{this.vars = [];},
}