var Emitter = require('./ori_emitter.js');
var config = require('./config.js')

var emitter1 = new Emitter();

emitter1.on(config.events.FILE_SAVED, function () {
    console.log('File has been saved.');
});

emitter1.on(config.events.FILE_SAVED, function () {
    console.log('Another listener for file_saved event has been executed.');
});

emitter1.emit(config.events.FILE_SAVED);