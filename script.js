const passwordField = document.getElementById('password')

const handleMouseMove = event => {
    if (!document.querySelector('password:is(:focus)') &&
    !document.querySelector('password:is(user-invalid)')) {
        const eyes = document.getElementsByClassName('eye')

        for (let eye of eyes) {
            const x = eye.getBoundingClientRect().left + 10;
            const y = eye.getBoundingClientRect().top + 10;
            const rad = Math.atan2(event.pageX - x, event.pageY - y);
            const rot = (rad * (180/ Math.PI) * -1) + 100;

            eye.computedStyleMap.transform = `rotate(${rot}deg)`;
        }
    }
}

