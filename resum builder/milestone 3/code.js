// Selecting elements from the DOM
var nameInput = document.getElementById('name');
var ageInput = document.getElementById('age');
var genderInput = document.getElementsByName('gender');
var educationInput = document.getElementById('education');
var contactInput = document.getElementById('contact');
var emailInput = document.getElementById('email');
var skillsInput = document.getElementById('skills');
var experienceInput = document.getElementById('experience');
var imageInput = document.getElementById('image');
var generateResumeButton = document.getElementById('generateResume');
// Display elements for the resume
var displayName = document.getElementById('displayName');
var displayAge = document.getElementById('displayAge');
var displayGender = document.getElementById('displayGender');
var displayEducation = document.getElementById('displayEducation');
var displayContact = document.getElementById('displayContact');
var displayEmail = document.getElementById('displayEmail');
var displaySkills = document.getElementById('displaySkills');
var displayExperience = document.getElementById('displayExperience');
var displayImage = document.getElementById('displayImage');
// Function to generate the resume
var generateResume = function () {
    var _a;
    var name = nameInput.value.trim();
    var age = ageInput.value.trim();
    var gender = '';
    var education = educationInput.value.trim();
    var contact = contactInput.value.trim();
    var email = emailInput.value.trim();
    var skills = skillsInput.value.trim();
    var experience = experienceInput.value.trim();
    var imageFile = (_a = imageInput.files) === null || _a === void 0 ? void 0 : _a[0];
    // Validation for name (no numbers allowed)
    var nameRegex = /^[a-zA-Z\s]+$/;
    if (!nameRegex.test(name)) {
        alert('Name should not contain numbers or special characters.');
        return;
    }
    // Validation for contact (only digits allowed)
    var contactRegex = /^\d+$/;
    if (!contactRegex.test(contact)) {
        alert('Contact number should only contain digits.');
        return;
    }
    // Loop through the gender radio buttons and find the checked one
    genderInput.forEach(function (input) {
        if (input.checked) {
            gender = input.value === 'm' ? 'Male' : 'Female';
        }
    });
    if (name && age && gender && education && contact && email && skills && experience) {
        displayName.textContent = name;
        displayAge.textContent = age;
        displayGender.textContent = gender;
        displayEducation.textContent = education;
        displayContact.textContent = contact;
        displayEmail.textContent = email;
        displaySkills.textContent = skills;
        displayExperience.textContent = experience;
        if (imageFile) {
            var reader = new FileReader();
            reader.onload = function (e) {
                if (e.target && typeof e.target.result === 'string') {
                    displayImage.src = e.target.result;
                    displayImage.style.display = 'block';
                }
            };
            reader.readAsDataURL(imageFile);
        }
        else {
            displayImage.style.display = 'none';
        }
    }
    else {
        alert('Please fill in all fields before generating your resume.');
    }
};
// Adding event listener to the button
generateResumeButton.addEventListener('click', generateResume);
