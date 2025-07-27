const buttonSection = document.getElementById('button-section');
const rootSection = document.querySelector(":root");

let stateIndex = 0;

const buttonLabels = [
    "DAYTIME",
    "SUNSET-1",
    "SUNSET-2",
    "SUNSET-3",
    "SUNSET-4",
    "SUNSET-5",
    "SUNSET-6",
    "NIGHTIME"
];
const states = [
    {
        state: "daytime",
        skyGradient: "linear-gradient(#81d7ff, #55adff);",
        sunGradient: "radial-gradient(closest-corner circle at 50% -40%,#ffffffff, #ffffccca 25%, #feffada7 50%, #f4ff8f31 100%);"
        
    },
    {
        state: "sunset-1",
        skyGradient: "linear-gradient( #81d7ff, #55adff,rgb(255, 255, 158) 80%);",
        sunGradient: "radial-gradient(closest-corner circle at 50% -20%, #ffffffff, #fefdcacf 25%, #fdfcb1bf 50%, #f4ff8f20 100%);"
    }
];

const renderButtons = () => {
    buttonSection.innerHTML = "";
    console.log(stateIndex);
    buttonSection.innerHTML += `
        <button id="button-1" style="${stateIndex === 0 ? "display: none;" : ""} ${stateIndex === buttonLabels.length - 1 ? "" : "right: 100px;"}">${buttonLabels[stateIndex - 1]}</button>
        <button id="button-2" style="${stateIndex === buttonLabels.length - 1 ? "display: none;" : ""} ${stateIndex === 0 ? "" : "left: 100px;"}">${buttonLabels[stateIndex + 1]}</button>
    `;
    document.querySelector("#button-1").onclick = () => changeState("Prev");
    document.querySelector("#button-2").onclick = () => changeState("Next");
}

const changeState = (action) => {
    console.log("CLICKED!", stateIndex, action);
    if (action === "Next"){
        console.log("Next");
        stateIndex = stateIndex >= buttonLabels.length - 1 ? buttonLabels.length - 1 : stateIndex + 1;
        console.log(stateIndex);
    } else {
        stateIndex = stateIndex <= 0 ? 0 : stateIndex - 1;
    }
    rootSection.style.setProperty("--sky-gradient", states[stateIndex].skyGradient);
    rootSection.style.setProperty("--sun-gradient", states[stateIndex].sunGradient);
    renderButtons();
}


renderButtons();