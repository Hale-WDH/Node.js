/*function pet(words){
	this.words=words
	console.log(this.words)
	console.log(this===global)
}

pet('nihao')*/

function Pet(words){
	this.words=words
	this.speak=function(){
		console.log(this.words + ' nihao')
	}
}

function Dog(word){
	// Pet.call(this,word)
	Pet.apply(this,arguments)
}

var dog=new Dog('wang')

console.log(dog)
dog.speak()