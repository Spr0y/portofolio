const player = document.getElementById('player');
const background = document.getElementById('background');
const cube = document.getElementById('cube');
const bgMusic = document.getElementById('bgMusic');
const panicMusic = document.getElementById('panicMusic');

let currentScene = 1;
let playerX = 50; // Starting X position for the player
let playerSpeed = 5; // Speed at which the player moves
let cubeCollected = false;

function init() {
    bgMusic.play();
    document.addEventListener('keydown', handleKeyPress);
    document.addEventListener('touchstart', handleTouch);
    updateScene();
}

function handleKeyPress(event) {
    if (event.key === 'a') {
        movePlayer(-playerSpeed);
    } else if (event.key === 'd') {
        movePlayer(playerSpeed);
    } else if (event.key === 'Enter' && currentScene === 4 && cubeCollected) {
        goToScene(9); // Transition to scene 9
    }
}

function handleTouch(event) {
    const touchX = event.touches[0].clientX;
    if (touchX < window.innerWidth / 2) {
        movePlayer(-playerSpeed);
    } else {
        movePlayer(playerSpeed);
    }
}

function movePlayer(deltaX) {
    playerX += deltaX;
    player.style.left = `${playerX}px`;

    // Check for scene transitions
    if (currentScene === 1 && playerX > 1800) {
        goToScene(2);
    } else if (currentScene === 2 && playerX > 1800) {
        goToScene(3);
    } else if (currentScene === 4 && playerX > 1800 && cubeCollected) {
        goToScene(5);
    } else if (currentScene === 5 && playerX > 1800) {
        goToScene(6);
    }
}

function goToScene(sceneNumber) {
    currentScene = sceneNumber;
    updateScene();
}

function updateScene() {
    switch (currentScene) {
        case 1:
            background.src = 'scene1_background.jpg'; // Set background for scene 1
            player.style.left = '50px';
            break;
        case 2:
            background.src = 'scene2_background.jpg'; // Set background for scene 2
            player.style.left = '50px';
            break;
        case 3:
            background.src = 'scene3_background.jpg'; // Set background for scene 3
            player.style.left = '50px';
            break;
        case 4:
            background.src = 'scene4_background.jpg'; // Set background for scene 4
            cube.style.display = 'block'; // Show the cube
            player.style.left = '50px';
            break;
        case 5:
            background.src = 'scene5_background.jpg'; // Set background for scene 5
            player.style.left = '50px';
            break;
        case 6:
            background.src = 'scene6_background.jpg'; // Set background for scene 6
            panicMusic.play(); // Change music
            player.style.left = '50px';
            break;
        // Add more cases for scenes 7, 8, 9, and 10
    }
}

init();
