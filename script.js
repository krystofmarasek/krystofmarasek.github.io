// Employee data
const employees = [
    { name: 'Filip J', position: 'manager', cash: true },
    { name: 'Verca Z', position: 'manager', cash: true },
    { name: 'Verca H', position: 'manager', cash: false },
    { name: 'Tana', position: 'manager', cash: true },
    { name: 'Anet', position: 'manager', cash: true },
    { name: 'Adam', position: 'manager', cash: true },

    { name: 'Filip N', position: 'athlete', cash: true },
    { name: 'David K', position: 'athlete', cash: true },
    { name: 'David M', position: 'athlete', cash: true },
    { name: 'Ophelie', position: 'athlete', cash: false },
    { name: 'Krystof', position: 'athlete', cash: true },
    { name: 'Tomas', position: 'athlete', cash: true },
    { name: 'Kobi', position: 'athlete', cash: false },

    { name: 'Nikca', position: 'athlete', cash: true },
    { name: 'Eliska', position: 'athlete', cash: true },
    { name: 'Paja', position: 'athlete', cash: true },
    { name: 'Andy', position: 'athlete', cash: true },
    { name: 'Anicka H', position: 'athlete', cash: true },
    { name: 'Anicka S', position: 'athlete', cash: true },
    { name: 'Gabca', position: 'athlete', cash: true },
    { name: 'Dyry', position: 'athlete', cash:true }
];

// Create employee list for Trash Duty Selector
function createEmployeeList() {
    const employeeList = document.getElementById('employeeList');

    if (!employeeList) return; // Only run if the employee list container exists

    employees.forEach(employee => {
        const div = document.createElement('div');
        div.className = 'employee-item';
        div.innerHTML = `
            <input type="checkbox" id="${employee.name}" name="present" value="${employee.name}">
            <label for="${employee.name}">${employee.name} (${employee.position}, ${employee.cash ? "Cash" : "No Cash"})</label>`;
        
        employeeList.appendChild(div);
    });
}

// Start Lottery for Trash Duty
function startLottery() {
    const lotteryResult = document.getElementById('lotteryResult');

    if (!lotteryResult) return; // Only run if the lottery result container exists

    lotteryResult.innerHTML = "Starting lottery...";

    setTimeout(() => {
        lotteryResult.innerHTML += "<br>Spinning...";

        setTimeout(() => {
            lotteryResult.innerHTML += "<br>Results are in!";
            selectForTrashDuty();
        }, 1500);
        
    }, 1500);
}

// Select employees for Trash Duty
function selectForTrashDuty() {
    const presentEmployees = Array.from(document.querySelectorAll('input[name="present"]:checked'))
        .map(input => employees.find(emp => emp.name === input.value));

    if (presentEmployees.length === 0) {
        alert("Error! No employees selected.");
        document.getElementById('result').innerHTML = "Error! No employees selected.";
        return;
    }

    const numToSelectInput = document.getElementById('numToSelect');
    const numToSelect = parseInt(numToSelectInput.value);

    if (isNaN(numToSelect) || numToSelect <= 0) {
        alert("Error! Please enter a valid number of people needed for trash duty.");
        document.getElementById('result').innerHTML = "Error! Please enter a valid number of people needed for trash duty.";
        return;
    }

    if (presentEmployees.length < numToSelect) {
        alert("Error! Not enough employees selected to meet the trash duty requirement.");
        document.getElementById('result').innerHTML = "Error! Not enough employees selected to meet the trash duty requirement.";
        return;
    }

    // Kryštof always stays
    const stayingEmployees = ['Krystof'];

    // Ensure at least one manager stays
    const managers = presentEmployees.filter(emp => emp.position === "manager" && emp.name !== "Krystof");
    
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

    // Update results
    document.getElementById('result').innerHTML = `
        <h3>Lottery Results</h3>
        <p><strong>Staying Employees:</strong> ${stayingEmployees.join(', ')}</p>
        <p><strong>Selected for Trash Duty:</strong> ${selectedForTrashDuty.join(', ')}</p>
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

    const progressPercentage = Math.min((actual / goal) * 100, 100);
    
    const progressBar = document.getElementById('progressBar');
    const progressText = document.getElementById('progressText');

    if (progressBar && progressText) {
        progressBar.style.width = progressPercentage + "%";
        progressText.textContent = `Progress: ${progressPercentage.toFixed(2)}%`;

        if (progressPercentage >= 100) {
            progressText.textContent += " - Goal Achieved!";
        }
        
        // Save data to local storage
        localStorage.setItem("raceGoal", JSON.stringify({ goal, actual }));
    }
}

// Load Race Goal Progress from Local Storage
function loadRaceGoalProgress() {
    const savedData = JSON.parse(localStorage.getItem("raceGoal"));

    if (savedData) {
        document.getElementById("goal").value = savedData.goal;
        document.getElementById("actual").value = savedData.actual;

        updateProgress(); // Update progress bar and text with saved data
    }
}

// Initialize employee list and load race goal progress when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
    createEmployeeList();
    
    // Load saved race goal progress if available
    loadRaceGoalProgress();
});
