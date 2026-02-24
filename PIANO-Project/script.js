let p = document.querySelector("p #keyDisplay");
let music = document.querySelectorAll("audio");
let whiteKeys = document.querySelectorAll(".white");
let blackKeys = document.querySelectorAll(".black");

// mouse functionality code

whiteKeys.forEach((e) => {
  //   console.log(e.innerHTML);
  e.addEventListener("click", () => {
    // console.log(e.dataset.key);

    if (e.dataset.key == "A") {
      p.innerHTML = e.innerHTML;
      music[0].currentTime = 0;
      music[0].play();
    } else if (e.dataset.key == "S") {
      p.innerHTML = e.innerHTML;
      music[1].currentTime = 0;
      music[1].play();
    } else if (e.dataset.key == "D") {
      p.innerHTML = e.innerHTML;
      music[2].currentTime = 0;

      music[2].play();
    } else if (e.dataset.key == "F") {
      p.innerHTML = e.innerHTML;
      music[3].currentTime = 0;

      music[3].play();
    } else if (e.dataset.key == "G") {
      p.innerHTML = e.innerHTML;
      music[4].currentTime = 0;

      music[4].play();
    } else if (e.dataset.key == "H") {
      p.innerHTML = e.innerHTML;
      music[5].currentTime = 0;

      music[5].play();
    } else if (e.dataset.key == "J") {
      p.innerHTML = e.innerHTML;
      music[6].currentTime = 0;

      music[6].play();
    } else if (e.dataset.key == "K") {
      p.innerHTML = e.innerHTML;
      music[7].currentTime = 0;

      music[7].play();
    } else if (e.dataset.key == "L") {
      p.innerHTML = e.innerHTML;
      music[8].currentTime = 0;

      music[8].play();
    }
  });
});

blackKeys.forEach((e) => {
  // console.log(e);
  e.addEventListener("click", () => {
    if (e.innerHTML == "W") {
      p.innerHTML = e.innerHTML;
      music[9].currentTime = 0;
      music[9].play();
    } else if (e.innerHTML == "E") {
      p.innerHTML = e.innerHTML;
      music[10].currentTime = 0;
      music[10].play();
    } else if (e.innerHTML == "T") {
      p.innerHTML = e.innerHTML;
      music[11].currentTime = 0;
      music[11].play();
    } else if (e.innerHTML == "Y") {
      p.innerHTML = e.innerHTML;
      music[12].currentTime = 0;
      music[12].play();
    } else if (e.innerHTML == "U") {
      p.innerHTML = e.innerHTML;
      music[13].currentTime = 0;
      music[13].play();
    } else if (e.innerHTML == "O") {
      p.innerHTML = e.innerHTML;
      music[14].currentTime = 0;
      music[14].play();
    } else if (e.innerHTML == "P") {
      p.innerHTML = e.innerHTML;
      music[15].currentTime = 0;
      music[15].play();
    }
  });
});

// keyboard functionality

document.addEventListener("keydown", (e) => {
  console.log(e.key.toUpperCase());
  if (e.key.toUpperCase() == "A") {
    whiteKeys[0].style.backgroundColor = "gray";
    setTimeout(() => {
      whiteKeys[0].style.backgroundColor = "white";
    }, 100);
    p.innerHTML = e.key.toUpperCase();
    music[0].currentTime = 0;
    music[0].play();
  } 
  else if (e.key.toUpperCase() == "S") {
    p.innerHTML = e.key.toUpperCase();
    music[1].currentTime = 0;
    music[1].play();

    whiteKeys[1].style.backgroundColor = "gray";
    setTimeout(() => {
      whiteKeys[1].style.backgroundColor = "white";
    }, 100);

  }
   else if (e.key.toUpperCase() == "D") {
    p.innerHTML = e.key.toUpperCase();
    music[2].currentTime = 0;
    music[2].play();

    whiteKeys[2].style.backgroundColor = "gray";
    setTimeout(() => {
      whiteKeys[2].style.backgroundColor = "white";
    }, 100);



  } else if (e.key.toUpperCase() == "F") {
    p.innerHTML = e.key.toUpperCase();
    music[3].currentTime = 0;
    music[3].play();

    whiteKeys[3].style.backgroundColor = "gray";
    setTimeout(() => {
      whiteKeys[3].style.backgroundColor = "white";
    }, 100);


  } else if (e.key.toUpperCase() == "G") {
    p.innerHTML = e.key.toUpperCase();
    music[4].currentTime = 0;
    music[4].play();

    whiteKeys[4].style.backgroundColor = "gray";
    setTimeout(() => {
      whiteKeys[4].style.backgroundColor = "white";
    }, 100);


  } else if (e.key.toUpperCase() == "H") {
    p.innerHTML = e.key.toUpperCase();
    music[5].currentTime = 0;
    music[5].play();

    whiteKeys[5].style.backgroundColor = "gray";
    setTimeout(() => {
      whiteKeys[5].style.backgroundColor = "white";
    }, 100);

  } else if (e.key.toUpperCase() == "J") {
    p.innerHTML = e.key.toUpperCase();
    music[6].currentTime = 0;
    music[6].play();

    whiteKeys[6].style.backgroundColor = "gray";
    setTimeout(() => {
      whiteKeys[6].style.backgroundColor = "white";
    }, 100);


  } else if (e.key.toUpperCase() == "K") {
    p.innerHTML = e.key.toUpperCase();
    music[7].currentTime = 0;
    music[7].play();

    whiteKeys[7].style.backgroundColor = "gray";
    setTimeout(() => {
      whiteKeys[7].style.backgroundColor = "white";
    }, 100);

  } else if (e.key.toUpperCase() == "L") {
    p.innerHTML = e.key.toUpperCase();
    music[8].currentTime = 0;
    music[8].play();

    whiteKeys[8].style.backgroundColor = "gray";
    setTimeout(() => {
      whiteKeys[8].style.backgroundColor = "white";
    }, 100);

  } else if (e.key.toUpperCase() == "W") {
    p.innerHTML = e.key.toUpperCase();
    music[9].currentTime = 0;
    music[9].play();

  } else if (e.key.toUpperCase() == "E") {
    p.innerHTML = e.key.toUpperCase();
    music[10].currentTime = 0;
    music[10].play();
  } else if (e.key.toUpperCase() == "T") {
    p.innerHTML = e.key.toUpperCase();
    music[11].currentTime = 0;
    music[11].play();
  } else if (e.key.toUpperCase() == "Y") {
    p.innerHTML = e.key.toUpperCase();
    music[12].currentTime = 0;
    music[12].play();
  } else if (e.key.toUpperCase() == "U") {
    p.innerHTML = e.key.toUpperCase();
    music[13].currentTime = 0;
    music[13].play();
  } else if (e.key.toUpperCase() == "O") {
    p.innerHTML = e.key.toUpperCase();
    music[14].currentTime = 0;
    music[14].play();
  } else if (e.key.toUpperCase() == "P") {
    p.innerHTML = e.key.toUpperCase();
    music[15].currentTime = 0;
    music[15].play();
  }
});
