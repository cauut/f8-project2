var listNav = document.querySelectorAll("li");
listNav.forEach(function (li) {
    li.onclick = function () {
        document.querySelector(".active").classList.remove("active");
        this.classList.add("active");
    };
});
