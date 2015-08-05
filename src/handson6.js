var piblaster = require('pi-blaster.js');

for(x=1;x<=10;x++){
    for(y=1;y<=10;y++){
        piblaster.setPwm(18,(x*y)/100);
    }
}

piblaster.setPwm(18,0);

