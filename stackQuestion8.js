class Stack {

    constructor(size) {
        this.stack = []
        this.maxSize = size
        this.stackSize = 0
    }
    peek() {
        if (this.stackSize === 0) {
            return "stack is empty"
        } else {
            const lastElem = this.stackpop()
            this.stackPush(lastElem)
            return lastElem
        }
    }

    isEmpty() {
        if (this.stackSize == 0) {
            return true
        } return false
    }

    stackPush(item) {
        if (this.stackSize >= this.maxSize) {
            return new Error("stack Overflow")
        }
        this.stack.push(item)
        this.stackSize += 1
        return this.stackSize
    }
    stackpop() {
        if (this.stackSize === 0) {
            return new Error("stack Underflow")
        }
        this.removeItem = this.stack.pop()
        this.stackSize -= 1
        return this.removeItem
    }
}



const s = "{[()]}";

const isValidParanthesis =(s) =>{
const stack = new Stack(s.length);
for (let i = 0; i < s.length; i++){
const currentChar = s.charAt(i);
if (currentChar === '[' || currentChar === '(' || currentChar === '{') {
    stack.stackPush(currentChar);
} else {

    const peekElement = stack.peek();
    if(!stack.isEmpty() && ((currentChar === ']' && peekElement === '[')|| (currentChar === ')' && peekElement === '(') || (currentChar === '}' && peekElement === '{' ))){
        stack.stackpop()
    } else {
        return false;
    }
    }
    }
return stack.isEmpty()
}
console.log(isValidParanthesis(s))
