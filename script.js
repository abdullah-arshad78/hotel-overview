
const chatIcon = document.getElementById("chat-icon");
const chatBox = document.getElementById("chat-box");
const userMenu = document.getElementById("user-menu");
const userBox = document.getElementById("user-menu-box");


const closeUserNav = document.getElementById("user-nav-close");
const chatContainer = document.getElementById("chat-container");


const notificationsMenu = document.getElementById("user-nav-notifications-menu");
const notifications = document.getElementById("notifications");
const notificationsContainer = document.getElementById("notifications-container");



//Array for chats 


const chatPeople = [{
    Id:1,
    name:" Huzaifa Bhutta",
    image:"img/bhutta.png",
    message:"Goli kara rha bhai ko??",
    time:"Just now",
    read: false,
},
{
    Id:2,
    name:" Alice Mackey",
    image:"img/girl1.png",
    message:"yeah went well...",
    time:"23:00",
    read:true
},
{
    Id:3,
    name:" Ismail Sayyed",
    image:"img/ismail.png",
    message:"HAHAHA sai baat..",
    time:"1d ago",
    read:true,
},
{
    Id:3,
    name:" Shaheer Yar",
    image:"img/malak.png",
    message:"check out my new creative",
    time:"1d ago",
    read:false
},
{
    Id:4,
    name:"Nancy Khursheed",
    image:"img/girl2.png",
    message:"Nancy Khursheed!! Really?",
    time:"1d ago",
    read:false
},
{
    Id:5,
    name:"John Graham",
    image:"img/man1.png",
    message:"Yo man, What's up?",
    time:"2d ago",
    read: true
},
{
    Id:6,
    name:"Jordi Quiton",
    image:"img/man2.png",
    message:"brumm brumm...",
    time:"3d ago",
    read: true
},
{
    Id:7,
    name:"Cian Hogan",
    image:"img/man3.png",
    message:"Yeah seems amazing",
    time : "3d ago",
    read: false
},
{
    Id:8,
    name:"Roz Curtin",
    image:"img/girl3.png",
    message:"yeah! high five!!!",
    time:"3d ago",
    read: true
},
{
    Id:9,
    name:"Micheal Qureshi",
    image:"img/man4.png",
    message:"Sai khel gya ...",
    time:"3d ago",
    read: false
}
]



//Array for notifications

const notificationArr= [
    {
        image:"img/girl3.png",
        message:"Roz invited you to like a page",
        read: false
    },
    {
        image:"img/bhutta.png",
        message:"Huzaifa sent you a tip",
        read: true
    },
    {
        image:"img/malak.png",
        message:"Shaheer Liked your message",
        read: false
    },
    {
        image:"img/ismail.png",
        message:"Ismail sent you an invite",
        read: true
    },
    {
        image:"img/man1.png",
        message:"John mentioned you in a comment",
        read: true
    },
    {
        image:"img/girl2.png",
        message:"Nancy inquired about her surname",
        read: false
    },
    {
        image:"img/man2.png",
        message:"Jordi wants to buy a bike",
        read: false
    }

]

//Updating notifications with our data

   const divvedNotifications = notificationArr.map(item=>{
     if(item.read){
       return `
       <div class="notification read">
       <img src="${item.image}" alt="notification pic" />
       <p class="notification-msg">
         ${item.message}
       </p>
     </div>
       `;
     }else{
       return `
       <div class="notification unread">
       <img src="${item.image}" alt="notification pic" />
       <p class="notification-msg">
         ${item.message}
       </p>
       <svg class="notification-icon">
         <use
           xlink:href="img/sprite.svg#icon-controller-record"
         ></use>
       </svg>
     </div>
       `;
     }
   })

   notificationsContainer.innerHTML = divvedNotifications.join("")
   



/// Updating chatbox with our chatdata


const listedChat = chatPeople.map(item=>{
    if(item.read){
return `
        <li class="unread">
<img src="${item.image}" alt="${item.name}" />
<div class="person-info">
  <h3 class="person-name">${item.name}</h3>
  <p class="person-msg">
    ${item.message}
    <svg class="icon-chat__icon">
      <use
        xlink:href="img/sprite.svg#icon-dot-single"
      ></use></svg
    ><span class="time">${item.time}</span>
  </p>
</div>
</li> 
        `;
    }else{
        return `
        <li class="read">
        <img src="${item.image}" alt="${item.name}" />
        <div class="person-info">
          <h3 class="person-name">${item.name}</h3>
          <p class="person-msg">
            ${item.message}
            <svg class="icon-chat__icon">
              <use
                xlink:href="img/sprite.svg#icon-dot-single"
              ></use></svg
            ><span class="time">${item.time}</span>
          </p>
        </div>
        </li> `
    }
})

chatBox.innerHTML= listedChat.join("");

{/* <li class="unread">
<img src="img/ismail.png" alt="ismails-img" />
<div class="person-info">
  <h3 class="person-name">Name</h3>
  <p class="person-msg">
    Hi there how are you
    <svg class="icon-chat__icon">
      <use
        xlink:href="img/sprite.svg#icon-dot-single"
      ></use></svg
    ><span class="time">12:00</span>
  </p>
</div>
</li> */}


//Event listeners

userMenu.addEventListener("click",(e)=>{
  
  userBox.classList.toggle("show-user-box");
})

chatIcon.addEventListener("click",()=>{
  chatContainer.classList.toggle("show-chat-box")
})


notificationsMenu.addEventListener("click",()=>{
  notifications.classList.toggle("show-our-notifications")
})
