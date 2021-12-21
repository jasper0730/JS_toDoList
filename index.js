const saveBtn = document.querySelector(".saveBtn")
const textContent = document.querySelector(".textContent")
const list = document.querySelector(".list")
const listDeleteBtn = document.querySelector(".listDeleteBtn")
let data = [];
saveBtn.addEventListener("click",(e)=>{
    if(textContent.value == ""){
        return;
    }

    let obj = {};
    obj.content = textContent.value;
    data.push(obj)
    renderData ()
})

function renderData (){
    let str = "";
    data.forEach((item,i)=>{
    str += `<li>${item.content}<input type="button" value="刪除" class="listDeleteBtn" data-num=${i}></li>`
    })
    list.innerHTML = str;
    textContent.value = ""
}

list.addEventListener("click",(e)=>{
    if(e.target.getAttribute("class") !== "listDeleteBtn"){
        return;
    }
    let num = e.target.dataset.num;
    data.splice(num,1)
    renderData()
})

