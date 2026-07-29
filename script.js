// =============================
// KAMOHACK STORE
// script.js
// =============================

// رسالة ترحيب
console.log("🚀 Welcome to KAMOHACK STORE");

// البحث في بطاقات التطبيقات
const searchInput = document.querySelector(".search input");
const cards = document.querySelectorAll(".card");

if (searchInput) {
    searchInput.addEventListener("keyup", function () {

        const value = this.value.toLowerCase();

        cards.forEach(card => {

            const text = card.innerText.toLowerCase();

            if (text.includes(value)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        });

    });
}

// تأثير عند الضغط على زر التحميل
document.querySelectorAll(".card button").forEach(button => {

    button.addEventListener("click", () => {

        alert("سيتم إضافة روابط التحميل قريبًا 🚀");

    });

});
