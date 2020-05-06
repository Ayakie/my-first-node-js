'use strict';
// {name: タスクの文字列, state: 完了しているかどうかの真偽値}
const tasks = new Array();

/**
 * TODOを追加する
 * @param {string} task
 */
function todo(task) {
    tasks.push({name: task, state:false})
}

// todoという関数をパッケージの関数として外部に公開する
module.exports = {todo};
