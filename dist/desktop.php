<?php
/*
保存 desktop.php 访问即可保存桌面
*/
$Shortcut = "[InternetShortcut] 
URL=https://www.iiylw.com?desktop
IDList=
IconFile=https://www.iiylw.com/favicon.ico
IconIndex=1
[{000214A0-0000-0000-C000-000000000046}]
Prop3=19,2
";
Header("Content-type: application/octet-stream");
header("Content-Disposition: p_w_upload; filename=咪之宝.url;");
echo $Shortcut;
?>