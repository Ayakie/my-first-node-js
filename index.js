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
 * タスクと完了したかどうかが含まれるオブジェクトを受け取り，完了したかを返す
 * @param {object} taskAndIsDonePair
 * @return {boolean} 完了したかどうか
 */
function isDone(taskAndIsDonePair) {
    return taskAndIsDonePair.state;
}

/**
 * タスクと完了したかどうかが含まれるオブジェクトを受け取り，完了していないかを返す
 * @param {object} taskAndIsDonePair
 * @returns {boolean} 完了していないかどうか 
 */
function isNotDone(taskAndIsDonePair) {
    return !isDone(taskAndIsDonePair)
}

/**
 * TODO一覧の配列を取得する
 * @return {Array}
 */
function list() {
    return tasks.filter(isNotDone).map(t => t.name);
  }  


/**
 * TODOを完了状態にする
 * @param {string} task
 */
function done(task) {
    const index = tasks.findIndex(t => t.name == task);
    if (index != -1) {
        tasks[index].state = true;
    }
}

/**
 * 完了済みのタスク一覧の配列を取得する
 * @return {Array}
 */
function donelist() {
    return tasks.filter(isDone).map(t => t.name)
}

// todoという関数をパッケージの関数として外部に公開する
module.exports = {todo, list, done, donelist};
