const ToolTip = document.querySelector(".share-tooltip");
const shareButton = document.querySelector(".icon");
const icon = document.querySelector(".share-icon")

shareButton.addEventListener('click', () => {
    icon.classList.toggle("ibc")
})