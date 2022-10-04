

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