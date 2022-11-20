const messageInput = document.getElementById("message-input");
const messageSent = document.getElementById("showSent");
const errormessage=document.getElementById('errorMsg');
const loaderGroup = document.getElementById("loaderGroup");
const sendbtn = document.getElementById("submit");
const messageBox = document.getElementById('message-box');
const showSent = document.getElementById('showSent');
const messages=[];


sendbtn.addEventListener('click', () => {
if(messageInput.value == '') {
    errormessage.textContent='No message typed in';
} else {
    setTimeout(show, 3000);
    loaderGroup.classList.add('show-loader');
}
});

const show = () => {
    let textMessage = messageInput.value;
    messageBox.innerHTML = textMessage;
    textMessage = '';
    loaderGroup.classList.remove('show-loader');

    // show message sent popup after loader timeout is reached
    showSent.classList.add('show');

    //timeout to remove message popup after 3seconds
    setTimeout(removeMsg,3000);
}
//Remove message popup when timeout is reached
const removeMsg=()=>{
    showSent.classList.remove('show')
}