var reader = new FileReader();
debugger;
reader.onload = function (e) {
    var htmlReader = reader.result;
}
reader.readAsBinaryString("test.html");
document.write("oof");