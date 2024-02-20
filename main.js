System.register(["./pig"], function (exports_1, context_1) {
    "use strict";
    var pig_1, Farm, addPigForm, myFarm;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (pig_1_1) {
                pig_1 = pig_1_1;
            }
        ],
        execute: function () {
            Farm = class Farm {
                pigs = [];
                constructor() {
                    const storedPigs = localStorage.getItem('pigs');
                    if (storedPigs) {
                        this.pigs = JSON.parse(storedPigs);
                    }
                    this.updateDisplay();
                }
                getAllPigs(category) {
                    let pigsInCategory = this.pigs.filter(pig => pig.breed === category);
                    pigsInCategory.sort((a, b) => a.name.localeCompare(b.name));
                    return pigsInCategory;
                }
                updateDisplay() {
                    const pigTableBody = document.getElementById('pigTableBody');
                    if (pigTableBody) {
                        pigTableBody.innerHTML = '';
                        const categories = [...new Set(this.pigs.map(pig => pig.breed))];
                        for (let category of categories) {
                            let pigsInCategory = this.getAllPigs(category);
                            for (let pig of pigsInCategory) {
                                const row = document.createElement('tr');
                                const nameCell = document.createElement('td');
                                const categoryCell = document.createElement('td');
                                const moreInfoCell = document.createElement('td');
                                const deleteCell = document.createElement('td');
                                nameCell.textContent = pig.name;
                                categoryCell.textContent = pig.categories; //change here for categories   
                                row.appendChild(nameCell);
                                row.appendChild(categoryCell);
                                row.appendChild(moreInfoCell);
                                row.appendChild(deleteCell);
                                moreInfoCell.innerHTML = '<button class="btn btn-info">More info</button>';
                                deleteCell.innerHTML = '<button class="btn btn-danger">Delete</button>';
                                pigTableBody.appendChild(row);
                            }
                        }
                    }
                }
                addPig(pig) {
                    this.pigs.push(pig);
                    //this.updateDisplay();
                }
                deletePig(name) {
                    this.pigs = this.pigs.filter(pig => pig.name !== name);
                }
                getPig(name) {
                    return this.pigs.find(pig => pig.name === name);
                }
                sortPigName() {
                    this.pigs.sort((a, b) => a.name.localeCompare(b.name));
                }
                addPigToLocalStorage(pig) {
                    //this.pigs.push(pig);
                    //localStorage.clear();
                    localStorage.setItem('pigs', JSON.stringify(this.pigs));
                }
            };
            addPigForm = document.getElementById('addPigForm');
            myFarm = new Farm();
            addPigForm.addEventListener('submit', (event) => {
                event.preventDefault();
                const name = document.getElementById('name').value;
                const height = parseFloat(document.getElementById('height').value);
                const weight = parseFloat(document.getElementById('weight').value);
                const personality = document.getElementById('personality').value;
                const breed = document.getElementById('breed').value;
                const category = document.getElementById('category').value;
                let pig = null;
                if (category === 'grey') {
                    const swimmingAbility = parseInt(document.getElementById('swimmingAbility').value);
                    pig = new pig_1.GreyPig(name, 'grey', breed, height, weight, personality, swimmingAbility);
                }
                else if (category === 'chestnut') {
                    const language = document.getElementById('language').value;
                    pig = new pig_1.ChestnutPig(name, 'chestnut', breed, height, weight, personality, language);
                }
                else if (category === 'white') {
                    const runningAbility = parseInt(document.getElementById('runningAbility').value);
                    pig = new pig_1.WhitePig(name, 'white', breed, height, weight, personality, runningAbility);
                }
                else if (category === 'black') {
                    const strength = parseInt(document.getElementById('strength').value);
                    pig = new pig_1.BlackPig(name, 'black', breed, height, weight, personality, strength);
                }
                if (pig !== null) {
                    myFarm.addPig(pig);
                    myFarm.addPigToLocalStorage(pig);
                    // myFarm.updateDisplay()
                    const pigTableBody = document.getElementById('pigTableBody');
                    const row = document.createElement('tr');
                    const nameCell = document.createElement('td');
                    const categoryCell = document.createElement('td');
                    const moreInfoCell = document.createElement('td');
                    const deleteCell = document.createElement('td');
                    nameCell.textContent = pig.name;
                    categoryCell.textContent = category;
                    moreInfoCell.innerHTML = '<button class="btn btn-info">More info</button>';
                    deleteCell.innerHTML = '<button class="btn btn-danger">Delete</button>';
                    moreInfoCell.children[0].addEventListener('click', function () {
                        var info = document.getElementById("moreInfo");
                        var close = document.getElementsByClassName("close")[0];
                        //button is pressed
                        if (info)
                            info.style.display = "block";
                        close.onclick = function () {
                            if (info)
                                info.style.display = "none";
                        };
                        var pigInformation = document.getElementById('pigInformation');
                        if (pigInformation) {
                            pigInformation.textContent = JSON.stringify(pig, null, 2);
                        }
                    });
                    deleteCell.children[0].addEventListener('click', function () {
                        var confirmation = confirm("DO YOU WANT TO DELETE?");
                        if (confirmation) {
                            if (pig) {
                                myFarm.deletePig(pig.name);
                                localStorage.setItem('pigs', JSON.stringify(myFarm.pigs));
                            }
                            if (row.parentNode) {
                                row.parentNode.removeChild(row);
                            }
                        }
                    });
                    row.appendChild(nameCell);
                    row.appendChild(categoryCell);
                    row.appendChild(moreInfoCell);
                    row.appendChild(deleteCell);
                    if (pigTableBody)
                        pigTableBody.appendChild(row);
                }
                addPigForm.reset();
            });
        }
    };
});
