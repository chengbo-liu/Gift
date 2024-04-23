document.addEventListener("DOMContentLoaded", function() {
    const textElement = document.getElementById("text");
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
  