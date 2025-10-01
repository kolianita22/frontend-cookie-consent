

console.log(document.cookie);
document.getElementById("addCookies").onclick = function () {
  let key = prompt("Enter Your Key");
  let value = prompt("Enter Your Value");
  document.cookie = `${encodeURIComponent(key)} =${encodeURIComponent(value)}`;
  alert(`Cookies set:${key}=${value}`);
  console.log(document.cookie);
};

function setCookies(key, value) {
  document.cookie = key + "=" + value;
  updateCookieList();
}


function updateCookieList() {
    const container = document.getElementById('cookieList');
    const cookies = document.cookie.split(';').map(c => c.trim()).filter(c => c);
    container.innerHTML = cookies.length
      ? "<ul>" + cookies.map(c => `<li>${c}</li>`).join('') + "</ul>"
      : "<p>No cookies set yet.</p>";
  }

   
document.getElementById("acceptCookies").onclick = function () {
  setCookies("accepted", 30);
  
  alert("You accepted cookies ✅");
};
document.getElementById("declineCookies").onclick = function () {
  setCookies("declined", 30);

  alert("You declined cookies ❌");
};
// Example code for script.js
document.getElementById('themeDark').addEventListener('click', function() {
    document.body.classList.add('dark');
    document.body.classList.remove('light');
});

document.getElementById('themeLight').addEventListener('click', function() {
    document.body.classList.add('light');
    document.body.classList.remove('dark');
});
