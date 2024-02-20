  document.addEventListener("DOMContentLoaded", function(){
    var addPigButton = document.getElementById("addPigButton");
    var container2 = document.querySelector(".container2");

    addPigButton.addEventListener("click",function(){
      if (container2.style.display === "none") {
        container2.style.display = "block";
    } else {
        container2.style.display = "none";
    }
    } );
  });

  

  window.onload = function() {
    const categorySelect = document.getElementById('category');
    const dynamicFields = [
        document.getElementById('dynamic1'),
        document.getElementById('dynamic2'),
        document.getElementById('dynamic3'),
        document.getElementById('dynamic4')
    ];

    categorySelect.addEventListener('change', () => {
        const selectedCategory = categorySelect.value;
        var swimmingAbilityControl = document.getElementById('swimmingAbility');
        var runningAbilityControl = document.getElementById('runningAbility');
        var strengthControl = document.getElementById('strength');
        var languageControl = document.getElementById('language');
       
       
        dynamicFields.forEach((field) => {
            if (field !== null) {
                field.style.display = 'none';
            }
        });

      
        if (selectedCategory === 'grey') {
            let dynamicField = document.getElementById('dynamic1');
            if (dynamicField !== null) {
                dynamicField.style.display = 'block';
                swimmingAbilityControl.required = true;
            }
        } else if (selectedCategory === 'chestnut') {
            let dynamicField = document.getElementById('dynamic2');
            if (dynamicField !== null) {
                dynamicField.style.display = 'block';
               languageControl.required = true;
            }
        } else if (selectedCategory === 'white') {
            let dynamicField = document.getElementById('dynamic3');
            if (dynamicField !== null) {
                dynamicField.style.display = 'block';
                runningAbilityControl.required = true;
            }
        } else if (selectedCategory === 'black') {
            let dynamicField = document.getElementById('dynamic4');
            if (dynamicField !== null) {
                dynamicField.style.display = 'block';
                strengthControl.required = true;
            }
        }
    });
}