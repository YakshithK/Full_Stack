/* let, const
let age = 30;
age = 31;
//console.log(age)

// Strings, Numbers, Boolean, null, undefined
const name = 'john'
const Age = 30
const rating = 4.5
const isCool = true
const x = null
const y = undefined
let z

//console.log(typeof name)
//console.log(typeof Age)
//console.log(typeof rating)
//console.log(typeof isCool)
//console.log(typeof x)
//console.log(typeof y)
//console.log(typeof z)

//Concatenation
//console.log('My Name is ' +name+' and I am '+age)
//console.log(`My name is ${name} and I am ${age}`)

const s = 'Hello World';
let a = 'bottle, camera, phone'
//console.log(s.substring(0, 5).toUpperCase())
//console.log(s.split(''))
//console.log(a.split(', '))

//Arrays - Variables that hold multiple values

/*const numbers = new Array(1, 2, 3,4, 5);
console.log(numbers)

const fruits = ['Apple', 'Banana', 'Pears', 1, true]
console.log(fruits)
console.log(fruits[0])
fruits[5] = 'grapes'
console.log(fruits[5])
fruits.push('mangos')
console.log(fruits)
fruits.unshift('dragonfruit')
console.log(fruits)

fruits.pop()
console.log(fruits)

console.log(Array.isArray('hello'))
console.log(fruits.indexOf('Pears'))
console.log(fruits)

//object literals
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: '50 main st',
        city: 'Boston',
        state: 'MA'
    }
}

console.log(person.hobbies[1])
console.log(person.address.city)

const { firstName, lastNam, address: { city }} = person
console.log(firstName)
console.log(city)

person.email = 'john@gmail.com'
console.log(person)

const todos = [
    {
        id: 1,
        text: 'Take out Trash',
        isCompleted: true
    },
    {
        id: 1,
        text: 'Meeting with Boss',
        isCompleted: true
    },
    {
        id: 1,
        text: 'Dentist appt',
        isCompleted: false
    }
]

console.log(todos[1].text)

const todoJSON = JSON.stringify(todos)
console.log(todoJSON)

//Loops

//For
for (let i = 0; i < 10; i++) {
    console.log(`For Loop Number: ${i}`)
}

//While
let i = 0
while(i<10){
    console.log(`While Loop Number: ${i}`)
    i++
}

for(let todo of todos) {
    console.log(todo.text)
}

//forEach, map, filter
todos.forEach(function(todo) {
    console.log(todo.text)
})
const todoText = todos.map(function(todo){
    return todo.text
})

console.log(todoText)

const todoTask = todos.filter(function(todo){
    return todo.isCompleted == true
}).map(function(todo){
    return todo.text
})

console.log(todoTask)


const e = 11
const b = 100

if(e==10) {
    console.log('x is 10')
} else if(e >10){
    console.log('x is greater than 10')
} else {
    console.log('x is NOT 10')
}

if(e > 5 && b > 10){
    console.log('e is more than 5 and b is more than 10')
}
if(e > 5 || b > 10){
    console.log('e is more than 5 or b is more than 10')
}

const x = 11
const color = x > 10 ? 'red' : 'blue'

switch(color) {
    case 'red':
        console.log('color is red')
        break
    case 'blue':
        console.log('color is blue')
        break
    default:
        console.log('color is NOT red or blue')
        break
}



// Functions

function addNums(num1, num2) {
    return num1 + num2
}

console.log(addNums(5, 5))

const addNums = (num1=1, num2=1) => num1 + num2

console.log(addNums(1))


//Constructor functions

function Person(firstName, lastName, dob) {
    this.firstName = firstName
    this.lastName = lastName
    this.dob = new Date(dob)
}

Person.prototype.getBirthYear = function() {
    return this.dob.getFullYear()
}

Person.prototype.getFirstName = function() {
    return `${this.firstName} ${this.lastName}`
}

const person1 = new Person('John', 'Doe', '4-3-1980')
const person2 = new Person('Mary', 'Smith', '1-8-1880')
//console.log(person2.dob.getFullYear())

console.log(person1.getBirthYear())
console.log(person1.getFirstName())
console.log(person1)


//Class
class Person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName
        this.lastName = lastName
        this.dob = new Date(dob)
    }

    getBirthYear(){
        return this.dob.getFullYear()
    }

    getFullName(){
        return `${this.firstName} ${this.lastName}`
    }
}

const person1 = new Person('John', 'Doe', '4-3-1980')
const person2 = new Person('Mary', 'Smith', '1-8-1880')
//console.log(person2.dob.getFullYear())

console.log(person1.getBirthYear())
console.log(person1.getFullName())
console.log(person1)


//console.log(window)

//Selectors

//Single
let form = document.getElementById('my-form')
form = document.querySelector('div')
console.log(form)

//Multiple
form = document.querySelectorAll('.item')
form = document.getElementsByTagName('li')
console.log(form)


const items = document.querySelectorAll('.item')
items.forEach((item) => console.log(item))


const ul = document.querySelector('.items')

//ul.remove()

//ul.firstElementChild.remove()
//ul.lastElementChild.remove()
ul.firstElementChild.textContent = 'Hello'

ul.children[1].innerText = 'Brad'
ul.lastElementChild.innerHTML = '<h1>Hello</h1>'

const btn = document.querySelector('.btn')
btn.style.background = 'red'

const btn = document.querySelector('.btn')
btn.addEventListener('click', (e) =>{
    e.preventDefault()
    document.querySelector('#my-form').style.background = '#ccc'
    document.querySelector('body').classList.add('bg-dark')
    document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>'
})
*/
const myForm = document.querySelector('#my-form')
const nameInput = document.querySelector('#name')
const emailInput = document.querySelector('#email')
const msg = document.querySelector('.msg')
const userList = document.querySelector('#users')

myForm.addEventListener('submit', onSubmit)

function onSubmit(e){
    e.preventDefault()

    if (nameInput.value == '' || emailInput.value == '') {
        msg.classList.add('error')
        msg.innerHTML = 'Please enter all fields'

        setTimeout(() => msg.remove(), 3000)
    } else {
        const li = document.createElement('li')
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`))

        userList.appendChild(li)

        // Clear Fields
        nameInput.value = ''
        emailInput.value = ''
    }
}