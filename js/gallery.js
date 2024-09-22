// Selecting the required elements
const allGalleryItem = document.querySelectorAll('.gallery-item');
const imgModalDiv = document.getElementById('img-modal-box');
const modalCloseBtn = document.getElementById('modal-close-btn');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');
let imgIndex = 0; // Initialize image index

// Function to show the image based on index
function showImageContent(index) {
    // Make sure index is within valid range
    if (index > allGalleryItem.length) {
        imgIndex = 1;  // Loop back to the first image
    } else if (index < 1) {
        imgIndex = allGalleryItem.length;  // Loop to the last image
    }
    // Set the source of the image in the modal
    imgModalDiv.querySelector('#img-modal img').src = `images/gallery-${imgIndex}.jpg`;
}

// Add event listeners for gallery items
allGalleryItem.forEach((galleryItem, index) => {
    galleryItem.addEventListener('click', () => {
        imgModalDiv.style.display = "block";  // Show modal
        imgIndex = index + 1;  // Set imgIndex to the current image (starting from 1)
        showImageContent(imgIndex);  // Display the clicked image
    });
});

// Next button click event
nextBtn.addEventListener('click', () => {
    imgIndex++;  // Move to the next image
    showImageContent(imgIndex);  // Show the next image
});

// Previous button click event
prevBtn.addEventListener('click', () => {
    imgIndex--;  // Move to the previous image
    showImageContent(imgIndex);  // Show the previous image
});

// Close modal when the close button is clicked
modalCloseBtn.addEventListener('click', () => {
    imgModalDiv.style.display = "none";  // Hide modal
});
