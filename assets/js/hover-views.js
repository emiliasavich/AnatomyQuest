document.addEventListener("DOMContentLoaded", () => addHoverableDivs(document));

function addHoverableDivs(container) {
    container.querySelectorAll('.hoverable-image-container').forEach(hoverableContainer => {
        // get hover button bar
        const parent = hoverableContainer.parentElement;
        const button_bar = parent.previousElementSibling;

        // hover functionality
        const image_containers = hoverableContainer.children;
        const hover_classes = Array.from(image_containers).map(child => child.classList[0]);

        const view = hoverableContainer.dataset.view;

        const n = image_containers.length;
        const numOverlays = n - 1;

        var prevCircle = null;

        for (let i = 0; i < numOverlays; i++) {
            const overlay = document.createElement('div');
            overlay.className = 'hoverable-div';
            
            // Set width and left position so each takes equal space
            const leftPercent = (100 / numOverlays) * i;
            const widthPercent = 100 / numOverlays;

            overlay.style.width = `${widthPercent}%`;
            overlay.style.left = `${leftPercent}%`;
            overlay.style.zIndex = "1"; 

            const circle = document.createElement('div');
            circle.className = 'hoverable-circle';
            circle.style.left = `${leftPercent + widthPercent/2}%`;
            circle.classList.add(view);

            if (hoverableContainer.classList.contains('active')) {
                circle.classList.add('show');
            }

            // Add hover event
            overlay.addEventListener('mouseenter', () => {
                changeImageOnHover(hover_classes[i+1], image_containers);
                if (prevCircle) {
                    prevCircle.classList.remove('active');
                }
                circle.classList.add('active');
                prevCircle = circle;
            });

            circle.addEventListener('mouseenter', () => {
                changeImageOnHover(hover_classes[i+1], image_containers);
                circle.classList.add('active');
            });

            circle.addEventListener('mouseleave', () => {
                changeImageOnHover(hover_classes[0], image_containers);
                circle.classList.remove('active');
            });

            button_bar.appendChild(circle);
            hoverableContainer.appendChild(overlay);

            // positionCircle(circle, button_bar, overlay);

        };

        // Reset to default when mouse leaves hoverable container
        hoverableContainer.addEventListener('mouseleave', () => {
            changeImageOnHover(hover_classes[0], image_containers);
            deactivateAllCircles(button_bar.children);
        });
    });
};

function changeImageOnHover(new_image_container_label, all_image_containers) {
    let activeContainer = Array.from(all_image_containers).find(ctr => ctr.classList.contains('active'));
    activeContainer.classList.remove('active');

    let new_image_container = Array.from(all_image_containers).find(ctr => ctr.classList.contains(new_image_container_label));
    new_image_container.classList.add('active');
}

function deactivateAllCircles(circles) {
    let activeCircle = Array.from(circles).find(circle => circle.classList.contains('active'));
    activeCircle.classList.remove('active');
}

// function positionCircle(circle, button_bar, overlay) {
//     requestAnimationFrame(() => {
//         const overlayRect = overlay.getBoundingClientRect();
//         const buttonBarRect = button_bar.getBoundingClientRect();

//         console.log(overlayRect);


//         const centerX =
//             overlayRect.left + overlayRect.width / 2 - buttonBarRect.left;

//         const centerY = buttonBarRect.height / 2;

//         circle.style.left = `${centerX}px`;
//         circle.style.top = `${centerY}px`;
//         circle.style.transform = 'translate(-50%, -50%)';
//     });
// }
