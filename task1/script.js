function changeBackgroundColor() {
    const colors = ["#ff9999", "#99ff99", "#9999ff", "#ffff99"];
    document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
}
