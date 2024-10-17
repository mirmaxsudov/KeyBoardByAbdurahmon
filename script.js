document.addEventListener('keydown', e => {
    const key = e.key
    console.log(key);

    const res = 'value-' + key
    console.log(res);
    

    const btn = document.querySelector(`.value-${key}`.replaceAll(' ', ''));;

    btn.classList.add('pressed');

    setTimeout(() => {
        btn.classList.remove('pressed');
    }, 100);
});

const capslock = document.querySelector('.capslock__on');

document.addEventListener('keydown', function (event) {
    if (event.getModifierState('CapsLock')) {
        capslock.classList.add('on');
        capslock.classList.remove('off');
    } else {
        capslock.classList.remove('on');
        capslock.classList.add('off');
    }
}); 