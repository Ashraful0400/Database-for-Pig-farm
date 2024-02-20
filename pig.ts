export interface Pig{
name: string;
breed: string;
height: number;
weight: number;
personality: string;
categories: string;
}

export class GreyPig implements Pig{
name: string;
breed: string;
height: number;
weight: number;
personality: string;
categories: string;
swimmingAbility: number;

constructor(name: string,categories: string, breed: string, height: number, weight: number, personality: string, swimmingAbility: number){
    this.name = name;
    this.breed = breed;
    this.height = height;
    this.weight = weight;
    this.categories =  categories;
    this.personality = personality;
    this.swimmingAbility = swimmingAbility;
}
}


export class ChestnutPig implements Pig{
name: string;
breed: string;
height: number;
weight: number;
personality: string;
categories: string;
language: string;

constructor(name: string, categories: string, breed: string, height: number, weight: number, personality: string, language: string){
    this.name = name;
    this.breed = breed;
    this.height = height;
    this.weight = weight;
    this.categories =  categories;
    this.personality = personality;
    this.language = language;
}
}

export class WhitePig implements Pig{
name: string;
breed: string;
height: number;
weight: number;
personality: string;
categories: string;
runningAbility: number;

constructor(name: string, categories: string, breed: string, height: number, weight: number, personality: string, runningAbility: number){
    this.name = name;
    this.breed = breed;
    this.height = height;
    this.weight = weight;
    this.categories =  categories;
    this.personality = personality;
    this.runningAbility = runningAbility;;
}
}


export class BlackPig implements Pig{
name: string;
breed: string;
height: number;
weight: number;
personality: string;
strength: number;
categories: string;

constructor(name: string, categories: string, breed: string, height: number, weight: number, personality: string, strength: number){
    this.name = name;
    this.breed = breed;
    this.height = height;
    this.weight = weight;
    this.categories =  categories;
    this.personality = personality;
    this.strength = strength;
}
}