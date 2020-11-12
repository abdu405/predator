

/*================== 
DOM
==================*/


const nav = document.querySelector(".navigation");
const navSub = document.querySelector('.navigation--sub')

const navButton = document.getElementById("navi-toggle");

const inputs = document.querySelectorAll(".popup__input--text");

const closePopupBtn = document.getElementById("popup__close__btn");

const openPopUp = document.querySelectorAll(".sign-up-open");

const popup = document.querySelector(".popup");

const ageDataList = document.getElementById("defaultAgeNumbers");

const header = document.querySelector('.header');
const headerSub = document.querySelector('.header--sub');

const banner = document.getElementById('banner');





/*++++++FORM++++++++++ */

/*======================
MANIPULATING INPUT TEXT FIELDS LABEL
===================*/


[].forEach.call(inputs, (input) => {
    const label = document.querySelector(`[for="${input.id}"]`);
    input.addEventListener("input", function () {
        if (this.value && this.value.length > 0) {
            label.classList.remove("popup__label--text");
        } else if (this.value.length == 0) {
            label.classList.add("popup__label--text");
        }
    });
});

/*======================
CREATING DATALIST FOR THE AGE INPUT
===================*/

function creatDataList() {
    for (var i = 1; i <= 90; i++) {
        ageDataList.insertAdjacentHTML("beforeend", `<option value="${i}">`);
    }
}

creatDataList();
//<option value="10045678">




/*==========================
TOGGLING POPUP
============================*/

closePopupBtn.addEventListener("click", (e) => {
    e.preventDefault;
    popup.style.opacity = 0;
    popup.style.transform = "scale(0)";

});

popup.addEventListener("click", (e) => {
    var x = e.target.classList;
    if (x.contains("popup")) {
        e.preventDefault;
        popup.style.opacity = 0;
        popup.style.transform = "scale(0)";
    }
});

[].forEach.call(openPopUp, (btn) => {
    btn.addEventListener("click", (e) => {
        e.preventDefault;
        popup.style.opacity = 1;
        popup.style.transform = "scale(1)";

        if (nav.classList.contains('navigation__expand')){
            nav.classList.remove("navigation__expand");
        }
    });
});


/*=========================
TOGGLING NAVIGATIOV
=========================== */
function navToggle() {
    nav.classList.toggle("navigation__expand");
}
navButton.addEventListener("click", navToggle);

nav.addEventListener("click", e=>{
    let x = e.target.classList;
    if (x.contains("navigation__nav") || x.contains("navigation__link")) {
        e.preventDefault;
        navToggle()
    }
})


/*=========================
 MAKING SMOOTH SCROLLING EFFECT WITH THE BANNER DOWN BUTTON
 ======================================*/



$(document).ready(function () {
    // Add smooth scrolling to all links
    $("a").on("click", function (event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $("html, body").animate(
                {
                    scrollTop: $(hash).offset().top,
                },
                800,
                function () {
                    // Add hash (#) to URL when done scrolling (default click behavior)
                    window.location.hash = hash;
                }
            );
        } // End if
    });
});



///Manipulate NAVIGATION according to window size and scrolling

function reportWindowSize() {
  if (window.innerWidth < 1070 || window.scrollY < banner.scrollHeight){
    header.style.display = 'block'
    headerSub.style.display = 'none'
}else if (window.innerWidth > 1070 || window.scrollY > banner.scrollHeight){
    header.style.display = 'none'
    headerSub.style.display = 'flex'
}
}
reportWindowSize()
window.onresize = reportWindowSize;
window.onscroll = reportWindowSize;