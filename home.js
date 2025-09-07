// hear count section
const heartIcons = document.querySelectorAll('.heart-icon')

const heartCount = document.getElementById('heart-count')


let count = 0;

for (let icon of heartIcons) {
    icon.addEventListener('click', function () {

        count++;

        heartCount.innerText = count;
        
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

// call button functionality

const serviceName = document.querySelectorAll('.service-name')
const serviceNumber = document.querySelectorAll('service-number');
const coin = document.getElementById('coin-count');


function handelCall(serviceName, serviceNumber) {

    let currentCoins = parseInt(coin.textContent);
    if (currentCoins < 20) {
        // If coins are 20 or less, show alert and set coins to 0
        coin.textContent = 0;
        alert('❌ You do not have enough coins to call. Your coin balance is 0.');
        return 0;
    }

    // Otherwise, deduct 20 coins
    let currentCoinsAfterMinus = currentCoins - 20;
    coin.textContent = currentCoinsAfterMinus;

    alert(`📞 Calling ${serviceName.textContent} at ${serviceNumber.textContent}. 20 Coins has been deducted. Remaining Coins: ${currentCoinsAfterMinus}`);
    return currentCoinsAfterMinus;
}

// attach event handler to all button

const callButtonAll = document.querySelectorAll('.call-btn')


for (let button of callButtonAll) {

    button.addEventListener('click', function () {

        const allCard = button.closest('.card'); 

        const serviceName = allCard.querySelector('.service-name');
        const serviceNumber = allCard.querySelector('.service-number');

        handelCall(serviceName, serviceNumber);
    })

}

// copy buttons event handler
let copyCount = 0;

let allCopyButtons = document.querySelectorAll('.copy-btn');

for (const cpButton of allCopyButtons) {
    cpButton.addEventListener('click', function () {

        const allCard = cpButton.closest('.card');

        const serviceNumber = allCard.querySelector('.service-number').textContent;
        navigator.clipboard.writeText(serviceNumber);

        alert(" 📞 Hotline Number " + serviceNumber + " Copied!✅")

        copyCount++;
        document.getElementById('copy-count').textContent = copyCount;

    })

}

// call history section event handler

// select history container and clear button
const historyContainer = document.querySelector('.call-history');
const clearBtn = document.getElementById('clear-history');

// select all call buttons
const callButtons = document.querySelectorAll('.call-btn');

// loop through all call buttons
for (let button of callButtons) {
  button.addEventListener('click', function () {
    const allCard = button.closest('.card'); // get the card

    // get service name and number from this card
    const serviceName = allCard.querySelector('.service-name').innerText;
    const serviceNumber = allCard.querySelector('.service-number').innerText;

    // get the current time
    const time = new Date().toLocaleTimeString();

    const historyItem= document.createElement('div');
    historyItem.className=" flex justify-between p-3 rounded ";
    historyItem.innerHTML= `
    <div class="flex justify-between bg-[#fafafa] p-3 rounded-xl  w-full items-center transform transition duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-200">
                <div>
                      <p class="font-bold">${serviceName}</p>
                      <p>${serviceNumber}</p>
                </div>
                     <span>${time}</span>
    </div>
    `
    historyContainer.appendChild(historyItem);

 
  });
}

// clear button event
clearBtn.addEventListener('click', function() {
  historyContainer.innerText= "";
});
