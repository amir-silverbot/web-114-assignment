let current_scroll_position = 0;
let last_scroll_position = 0;
let ticking = false;
let counter = 2;

function maxMiniaturizeMenu(scroll_position) {
    if (scroll_position >= 200) {
        document.getElementById("topNavbar").style.animation = "top-navbar-miniaturization-anim 0.5s forwards linear";
    } else if (scroll_position < 200 && scroll_position - last_scroll_position <= 0) {
        document.getElementById("topNavbar").style.animation = "top-navbar-maximization-anim 0.5s forwards linear";
    }
}

function secondRowAnimation(scroll_position) {
    if (window.innerWidth >= 768) {
        if (scroll_position >= 700) {
            document.getElementById("cameraPic").style.animation = "camera-anim 1s forwards";
            document.getElementById("secondEndText").style.animation = "text-anim 1s forwards";
        } else if (scroll_position < 600 && scroll_position - last_scroll_position <= 0) {
            document.getElementById("cameraPic").style.right = "-100px";
            document.getElementById("cameraPic").style.animation = "";
            document.getElementById("secondEndText").style.left = "-100px";
            document.getElementById("secondEndText").style.animation = "";
        }
    }
}

function pricingCards(scroll_position) {
    if (window.innerWidth >= 768) {
        if (scroll_position >= 4200) {
            document.getElementById("rightPricingCard").style.animation = "right-pricing-card-anim 1s forwards";
            document.getElementById("middlePricingCard").style.animation = "middle-pricing-card-anim 1s forwards";
            document.getElementById("leftPricingCard").style.animation = "left-pricing-card-anim 1s forwards";
        } else if (scroll_position < 3900 && scroll_position - last_scroll_position <= 0) {
            document.getElementById("rightPricingCard").style.right = "-50px";
            document.getElementById("rightPricingCard").style.top = "0";
            document.getElementById("rightPricingCard").style.left = "-50px";
            document.getElementById("rightPricingCard").style.animation = "none";
            document.getElementById("middlePricingCard").style.animation = "none";
            document.getElementById("leftPricingCard").style.animation = "none";
        }
    }
}

function sortGallery(active_section) {
    let elements = ["img01", "img02", "img03", "img04", "img05", "img06", "img07", "img08", "img09", "img10", "img11", "img12", "img13", "img14", "img15", "img16"];
    let specified_elements;
    if (active_section.target.getAttribute("id") === "all") {
        for (let i = 0; i < elements.length; i++) {
            document.getElementById(elements[i]).style.animation = "none";
            void document.getElementById(elements[i]).offsetWidth;
            document.getElementById(elements[i]).style.display = "block";
            document.getElementById(elements[i]).style.animation = "opacity-open-anim 0.5s forwards";
        }
        document.getElementById("all").classList.add("active-btn");
        document.getElementById("new").classList.remove("active-btn");
        document.getElementById("free").classList.remove("active-btn");
        document.getElementById("pro").classList.remove("active-btn");
    } else {
        if (active_section.target.getAttribute("id") === "new") {
            specified_elements = ["img01", "img04", "img09", "img13", "img15"];
            document.getElementById("all").classList.remove("active-btn");
            document.getElementById("new").classList.add("active-btn");
            document.getElementById("free").classList.remove("active-btn");
            document.getElementById("pro").classList.remove("active-btn");
        } else if (active_section.target.getAttribute("id") === "free") {
            specified_elements = ["img02", "img06", "img08", "img11", "img14"];
            document.getElementById("all").classList.remove("active-btn");
            document.getElementById("new").classList.remove("active-btn");
            document.getElementById("free").classList.add("active-btn");
            document.getElementById("pro").classList.remove("active-btn");
        } else if (active_section.target.getAttribute("id") === "pro") {
            specified_elements = ["img03", "img05", "img07", "img10", "img12", "img16"];
            document.getElementById("all").classList.remove("active-btn");
            document.getElementById("new").classList.remove("active-btn");
            document.getElementById("free").classList.remove("active-btn");
            document.getElementById("pro").classList.add("active-btn");
        }
        for (let i = 0; i < elements.length; i++) {
            for (let j = 0; j < specified_elements.length; j++) {
                if (elements[i] === specified_elements[j]) {
                    document.getElementById(elements[i]).style.animation = "none";
                    void document.getElementById(elements[i]).offsetWidth;
                    document.getElementById(elements[i]).style.display = "block";
                    document.getElementById(elements[i]).style.animation = "opacity-open-anim 0.5s forwards";
                    break;
                } else {
                    document.getElementById(elements[i]).style.display = "none";
                    document.getElementById(elements[i]).style.animation = "none";
                }
            }
        }
    }
}

window.addEventListener("scroll", function (e) {
    current_scroll_position = window.scrollY;
    if (!ticking) {
        window.requestAnimationFrame(function () {
            maxMiniaturizeMenu(current_scroll_position);
            secondRowAnimation(current_scroll_position);
            pricingCards(current_scroll_position);
            ticking = false;
        });
        // window.requestAnimationFrame(function () {
        //
        //     ticking = false;
        // });
        last_scroll_position = current_scroll_position;
    }
    ticking = true;
});

function customersSlider() {
    let random_number = Math.floor(Math.random() * 3) + 3;

    if (counter === 1) {
        document.getElementById("customer1Pic").classList.add("active-pic");
        document.getElementById("customer2Pic").classList.remove("active-pic");
        document.getElementById("customer3Pic").classList.remove("active-pic");
        document.getElementById("customerName").innerHTML = "مونیکا";
        document.querySelector("#sliderIndicators :nth-child(1)").classList.add("active");
        document.querySelector("#sliderIndicators :nth-child(2)").classList.remove("active");
        document.querySelector("#sliderIndicators :nth-child(3)").classList.remove("active");
        counter++;
    } else if (counter === 2) {
        document.getElementById("customer1Pic").classList.remove("active-pic");
        document.getElementById("customer2Pic").classList.add("active-pic");
        document.getElementById("customer3Pic").classList.remove("active-pic");
        document.getElementById("customerName").innerHTML = "استفان";
        document.querySelector("#sliderIndicators :nth-child(1)").classList.remove("active");
        document.querySelector("#sliderIndicators :nth-child(2)").classList.add("active");
        document.querySelector("#sliderIndicators :nth-child(3)").classList.remove("active");
        counter++;
    } else if (counter === 3) {
        document.getElementById("customer1Pic").classList.remove("active-pic");
        document.getElementById("customer2Pic").classList.remove("active-pic");
        document.getElementById("customer3Pic").classList.add("active-pic");
        document.getElementById("customerName").innerHTML = "هلن";
        document.querySelector("#sliderIndicators :nth-child(1)").classList.remove("active");
        document.querySelector("#sliderIndicators :nth-child(2)").classList.remove("active");
        document.querySelector("#sliderIndicators :nth-child(3)").classList.add("active");
        counter = 1;
    }

    for (let i = 1; i < 6; i++) {
        document.querySelector(`#customerRating :nth-child(${i})`).classList.remove("text-warning");
    }

    for (let i = 1; i < random_number + 1; i++) {
        document.querySelector(`#customerRating :nth-child(${i})`).classList.add("text-warning");
    }
}

const sliderInterval = setInterval(customersSlider, 3000);