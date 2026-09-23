const wave = document.getElementById("waveLine");

let time = 0;

function drawWave() {

    let path = "";

    for (let x = 0; x <= 1000; x += 4) {

        const y = 100 + 90 * Math.sin((x / 60) + time);

        if (x === 0) {
            path += `M ${x} ${y}`;
        } else {
            path += ` L ${x} ${y}`;
        }
    }

    wave.setAttribute("d", path);

    time += 0.03;

    requestAnimationFrame(drawWave);
}

drawWave();