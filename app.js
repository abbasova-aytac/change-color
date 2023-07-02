const colorInput = document.getElementById("color-input");
const copyButton = document.getElementById("copy-button");
const changeButton = document.querySelector(".change-button");

function generateRandomColor() {
    const randomColor = Math.random().toString(16).slice(2, 8);
    return "#" + randomColor;
}

function changeBackgroundColor() {
    const randomColor = generateRandomColor();
    document.body.style.backgroundColor = randomColor;
    colorInput.value = randomColor;
}

function copyColor() {
    navigator.clipboard.writeText(colorInput.value)
        .then(() => {
            console.log("Copied to clipboard:", colorInput.value);
            copyButton.textContent = "Copied!";
            copyButton.disabled = true;
            copyButton.style.pointerEvents = "none";
            setTimeout(() => {
                copyButton.textContent = "Copy";
                copyButton.disabled = false;
                copyButton.style.pointerEvents = "auto";
            }, 2000);
        });
}

changeBackgroundColor();
changeButton.addEventListener("click", changeBackgroundColor);
copyButton.addEventListener("click", copyColor);