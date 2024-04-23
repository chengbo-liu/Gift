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
  
    // Animation function for each character
    function fallAnimation(chars) {
      chars.forEach((char, index) => {
        char.style.top = -50 - (index * 30) + "px"; // Initial position
        let topPosition = parseInt(char.style.top);
        const fallInterval = setInterval(() => {
          topPosition += 100; // Speed of falling
          char.style.top = topPosition + "px";
  
          // If character reaches the center of the window
          if (topPosition >= window.innerHeight / 2) {
            // Stop the animation
            clearInterval(fallInterval);
            // Arrange characters horizontally
            char.style.position = "static";
            char.style.display = "inline-block";
            // Calculate left position for each character
            const textWidth = textElement.offsetWidth;
            const charWidth = char.offsetWidth;
            const leftPosition = (textWidth - (chars.length * charWidth)) / 2 + (index * charWidth);
            char.style.left = leftPosition + "px";
          }
        }, 10 * index); // Delay each character's animation
      });
    }
  
    const charElements = document.querySelectorAll(".char");
    fallAnimation(Array.from(charElements));
  });
  