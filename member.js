function skillsMember() {
    var member = document.getElementById("member");
    var skills = document.getElementById("skills");
    var contact = document.getElementById("contact");
    var about = document.getElementById("about");
    member.style.display = "block";
    skills.style.display = "none";
    contact.style.display = "none";
    about.style.display = "none";
    member.style.animation = "fadeIn 1s";
    member.style.animationFillMode = "forwards";
    member.style.animationDelay = "0.5s";
    member.style.animationIterationCount = "1";
    member.style.animationTimingFunction = "ease-in-out";
}