"use strict";
const shareBtn = document.getElementById("share-btn");
const mobileShare = document.getElementById("mobile-share");
const shareLight = document.querySelector(".share-light");
const shareDark = document.querySelector(".share-dark");
const mobileShareExit = document.getElementById("mobile-share-exit");
const desktopShare = document.querySelectorAll(".desktop-share");
let state = false;
shareBtn === null || shareBtn === void 0 ? void 0 : shareBtn.addEventListener("click", () => {
    state = !state;
    if (state) {
        mobileShare.classList.remove("opacity-0", "-z-10");
        shareBtn.style.backgroundColor = "hsl(214,17%,51%)";
        shareDark.classList.add("hidden");
        shareLight.classList.remove("hidden");
        desktopShare.forEach((item) => {
            const element = item;
            element.classList.replace("invisible", "visible");
            element.classList.replace("opacity-0", "opacity-100");
        });
    }
    if (!state) {
        mobileShare.classList.add("opacity-0", "-z-10");
        shareBtn.style.backgroundColor = "hsl(210,46%,95%)";
        shareDark.classList.remove("hidden");
        shareLight.classList.add("hidden");
        desktopShare.forEach((item) => {
            const element = item;
            element.classList.replace("visible", "invisible");
            element.classList.replace("opacity-100", "opacity-0");
        });
    }
});
