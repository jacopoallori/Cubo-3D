/*
Dichiara 3 variabili
*/
let grade = 0,
  active = false,
  interval;
/*
Dichiara la funzione rotate
*/
const rotate = () => {
  // mette nella costante cubes tutti i div con classe face -> ottiene un array
  const cubes = document.querySelectorAll(".cube");
  // per ogni elemento dell'array (ciascun div classe cube) applica la trasformazione css rotateY
  // di gradi uguale alla variabile grade. Attenzione alla sintassi usa l'interpolazione delle stringhe
  // che vuol dire che la stringa è delimitata dal back-stick (alt+96) e la variabile fra parentesi graffe
  Array.from(cubes).forEach(
    (cube) => (cube.style.transform = `rotateY(${grade}deg)`)
  );
};

//questa funzione invece semplicemente cambia solo la classe del pulsante cambiando l'icona via font-awesome
const changePlayPause = () => {
  const icon = document.querySelector(".play-pause i");
  const iconClass = icon.classList[1];
  if (iconClass === "fa-play") {
    icon.classList.remove("fa-play");
    icon.classList.add("fa-pause");
  } else {
    icon.classList.remove("fa-pause");
    icon.classList.add("fa-play");
  }
};
// queste funzione controlla se la variabile active è true o false, se è true modifica la variabile grade (che è globale)
// e chiama la funzione rotate, attenzione che è setInterval, per cui ripete la modifica e la chiamata ogni secondo (1000 millisecondi)
// l'else invece stoppa tutto cambia l'icona con la funzione apposita e cambia la variabile booleana
const playPause = () => {
  if (!active) {
    interval = setInterval(() => {
      grade -= 90;
      rotate();
    }, 1000);
    changePlayPause();
    active = true;
  } else {
    clearInterval(interval);
    changePlayPause();
    active = false;
  }
};
//le funzioni che seguono invece fanno le stesse cose di quella di sopra ma associate all'evento
document.querySelector(".left-arrow").addEventListener("click", () => {
  grade += 90;
  rotate();
  if (active) {
    playPause;
  }
});

document.querySelector(".left-arrow").addEventListener("mouseover", () => {
  grade += 25;
  rotate();
});

document.querySelector(".left-arrow").addEventListener("mouseout", () => {
  grade -= 25;
  rotate();
});

document.querySelector(".right-arrow").addEventListener("click", () => {
  grade -= 90;
  rotate();
  if (active) {
    playPause;
  }
});

document.querySelector(".right-arrow").addEventListener("mouseover", () => {
  grade -= 25;
  rotate();
});

document.querySelector(".right-arrow").addEventListener("mouseout", () => {
  grade += 25;
  rotate();
});

document.querySelector(".play-pause").addEventListener("click", () => {
  playPause();
});
