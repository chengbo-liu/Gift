/*
 * @Author: chengbo.liu chengbo.liu@petalmail.com
 * @Date: 2024-04-17 15:20:54
 * @LastEditors: chengbo.liu chengbo.liu@petalmail.com
 * @LastEditTime: 2024-04-23 21:46:41
 * @FilePath: \Gift\scripts\main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
document.addEventListener("DOMContentLoaded", function() {
    // 定义一个函数，用于创建字符span和执行打字动画
    function setupTypingAnimation(textElementId) {
        const textElement = document.getElementById(textElementId);
        const textContent = textElement.textContent;
        textElement.textContent = ""; // 清空文本内容

        // 创建每个字符的span元素
        for (let i = 0; i < textContent.length; i++) {
            const charSpan = document.createElement("span");
            charSpan.className = "char";
            charSpan.textContent = textContent[i];
            textElement.appendChild(charSpan);
        }

        // 执行打字动画的函数
        function typingAnimation(chars) {
            chars.forEach((char, index) => {
                setTimeout(() => {
                    char.style.opacity = 1; // 显示字符
                }, 50 * index); // 延迟每个字符的出现
            });
        }

        const charElements = document.querySelectorAll(".char");
        typingAnimation(Array.from(charElements));
    }

    // 在需要执行的地方调用函数
    setupTypingAnimation("tips1");
    setupTypingAnimation("tips2");
});
