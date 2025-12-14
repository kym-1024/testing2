// A. Change Theme (Dark Mode)
document.getElementById("themeBtn").onclick = function () {
    document.body.classList.toggle("dark-mode");
};

// B. Edit Job Title
document.getElementById("editJobBtn").onclick = function () {
    let newTitle = prompt("Enter your new job title:");
    if (newTitle && newTitle.trim() !== "") {
        document.getElementById("jobTitle").textContent = newTitle;
    }
};

// C. Show / Hide Skills
const toggleSkillsBtn = document.getElementById("toggleSkillsBtn");
const skillsSection = document.getElementById("skillsSection");

toggleSkillsBtn.onclick = function () {
    if (skillsSection.style.display === "none") {
        skillsSection.style.display = "block";
        toggleSkillsBtn.textContent = "Hide Skills";
    } else {
        skillsSection.style.display = "none";
        toggleSkillsBtn.textContent = "Show Skills";
    }
};

// D. Live Character Counter
const msgBox = document.getElementById("msgBox");
const counter = document.getElementById("counter");

msgBox.onkeyup = function () {
    counter.textContent = 200 - msgBox.value.length;
};

// E. Form Validation
function validateForm() {
    const name = document.getElementById("nameField").value.trim();
    const email = document.getElementById("emailField").value.trim();

    if (name === "" || email === "") {
        alert("Please fill in your Name and Email.");
        return false;
    }

    alert("Message sent successfully!");
    return true;
}

// F. Display Today’s Date
document.getElementById("dateDisplay").textContent =
    new Date().toDateString();

// G. Extra Feature – Profile Image Switcher
const imgBtn = document.getElementById("imgBtn");
const profileImg = document.querySelector(".profile-img");

imgBtn.onclick = function () {
    if (profileImg.src.includes("IMG_0003_JC_2X2.jpg")) {
        profileImg.src = "logo2.png";
    } else {
        profileImg.src = "IMG_0003_JC_2X2.jpg";
    }
};
