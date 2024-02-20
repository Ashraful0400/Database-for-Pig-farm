System.register([], function (exports_1, context_1) {
    "use strict";
    var GreyPig, ChestnutPig, WhitePig, BlackPig;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            GreyPig = class GreyPig {
                name;
                breed;
                height;
                weight;
                personality;
                categories;
                swimmingAbility;
                constructor(name, categories, breed, height, weight, personality, swimmingAbility) {
                    this.name = name;
                    this.breed = breed;
                    this.height = height;
                    this.weight = weight;
                    this.categories = categories;
                    this.personality = personality;
                    this.swimmingAbility = swimmingAbility;
                }
            };
            exports_1("GreyPig", GreyPig);
            ChestnutPig = class ChestnutPig {
                name;
                breed;
                height;
                weight;
                personality;
                categories;
                language;
                constructor(name, categories, breed, height, weight, personality, language) {
                    this.name = name;
                    this.breed = breed;
                    this.height = height;
                    this.weight = weight;
                    this.categories = categories;
                    this.personality = personality;
                    this.language = language;
                }
            };
            exports_1("ChestnutPig", ChestnutPig);
            WhitePig = class WhitePig {
                name;
                breed;
                height;
                weight;
                personality;
                categories;
                runningAbility;
                constructor(name, categories, breed, height, weight, personality, runningAbility) {
                    this.name = name;
                    this.breed = breed;
                    this.height = height;
                    this.weight = weight;
                    this.categories = categories;
                    this.personality = personality;
                    this.runningAbility = runningAbility;
                    ;
                }
            };
            exports_1("WhitePig", WhitePig);
            BlackPig = class BlackPig {
                name;
                breed;
                height;
                weight;
                personality;
                strength;
                categories;
                constructor(name, categories, breed, height, weight, personality, strength) {
                    this.name = name;
                    this.breed = breed;
                    this.height = height;
                    this.weight = weight;
                    this.categories = categories;
                    this.personality = personality;
                    this.strength = strength;
                }
            };
            exports_1("BlackPig", BlackPig);
        }
    };
});
