const shareBtn = document.getElementById("share-btn");
const mobileShare = document.getElementById("mobile-share") as HTMLElement;
const shareLight = document.querySelector(".share-light") as HTMLElement;
const shareDark = document.querySelector(".share-dark") as HTMLElement;
const mobileShareExit = document.getElementById(
  "mobile-share-exit"
) as HTMLElement;
const desktopShare = document.querySelectorAll(".desktop-share") as NodeList;

let state = false;
shareBtn?.addEventListener("click", () => {
  state = !state;

  if (state) {
    mobileShare.classList.remove("opacity-0", "-z-10");
    shareBtn.style.backgroundColor = "hsl(214,17%,51%)";
    shareDark.classList.add("hidden");
    shareLight.classList.remove("hidden");
    desktopShare.forEach((item) => {
      const element = item as HTMLElement;
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
      const element = item as HTMLElement;
      element.classList.replace("visible", "invisible");
      element.classList.replace("opacity-100", "opacity-0");
    });
  }
});
