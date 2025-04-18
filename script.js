function generateTinyUrl() {
    const longUrl = document.getElementById("longUrl").value;
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "";
  
    if (!longUrl.trim()) {
      alert("Please enter a valid URL.");
      return;
    }
  
    fetch(`https://tinyurl.com/api-create.php?url=${encodeURIComponent(longUrl)}`)
      .then(response => response.text())
      .then(tinyUrl => {
        resultDiv.innerHTML = `Tiny URL: <a href="${tinyUrl}" target="_blank">${tinyUrl}</a>`;
      })
      .catch(error => {
        console.error("Error:", error);
        resultDiv.textContent = "Something went wrong. Please try again.";
      });
  }
  