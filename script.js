//complete this code
class Animal {
	
	constructor(species){
		this.species = species;
	}
	
	makeSound(){
		console.log(`The ${this.species} makes a sound`)
	}
}
	

class Dog extends Animal {
	super(species)
	bark(){
		console.log("woof");
	}
}

class Cat extends Animal {
	super(species)
	purr(){
		console.log("purr");
	}
}

const mydog= new Dog ("jimmy");
mydog.makeSound();
mydog.bark();



// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
