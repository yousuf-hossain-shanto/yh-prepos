// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

window.jQuery = window.$ = require('jquery')
window.swal = require('sweetalert2')
window.Vue = require('vue/dist/vue');

// $(document).on('click', '#heading', function(e) {
//     const {dialog} = require('electron').remote;

//     var path = dialog.showOpenDialog({
//         properties: ['openDirectory']
//     });

//     const { exec } = require('child_process');
//     exec('cd ' + path + ';composer create-project laravel/laravel ddmd', (error, stdout, stderr) => {
//     if (error) {
//         console.error(`exec error: ${error}`);
//         return;
//     }
//     console.log(`stdout: ${stdout}`);
//     console.log(`stderr: ${stderr}`);
//     });
// })