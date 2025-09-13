const navLinks = document.querySelectorAll(".sidebar .nav-link");

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    // hapus active dari semua link
    navLinks.forEach(l => l.classList.remove("active"));
    // tambahkan active ke link yang diklik
    link.classList.add("active");
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const chatItems = document.querySelectorAll(".chat-item");

  chatItems.forEach(item => {
    item.addEventListener("click", function() {
      chatItems.forEach(el => el.classList.remove("active"));
      this.classList.add("active");
    });
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const input = document.querySelector(".chat-footer input");
  const button = document.querySelector(".chat-footer button");
  const chatBody = document.querySelector(".chat-body");

  button.addEventListener("click", () => {
    if (input.value.trim() !== "") {
      const div = document.createElement("div");
      div.className = "message-row d-flex justify-content-end mb-3";
      div.innerHTML = `<div class="message p-2 bg-light rounded">${input.value}</div>`;
      chatBody.appendChild(div);
      chatBody.scrollTop = chatBody.scrollHeight;
      input.value = "";
    }
  });
});

