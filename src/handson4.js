var fs = require('fs');
fs.writeFileSync('/sys/class/gpio/export',18);
fs.writeFileSync('/sys/class/gpio/gpio18/direction','out');
fs.writeFileSync('/sys/class/gpio/gpio18/value',1);
var value = fs.readFileSync('/sys/class/gpio/gpio18/value','ascii');
console.log(value);
fs.writeFileSync('/sys/class/gpio/unexport',18);
