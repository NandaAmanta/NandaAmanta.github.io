// inner navigation 
const ITEM_NAV_DOM = document.querySelectorAll(".inner-nav a")
const ITEM_INNER_SECTION_DOM = document.querySelectorAll(".inner-section")
function navigate(indexNav) {
    localStorage.setItem("currentNav", indexNav)
    ITEM_NAV_DOM[indexNav].classList.add("active-inner-nav");
    clearNavActiveExcept(indexNav);
    navigateContent(indexNav)

}

function navigateContent(indexNav) {
    for (let index = 0; index < ITEM_INNER_SECTION_DOM.length; index++) {
        const element = ITEM_INNER_SECTION_DOM[index];
        if (index === indexNav) {
            element.classList.remove("d-none");
            continue
        };
        element.classList.add("d-none");
    }
}


function clearNavActiveExcept(indexNav) {
    for (let index = 0; index < ITEM_NAV_DOM.length; index++) {
        if (index === indexNav) continue;
        const element = ITEM_NAV_DOM[index];
        element.classList.remove("active-inner-nav");
    }
}

// On load
window.addEventListener('load', function (event) {
    if (this.localStorage.getItem("currentNav") != null) {
        navigate(parseInt(this.localStorage.getItem("currentNav")))
    }
});