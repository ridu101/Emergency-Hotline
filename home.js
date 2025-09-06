// Select all heart icons
const heartIcons = document.querySelectorAll(".heart-icon");

// Select the heart count in nav
const heartCount = document.querySelector(".heart-count");

// Counter value
let count = 0;

// Add click event for each heart icon
heartIcons.forEach(icon => {
  icon.addEventListener("click", () => {
    // Increase count
    count++;
    // Update nav display
    heartCount.textContent = count;
    // Change heart color to red when clicked
    icon.classList.remove("text-gray-500");
    icon.classList.add("text-red-500");
  });
});
