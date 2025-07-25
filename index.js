const addFriend = document.querySelector("#add")
// const remFriend = document.querySelector("#remove")
const istatus = document.querySelector("#status")
let meriMarzi = 0


addFriend.addEventListener("click",()=>{
    if(meriMarzi == 0){
        istatus.innerText = "Friends"
        istatus.style.color = "green"
        addFriend.innerText = "Remove friend"
        addFriend.style.color = "black"
        addFriend.style.backgroundColor = "grey"
        meriMarzi = 1
    }
    else{
        istatus.innerText = "Stranger"
        istatus.style.color = "red"
        addFriend.innerText = "Add friend"
        addFriend.style.color = "white"
        addFriend.style.backgroundColor = "cadetblue"
        meriMarzi = 0
    }
})
// remFriend.addEventListener("click",()=>{
//     istatus.innerText = "Stranger"
//     istatus.style.color = "red"
// })