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
    "SUNSET-7",
    "SUNSET-8",
    "SUNSET-9",
    "SUNSET-10",
    "NIGHTIME"
];
const states = [
    {
        state: "daytime",
        skyGradient: "linear-gradient( #559dff, #81d7ff)",
        sunGradient: "radial-gradient(closest-corner circle at 50% -40%,#ffffffff, #ffffffff 10%, #ffffccca 20%, #feffada7 24%, #f4ff8f31 80%)",
        creeperHeadShade: "linear-gradient(#0c0 0%, #080 5%,#080 95%, #060 100%)",
        creeperHeadLighting: `linear-gradient(90deg, 
            #00ff0099,
            #00990000 5%,
            transparent 10%,
            transparent 90%,
            #00990000 95%,
            #00ff0099 100%
        )`,
        neckGradient: `linear-gradient( #030, #050 20%)`,
        oceanGradient: `linear-gradient( #0000ffff, #000099ff 40%)`
    },
    {
        state: "sunset-1",
        skyGradient: "linear-gradient( #559dff, #81c7ff 70%,rgb(255, 255, 225) 100%)",
        sunGradient: "radial-gradient(closest-corner circle at 50% -15%, #ffffffff, #ffffffff 10%, #fefdcacf 20%, #fdfcb1bf 27%, transparent 80%)",
        creeperHeadShade: "linear-gradient( rgba(85, 204, 0, 1) 0%, #237605ff 5%, #237605ff 95%, #2e5b03ff 100%)",
        creeperHeadLighting: `linear-gradient(90deg, 
            #4dff00b9,
            #00990000 5%,
            transparent 10%,
            transparent 90%,
            #00990000 95%,
            #4dff00b9 100%
        )`,
        neckGradient: `linear-gradient( rgba(1, 49, 1, 1), rgba(29, 82, 0, 1) 20%)`,
        oceanGradient: `linear-gradient( #c0e6ffff, #212cffff 5%, #000085ff 40%)`
    },
    {
        state: "sunset-2",
        skyGradient: "linear-gradient( #81c7ef, #91b7ff 50%, #dcda91 84%)",
        sunGradient: "radial-gradient(closest-corner circle at 50% 10%, #ffffffff, #ffffffff 10%, #fdef9cca 20%, #fced98a1 35%, transparent 80%)",
        creeperHeadShade: "linear-gradient( rgba(104, 230, 0, 1) 0%, #2d6b03ff 5%, #386500ff 95%, #2e5b03ff 100%)",
        creeperHeadLighting: `linear-gradient(90deg, 
            #b4ff13b9,
            rgba(71, 153, 0, 0) 5%,
            transparent 10%,
            transparent 90%,
            rgba(71, 153, 0, 0) 95%,
            #b4ff13b9 100%
        )`,
        neckGradient: `linear-gradient( rgba(20, 51, 0, 1), rgba(48, 85, 0, 1) 20%)`,
        oceanGradient: `linear-gradient( #daf0feff, #2462ffff 10%, #00008fff 40%)`
    },
    {
        state: "sunset-3",
        skyGradient: "linear-gradient( #91c2fa, #8fc7fa 23%, #edea91 70%, #cdba90 100%)",
        sunGradient: "radial-gradient(closest-corner circle at 50% 30%, #ffffffff, #ffffffff 10%, #fdef9cca 20%, #fced98a1 35%, transparent 80%)",
        creeperHeadShade: "linear-gradient( rgba(163, 248, 26, 1) 0%, #305404ff 4%, #305404ff 95%, #364306ff 100%)",
        creeperHeadLighting: `linear-gradient(90deg, 
            #d3fd15ca,
            rgba(71, 153, 0, 0) 4%,
            transparent 10%,
            transparent 90%,
            rgba(71, 153, 0, 0) 96%,
            #d3fd15ca 100%
        )`,
        neckGradient: `linear-gradient( rgba(35, 51, 0, 1), rgba(40, 78, 0, 1) 22%)`,
        oceanGradient: `linear-gradient( #ddf0ffff, #285affff 17.5%, #170072ff 45%)`
    },
    {
        state: "sunset-4",
        skyGradient: "linear-gradient( #91c2fa, #8fc7fa 12%, #edea91 56%, #ffc954ff 84%, #ffa954ff 100%)",
        sunGradient: "radial-gradient(closest-corner circle at 50% 50%, #ffffffff, #ffffffff 10%, #fdef9cca 20%, #fced98a1 35%, transparent 80%)",
        creeperHeadShade: "linear-gradient( rgba(168, 255, 38, 1) 0%, #374609ff 3%, #374609ff 95%, #383e03ff 100%)",
        creeperHeadLighting: `linear-gradient(90deg, 
            #d2fd15de,
            rgba(71, 153, 0, 0) 3.5%,
            transparent 10%,
            transparent 90%,
            rgba(71, 153, 0, 0) 96.5%,
            #d2fd15de 100%
        )`,
        neckGradient: `linear-gradient( rgba(31, 40, 0, 1), rgba(43, 71, 0, 1) 25%)`,
        oceanGradient: `linear-gradient( #fbffddff, #2b9ef7ff 20%, #000071ff 52%)`
    },
    {
        state: "sunset-5",
        skyGradient: "linear-gradient( #74b5ffff, #b9ddffff 8%, #edea91 35%, #ffc954ff 76%, #ffa954ff 100%)",
        sunGradient: "radial-gradient(closest-corner circle at 50% 65%, #ffffffff, #ffffffff 10%, #fdef9cca 20%, #fced98a1 35%, transparent 80%)",
        creeperHeadShade: "linear-gradient(#8ab00bff 0%, #353e06ff 2%, #353e06ff 95%, #2b3208ff 100%)",
        creeperHeadLighting: `linear-gradient(90deg, 
            #d3fd15ca,
            rgba(71, 153, 0, 0) 3%,
            transparent 10%,
            transparent 90%,
            rgba(71, 153, 0, 0) 97%,
            #d3fd15ca 100%
        )`,
        neckGradient: `linear-gradient( rgba(34, 40, 0, 1), rgba(46, 67, 0, 1) 26%)`,
        oceanGradient: `linear-gradient( #f7ffbaff, #6bd3ffff 22.5%, #000070ff 58%)`
    },
    {
        state: "sunset-6",
        skyGradient: "linear-gradient( #476cffff, #74bcffff 5%, #f7e79dff 41%, #ffb350ff 79%, #ffa954ff 100%)",
        sunGradient: "radial-gradient(closest-corner circle at 50% 80%, #ffffffff, #ffffffff 10%, #fdef9cca 20%, #fced98a1 35%, transparent 80%)",
        creeperHeadShade: "linear-gradient( rgba(162, 247, 26, 1) 0%, #2c3504ff 1.5%, #2c3504ff 95%, #233404ff 100%)",
        creeperHeadLighting: `linear-gradient(90deg, 
            #dbff3aca,
            rgba(71, 153, 0, 0) 2.75%,
            transparent 10%,
            transparent 90%,
            rgba(71, 153, 0, 0) 97.25%,
            #dbff3aca 100%
        )`,
        neckGradient: `linear-gradient( rgba(33, 38, 0, 1), rgba(53, 62, 0, 1) 27%)`,
        oceanGradient: `linear-gradient( #f2ff93ff, #51b1dbff 22.5%, #080861ff 58%)`
    },
    {
        state: "sunset-7",
        skyGradient: "linear-gradient( #234fffff, #5787ffff 15%, #efea57ff 50%, #ff993aff 84%, #db811bfd 92%, #c14b20ff 100%)",
        sunGradient: "radial-gradient(closest-corner circle at 50% 90%, #ffffffff, #ffffffff 10%, #fdef9cca 20%, #fced98a1 35%, transparent 80%)",
        creeperHeadShade: "linear-gradient( rgba(131, 191, 21, 1) 0%, #2e4509ff 1.25%, #324a0aff 95%, #214203ff 100%)",
        creeperHeadLighting: `linear-gradient(90deg, 
            #d2ff08ca,
            rgba(71, 153, 0, 0) 2.5%,
            transparent 10%,
            transparent 90%,
            rgba(71, 153, 0, 0) 97.5%,
            #d2ff08ca 100%
        )`,
        neckGradient: `linear-gradient( rgba(33, 36, 0, 1), rgba(46, 67, 0, 1) 27%)`,
        oceanGradient: `linear-gradient( rgba(231, 239, 174, 1), #47a0c7ff 20%, #070763ff 51%)`
    },
    {
        state: "sunset-8",
        skyGradient: "linear-gradient( #234fffff, #4076ffff 28%, #efb63bff 61%, #d17c2cff 80%, #c77218ff 91%, #b43e13ff 100%)",
        sunGradient: "radial-gradient(closest-corner circle at 50% 100%, #ffffffff, #ffffffff 10%, #fdef9cca 18%, #fced9886 30%, transparent 70%)",
        creeperHeadShade: "linear-gradient( rgba(201, 203, 26, 1) 0%, #1e5809ff 1.05%, #1e5809ff 95%, #234504ff 100%)",
        creeperHeadLighting: `linear-gradient(90deg, 
            #fce74583,
            rgba(71, 153, 0, 0) 2.25%,
            transparent 10%,
            transparent 90%,
            rgba(71, 153, 0, 0) 97.75%,
            #fce74583 100%
        )`,
        neckGradient: `linear-gradient( rgba(24, 40, 0, 1), rgba(25, 64, 0, 1) 25%)`,
        oceanGradient: `linear-gradient( rgba(230, 240, 158, 0.73), #47a0c7ff 12%, #070763ff 46%`
    },
    {
        state: "sunset-9",
        skyGradient: "linear-gradient( #1835acff, #2455d3ff 45%, #b97a31ff  70% , #a65221ff 84%, #96321eff 90%, #801e06ff 94%, #7b290bff 100%)",
        sunGradient: "radial-gradient(closest-corner circle at 50% 110%, #f7c437ff, #f7c437ff 8%, #a97b25ca 12%, #fced9858 20%, transparent 50%)",
        creeperHeadShade: "linear-gradient( rgba(118, 130, 13, 1) 0%, #1a5006ff 0.9%, #1a5006ff 95%, #04500aff 100%)",
        creeperHeadLighting: `linear-gradient(90deg, 
            #fce7453b,
            rgba(71, 153, 0, 0) 2.0%,
            transparent 10%,
            transparent 90%,
            rgba(71, 153, 0, 0) 98%,
            #fce7453b 100%
        )`,
        neckGradient: `linear-gradient( rgba(12, 37, 0, 1), rgba(22, 56, 0, 1) 22%)`,
        oceanGradient: `linear-gradient( rgba(215, 216, 209, 0.62), #1f5f7bff 4%, #080848ff 34%)`
    },
    {
        state: "sunset-10",
        skyGradient: "linear-gradient( #061b6cff, #0b2c7eff 64%, #844823ff 84%, #632d0eff 93%, #6e1f0fff 98%, #87250cff 99%, #982b04ff 100%)",
        sunGradient: "radial-gradient(closest-corner circle at 50% 120%, #f7c437ff, #f7c437ff 8%, #a97b25ca 10%, #fced9858 15%, transparent 30%)",
        creeperHeadShade: "linear-gradient( rgba(69, 116, 8, 1) 0%, #123b02ff 0.75%, #123b02ff 95%, #1d3903ff 100%)",
        creeperHeadLighting: `linear-gradient(90deg, 
            #fcf64525,
            rgba(71, 153, 0, 0) 1.9%,
            transparent 10%,
            transparent 90%,
            rgba(71, 153, 0, 0) 98.1%,
            #fcf64525 100%
        )`,
        neckGradient: `linear-gradient( rgba(0, 35, 0, 1), rgba(8, 44, 0, 1) 20%)`,
        oceanGradient: `linear-gradient( rgba(134, 134, 134, 0.33), #113762ff 0.01%, #05053bff 24%)`
    },
    {
        state: "nightime",
        skyGradient: "linear-gradient(#100077ff, #0b0056ff, #08003aff 100%)",
        sunGradient: "radial-gradient(closest-corner circle at 50% -50%, #fff8, #fff8 10%, #fff0 50%, transparent 50%)",
        creeperHeadShade: "linear-gradient( #55ffc1ff 0%, #09ba82ff 5%, #09ba82ff 95%, #09874eff 100%)",
        creeperHeadLighting: `linear-gradient(90deg, 
            #0a937cff,
            #09ba82ff 1.9%,
            transparent 10%,
            transparent 90%,
            #09ba82ff 98.1%,
            #0a937cff 100%
        )`,
        neckGradient: `linear-gradient( rgba(0, 55, 32, 1), rgba(5, 182, 141, 1) 30%)`,
        oceanGradient: `linear-gradient( #010169ff, #3549adff 40%)`

    }
];

const renderButtons = () => {
    buttonSection.innerHTML = "";

    buttonSection.innerHTML += `
        <button id="button-1" style="${stateIndex === 0 ? "display: none;" : ""} ${stateIndex === buttonLabels.length - 1 ? "right: 50%; transform: translateX(50%)" : "left: 0px"}">${buttonLabels[stateIndex - 1]}</button>
        <button id="button-2" style="${stateIndex === buttonLabels.length - 1 ? "display: none;" : ""} ${stateIndex === 0 ? "left: 50%; transform: translateX(-50%);" : "right: 0px"}">${buttonLabels[stateIndex + 1]}</button>
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
        stateIndex = (stateIndex <= 0) ? 0 : stateIndex - 1;
    }
    rootSection.style.setProperty("--sky-gradient", states[stateIndex].skyGradient);
    rootSection.style.setProperty("--sun-gradient", states[stateIndex].sunGradient);
    rootSection.style.setProperty("--head-shade", states[stateIndex].creeperHeadShade);
    rootSection.style.setProperty("--head-lighting", states[stateIndex].creeperHeadLighting);
    rootSection.style.setProperty("--neck-gradient", states[stateIndex].neckGradient);
    rootSection.style.setProperty("--ocean-gradient", states[stateIndex].oceanGradient);
    renderButtons();
}


renderButtons();
