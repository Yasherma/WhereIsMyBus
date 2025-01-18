// const btn = document.querySelector("#heart");
// const box = document.querySelector("#box");

// btn.addEventListener("click", () => {
    
//     if (box.style.backgroundColor === "red") {
//         box.style.backgroundColor = "";
//     } else {
//         box.style.backgroundColor = "red";
//     }
// });
//  const hrt=document.querySelector("#btn2");
//  hrt.addEventListener("click",()=>{
//     alert("001 heart");
 
//  });
function generateOTP(length) {
    const characters = '0123456789';
    let otp = '';
    for (let i = 0; i < length; i++) {
        otp += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return otp;
}

document.getElementById('btn2').addEventListener('click', function() {
    const otp = generateOTP(6); // Generate a 6-digit OTP
 
    alert(otp);
});

function handleSubmit(event){
    event.preventDefault();
    window.location.href = 'where.html'; 
}