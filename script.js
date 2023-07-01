const pianoKeys = document.querySelectorAll(".piano-keys .key"),
volumeSlider = document.querySelector(".volume-slider input"),
keysCheckBox = document.querySelector(".keys-checkbox input");

let allKeys= [],
audio = new Audio ("tunes/a.wav"); //por padrão, o src de áudio é "a" tune

const playTune = (key) => {
    audio.src = `tunes/${key}.wav`; // passar áudio src com base na tecla pressionada
    audio.play(); //tocar audio

    const clickedKey = document.querySelector(`[data-key="${key}"]`); //quando clicar no elemento chave
    clickedKey.classList.add("active"); // adicionando classe ativa ao elemento chave clicado
    setTimeout(() => { // removendo a classe ativa após 150 ms do elemento  chave clicado
        clickedKey.classList.remove("active");
    }, 150);
}

pianoKeys.forEach(key => {
    allKeys.push(key.dataset.key)//adicionando o valor da chave de dados ao allkeys array
    // chamando a função playTune passando o valor da chave de dados como um argumento
    key.addEventListener("click", () => playTune(key.dataset.key));
});

const handleVolume = (e) => {
    audio.volume = e.target.value; //passando o valor do controle deslizante de intervalo como um volume de áudio
}

const showHideKeys = () => {
    //alternando para ocultar a classe de cada tecla na caixa de seleção, clique
    pianoKeys.forEach(key => key.classList.toggle("hide"));
}
const pressedKey = (e) => {
    if(allKeys.includes(e.key)) playTune(e.key);
}
keysCheckBox.addEventListener("click", showHideKeys);
volumeSlider.addEventListener("input", handleVolume);
document.addEventListener("keydown", pressedKey);