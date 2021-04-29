// Write your solution here!
const cats = ["Milo","Otis","Garfield"];

function destructivelyAppendCat(name){
    cats.push(name);
}

function destructivelyPrependCat(name){
    cats.unshift(name);
}

function destructivelyRemoveLastCat(){
    cats.pop();
}

function destructivelyRemoveFirstCat(){
    cats.shift();
}

function appendCat(name){
    return [...cats, name];
}

function prependCat(name){
    let newcats =[name, ...cats];
    return newcats;
}

function removeLastCat(){
  return  cats.slice(0,-1);
}

function removeFirstCat(){
    return cats.slice(1);
}

