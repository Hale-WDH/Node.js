// 添加EventEmitter模块
var EventEmitter = require('events').EventEmitter

//实例一个EventEmitter对象
var life = new EventEmitter()

//可通过.setMaxListeners()来修改最大监听数，默认10个
life.setMaxListeners(11)


function water(who){
	console.log('给 ' + who +' 倒水')
}

// addEventListener
life.on('求安慰',water)

life.on('求安慰',function(who){
	console.log('给 ' + who +' 揉肩')
})

life.on('求安慰',function(who){
	console.log('给 ' + who +' 洗衣')
})


life.on('求溺爱',function(who){
	console.log('给 ' + who +' 买衣服')
})

// 移除一个监听事件，需要在 life.emit('求安慰','东晖')  之前才有用，并且只能移除具名函数
life.removeListener('求安慰',water)

//移除所有‘求安慰’的事件
life.removeAllListeners('求安慰') 

// 触发事件
life.emit('求安慰','东晖')
life.emit('求溺爱','妹子')

/*// 查看是否被监听
var hasConfortListener = life.emit('求安慰','东晖')
var hasPlayedListener = life.emit('求溺爱','妹子')
var hasLovedListener = life.emit('求玩坏','ni ')

console.log(life.emit('求安慰','东晖'))
console.log(life.emit('求溺爱','妹子'))
console.log(life.emit('求玩坏','ni '))
*/

// 查看监听个数，需要具体的名字，有两种方法
console.log(life.listeners('求安慰').length)  //方法一
console.log(EventEmitter.listenerCount(life,'求溺爱'))  //方法二
