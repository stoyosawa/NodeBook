#!/usr/bin/env node
// 2020-01-31

const cluster = require('cluster');

let messages = [
  'What is thy bidding, my master?',
  'There is a great disturbance in the Force.',
  'I have felt it.',
  'We have a new enemy, Luke Skywalker.',
  'He is just a boy. Obi-Wan can no longer help him.',
  'The Force is strong with him. The son of Skywalker must not become a Jedi.',
  'If he could be turned, he would become a powerful ally.',
  'Yes. Yes. He would be a great asset. Can it be done?',
  'He will join us or die, master.'
];

function sendMessage(worker, id) {
  worker.send({
    message: messages[id],
    id: id
  });
}

// マスタープロセス
function masterProcess() {
  let worker = cluster.fork();
  worker.on('message', function(obj) {
    console.log(`Vader:   ${obj.message}`);
    let id = obj.id + 1;
    if (id === messages.length)
      worker.kill();
    sendMessage(worker, id);
  });
}

// ワーカープロセス
function workerProcess() {
  sendMessage(process, 0);   // 会話はこちらからスタート
  process.on('message', function(obj) {
    console.log(`Emperor: ${obj.message}`);
    sendMessage(process, obj.id + 1);
  });
}

// メイン - 親子の切り分け
if (cluster.isMaster)
  masterProcess();
else
  workerProcess();
