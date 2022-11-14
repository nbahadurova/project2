let inp = document.querySelector(".inp")
let btn = document.querySelector(".btn")
let rect = document.querySelector('.rect')
let sortIcon = document.getElementById("iconClick")


let changer = true;



btn.addEventListener('click',function(){
  if(inp.value.trim() != 0){
    let span= document.createElement('span')
    let ul = document.createElement('ul')
    let li = document.createElement('li')  
    ul.appendChild(li)  
    li.appendChild(span)
    
    span.innerText=inp.value
    span.classList.add('item')
    
    rect.appendChild(ul)
    inp.value = '';
}
else{
    alert('Please enter a task')
} 
})
rect.addEventListener('click',(a)=>{
  if(a.target.classList.contains('fa-circle-xmark')){
    a.target.parentElement.parentElement.remove()
  }
})

function arrsort(){
  let itemss = document.querySelectorAll('li')
  if(changer==true){
    sortIcon.style.transform = "rotate(180deg)"
    let arr = []
    itemss.forEach(item => {
      arr.push(item)
    });
    
    let newArr = arr.sort((rowA,rowB)=>rowA.innerText>rowB.innerText? 1: -1);
    rect.append(...newArr)
    changer = false
    console.log(newArr)
  }
  else if(changer==false){
    sortIcon.style.transform = "rotate(0deg)"
    let arr = []
    itemss.forEach(item => {
      arr.push(item)
    });
   
    let newArr = arr.sort((rowA,rowB)=>rowA.innerHTML>rowB.innerHTML? 1: -1);
    rect.append(...newArr)
    changer = true
  }
}
sortIcon.addEventListener('click',arrsort)