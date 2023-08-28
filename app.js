
// JavaScript to handle modal interaction
const projectModal = document.getElementById('project-modal');
const closeModal = projectModal.querySelector('.close');
const projectThumbnails = document.querySelectorAll('.project');

projectThumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', () => {
        projectModal.style.display = 'block';
    });
});

closeModal.addEventListener('click', () => {
    projectModal.style.display = 'none';
});
// Get all the close buttons in modals
const closeButtons = document.querySelectorAll(".close");

// Add click event listeners to close the modals
closeButtons.forEach(button => {
    button.addEventListener("click", () => {
        const modal = button.closest(".modal");
        modal.style.display = "none";
    });
});