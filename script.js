const form = document.getElementById("tripForm");
const list = document.getElementById("tripList");

if(form){
    form.addEventListener("submit", function(e){
        e.preventDefault();

        const destination = document.getElementById("destination").value;
        const date = document.getElementById("date").value;
        const activity = document.getElementById("activity").value;

        const li = document.createElement("li");
        li.className = "list-group-item d-flex justify-content-between";
        li.innerHTML =
        `${destination} - ${date} - ${activity}
        <button class='btn btn-danger btn-sm remove'>Remove</button>`;

        list.appendChild(li);
        form.reset();
    });
}

if(list){
    list.addEventListener("click", function(e){
        if(e.target.classList.contains("remove")){
            e.target.parentElement.remove();
        }
    });
}
window.addEventListener("scroll", function() {
    let navbar = document.querySelector(".navbar");
    navbar.classList.toggle("scrolled", window.scrollY > 50);
});