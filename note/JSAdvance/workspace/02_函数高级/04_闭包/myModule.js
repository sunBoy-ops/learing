function myModule() {
  var msg = 'hututu';
  function doSomething() {
    console.log('====================================');
    console.log('doSomething():' + msg.toUpperCase());
    console.log('====================================');
  }
  function doOtherthing() {
    console.log('====================================');
    console.log('doOtherthing():' + msg.toLowerCase());
    console.log('====================================');
  }
  return {
    doSomething: doSomething,
    doOtherthing: doOtherthing,
  };
}
