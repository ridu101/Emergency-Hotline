
const heartIcons = document.querySelectorAll('.heart-icon')
const heartCount = document.querySelector('.heart-count')

let count = 0;

for (let icon of heartIcons) {
    icon.addEventListener('click', function () {

        count++;

        heartCount.textContent = count;
        // other icons
        for (const color of heartIcons) {
            color.classList.remove("text-red-500");
            color.classList.add("text-gray-500");

        }
        //clicked
        icon.classList.remove('text-gray-500')
        icon.classList.add('text-red-500')
       

    })
}