'use strict';
const todo = require('./index.js');
const assert = require('assert');

// todoとlistのテスト
todo.todo('クリーニング屋に服を取りに行く');
todo.todo('ディナーのお店を調べる');
assert.deepEqual(todo.list(), ['クリーニング屋に服を取りに行く', 'ディナーのお店を調べる']);

// doneとdonelistのテスト
todo.done('クリーニング屋に服を取りに行く');
console.log(todo.donelist());

console.log('テストは正常に完了しました');