// Get the video background container
const videoContainer = document.querySelector('.video-background');

// Function to update the video container position and dimensions
function updateVideoSize() {
  const scrolledPercentage = window.scrollY / (document.body.offsetHeight - window.innerHeight);
  videoContainer.style.height = (100 + scrolledPercentage * 50) + 'vh';
}

// Listen for scroll events and update the video size accordingly
window.addEventListener('scroll', updateVideoSize);
window.addEventListener('resize', updateVideoSize);

// Call the function once on page load to set the initial video size
updateVideoSize();
