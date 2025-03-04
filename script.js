document.addEventListener("DOMContentLoaded", function() {
    console.log("Website Loaded!");

    const skills = document.querySelectorAll('.skill');
    skills.forEach(skill => {
        skill.addEventListener('mouseenter', () => {
            skill.style.transform = "scale(1.1)";
            skill.style.transition = "0.3s";
        });

        skill.addEventListener('mouseleave', () => {
            skill.style.transform = "scale(1)";
        });
    });
});
