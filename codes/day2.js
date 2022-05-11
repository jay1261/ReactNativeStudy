const name = "Tangtang";
const age = 20;

// const obj = {
//     name : name,
//     age : age
// };

// const obj = {
//     name,
//     age
// };

// console.log(obj);

// const obj = {
//     greeting: function(){
//         console.log('Hello!');
//     }
// }
// const obj ={
//     greeting(){
//         console.log('Hello!');
//     }
// }
// obj.greeting();
/*
const obj = {
    x : 10,
    y : 20,
    z : 30
};
console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));
console.log(obj.hasOwnProperty('x'));
console.log(obj.hasOwnProperty('age'));


const data = {};
console.log(obj.user.name);
console.log(obj.user?.name);
*/
/* 
a = 2;
b = 3; 
const obj = {
    name: a*b
};
console.log(obj); */


//const arr = ['name', 'age','job'];
/* 
const obj = {
    arr[0]: 'John';
}

const obj = {};
obj[arr[0]] = 'john'
obj[arr[1]] = 20;
console.log(obj);
*/

//const arr = [1,2,1];
/* const aSet = new Set();
aSet.add(1);
aSet.add(2);
aSet.add(1);

console.log(aSet);

console.log(aSet.has(1));
aSet.clear();
console.log(aSet.size); */
/* 
const arr = [[1,'a'],[2,'b']];
const aMap = new Map(arr);

aMap.set(1,'a');
aMap.set(3,'c');

aMap.delete(1);
aMap.clear();
console.log(aMap.has(1));
console.log(aMap.size);
console.log(aMap);
 */
/* 
const user = {
    name: 'Tang',
    age : 26,
    job : 'babo',
    getjob(){
        console.log(this.job)
    }
}
user.getjob();
 */
/* 
const aSet = new Set();
// 1을 추가하고 싶으면

const aMap = new Map();
// 1 => a를 추가하고 싶으면

aSet.add(1);
aMap.set(1,'a');
console.log(aSet);
console.log(aMap);
 */
/* 
class LDJ{
    name 
    #age 
    #birth
    
    setage(){
        this.#age = age;
    }
    setbirth(){
        this.#birth = birth;
    }
}
const ldj = new LDJ();
ldj.name = 'LDJ';
ldj.setage(20);
ldj.setbirth(19959126);
console.log(ldj);
 */

class Animal {
    constructor(name) {
      this.speed = 0;
      this.name = name;
    }
    run(speed) {
      this.speed = speed;
      console.log(`${this.name} 은/는 속도 ${this.speed}로 달립니다.`);
    }
    stop() {
      this.speed = 0;
      console.log(`${this.name} 이/가 멈췄습니다.`);
    }
}

class Rabbit extends Animal{

    hide(){
        //this.name = name;
        console.log(`${this.name} 이/가 숨었습니다!`);
    }
}
const rabbit = new Rabbit("흰토끼");
rabbit.run("5");
rabbit.hide();

const book = `And Then There Were None`

const [one=1, three=3,five=5,seven=7]
