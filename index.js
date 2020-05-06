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

/**
 * TODO一覧の配列を取得する
 * @return {Array}
 */
function list() {
    return tasks
      .filter(task => !task.state)
      .map(t => t.name);
  }  

// todoという関数をパッケージの関数として外部に公開する
module.exports = {todo, list};
