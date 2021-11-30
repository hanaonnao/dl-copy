// ==UserScript==
// @name         解除Dlsite複製限制
// @namespace    https://github.com/hanaonnao/dl-copy/
// @version      0.1
// @author       hanaon
// @match        https://*.dlsite.com/home/work/=/product_id/*
// @match        https://www.dlsite.com/maniax/work/=/product_id/*
// @icon         https://www.dlsite.com/images/web/common/favicon.ico
// @grant        none
// ==/UserScript==

(function() {
    var obj=document.getElementById("work_name");
    obj.setAttribute('id',' ');
})();
