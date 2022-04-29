


function myArray(){
    Object.defineProperty(this,"length",{
        enumerable:false,
        writable:true
    });
    for (let index = 0; index < arguments.length; index++) {
        this[index] = arguments[index];
        
    }
    this.length=arguments.length;
}

myArray.prototype.push=function(item){
    let=index=this.length;
    this[index]=item;
    this.length++;
}

myArray.prototype.pop=function(){
    let=index=this.length-1;
    delete this[index];
    this.length--;
}

myArray.prototype.top=function(){
    let index= this.length-1;
    console.log(this[index]);
}

myArray.prototype.print=function(){
    let index=this.length-1;
    var str=[];
    for(var i=0;i<=index;i++){
        str.push(this[i]);
    }
    console.log(str);
}

myArray.prototype.printReverse=function(){
    let index=this.length-1;
    var str=[];
    for(var i=index;i>=0;i--){
        str.push(this[i]);
    }
    console.log(str);
}

myArray.prototype.size=function(){
    let index= this.length;
    console.log(index);
}

const arr= new myArray(1,2,3);
console.log(arr);
arr.push(4);
console.log(arr);
arr.push(5);
console.log(arr);
arr.pop();
console.log(arr);

arr.top();

arr.print();

arr.printReverse();

arr.size();
