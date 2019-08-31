//子构造函数的原型对象是父构造函数的实例
		function Animal(age){
			//this.name = name;
			this.age = age;
		}
		Animal.prototype.sayName= function(){
			console.log(this.name);
		}
		Animal.prototype.name = 'lance';
		var animal = new Animal(1);
		// animal.sayName();
		console.log(animal);
		//console.log(Animal.__proto__);

		//Dog
		function Dog(name,age,color){
			// this.name = name;
			// this.age = age;
			//经典继承(调用父类的构造方法)
			//Animal.call(this,name,age);
			this.color = color;
		}
		

		//原型链继承(继承了父原型的属性方式)
		Dog.prototype = new Animal();
		Dog.prototype.constructor = Dog;


		Dog.prototype.sayAge = function(){
			console.log(this.age);
		}
		var dog = new Dog('一休',2,'黄色');
		console.log(dog.constructor);
		console.log(dog.name,"000");
		console.log(dog);
		//dog.sayName();
		dog.sayAge();
		console.log('============');
		console.log(dog.__proto__===Dog.prototype);
		console.log(Dog.prototype.__proto__===Animal.prototype);
		console.log(dog.constructor);
		//console.log(Dog.constructor,'+++');
		console.log(dog.constructor.prototype);
		console.log(dog.constructor.constructor,'---');

		console.log(Dog.constructor.prototype);
		
		console.log(dog);
		console.log(dog.constructor);
		console.log(Dog.prototype.constructor);

