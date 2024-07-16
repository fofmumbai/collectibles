interact('#stampImage')
.draggable({
    // Enable drag and drop
    listeners: {
        move(event) {
            const target = event.target;
            const x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
            const y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

            target.style.transform = `translate(${x}px, ${y}px)`;
            target.setAttribute('data-x', x);
            target.setAttribute('data-y', y);
        }
    }
})
.gesturable({
    listeners: {
        move(event) {
            const target = event.target;
            const currentScale = parseFloat(target.getAttribute('data-scale')) || 1;
            const currentRotation = parseFloat(target.getAttribute('data-rotation')) || 0;

            const newScale = currentScale * (1 + event.ds);
            const newRotation = currentRotation + event.da;

            target.style.transform = `translate(${target.getAttribute('data-x')}px, ${target.getAttribute('data-y')}px) scale(${newScale}) rotate(${newRotation}deg)`;
            target.setAttribute('data-scale', newScale);
            target.setAttribute('data-rotation', newRotation);
        }
    }
});
