type Operation = 'add' | 'multiply' | 'divide';

const calculator = (a: number, b: number, op: Operation): number => { //checkeo estático
    if(op == 'add') return a + b;
    if(op == 'multiply') return a * b;

    if(op == 'divide'){
        if(b == 0) throw new Error('can\t divide by 0')
        //checkeo en runtime
        return a/b
    }
}

console.log(calculator(5, 9, 'divide'));
