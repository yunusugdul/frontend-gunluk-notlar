
let submitBtnw = document.querySelector(".submitBtn");
let list = document.querySelector(".list");

submitBtnw.addEventListener("click", () => {
    li = document.createElement("li");
    li.textContent = document.querySelector(".text-input").value.trim();
    list.append(li);

});

