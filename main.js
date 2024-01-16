const containers = document.querySelectorAll('.countainer');
const countainer_box = document.querySelector('.countainer-box');
const next = document.querySelector('.right-btn');
var counter = 0;
let move = 0;
let comp = containers.length-4

const goNext = () => {
    if(move<=comp){
        counter++;
        slideContainer();
        move++;
    }
}

function goPrev() {
    if (move >= 1) {
        counter--;
        slideContainer();
        move--;
    }
}
const slideContainer = () => {
    containers.forEach(
        (container) => {
            container.style.transform = `translateX(-${counter * 420}px)`;
        }
    )
}


function sendEmail(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "dev786aarush@gmail.com",
        Password : "10294E4F0FE30B065067660B291F4A357DB4",
        To : 'dev786aarush@gmail.com',
        From : "dev786aarush@gmail.com",
        Subject : "Message from MySalon",
        Body : "message_body"
    }).then(
      message => alert(message)
    );
}
