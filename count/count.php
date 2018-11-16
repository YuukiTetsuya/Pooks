<?php
#######################################################################################
##
#  PHPカウンタープログラム
#
#  IPアドレスで判定していますので、同一IPアドレスではカウントされませんが、
#  間にほかの人のアクセスがあればカウントします。ユニーク数というよりはセッション数になります。
#　インラインフレームでページに埋め込み、またはphpファイルに直接埋め込むことも可能です。
#  改造や改変は自己責任で行ってください。
#
#  著作権表記等は必要ありません。
#	
#  今のところ特に問題点はありませんが、不具合等がありましたら下記までご連絡ください。
#  MailAddress: info@php-factory.net
#  name: K.Numata
#  HP: http://www.php-factory.net/
##
#######################################################################################
header("Content-Type: text/html;charset=UTF-8");
?>
<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="UTF-8">
<meta name='robots' content='noindex,nofollow'>
<title></title>
<style type="text/css">/*id、classは振ってあります。スタイルシートは自由に編集してください*/
#total,#count{text-align:center;color:#777;font-size:12px;font-family:"ヒラギノ角ゴ Pro W3", "メイリオ", Meiryo, Osaka, "ＭＳ Ｐゴシック"}
#total,.count{font-size:14px;}
.count{color:#36C}
</style>
</head>
<body>
<?php
$keta = 5; //カウンタの最低桁数　※カウントがこの桁を超えても大丈夫（ちゃんと自動で桁が上がります）
$base_day = date("Y/m/d"); //日付の取得
$remoteAddr = $_SERVER['REMOTE_ADDR']; //IP取得
$filepath = "count.dat";
$fp = fopen($filepath,"r+b");
flock ($fp,LOCK_EX);
$line = fgets($fp);
//fclose($fp);
list($reg_day, $total, $today, $yesterday, $reg_remoteAddr) = explode(",", $line);
if ($base_day != $reg_day){
  $yesterday = $today;
  $today = 0;
}
if ($remoteAddr!=$reg_remoteAddr) {
$total++;
$today++;
ftruncate($fp,0);
rewind($fp);
fwrite($fp,"$base_day,$total,$today,$yesterday,$remoteAddr");
fclose($fp);
}
echo "<div id=\"total\">";
printf("%0{$keta}d", $total);
echo "</div>";
echo "<div id=\"count\">";
echo "本日<span class=\"count\">{$today}</span>\n";
echo "&nbsp;昨日<span class=\"count\">{$yesterday}</span>";
echo "</div>";
?>
</body>
</html>