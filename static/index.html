<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>IMU Orientation Visualizer</title>
    <style>
        body {
            background-color: #0d1117;
            color: white;
            font-family: 'Segoe UI', sans-serif;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
        }

        .cube {
            position: relative;
            width: 150px;
            height: 150px;
            transform-style: preserve-3d;
            transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
            transition: transform 0.1s linear;
        }

        .face {
            position: absolute;
            width: 150px;
            height: 150px;
            background: rgba(0, 255, 255, 0.2);
            border: 2px solid cyan;
        }

        .front {
            transform: translateZ(75px);
        }

        .back {
            transform: rotateY(180deg) translateZ(75px);
        }

        .right {
            transform: rotateY(90deg) translateZ(75px);
        }

        .left {
            transform: rotateY(-90deg) translateZ(75px);
        }

        .top {
            transform: rotateX(90deg) translateZ(75px);
        }

        .bottom {
            transform: rotateX(-90deg) translateZ(75px);
        }

        .angles {
            margin-top: 20px;
            font-size: 18px;
        }
    </style>
</head>

<body>
    <h1>📱 IMU Orientation Visualizer</h1>
    <div class="cube" id="cube">
        <div class="face front"></div>
        <div class="face back"></div>
        <div class="face right"></div>
        <div class="face left"></div>
        <div class="face top"></div>
        <div class="face bottom"></div>
    </div>

    <div class="angles" id="angles">
        X: 0°, Y: 0°, Z: 0°
    </div>

    <script>
        const cube = document.getElementById("cube");
        const anglesText = document.getElementById("angles");

        const socket = new WebSocket("ws://localhost:8080"); // your server IP

        socket.onopen = () => console.log("Connected to WebSocket server");

        socket.onmessage = (event) => {
            const { ax, ay, az, zoom = 1 } = JSON.parse(event.data);

            // Update cube rotation
            cube.style.transform = `rotateX(${ay}deg) rotateY(${0}deg) rotateZ(${ax}deg) scale(${zoom})`;

            // Update angles text
            anglesText.textContent = `X: ${ax.toFixed(2)}°, Y: ${ay.toFixed(2)}°, Z: ${az.toFixed(2)}°, Zoom: ${zoom.toFixed(2)}`;
        };
    </script>


</body>

</html>
