'use strict';
const fs = require('fs');
const readline = require('readline');
const rs = fs.createReadStream("./popu-pref.csv");
const rl = readline.createInterface({input: rs, output: {}});
const prefectureDataMap = new Map(); // key: 都道府県, value: 集計データのオブジェクト

// ファイルからデータを抜き出す
// rl.on('line', lineString => {
//     // 集計年,都道府県名,10〜14歳の人口,15〜19歳の人口 -> ["集計年","都道府県名","10〜14歳の人口","15〜19歳の人口"]
//     const columns = lineString.split(',');
//     // parseInt: 文字列を整数値に変換する関数
//     const year = parseInt(columns[0]);
//     const prefecture = columns[1];
//     const popu = parseInt(columns[2]);
//     if (year == 2010 || year == 2015) {
//         console.log(year);
//         console.log(prefecture);
//         console.log(popu);
//     }
// });

// 連想配列とオブジェクトという２つのデータ型を使って集計データを表す
rl.on('line', linString => {
    const columns = linString.split(',');
    const year = parseInt(columns[0]);
    const prefecture = columns[1];
    const popu = parseInt(columns[3]);
    if (year == 2010 || year == 2015) {
        let value = prefectureDataMap.get(prefecture);
        if (!value) {
            value = {
                popu10: 0,
                popu15: 0,
                change: null
            };
        }
        if (year == 2010) {
            value.popu10 = popu;
        }
        if (year == 2015) {
            value.popu15 = popu;
        }
        prefectureDataMap.set(prefecture, value);
    }
});
rl.on('close', () => {
    for (let [key, value] of prefectureDataMap) {
        value.change = value.popu15 / value.popu10;
    }

    const rankingArray = Array.from(prefectureDataMap).sort((pair1, pair2) => {
        return pair2[1].change - pair1[1].change; // value, つまり2個目の要素にオブジェクトが格納されている
    });

    const rankingStrings = rankingArray.map(([key, value]) => {
        return (
            key + ': ' + value.popu10 + ' => ' + value.popu15 +
            ' 変化率：' + value.change
        );
    });
    console.log(rankingStrings)
});
