1.以下のコマンドで、shellコマンドでLEDに給電するGPIOを初期化処理をします。
$ echo  18 >  /sys/class/gpio/export
$ echo  out >  /sys/class/gpio/gpio18/direction

※	“Permission Denied” というエラーメッセージが出る場合は、すべてのコマンドを、以下の形式で入力して実行してください。
$ sudo  sh –c “ ここに実行したいコマンドを書きます ”
(例)
$ sudo  sh –c “echo  out >  /sys/class/gpio/gpio18/direction”

※	“Resource busy” というエラーメッセージが出る場合は、何らかの原因で前回の処理が正しく終わっていません。5. のGPIO終了処理コマンドを実行後に、1.を初めからやり直してください。

2. 以下のコマンドで、LEDを点灯します。

$ echo  1 >  /sys/class/gpio/gpio18/value

3. 以下のコマンドで、LEDを消灯します。

$ echo  0 >  /sys/class/gpio/gpio18/value

4. LEDが点灯しているかどうかをコマンドで確認することも可能です。以下のコマンドを実行し、1が表示されたら点灯中、それ以外は消灯またはエラー中です。

$ cat  /sys/class/gpio/gpio18/value

5. 以下のコマンドで、GPIOの終了処理をします。終了処理が行われないと、次回のGPIOアクセスでエラーが発生します。

$ echo  18 >  /sys/class/gpio/unexport


ハンズオンに出てくる「18」は、Raspberry PiのGPIOピンにつけられた番号です。この番号のピンを通じて電流を流します。
