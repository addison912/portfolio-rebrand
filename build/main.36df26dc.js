parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"d6sW":[function(require,module,exports) {
new ClipboardJS("#myEmail"),new ClipboardJS("#clippy"),console.log("%c  _    _ _____ _____  ______   __  __ ______ _ \n | |  | |_   _|  __ \\|  ____| |  \\/  |  ____| |\n | |__| | | | | |__) | |__    | \\  / | |__  | |\n |  __  | | | |  _  /|  __|   | |\\/| |  __| | |\n | |  | |_| |_| | \\ \\| |____  | |  | | |____|_|\n |_|  |_|_____|_|  \\_\\______| |_|  |_|______(_)                                            \n ","font-family:monospace");var _=document.getElementById("myEmail");function e(){var _=document.getElementById("myEmail");_.classList.remove("copy"),_.innerHTML="Copied to clipboard!";var e=setInterval(function(){"Copied to clipboard!"!=_.innerHTML&&window.clearInterval(e),_.innerHTML="addisondrewmoore@gmail.com",_.classList.add("copy")},1200)}_.addEventListener("mouseup",e),document.getElementById("clippy").addEventListener("mouseup",e);
},{}]},{},["d6sW"], null)
//# sourceMappingURL=/main.36df26dc.js.map