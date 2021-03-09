
class Pet{
	constructor(name, age){
		console.log("INSIDE PET CONSTRUCTOR");
		this.name = name;
		this.age = age;
	}
	eat() {
		return `${this.name} is eating`;
	}
}
class Cat extends Pet{
	constructor(name, age, livesLeft = 9){
		console.log("INSIDE CAT CONSTRUCTOR");
		super(name, age);
		this.LivesLeft = livesLeft;
	}
	meow(){
		return "MEOW!!!!";
	}
}

class Dog extends Pet{

	bark() {
		return "WOOOOFFF!!!";
	}
	eat() {
		return `${this.name} scarfs his food down!`;
	}
}