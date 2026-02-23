const canvas = document.getElementById("heroCanvas");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
    const container = canvas.parentElement;
    canvas.width = container.clientWidth;
    canvas.height = container.clientHeight;
    drawLayout();
}

function drawLayout() {
    const w = canvas.width;
    const h = canvas.height;

    ctx.clearRect(0, 0, w, h);

    /* White Card Background Effect */
    ctx.shadowColor = "rgba(0,0,0,0.1)";
    ctx.shadowBlur = 40;
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, w, h);
    ctx.shadowBlur = 0;
}

/* Initial Load */
resizeCanvas();

/* Redraw on Resize */
window.addEventListener("resize", resizeCanvas);
