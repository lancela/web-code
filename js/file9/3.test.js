function Animal(name){
	this.name = 'op';
}

Animal.prototype.sayName = function(){
	console.log(this.name);
}

function Dog(name){
	// this.name = name;
	this.color = 'black';
}

Dog.prototype = new Animal();
Dog.prototype.constructor = Animal;
Dog.prototype.sayColor = function(){
	console.log(this.color);
}

var dog = new Dog();
console.log(dog);
console.log(Animal.prototype);
console.log(Dog.prototype,'---');
console.log(new Dog());
dog.sayName();
dog.sayColor();