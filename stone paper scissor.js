let userscore=0;
let Computerscore=0;
let displyboard=document.querySelector("#displyboard");
const Choices=document.querySelectorAll(".Choice");

const NewComputer=()=>{
	const option=["Stone","paper","scissior"];
	const Rend=Math.floor(Math.random()*3);
	return option[Rend];

};
const userscorePra=document.querySelector("#userscore");
const computerscorePra=document.querySelector("#Computerscore");
const drowchoice=()=>{
	console.log("Game was drow.");
	displyboard.innerText="you drow";

};
const showwinnewr=(win,choiceId,Comchoice)=>{
	if(win){
		console.log("win");
		userscore++;
		userscorePra.innerText=userscore;
		displyboard.innerText=`you win ${choiceId} betes ${Comchoice}`;
		displyboard.style.backgroundColor="green";

	}else{
		console.log("loss the match");
		Computerscore++;
		computerscorePra.innerText=Computerscore;
		displyboard.innerText=` you lose computer  win ${Comchoice}   betes ${choiceId}next time`;
		displyboard.style.backgroundColor="red";

	}

};
const PlayGame=(choiceId)=>{
	console.log("choiceId",choiceId);
	const Comchoice=NewComputer();
	console.log("Comchoice",Comchoice);

	if(choiceId===Comchoice){
		drowchoice();
	}
	else{
		let win=true;
		if(choiceId==="stone"){
			win=Comchoice==="paper"?false:true;
		}
		else if(choiceId==="paper"){
			win=Comchoice==="scissior"?false:true;
		}
		else if(choiceId==="scissior"){
			win=Comchoice==="stone"?false:true;
	}
	showwinnewr(win,choiceId,Comchoice);
}


};

Choices.forEach((Choice)=>{

	// console.log(choice);
    Choice.addEventListener("click",()=>{
    	const choiceId=Choice.getAttribute("id");
	   PlayGame(choiceId);
	});

});