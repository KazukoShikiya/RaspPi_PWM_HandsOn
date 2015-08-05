1. 以下のコマンドで、LEDを点灯します。
$ echo  "18=1" >  /dev/pi-blaster

2. １よりも暗くLEDを点灯します。
$ echo  "18=0.4" >  /dev/pi-blaster

3. 以下のコマンドで、LEDを消灯します。
$ echo  "18=0" >  /dev/pi-blaster

4. 以下のコマンドで、GPIOの終了処理をします。
$ echo  "release 18" >  /dev/pi-blaster

「=」の後ろにある値は、0<= x <=1の範囲が有効値です。小数点値を使って明るさが指定できます。
