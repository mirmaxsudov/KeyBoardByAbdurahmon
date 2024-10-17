document.addEventListener('keydown', e => {
    const key = e.key
    console.log('ads' + key + 'sad');

    let target
    if (key == ' ') {
        target = 'value-Space'
    } else {
        target = 'value-' + key
    }

    console.log(target);

    const btns = document.querySelectorAll('.' + target);;

    for (const btn of btns) {
        console.log('Inner');
        btn.classList.add('pressed');
        setTimeout(() => {
            btn.classList.remove('pressed');
        }, 200);
    }
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