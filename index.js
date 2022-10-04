

let receivesAFunction = (calBacFxn='Im called upon!') => {
  return calBacFxn();
}
let returnsANamedFunction = (x='Already def fxn') => {
  function defFxn() {
  }
  return defFxn;
}
let returnsAnAnonymousFunction = () => {
  return () => {};
}
function returnsAnAnonymousFunction(){
  let myComp = ['hp', 'DELL', 'Lenovo'] 
  let keyLights;
  if(myComp=== 'hp'){
    keyLights='supper bright';
  }
  else if(myComp==='DELL'){
    keyLights='Some What Black!';
  }
  else {keyLights='Yellow'}
}