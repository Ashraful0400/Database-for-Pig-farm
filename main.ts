import { Pig, GreyPig, ChestnutPig, WhitePig, BlackPig } from './pig';

class Farm {
    pigs: Pig[] = [];


    constructor() {
        const storedPigs = localStorage.getItem('pigs');
        if (storedPigs) {
            this.pigs = JSON.parse(storedPigs);
        }
        
        this.updateDisplay();
    }
    

    getAllPigs(category: string) {

        let pigsInCategory = this.pigs.filter(pig => pig.breed === category);

        pigsInCategory.sort((a, b) => a.name.localeCompare(b.name));
        return  pigsInCategory;
    }


    updateDisplay(){
        const pigTableBody = document.getElementById('pigTableBody');
        if(pigTableBody){
            pigTableBody.innerHTML = '';

            const categories = [...new Set(this.pigs.map(pig => pig.breed))];

            for(let category of categories){

                let pigsInCategory = this.getAllPigs(category);


            for(let pig of pigsInCategory){
                const row = document.createElement('tr');
                const nameCell = document.createElement('td');
                const categoryCell = document.createElement('td');
                const moreInfoCell = document.createElement('td');
                const deleteCell = document.createElement('td');
        

                nameCell.textContent = pig.name;
                categoryCell.textContent = pig.categories;//change here for categories   


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
    addPig(pig: Pig) {
        this.pigs.push(pig);
        //this.updateDisplay();
    }

    deletePig(name: string) {
        this.pigs = this.pigs.filter(pig => pig.name !== name)
    }

    getPig(name: string) {
        return this.pigs.find(pig => pig.name === name)
    }

   
    sortPigName() {
        this.pigs.sort((a, b) => a.name.localeCompare(b.name));
    }

    addPigToLocalStorage(pig: Pig) {
        //this.pigs.push(pig);
        //localStorage.clear();
        localStorage.setItem('pigs', JSON.stringify(this.pigs));
    }
}

const addPigForm = document.getElementById('addPigForm')as HTMLFormElement;
const myFarm = new Farm();

addPigForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = (document.getElementById('name') as HTMLInputElement).value;
    const height = parseFloat((document.getElementById('height') as HTMLInputElement).value);
    const weight = parseFloat((document.getElementById('weight') as HTMLInputElement).value);
    const personality = (document.getElementById('personality') as HTMLInputElement).value;
    const breed = (document.getElementById('breed') as HTMLInputElement).value;
    const category = (document.getElementById('category') as HTMLSelectElement).value;

    let pig: Pig | null = null;
    if (category === 'grey') {
        const swimmingAbility = parseInt((document.getElementById('swimmingAbility') as HTMLInputElement).value);
        pig = new GreyPig(name, 'grey', breed, height, weight, personality, swimmingAbility);
    } else if (category === 'chestnut') {
        const language = (document.getElementById('language') as HTMLInputElement).value;
        pig = new ChestnutPig(name,'chestnut', breed, height, weight, personality, language);
    } else if (category === 'white') {
        const runningAbility = parseInt((document.getElementById('runningAbility') as HTMLInputElement).value);
        pig = new WhitePig(name,'white',  breed, height, weight, personality, runningAbility);
    } else if (category === 'black') {
        const strength = parseInt((document.getElementById('strength') as HTMLInputElement).value);
        pig = new BlackPig(name,'black',  breed, height, weight, personality, strength);
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

         moreInfoCell.children[0].addEventListener('click', function(){
            var info = document.getElementById("moreInfo");
            var close = document.getElementsByClassName("close")[0]as HTMLElement;

            //button is pressed
            if(info)
            info.style.display = "block";

            close.onclick = function(){
                if(info)
                info.style.display = "none";
            }
            var pigInformation = document.getElementById('pigInformation');
            if (pigInformation){
                pigInformation.textContent = JSON.stringify(pig, null, 2);}

         });
         deleteCell.children[0].addEventListener('click',function(){

            var confirmation = confirm("DO YOU WANT TO DELETE?")
            if(confirmation){
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



    
    
 

