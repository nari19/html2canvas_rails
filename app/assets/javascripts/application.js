// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .
//= require bootstrap


function getDisplayImage(){
    //html2canvas実行
    html2canvas(document.getElementById("target")).then(function(canvas) {
        downloadImage(canvas.toDataURL());
    });
}
    
function downloadImage (data) {
    var fname ="download.png";
    var encdata= atob(data.replace(/^.*,/, ''));
    var outdata = new Uint8Array(encdata.length);

    for (var i = 0; i < encdata.length; i++) {
        outdata[i] = encdata.charCodeAt(i);
    }
    
    var blob = new Blob([outdata], ["image/png"]);
    if (window.navigator.msSaveBlob) {
        //IE用
        window.navigator.msSaveOrOpenBlob(blob, fname);
    } else {
        //それ以外？
        document.getElementById("getImage").href=data; //base64そのまま設定
        document.getElementById("getImage").download=fname; //ダウンロードファイル名設定
        document.getElementById("getImage").click(); //自動クリック
    }
}
