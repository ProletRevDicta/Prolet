<?php

namespace axiref\HanziConvert;

class Erzh
{
    private static $dict;

    const STR_URL = 'https://glyphwiki.org/glyph/%s.svg';
    const SIMP = 0;// 常用简体字
    const ERZH = 1;// 二简字

    public static function convert($str)
    {
        //检查输入参数
        if (empty($str)) {
            return $str;
        }

        //初始化字库
        self::init();

        //开始处理
        $strArr = preg_split('/(?<!^)(?!$)/u', $str);//将字符串转成数组
        array_walk($strArr, function (&$value) {//循环处理字符
            if (isset(self::$dict[$value])) {
                $value = [
                    'type' => self::ERZH,
                    'url'  => sprintf(self::STR_URL, self::$dict[$value])
                ];
            } else {
                $value = [
                    'type' => self::SIMP,
                    'str'  => $value
                ];
            }
        });
        return $strArr;
    }

    public static function init()
    {
        if (empty(self::$dict)) {
            self::$dict = require('ErzhDict.php');
        }
    }
}