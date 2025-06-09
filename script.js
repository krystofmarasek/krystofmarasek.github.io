// Employee data
const employees = [
    { name: 'Fíla', position: 'manager', cash: true },
    { name: 'Verča Ž.', position: 'manager', cash: true },
    { name: 'Táňa', position: 'manager', cash: false },
    { name: 'Adam', position: 'manager', cash: true },
    { name: 'Eliška', position: 'manager', cash: true },
    { name: 'Pan Novák', position: 'manager', cash: true },

    { name: 'Lucka', position: 'athlete', cash: false },
    { name: 'Ema', position: 'athlete', cash: false },

    { name: 'David', position: 'athlete', cash: true },
    { name: 'Kryštof', position: 'athlete', cash: true },
    { name: 'Kobi', position: 'athlete', cash: true },
    { name: 'Tomáš', position: 'athlete', cash: false },
    { name: 'Lukáš', position: 'athlete', cash: true },
    { name: 'David M.', position: 'athlete', cash: true },
    { name: 'Filip V.', position: 'athlete', cash: true },

    { name: 'Annie', position: 'athlete', cash: true },
    { name: 'Gabča', position: 'athlete', cash: true },
    { name: 'Minie', position: 'athlete', cash: true },
    { name: 'Anička', position: 'athlete', cash: true },
    { name: 'Pavla', position: 'athlete', cash: true },
    { name: 'Anet', position: 'athlete', cash: true },
    { name: 'Eva', position: 'athlete', cash: true },
    { name: 'Niky P.', position: 'athlete', cash: true },
    { name: 'Verča', position: 'athlete', cash: true },

];

const trashDutyMessages = [
  "Je čas zazářit! 🌟 Byl jsi vybrán pro vznešený úkol úklidu odpadků.",
  "Gratulujeme! Vyhrál jsi v loterii odpadků. Máš štěstí! 🎉",
  "Tvoje mise, pokud se ji rozhodneš přijmout: Operace Čistý Úklid! 🧹",
  "Bohové odpadků promluvili a vybrali tebe! 🗑️",
  "Připraven na odpadkové dobrodružství? Tvůj okamžik nadešel! 🦸‍♂️🦸‍♀️",
  "Připoutej se zlatíčko! Je čas na odpadky! 🚀",
  "Dnešní VIP (Velmi Impozantní Popeláři) byli vybráni! 🏆",
  "Tvůj superhrdinský plášť je připraven - je čas na úklid! 💪",
  "Dnes jsi hvězdou úklidového týmu! ⭐",
  "Gratulujeme k výhře v odpadkové tombole! 🎊",
  "Tvůj den pro záchranu planety je tady! 🌍",
  "Připrav se na svou misi: Operace Čistá Popelnice! 🏙️",
  "Odpadkový bůh tě povolal do služby! 📯",
  "Tvůj odpadkový trůn čeká! 👑",
  "Dnes jsi kapitánem lodi S.S. Čistota! ⚓",
  "Tvůj odpadkový rytířský řád tě volá do akce! 🗡️",
  "Jsi dnešní šampion v boji proti nepořádku! 🏅",
  "Tvůj odpadkový žezlo je připraveno k převzetí! 🧙‍♂️",
  "Dnes jsi hlavní hvězdou úklidového představení! 🎭",
  "Tvůj odpadkový meč je nabroušený a připravený! ⚔️",
  "Vítej v Matrix! Vyber si: modrá popelnice nebo červená popelnice? 🔵🔴",
  "Gratulujeme k zisku zlatého lístku do Wonkovy továrny na čistotu! 🎫🍫",
  "Tvůj odpadkový drak je připraven k letu! Dracarys na všechen nepořádek! 🐉🔥",
  "Vítej v Jurském parku čistoty! Pozor na T-rexe s odpadkovými kleštěmi! 🦖🗑️",
  "Vítej v nové sezóně Hry o odpadky! Zima přichází, ale špína odchází! ❄️👑",
  "Tvůj odpadkový lightsaber je nabitý! Nechť tě provází síla čistoty! ⚔️✨",
  "Gratulujeme k zisku Oskara za nejlepší výkon v kategorii: Nejlepší manipulace s paleťákem! 🏆🎭",
  "Vítej v Mission: Impossible - Odpadkový protokol! Tato zpráva se za 5 sekund sama uklidí. 🕵️‍♂️💥",
  "Tvůj odpadkový Patronus byl vyvolán! Expecto Cleanum! 🧙‍♂️✨",
  "Gratulujeme! Byl jsi povýšen na Velmistra Řádu čistá popelnice! 🏅🗑️",
  "Vítej v elitním klubu Odpadkových Jedi! Nechť je s tebou síla čistoty! 🧙‍♂️✨"
];


const trashDutyComments = [
  "Pamatuj, čistota je půl zdraví! 😇",
  "Nechť je síla čistoty s tebou! ✨",
  "Nezapomeň si vzít svůj superhrdinský plášť! 🦸‍♂️🦸‍♀️",
  "Je čas, aby toto místo zářilo! ✨",
  "Kanalizuj svou vnitřní Marii Kondo a vyvolej trochu radosti! 🌈",
  "Proměňme odpadky v poklad! No, možná ne, ale chápeš to. 💎",
  "Pamatuj: Každý kousek odpadu, který sebereš, je krokem k čistšímu světu! 🌍",
  "Ukaž těm odpadkům, kdo je tady šéf! 💪",
  "Čistota není cíl, ale cesta. Užij si ji! 🛣️",
  "Dnes jsi superhrdina Země! 🌎",
  "Tvoje ruce jsou mocnější než jakýkoli úklidový stroj! 🦾",
  "Odpadky se před tebou třesou strachy! 😱",
  "Jsi jako Midas, ale místo zlata měníš vše v čistotu! ✨",
  "Tvůj úklid je jako symfonie pro naše okolí! 🎵",
  "S velkým odpadkovým košem přichází velká zodpovědnost! 🕷️",
  "Jsi jako ninja - rychlý, tichý a smrtelně účinný proti nepořádku! 🥷",
  "Tvůj úklid je jako magie - zmizí nepořádek, objeví se krása! 🎩✨",
  "Jsi jako detektiv - žádný odpadek ti neunikne! 🕵️‍♂️",
  "Tvůj úklid je jako umění - vytváříš krásu z chaosu! 🎨",
  "Jsi jako zahradník - pěstuješ čistotu všude kolem sebe! 🌱",
  "Jsi jako kouzelník - odpadky mizí pod tvýma rukama! 🎩✨",
  "Tvůj úklid je jako dobré víno - s časem se jen zlepšuje! 🍷",
  "Jsi odpadkový whisperer - rozumíš jazyku nepořádku! 🗑️👂",
  "Tvůj úklidový styl je jako tanec - elegantní a efektivní! 💃",
  "Jsi jako superhrdina - tvou superschopností je úklid! 🦸‍♂️🧹",
  "Tvůj úklid je jako dobrá kniha - každá kapitola je čistší než ta předchozí! 📚",
  "Jsi jako šéfkuchař - ale tvou specialitou je čistota! 👨‍🍳✨",
  "Tvůj úklid je jako dobré kafe - povzbuzující a nezbytný! ☕",
  "Jsi jako horský průvodce - vedeš nás k vrcholu čistoty! 🏔️",
  "Tvůj úklid je jako dobrý vtip - vždy nás rozesměje! 😂",
  "Jsi jako alchymista - měníš nepořádek v čistotu! 🧪✨",
  "Tvůj úklid je jako dobrá masáž - uvolňující pro okolí! 💆‍♂️",
  "Jsi jako kapitán lodi - kormidluješ nás k čistým břehům! ⚓",
  "Tvůj úklid je jako dobrá píseň - má rytmus a melodii! 🎵",
  "Jsi jako světlonoš - přinášíš světlo do temných koutů! 🕯️",
  "Tvůj úklid je jako dobrý film - plný akce a s happy endem! 🎬",
  "Jsi jako včelka - pilně pracuješ na úlu čistoty! 🐝",
  "Tvůj úklid je jako dobrá partie šachu - strategický a precizní! ♟️",
  "Jsi jako malíř - ale tvým plátnem je čistota! 🎨",
  "Tvůj úklid je jako dobrý sen - když se probudíme, vše je krásné! 💤✨"
];

// Initialize employee list and load race goal progress when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
    createEmployeeList();
    
    // Load saved race goal progress if available
    loadRaceGoalProgress();
});

// Create employee list for Trash Duty Selector
function createEmployeeList() {
    const employeeList = document.getElementById('employeeList');

    if (!employeeList) return; // Only run if the employee list container exists

    employees.forEach(employee => {
        const div = document.createElement('div');
        div.className = 'employee-item';
        div.innerHTML = `
            <input type="checkbox" id="${employee.name}" name="present" value="${employee.name}">
            <label for="${employee.name}">${employee.name} </label>`;
        
        employeeList.appendChild(div);
    });
}


// Start Lottery for Trash Duty
function startLottery() {
    const lotteryResult = document.getElementById('lotteryResult');
    if (!lotteryResult) return; // Only run if the lottery result container exists

    // Check if there are present employees
    const presentEmployees = Array.from(document.querySelectorAll('input[name="present"]:checked'))
        .map(input => employees.find(emp => emp.name === input.value));

    if (presentEmployees.length === 0) {
        alert("Error! No employees selected.");
        document.getElementById('result').innerHTML = "Error! No employees selected.";
        return;
    }

    const numToSelectInput = document.getElementById('numToSelect');
    const numToSelect = parseInt(numToSelectInput.value);

    // Validate number of employees needed
    if (isNaN(numToSelect) || numToSelect <= 0) {
        alert("Error! Please enter a valid number of people needed for trash duty.");
        document.getElementById('result').innerHTML = "Error! Please enter a valid number of people needed for trash duty.";
        return;
    }

    // Check if there are enough present employees
    if (presentEmployees.length < numToSelect) {
        alert("Error! Not enough employees selected to meet the trash duty requirement.");
        document.getElementById('result').innerHTML = "Error! Not enough employees selected to meet the trash duty requirement.";
        return;
    }

    // Proceed with lottery process
    lotteryResult.innerHTML = "<h3>🎰 Loterie úklidu odpadků! 🎰</h3>";

    const stages = [
        "Inicializace Odpadko-Matiku 3000...",
        "Skenování zaměstnaneckých průkazů...",
        "Analýza úrovní odpadkové expertízy...",
        "Konzultace s prastarými bohy odpadu...",
        "Výpočet optimálních týmů pro nakládání s odpadem...",
        "Roztáčení Kola Neštěstí...",
        "Bubnování, prosím! 🥁",
        "A šťastní výherci jsou..."
];


    let i = 0;
    const intervalId = setInterval(() => {
        if (i < stages.length) {
            lotteryResult.innerHTML += `<p>${stages[i]}</p>`;
            lotteryResult.scrollTop = lotteryResult.scrollHeight;
        } else {
            clearInterval(intervalId);
            selectForTrashDuty();
        }
        i++;
    }, 2000);
}


// Select employees for Trash Duty
function selectForTrashDuty(){ 
    const presentEmployees = Array.from(document.querySelectorAll('input[name="present"]:checked'))
        .map(input => employees.find(emp => emp.name === input.value));

    if (presentEmployees.length === 0) {
        alert("Error! No employees selected.");
        document.getElementById('result').innerHTML = "Error! No employees selected.";
        return;
    }

    const numToSelectInput = document.getElementById('numToSelect');
    const numToSelect = parseInt(numToSelectInput.value);


    // KS
    const stayingEmployees = [];

    // Ensure at least one manager stays
    const managers = presentEmployees.filter(emp => emp.position === "manager" && emp.name !== "Kryštof");
    
    if (managers.length > 1) {
        const randomIndex = Math.floor(Math.random() * managers.length);
        stayingEmployees.push(managers[randomIndex].name);
    } else if (managers.length === 1) {
        stayingEmployees.push(managers[0].name);
    }

    // Filter out staying employees from eligible employees
    const eligibleEmployees = presentEmployees.filter(emp => !stayingEmployees.includes(emp.name));

    // Randomly select employees for trash duty
    const selectedForTrashDuty = [];
    
    while (selectedForTrashDuty.length < numToSelect && eligibleEmployees.length > 0) {
        const randomIndex = Math.floor(Math.random() * eligibleEmployees.length);
        selectedForTrashDuty.push(eligibleEmployees.splice(randomIndex, 1)[0].name);
    }


    // Randomly select a message and a comment
    const randomMessage = trashDutyMessages[Math.floor(Math.random() * trashDutyMessages.length)];
    const randomComment = trashDutyComments[Math.floor(Math.random() * trashDutyComments.length)];

    // Update results
    document.getElementById('result').innerHTML = `
        <h3>${randomMessage}</h3>
        <p><strong>Selected for Trash Duty:</strong> ${selectedForTrashDuty.join(', ')}</p>
        <p><em>${randomComment}</em></p>
  `;
}

// Race Goal Progress Functionality with Local Storage
function updateProgress() {
  const goal = parseFloat(document.getElementById('goal').value);
  const actual = parseFloat(document.getElementById('actual').value);
  if (isNaN(goal) || isNaN(actual) || goal <= 0) {
    alert("Please enter valid numbers. Goal must be greater than 0.");
    return;
  }

  const progressPercentage = (actual / goal) * 100;
  const progressBar = document.getElementById('progressBar');
  const progressText = document.getElementById('progressText');
  const goalLine = document.getElementById('goalLine');

  if (progressBar && progressText && goalLine) {
    progressBar.style.width = `${progressPercentage}%`;
    let message = "";
    let color = "";

    if (progressPercentage < 10) {
    message = "Právě začínáme!";
    color = "#FF4136"; // Červená
} else if (progressPercentage < 20) {
    message = "První kroky jsou za námi!";
    color = "#FF851B"; // Oranžová
} else if (progressPercentage < 30) {
    message = "Děláme pokroky!";
    color = "#FFDC00"; // Žlutá
} else if (progressPercentage < 40) {
    message = "Nabíráme tempo!";
    color = "#B10DC9"; // Fialová
} else if (progressPercentage < 50) {
    message = "Skoro v polovině!";
    color = "#0074D9"; // Modrá
} else if (progressPercentage < 60) {
    message = "Jsme v polovině cesty!";
    color = "#2ECC40"; // Zelená
} else if (progressPercentage < 70) {
    message = "Pokračujeme správným směrem!";
    color = "#3D9970"; // Olivová
} else if (progressPercentage < 80) {
    message = "Blížíme se k cíli!";
    color = "#39CCCC"; // Tyrkysová
} else if (progressPercentage < 90) {
    message = "Cíl je na dohled!";
    color = "#01FF70"; // Limetková
} else if (progressPercentage < 100) {
    message = "Téměř tam!";
    color = "#FFDC00"; // Žlutá
} else if (progressPercentage === 100) {
    message = "Cíl dosažen! Gratulujeme!";
    color = "#2ECC40"; // Zelená
} else {
    message = "Cíl překročen! Skvělá práce!";
    color = "#7FDBFF"; // Světle modrá
}

    progressBar.style.background = color;
    progressText.textContent = `Progres: ${progressPercentage.toFixed(2)}% - ${message}`;
    goalLine.style.left = '100%';
  }

  // Save data to local storage
  localStorage.setItem("raceGoal", JSON.stringify({ goal, actual }));
}



// // Race Goal Progress Functionality with Local Storage
// function updateProgress() {
//     const goal = parseFloat(document.getElementById('goal').value);
//     const actual = parseFloat(document.getElementById('actual').value);

//     if (isNaN(goal) || isNaN(actual) || goal <= 0) {
//         alert("Please enter valid numbers. Goal must be greater than 0.");
//         return;
//     }

//     const progressPercentage = Math.min((actual / goal) * 100, 100);
    
//     const progressBar = document.getElementById('progressBar');
//     const progressText = document.getElementById('progressText');

//     if (progressBar && progressText) {
//         progressBar.style.width = progressPercentage + "%";
//         progressText.textContent = `Progress (Daily): ${progressPercentage.toFixed(2)}%`;

//         if (progressPercentage >= 100) {
//             progressText.textContent += " - Goal Achieved!";
//         }
        
//         // Save daily data to local storage
//         localStorage.setItem("raceGoal", JSON.stringify({ goal, actual }));
//     }
// }

// Monthly Race Goal Progress Functionality
function updateMonthlyProgress() {
    const monthlyGoal = parseFloat(document.getElementById('monthlyGoal').value);
    const monthlyActual = parseFloat(document.getElementById('monthlyActual').value);

    if (isNaN(monthlyGoal) || isNaN(monthlyActual) || monthlyGoal <= 0) {
        alert("Please enter valid numbers. Monthly goal must be greater than 0.");
        return;
    }

    const monthlyProgressPercentage = Math.min((monthlyActual / monthlyGoal) * 100, 100);

    const monthlyProgressBar = document.getElementById('monthlyProgressBar');
    const monthlyProgressText = document.getElementById('monthlyProgressText');

    if (monthlyProgressBar && monthlyProgressText) {
        monthlyProgressBar.style.width = monthlyProgressPercentage + "%";
        monthlyProgressText.textContent = `Progress (Monthly): ${monthlyProgressPercentage.toFixed(2)}%`;

        if (monthlyProgressPercentage >= 100) {
            monthlyProgressText.textContent += " - Goal Achieved!";
        }

        // Save monthly data to local storage
        localStorage.setItem("monthlyRaceGoal", JSON.stringify({ monthlyGoal, monthlyActual }));
    }
}

// Load Race Goal Progress from Local Storage
function loadRaceGoalProgress() {
    const savedDailyData = JSON.parse(localStorage.getItem("raceGoal"));
    const savedMonthlyData = JSON.parse(localStorage.getItem("monthlyRaceGoal"));

    // Load daily race goal data
    if (savedDailyData) {
        document.getElementById("goal").value = savedDailyData.goal;
        document.getElementById("actual").value = savedDailyData.actual;

        updateProgress(); // Update daily progress bar and text with saved data
    }

    // Load monthly race goal data
    if (savedMonthlyData) {
        document.getElementById("monthlyGoal").value = savedMonthlyData.monthlyGoal;
        document.getElementById("monthlyActual").value = savedMonthlyData.monthlyActual;

        updateMonthlyProgress(); // Update monthly progress bar and text with saved data
    }
}


document.getElementById('goal').addEventListener('input', updateProgress);
document.getElementById('actual').addEventListener('input', updateProgress);
document.getElementById('monthlyGoal').addEventListener('input', updateMonthlyProgress);
document.getElementById('monthlyActual').addEventListener('input', updateMonthlyProgress);
