const employees = [
            { name: 'Kryštof', isManager: false, isAthlete: true },
            { name: 'Alice', isManager: true, isAthlete: false },
            { name: 'Bob', isManager: true, isAthlete: false },
            { name: 'Charlie', isManager: false, isAthlete: true },
            { name: 'Diana', isManager: false, isAthlete: true },
            { name: 'Eva', isManager: false, isAthlete: true },
            { name: 'Frank', isManager: false, isAthlete: true },
            { name: 'Grace', isManager: true, isAthlete: false },
            { name: 'Hank', isManager: false, isAthlete: true },
            { name: 'Ivy', isManager: true, isAthlete: false },
            { name: 'Jack', isManager: false, isAthlete: true },
            { name: 'Karen', isManager: true, isAthlete: false },
            { name: 'Leo', isManager: false, isAthlete: true },
            { name: 'Mia', isManager: false, isAthlete: true },
            { name: 'Nina', isManager: true, isAthlete: false }
        ];

function createEmployeeList() {
            const employeeList = document.getElementById('employeeList');
            employees.forEach(employee => {
                const div = document.createElement('div');
                div.className = 'employee-item';
                div.innerHTML = `
                    <input type="checkbox" id="${employee.name}" name="present" value="${employee.name}">
                    <label for="${employee.name}">${employee.name} ${employee.isManager ? '(Manager)' : ''} ${employee.isAthlete ? '(Athlete)' : ''}</label>
                `;
                employeeList.appendChild(div);
            });
        }

        function selectPeople(names, numToSelect, managers) {
            const staying = new Set(['Kryštof']);

            if (managers.length > 1) {
                const randomIndex = Math.floor(Math.random() * managers.length);
                staying.add(managers[randomIndex]);
            } else if (managers.length === 1) {
                staying.add(managers[0]);
            }

            const eligible = names.filter(name => !staying.has(name));
            const selected = [];

            while (selected.length < numToSelect && eligible.length > 0) {
                const randomIndex = Math.floor(Math.random() * eligible.length);
                selected.push(eligible.splice(randomIndex, 1)[0]);
            }

            return { staying: Array.from(staying), selected };
        }

        function startLottery() {
            const lotteryResult = document.getElementById('lotteryResult');
            lotteryResult.innerHTML = 'Starting the lottery...';
            
            setTimeout(() => {
                lotteryResult.innerHTML += '<br>Spinning the wheel...';
                setTimeout(() => {
                    lotteryResult.innerHTML += '<br>And the results are in!';
                    setTimeout(selectForTrashDuty, 1000);
                }, 1500);
            }, 1500);
        }

        function selectForTrashDuty() {
            const presentEmployees = Array.from(document.querySelectorAll('input[name="present"]:checked'))
                .map(input => employees.find(emp => emp.name === input.value));

            const names = presentEmployees.map(emp => emp.name);
            const managers = presentEmployees.filter(emp => emp.isManager).map(emp => emp.name);

            const numToSelectInput = document.getElementById('numToSelect');
            const numToSelect = Math.min(parseInt(numToSelectInput.value), names.length);

            if (isNaN(numToSelect) || numToSelect <= 0) {
                document.getElementById('result').textContent = "Please enter a valid number of people needed for trash duty.";
                return;
            }

            const result = selectPeople(names, numToSelect, managers);

            const resultHtml = `
                <h3>Lottery Results</h3>
                <table>
                    <tr>
                        <th>Status</th>
                        <th>Employees</th>
                    </tr>
                    <tr>
                        <td>Staying</td>
                        <td>${result.staying.join(', ')}</td>
                    </tr>
                    <tr>
                        <td>Selected for trash duty</td>
                        <td>${result.selected.join(', ')}</td>
                    </tr>
                </table>
            `;

            document.getElementById('result').innerHTML = resultHtml;
        }

        createEmployeeList();

        // Race Goal Progress Functionality
function updateProgress() {
    const goal = parseFloat(document.getElementById('goal').value);
    const actual = parseFloat(document.getElementById('actual').value);

    if (isNaN(goal) || isNaN(actual) || goal <= 0) {
        alert('Please enter valid numbers. Goal must be greater than 0.');
        return;
    }

    const progressPercentage = Math.min((actual / goal) * 100, 100);
    
    const progressBar = document.getElementById('progressBar');
    
 if(progressBar){
 progressBar.style.width= progress