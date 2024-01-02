function show(enabled) {
    if (typeof enabled === "boolean") {
        document.body.classList.toggle(`state-on`, enabled);
        document.body.classList.toggle(`state-off`, !enabled);
    } else {
        document.body.classList.remove(`state-on`);
        document.body.classList.remove(`state-off`);
    }
}

function openPreferences() {
    webkit.messageHandlers.controller.postMessage("open-preferences");
}

document.querySelector("button.open-preferences").addEventListener("click", openPreferences);

function updateEnableImage(isDark) {
    if (isDark) {
        document.getElementById("enable_img").src = "../Enable_dark.png";
    } else {
        document.getElementById("enable_img").src = "../Enable.png";
    }
}
