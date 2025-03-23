const bodyEl = document.querySelector("body");

bodyEl.addEventListener("mousemove", (Event) =>{
    const xPos = Event.offsetX;
    const yPos = Event.offsetY;
    const spanEl = document.createElement("span");
    spanEl.style.left = xPos + "px";
    spanEl.style.top = yPos + "px";
    const size = Math.random(spanEl)*80;
    spanEl.style.width = size + "px";
    spanEl.style.height = size + "px";
    bodyEl.appendChild(spanEl);
    setTimeout(()=>{
        spanEl.remove();
    },2000);

} );