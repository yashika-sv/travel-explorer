let currentIndex = 0;

document.addEventListener("DOMContentLoaded", function () {

    // DARK MODE
    const themeBtn = document.getElementById("theme-btn");

    if (themeBtn) {
        themeBtn.addEventListener("click", function () {
            document.body.classList.toggle("dark");

            if (themeBtn.classList.contains("fa-moon")) {
                themeBtn.classList.remove("fa-moon");
                themeBtn.classList.add("fa-sun");
            } else {
                themeBtn.classList.remove("fa-sun");
                themeBtn.classList.add("fa-moon");
            }
        });
    }



    // CONTACT FORM
    const form = document.querySelector("form");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            alert("Thank you! Your message has been sent successfully.");
            form.reset();
        });
    }

});

//more information-explore
function goToMaldives() {
    window.location.href = "maldives.html";
}
function goToGoa() {
    window.location.href = "goa.html";
}
function goToSantorini() {
    window.location.href = "santorini.html";
}
function goToBora() {
    window.location.href = "bora.html";
}

function goToPhuket() {
    window.location.href = "phuket.html";
}

function goToSeychelles() {
    window.location.href = "seychelles.html";
}

function goToFiji() {
    window.location.href = "fiji.html";
}

function goToHawaii() {
    window.location.href = "hawaii.html";
}

function goToBali() {
    window.location.href = "bali.html";
}

//slider


/* =========================
   MODERN GALLERY SLIDER
========================= */

let galleryIndex = 0;

function updateGallery(){

    const slides = document.querySelectorAll(".gallery-slide");

    const totalSlides = slides.length;

    slides.forEach(function(slide){
        slide.classList.remove(
            "center",
            "left",
            "right",
            "far-left",
            "far-right"
        );
    });

    let center = galleryIndex;

    let left = (center - 1 + totalSlides) % totalSlides;
    let right = (center + 1) % totalSlides;

    let farLeft = (center - 2 + totalSlides) % totalSlides;
    let farRight = (center + 2) % totalSlides;

    slides[center].classList.add("center");

    slides[left].classList.add("left");

    slides[right].classList.add("right");

    slides[farLeft].classList.add("far-left");

    slides[farRight].classList.add("far-right");
}


function moveGallery(direction){

    const slides = document.querySelectorAll(".gallery-slide");

    galleryIndex += direction;

    if(galleryIndex >= slides.length){
        galleryIndex = 0;
    }

    if(galleryIndex < 0){
        galleryIndex = slides.length - 1;
    }

    updateGallery();
}


/* Start gallery */

const gallerySlides = document.querySelectorAll(".gallery-slide");

if (gallerySlides.length > 0) {
    updateGallery();
}



//highlight the searched place
 function searchPlace() {
    const input = document.getElementById("searchInput").value.toLowerCase().trim();
    const cards = document.querySelectorAll(".card");

    // reset first every time
    cards.forEach(card => {
        card.classList.remove("highlight", "dim");
    });

    if (input === "") return;

    let found = false;
    let firstMatch = null;

    cards.forEach(card => {
        const name = (card.getAttribute("data-name") || "").toLowerCase();

        if (name.includes(input)) {
            card.classList.add("highlight");

            if (!firstMatch) {
                firstMatch = card;
            }

            found = true;
        } else {
            card.classList.add("dim");
        }
    });

    if (firstMatch) {
        setTimeout(() => {
            firstMatch.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });
        }, 100);
    }

    if (!found) {
        alert("No destination found!");
    }
}



document.addEventListener("DOMContentLoaded", function () {
    const input = document.getElementById("searchInput");

    if (input) {
        input.addEventListener("input", function () {
            if (this.value.trim() === "") {
                const cards = document.querySelectorAll(".card");

                cards.forEach(card => {
                    card.classList.remove("highlight", "dim");
                });
            }
        });
    }
});



function login(){

let username=document.getElementById("username").value;

let password=document.getElementById("password").value;

if(username=="" || password==""){

alert("Please enter Username and Password.");

}
else{

alert("Login Successful!");

window.location.href="index.html";

}

}


function logout(){

alert("Logged Out Successfully!");

window.location.href="login.html";

}

function toggleHeart(heart){

    if(heart.innerHTML=="🤍"){
        heart.innerHTML="❤️";
        heart.classList.add("active");
    }
    else{
        heart.innerHTML="🤍";
        heart.classList.remove("active");
    }

}

function updateDateTime(){

    let dateTimeElement = document.getElementById("dateTime");

    if (!dateTimeElement) {
        return;
    }

    let now = new Date();

    let options = {
        weekday: "short",
        day: "numeric",
        month: "short",
        year: "numeric"
    };

    let date = now.toLocaleDateString("en-US", options);
    let time = now.toLocaleTimeString();

    dateTimeElement.innerHTML = date + " | " + time;
}

updateDateTime();

setInterval(updateDateTime, 1000);

function rate(star){

    let stars = star.parentElement.children;

    for(let i=0;i<stars.length;i++){

        if(i<=Array.from(stars).indexOf(star)){
            stars[i].innerHTML="★";
            stars[i].style.color="gold";
        }
        else{
            stars[i].innerHTML="☆";
            stars[i].style.color="#bbb";
        }

    }

}

function calculateBudget(){

    let destination = document.getElementById("destination").value;
    let travelers = Number(document.getElementById("travelers").value);
    let days = Number(document.getElementById("days").value);
    let preference = document.getElementById("preference").value;

    if(
        destination === "" ||
        travelers <= 0 ||
        days <= 0 ||
        preference === ""
    ){

        document.getElementById("budgetResult").innerHTML =
        "Please fill all the details.";

        return;
    }

    /* Approximate flight cost per person */
    let flightCost = {
        bali: 25000,
        maldives: 20000,
        goa: 8000,
        santorini: 45000,
        boraBora: 55000,
        phuket: 22000,
        seychelles: 35000,
        fiji: 40000,
        hawaii: 45000
    };

    /* Daily cost per person based on travel preference */
    let dailyCost = {

        low: {
            bali: 3500,
            maldives: 6000,
            goa: 2500,
            santorini: 5500,
            boraBora: 9000,
            phuket: 3000,
            seychelles: 6000,
            fiji: 5000,
            hawaii: 6500
        },

        medium: {
            bali: 6000,
            maldives: 12000,
            goa: 4000,
            santorini: 10000,
            boraBora: 16000,
            phuket: 5500,
            seychelles: 11000,
            fiji: 9000,
            hawaii: 13000
        },

        high: {
            bali: 10000,
            maldives: 20000,
            goa: 7000,
            santorini: 17000,
            boraBora: 30000,
            phuket: 10000,
            seychelles: 20000,
            fiji: 16000,
            hawaii: 22000
        }

    };

    let flightTotal =
        flightCost[destination] * travelers;

    let stayAndTripTotal =
        dailyCost[preference][destination] *
        travelers *
        days;

    let total =
        flightTotal +
        stayAndTripTotal;

    document.getElementById("budgetResult").innerHTML =
        "Estimated Budget: ₹" +
        total.toLocaleString("en-IN");

}

// ======================================================
// TRAVEL EXPLORER - WEATHER & CLIMATE
// Typical climate information - NOT a live forecast
// ======================================================

const weatherData = {

    "Bali": {
        bestTime: "April – October",
        drySeason: "April – October",
        wetSeason: "November – March",

        months: {
            January: "🌧️ Wet season — warm, humid and rainfall is generally frequent.",
            February: "🌧️ Wet season — warm and humid with frequent tropical rainfall.",
            March: "🌦️ Wet season — warm and humid; rainfall can still be frequent.",
            April: "🌤️ Transition toward the dry season — conditions generally become less wet.",
            May: "☀️ Dry season — generally warmer and drier than the wet-season months.",
            June: "☀️ Dry season — generally favorable for outdoor activities.",
            July: "☀️ Dry season — generally drier and favorable for sightseeing.",
            August: "☀️ Dry season — generally dry and favorable for outdoor activities.",
            September: "☀️ Dry season — generally dry with good outdoor conditions.",
            October: "🌤️ End of dry season — rainfall generally begins increasing.",
            November: "🌦️ Wet season begins — warm, humid conditions with increasing rainfall.",
            December: "🌧️ Wet season — warm, humid and generally wetter."
        }
    },

    "Bora Bora": {
        bestTime: "May – October",
        drySeason: "May – October",
        wetSeason: "November – April",

        months: {
            January: "🌧️ Wet season — warm, humid and tropical showers are more common.",
            February: "🌧️ Wet season — warm and humid with increased rainfall.",
            March: "🌧️ Wet season — tropical showers and higher humidity are possible.",
            April: "🌦️ End of wet season — conditions begin transitioning toward drier weather.",
            May: "☀️ Dry season begins — generally less humid and more favorable.",
            June: "☀️ Dry season — generally drier and favorable for outdoor activities.",
            July: "☀️ Dry season — favorable conditions for beaches and outdoor activities.",
            August: "☀️ Dry season — generally drier tropical conditions.",
            September: "☀️ Dry season — generally favorable for outdoor activities.",
            October: "☀️ End of dry season — generally favorable before wetter conditions return.",
            November: "🌦️ Wet season begins — humidity and rainfall generally increase.",
            December: "🌧️ Wet season — warm and humid with more tropical rainfall."
        }
    },

    "Fiji": {
        bestTime: "May – October",
        drySeason: "May – October",
        wetSeason: "November – April",

        months: {
            January: "🌧️ Wet season — warm, humid conditions with tropical showers.",
            February: "🌧️ Wet season — warm and humid with increased rainfall.",
            March: "🌧️ Wet season — warm with higher rainfall and humidity.",
            April: "🌦️ End of wet season — conditions begin transitioning.",
            May: "☀️ Dry season begins — generally sunnier with lower rainfall.",
            June: "☀️ Dry season — generally cooler and drier.",
            July: "☀️ Dry season — one of the cooler parts of the year.",
            August: "☀️ Dry season — generally sunny and relatively dry.",
            September: "☀️ Dry season — favorable conditions with lower rainfall.",
            October: "☀️ End of dry season — generally pleasant before rainfall increases.",
            November: "🌦️ Wet season begins — warmer and more humid.",
            December: "🌧️ Wet season — warm with tropical showers and higher humidity."
        }
    },

    "Goa": {
        bestTime: "October – March",
        drySeason: "October – May",
        wetSeason: "June – September",

        months: {
            January: "☀️ Dry season — generally clear and pleasant.",
            February: "☀️ Dry season — generally dry with very little rainfall.",
            March: "☀️ Dry season — warm and mostly dry.",
            April: "🌤️ Hot season — temperatures and humidity begin increasing.",
            May: "🔥 Hot and humid — very warm conditions before the monsoon.",
            June: "🌧️ Monsoon — heavy rainfall begins.",
            July: "🌧️ Monsoon — typically one of the wettest periods.",
            August: "🌧️ Monsoon — frequent rainfall continues.",
            September: "🌦️ Monsoon — rainfall remains significant but begins decreasing.",
            October: "🌤️ Post-monsoon transition — conditions generally become more pleasant.",
            November: "☀️ Dry season — generally clear and pleasant.",
            December: "☀️ Dry season — generally clear and pleasant; popular tourist period."
        }
    },

    "Hawaii": {
        bestTime: "May – October for the generally drier summer season",
        drySeason: "May – October (summer)",
        wetSeason: "November – April (winter)",

        months: {
            January: "🌦️ Winter season — mild temperatures with increased rainfall possible.",
            February: "🌦️ Winter season — mild with variable rainfall.",
            March: "🌦️ Winter season — mild and variable; conditions depend strongly on location.",
            April: "🌤️ End of winter season — generally mild with changing rainfall patterns.",
            May: "☀️ Summer season begins — generally warm with less seasonal rainfall in many areas.",
            June: "☀️ Summer season — warm with generally favorable beach conditions.",
            July: "☀️ Summer season — warm and generally drier than winter.",
            August: "☀️ Summer season — warmest period in many areas.",
            September: "☀️ Summer season — warm with generally favorable conditions.",
            October: "🌤️ End of summer season — warm with seasonal transition.",
            November: "🌦️ Winter season begins — rainfall generally increases in many areas.",
            December: "🌦️ Winter season — mild temperatures with increased rainfall possible."
        }
    },

    "Maldives": {
        bestTime: "Generally drier: December – April",
        drySeason: "January – March",
        wetSeason: "Mid-May – November",

        months: {
            January: "☀️ Drier period — warm with generally favorable conditions.",
            February: "☀️ Drier period — warm with generally lower rainfall.",
            March: "☀️ Drier period — warm and generally favorable.",
            April: "🌤️ Transition month — warm with changing rainfall patterns.",
            May: "🌦️ Transition toward the southwest monsoon — rainfall generally increases.",
            June: "🌧️ Wet season — warm and humid with more frequent rainfall.",
            July: "🌧️ Wet season — tropical showers and cloudy periods are possible.",
            August: "🌧️ Wet season — warm and humid with frequent showers possible.",
            September: "🌧️ Wet season — rainfall remains common.",
            October: "🌧️ Wet season — warm and humid with rainfall possible.",
            November: "🌦️ Wet season — transition toward the drier period.",
            December: "🌤️ Transition toward the drier season — conditions generally begin improving."
        }
    },

    "Phuket": {
        bestTime: "November – April",
        drySeason: "November – April",
        wetSeason: "May – October",

        months: {
            January: "☀️ Dry season — generally favorable for beaches and outdoor activities.",
            February: "☀️ Dry season — generally sunny with favorable beach conditions.",
            March: "☀️ Dry/hot season — warm and generally dry.",
            April: "🌤️ Hot and transitional period — monsoon influence begins increasing.",
            May: "🌧️ Wet season begins — rainfall and monsoon influence increase.",
            June: "🌧️ Wet season — tropical showers and rougher sea conditions are possible.",
            July: "🌧️ Wet season — southwest-monsoon influence continues.",
            August: "🌧️ Wet season — frequent showers are possible.",
            September: "🌧️ Wet season — typically a wetter period.",
            October: "🌧️ Wet season — rainfall remains common.",
            November: "🌤️ Transition toward dry season — rainfall generally decreases.",
            December: "☀️ Dry season — generally favorable for beaches and outdoor activities."
        }
    },

    "Santorini": {
        bestTime: "Late spring – early autumn for warm, dry weather",
        drySeason: "Mainly late spring – early autumn",
        wetSeason: "Mainly autumn and winter",

        months: {
            January: "🌧️ Winter — cool and wetter compared with summer.",
            February: "🌧️ Winter — cool with possible rainfall.",
            March: "🌤️ Spring transition — temperatures begin increasing.",
            April: "🌤️ Spring — increasingly mild with improving conditions.",
            May: "☀️ Late spring — warm and generally dry.",
            June: "☀️ Summer — hot, sunny and generally dry.",
            July: "☀️ Summer — hot, sunny and generally dry.",
            August: "☀️ Summer — hot, sunny and generally dry; seasonal winds can occur.",
            September: "☀️ Early autumn — warm and generally dry.",
            October: "🌤️ Autumn — temperatures become milder and rainfall begins increasing.",
            November: "🌦️ Late autumn — cooler with increasing rainfall.",
            December: "🌧️ Winter — cooler and wetter than summer."
        }
    },

    "Seychelles": {
        bestTime: "April, May, October & November",
        drySeason: "May – October",
        wetSeason: "November – April",

        months: {
            January: "🌧️ Wet season — warm and humid; typically one of the wetter months.",
            February: "🌧️ Wet season — warm, humid and generally wet.",
            March: "🌦️ Wet season — warm and humid with showers.",
            April: "☀️ Shoulder season — generally warm and relatively calm.",
            May: "☀️ Shoulder/drier period — generally favorable conditions.",
            June: "🌤️ Southeast trade-wind season — cooler and breezier.",
            July: "🌤️ Southeast trade-wind season — cooler and breezier.",
            August: "🌤️ Southeast trade-wind season — breezier conditions can continue.",
            September: "🌤️ Southeast trade-wind season — breezy conditions are possible.",
            October: "☀️ Shoulder season — generally calm and favorable.",
            November: "☀️ Shoulder season — generally calm and favorable.",
            December: "🌧️ Wet season — warmer, humid and wetter."
        }
    }
};


// ======================================================
// IDENTIFY DESTINATION
// ======================================================

function getCurrentDestination() {

    const fileName = window.location.pathname
        .split("/")
        .pop()
        .toLowerCase();

    const destinationNames = {

        "bali.html": "Bali",
        "bora.html": "Bora Bora",
        "fiji.html": "Fiji",
        "goa.html": "Goa",
        "hawaii.html": "Hawaii",
        "maldives.html": "Maldives",
        "phuket.html": "Phuket",
        "santorini.html": "Santorini",
        "seychelles.html": "Seychelles"

    };

    return destinationNames[fileName] || null;
}


// ======================================================
// UPDATE WEATHER ONLY AFTER MONTH IS SELECTED
// ======================================================

function updateTravelWeather() {

    const monthSelector =
        document.getElementById("monthSelector");

    const weatherResult =
        document.getElementById("weatherResult");

    const bestTime =
        document.getElementById("bestTime");

    if (!monthSelector || !weatherResult || !bestTime) {
        return;
    }

    // Don't show anything until the user chooses a month.
    if (monthSelector.value === "") {
        weatherResult.innerHTML = "";
        bestTime.innerHTML = "";
        return;
    }

    const destination =
        getCurrentDestination();

    const destinationData =
        weatherData[destination];

    if (!destinationData) {
        weatherResult.innerHTML =
            "<p>Weather information unavailable.</p>";
        return;
    }

    const month =
        monthSelector.value;

    const information =
        destinationData.months[month];

    // Best-time information appears only after month selection.
    bestTime.innerHTML = `
        🏆 <strong>Recommended period:</strong>
        ${destinationData.bestTime}
        <br>
        ☀️ <strong>Dry season:</strong>
        ${destinationData.drySeason}
        <br>
        🌧️ <strong>Wet season:</strong>
        ${destinationData.wetSeason}
    `;

    weatherResult.innerHTML = `
        <div class="weather-card-content">

            <h3>${month} in ${destination}</h3>

            <p>${information}</p>

        

        </div>
    `;
}


// ======================================================
// START WEATHER FEATURE
// ======================================================

document.addEventListener("DOMContentLoaded", function () {

    const monthSelector =
        document.getElementById("monthSelector");

    if (!monthSelector) {
        return;
    }

    monthSelector.addEventListener(
        "change",
        updateTravelWeather
    );

});