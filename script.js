
const chatIcon = document.getElementById("chat-icon");
const chatBox = document.getElementById("chat-box");
const closeBtn = document.getElementById("close");
const userBox = document.getElementById("user-box");
const userMenu = document.getElementById("user-menu-box");
const closeUser = document.getElementById("close-user-menu")



//Handle user menu
userBox.addEventListener("click",()=>{
    userMenu.classList.add("show-user-menu");
})
closeUser.addEventListener("click",()=>{
    userMenu.classList.remove("show-user-menu")
})

//Handle chatbox
chatIcon.addEventListener("click",()=>{
    chatBox.classList.add("show")
})

closeBtn.addEventListener("click",()=>{
    chatBox.classList.remove("show")
})