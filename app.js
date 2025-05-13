const myForm = document.querySelector("form");
myForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const inputs = event.target.elements;
  const lenghtinp = +inputs.lenght.value; //slaptazodzio ilgis
  const myCheck = inputs.myCheck.checked; //dydziosios
  const myCheck1 = inputs.myCheck1.checked; //skaiciai
  const myCheck2 = inputs.myCheck2.checked; //symboliai
  document.querySelector(
    "h3"
  ).innerHTML = `Passw ilgis ${lenghtinp} didziosios ${myCheck} skaiciai ${myCheck1} symboliai ${myCheck2} `;
  console.log(lenghtinp);
});

// Generuojam raide

let letter = ""; //abeceles raidziu skaicius
let lowerpsw;
let upperpsw;
let numberpsw;
let symbolpsw;
let result = "";

function getLetterByIndex(index) {
  const symbol = [
    "^",
    "&",
    "*",
    ",",
    ".",
    "?",
    ":",
    "{",
    "}",
    "|",
    "<",
    ">",
    "]",
    "[",
    "!",
    "@",
    "#",
    "$",
    "%",
  ];

  const alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  letter = Math.floor(Math.random() * alphabet.length); //atsitiktine raide
  let num = Math.floor(Math.random() * 10);
  // generuojam atsitiktinius sk. iki pasirinkto ilgio (lenghtinp) kartu
  for (let j = 0; j < lenghtinp; j++) {
    // paimam atsitiktine raide
    for (let i = 0; i < alphabet.length; i++) {
      lowerpsw = alphabet[letter].toLowerCase();
      result = result + lowerpsw;
      console.log(letter);
    }
    console.log(result);
  }
  return alphabet[index];
  getLetterByIndex();
}
