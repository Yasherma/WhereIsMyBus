let Boxes=document.querySelectorAll("#Box");
let ResetBt=document.querySelector(".reset");
let Newe=document.querySelector("#New");
let message=document.querySelector(".message");
let mes=document.querySelector("#mes");
// 



let trun0=true;
let winpatten=[
[0,1,2],
[0,3,6],
[0,4,8],
[1,4,7],
[2,5,8],
[2,4,6],
[3,4,5],
[6,7,8],
];
const resetgame=()=>{
	trun0=true;
	enableBoxes();
	message.classList.add("hide");
};
Boxes.forEach((Box)=>{
	Box.addEventListener("click",()=>{
		console.log("xt");
		if(trun0){
			Box.innerText="O";
			trun0=false;
		}
		else{Box.innerText="X";
			trun0=true;

		}

		Box.disabled=true;
		checkedWin();
		

	});
});
const disableBoxes=()=>{
	for(let Box of Boxes){
		Box.disabled=true;

	}

};
const enableBoxes=()=>{
	for(let Box of Boxes){
		Box.disabled=false;
		Box.innerText="";
}
};

const showWinner=(winner)=>{
	mes.innerText=`congratulation ${winner}you are winner `;
	message.classList.remove("hide");
	disableBoxes();
}
 const checkedWin=()=>{
 	for(let Patten of winpatten){
 		let pos1=Boxes[Patten[0]].innerText;
 		let pos2=Boxes[Patten[1]].innerText;
 		let pos3=Boxes[Patten[2]].innerText;

 		if(pos1 !="" && pos2 !="" && pos3 !=""){
 			if(pos1===pos2 && pos2===pos3){
 				console.log("winner",pos1);
 				showWinner(pos1);

 			}
 		}

 	}

 }
 New.addEventListener("click",resetgame);
 reset.addEventListener("click",resetgame);