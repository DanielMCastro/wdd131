const themeSelector = document.getElementById("Appearance");
const imageSelector = document.getElementById(".image");

function changeTheme()
{
    var element = document.querySelector("body");
    var mode = themeSelector.value;

    if (mode == "light")
    {
        element.classList.remove("dark");
        imageSelector.src = "mission/byui-logo_blue.png";
    }

    else if (mode == "dark")
    {
        element.classList.add("dark");
        imageSelector.src = "byui-logo_white.webp";
    }
}

themeSelector.addEventListener('change', changeTheme);