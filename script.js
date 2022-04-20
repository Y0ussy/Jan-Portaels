const cursor = document.querySelector('.cursor'); // Dit selecteert de .cursor

document.addEventListener('mousemove' , e => {
cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")

})

  