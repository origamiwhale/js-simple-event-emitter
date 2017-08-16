var Emitter = require('./ori_emitter.js');

var emitter1 = new Emitter();

emitter1.on('file_saved', function () {
    console.log('File has been saved.');
});

emitter1.on('file_saved', function () {
    console.log('Another listener for file_saved event has been executed.');
});

emitter1.emit('file_saved');