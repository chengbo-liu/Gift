/*
 * @Author: chengbo.liu chengbo.liu@petalmail.com
 * @Date: 2024-04-17 15:20:54
 * @LastEditors: chengbo.liu chengbo.liu@petalmail.com
 * @LastEditTime: 2024-04-23 21:34:16
 * @FilePath: \Gift\scripts\main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
document.addEventListener("DOMContentLoaded", function() {
    const textElement = document.getElementById("tips1");
    const textContent = textElement.textContent;
    textElement.textContent = ""; // Clear text content
    
    // Create a span for each character
    for (let i = 0; i < textContent.length; i++) {
      const charSpan = document.createElement("span");
      charSpan.className = "char";
      charSpan.textContent = textContent[i];
      textElement.appendChild(charSpan);
    }
  
    // Animation function for typing effect
    function typingAnimation(chars) {
      chars.forEach((char, index) => {
        setTimeout(() => {
          char.style.opacity = 1; // Show character
        }, 10 * index); // Delay each character's appearance
      });
    }
  
    const charElements = document.querySelectorAll(".char");
    typingAnimation(Array.from(charElements));
  });
  document.addEventListener("DOMContentLoaded", function() {
    const textElement = document.getElementById("tips2");
    const textContent = textElement.textContent;
    textElement.textContent = ""; // Clear text content
    
    // Create a span for each character
    for (let i = 0; i < textContent.length; i++) {
      const charSpan = document.createElement("span");
      charSpan.className = "char";
      charSpan.textContent = textContent[i];
      textElement.appendChild(charSpan);
    }
  
    // Animation function for typing effect
    function typingAnimation(chars) {
      chars.forEach((char, index) => {
        setTimeout(() => {
          char.style.opacity = 1; // Show character
        }, 10 * index); // Delay each character's appearance
      });
    }
  
    const charElements = document.querySelectorAll(".char");
    typingAnimation(Array.from(charElements));
  });
  