/*
 * @Author: chengbo.liu chengbo.liu@petalmail.com
 * @Date: 2024-04-17 15:20:54
 * @LastEditors: chengbo.liu chengbo.liu@petalmail.com
 * @LastEditTime: 2024-04-17 18:40:53
 * @FilePath: \Gift\scripts\main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
document.addEventListener("DOMContentLoaded", function() {
    // 获取要点击的超链接元素
    var showVideosLink = document.getElementById("showVideosLink");

    // 添加点击事件监听器
    showVideosLink.addEventListener("click", function(event) {
        // 阻止默认行为，以防止页面跳转
        event.preventDefault();

        // 选择包含视频的 div 元素并使其显示
        var videosDiv = document.getElementById("videos");
        videosDiv.style.display = "block";
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // 获取要点击的超链接元素
    var showVideosLink = document.getElementById("showTextLink");

    // 添加点击事件监听器
    showVideosLink.addEventListener("click", function(event) {
        // 阻止默认行为，以防止页面跳转
        event.preventDefault();

        // 选择包含视频的 div 元素并使其显示
        var videosDiv = document.getElementById("texts");
        videosDiv.style.display = "block";
    });
});