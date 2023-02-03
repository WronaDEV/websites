function getRandomNumber(min, max) {    
    return Math.random() * (max - min) + min;
}

function toggleFullScreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }

function RandomPlace() {
    const MagicDiv = document.getElementById("magic-div");
    MagicDiv.style.marginTop = getRandomNumber(0, screen.availHeight) + "px";
    MagicDiv.style.marginLeft = getRandomNumber(0, screen.width) + "px";
}

function Start() {
    const DifficultyLevels = document.getElementById("difficulty-levels");
    const LevelText = document.getElementById("level-text");
    const StartContainer = document.getElementById("start-container");
    const CountingDiv = document.getElementById("counting-div");
    const CountingText = document.getElementById("counting-text");
    const MagicDiv = document.getElementById("magic-div");
    const level = localStorage.getItem("level");
    DifficultyLevels.style.display = "none";
    LevelText.style.display = "none";
    StartContainer.style.marginTop = "-999px";
    StartContainer.style.opacity = "0";
    setTimeout(() => {
        CountingDiv.className = "show";
        CountingText.innerHTML = "3";
      }, 1000)
      setTimeout(() => {
        CountingText.innerHTML = "2";
      }, 2000)
      setTimeout(() => {
        CountingText.innerHTML = "1";
      }, 3000)
      setTimeout(() => {
        CountingText.innerHTML = "GO!";
        toggleFullScreen();
      }, 4000)
      setTimeout(() => {
        CountingDiv.className = "unshow";
      }, 4500)
      setTimeout(() => {
        MagicDiv.className = "show";
        if (level === "easy") {
            MagicDiv.style.width = "50px";
            MagicDiv.style.height = "50px";
            MagicDiv.style.transition = "all 0.3s"
            RandomPlace();
        }
        if (level === "medium") {
            MagicDiv.style.width = "25px";
            MagicDiv.style.height = "25px";
            MagicDiv.style.transition = "all 0.1s"
            RandomPlace();
        }
        if (level === "hard") {
            MagicDiv.style.width = "10px";
            MagicDiv.style.height = "10px";
            RandomPlace();
        }
        if (level === "impossible") {
            MagicDiv.style.width = "1px";
            MagicDiv.style.height = "1px";
            RandomPlace();
        }
      }, 4600)
}

function SetLevel(level) {
    localStorage.setItem("level", level);
}

function LevelEasy() {
    SetLevel("easy");
    Level();
}

function LevelMedium() {
    SetLevel("medium");
    Level();
}

function LevelHard() {
    SetLevel("hard");
    Level();
}

function Level() {
    const level = localStorage.getItem("level");
    const levelText = document.getElementById("level");
    if (!level) {
        SetLevel("easy");
        levelText.innerHTML = "Easy";
    }
    if (level == "easy") {
        SetLevel("easy");
        levelText.innerHTML = "Easy";
        levelText.style.color = "white";
        levelText.style.textShadow = "none";
    }
    if (level == "medium") {
        SetLevel("medium");
        levelText.innerHTML = "Medium";
        levelText.style.color = "white";
        levelText.style.textShadow = "none";
    }
    if (level == "hard") {
        SetLevel("hard");
        levelText.innerHTML = "Hard";
        levelText.style.color = "white";
        levelText.style.textShadow = "none";
    }
    if (level == "impossible") {
        SetLevel("impossible");
        levelText.innerHTML = "Impossible";
        levelText.style.color = "red";
        levelText.style.textShadow = "red 0 0 20px";
    }
}

function Impossible() {
    SetLevel("impossible");
    Level();
    console.log("Succesfully changed difficulty level to IMPOSSIBLE!!!");
    console.warn("Be careful because this level is really impossible");
}