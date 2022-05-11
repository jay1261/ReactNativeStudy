//2021년12월31일
const a = "The Curious Case of Benjamin Button"
const b = " The first character is a blank"
const c =  "The last character is a blank "
const abc = [a,b,c]

const data = new Map()

for (const i of abc){
    const len_ = i.trim().split(' ').length
    data.set(i, len_)
}
console.log(data)