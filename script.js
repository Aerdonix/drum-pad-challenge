document.addEventListener('keydown', playSound);

function playSound(event) {
    let code;
    if (event.keyCode) {
        code = event.keyCode
    } else {
        code = this.dataset.key;
    }

    const audio = document.querySelector(`audio[id="${code}"]`);
    const key = document.querySelector(`div[id="${code}]"`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
}
    const keys = document.querySelectorAll('.key');
    for (let i=0, key; key = keys[i]; i++) {
        key.addEventListener('click', playSound);
    }