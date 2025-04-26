document.addEventListener('DOMContentLoaded', () => {
    const galleryWrapper = document.querySelector('.gallery-wrapper');
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
    
    let currentPosition = 0;
    const itemWidth = 320; // 300px width + 20px gap
    const visibleItems = Math.floor(galleryWrapper.parentElement.offsetWidth / itemWidth);
    const totalItems = document.querySelectorAll('.gallery-item').length;
    const maxScroll = (totalItems - visibleItems) * itemWidth;

    // Update button states
    function updateButtons() {
        // Remove button disabling since we're implementing a loop
        prevButton.disabled = false;
        nextButton.disabled = false;
    }

    // Scroll to position with smooth animation
    function scrollTo(position) {
        galleryWrapper.style.transform = `translateX(${position}px)`;
        currentPosition = position;
        updateButtons();
    }

    // Previous button click handler
    prevButton.addEventListener('click', () => {
        let newPosition = currentPosition + itemWidth;
        if (newPosition > 0) {
            // If we're at the first image and going back, loop to the end
            newPosition = -maxScroll;
        }
        scrollTo(newPosition);
    });

    // Next button click handler
    nextButton.addEventListener('click', () => {
        let newPosition = currentPosition - itemWidth;
        if (newPosition < -maxScroll) {
            // If we're at the last image and going forward, loop to the beginning
            newPosition = 0;
        }
        scrollTo(newPosition);
    });

    // Initialize button states
    updateButtons();

    // Handle window resize
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            // Reset position if current scroll is beyond new maxScroll
            const newVisibleItems = Math.floor(galleryWrapper.parentElement.offsetWidth / itemWidth);
            const newMaxScroll = (totalItems - newVisibleItems) * itemWidth;
            if (currentPosition < -newMaxScroll) {
                scrollTo(-newMaxScroll);
            }
            updateButtons();
        }, 250);
    });
}); 