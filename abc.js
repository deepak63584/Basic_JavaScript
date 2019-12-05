function outer() {
    var a = 10;
    function inner() {
      var b = 20;
      console.log("a = " + a + "  b = " + b); //closure funtion to be implemented
    }
    return inner();
  }
  //console.log(b);
  var x = outer();
  var y = outer();