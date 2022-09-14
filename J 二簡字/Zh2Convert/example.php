<?php

include 'src/ErzhConvert.php';

use axiref\HanziConvert\Erzh;

if (!isset($_GET['str'])) {
    die('请在URL后跟随str参数，仅支持简体字');
}

$res = Erzh::convert($_GET['str']);

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>二简字转换</title>
</head>
<body>
    <div class="content">
        <h3><?=$_GET['str']?></h3>
        <hr>
        <?php foreach ($res as $key => $value): ?>
            <?php if ($value['type'] == Erzh::ERZH): ?>
                <img class="erzh" src="<?=$value['url']?>">
            <?php else: ?>
                <?=$value['str']?>
            <?php endif ?>
        <?php endforeach ?>
    </div>
    <style type="text/css">
        .content .erzh
        {
            width: 1em;
            position: relative;
            top: .18em;
        }
        .content
        {
            font-size: 1.8em;
            font-weight: 200;
        }
    </style>
</body>
</html>