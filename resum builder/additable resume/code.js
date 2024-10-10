// Selecting elements from the DOM
var name_Input = document.getElementById('name');
var age_Input = document.getElementById('age');
var gender_Input = document.getElementsByName('gender');
var education_Input = document.getElementById('education');
var contact_Input = document.getElementById('contact');
var email_Input = document.getElementById('email');
var skills_Input = document.getElementById('skills');
var experience_Input = document.getElementById('experience');
var image_Input = document.getElementById('image');
var generate_Resume_Button = document.getElementById('generateResume');
// Display elements for the resume
var display_Name = document.getElementById('displayName');
var display_Age = document.getElementById('displayAge');
var display_Gender = document.getElementById('displayGender');
var display_Education = document.getElementById('displayEducation');
var display_Contact = document.getElementById('displayContact');
var display_Email = document.getElementById('displayEmail');
var display_Skills = document.getElementById('displaySkills');
var display_Experience = document.getElementById('displayExperience');
var display_Image = document.getElementById('displayImage');
// Function to generate the resume
var generate_Resume = function () {
    var _a;
    var name = name_Input.value.trim();
    var age = age_Input.value.trim();
    var gender = '';
    var education = education_Input.value.trim();
    var contact = contact_Input.value.trim();
    var email = email_Input.value.trim();
    var skills = skills_Input.value.trim();
    var experience = experience_Input.value.trim();
    var imageFile = (_a = image_Input.files) === null || _a === void 0 ? void 0 : _a[0];
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
    gender_Input.forEach(function (input) {
        if (input.checked) {
            gender = input.value === 'm' ? 'Male' : 'Female';
        }
    });
    if (name && age && gender && education && contact && email && skills && experience) {
        display_Name.textContent = name;
        display_Age.textContent = age;
        display_Gender.textContent = gender;
        display_Education.textContent = education;
        display_Contact.textContent = contact;
        display_Email.textContent = email;
        display_Skills.textContent = skills;
        display_Experience.textContent = experience;
        if (imageFile) {
            var reader = new FileReader();
            reader.onload = function (e) {
                if (e.target && typeof e.target.result === 'string') {
                    display_Image.src = e.target.result;
                    display_Image.style.display = 'block';
                }
            };
            reader.readAsDataURL(imageFile);
        }
        else {
            display_Image.style.display = 'none';
        }
    }
    else {
        alert('Please fill in all fields before generating your resume.');
    }
};
// Adding event listener to the button
generate_Resume_Button.addEventListener('click', generate_Resume);
// Function to make resume sections editable and reflect changes immediately
var makeEditable = function (element, inputElement) {
    element.addEventListener('input', function () {
        var _a;
        inputElement.value = ((_a = element.textContent) === null || _a === void 0 ? void 0 : _a.trim()) || '';
    });
};
// Make each resume section editable and bind it to the form input
makeEditable(display_Name, name_Input);
makeEditable(display_Age, age_Input);
makeEditable(display_Education, education_Input);
makeEditable(display_Contact, contact_Input);
makeEditable(display_Email, email_Input);
makeEditable(display_Skills, skills_Input);
makeEditable(display_Experience, experience_Input);
// Handle gender changes manually
display_Gender.addEventListener('input', function () {
    var _a;
    var genderValue = (_a = display_Gender.textContent) === null || _a === void 0 ? void 0 : _a.trim().toLowerCase();
    gender_Input.forEach(function (input) {
        if (input.value === (genderValue === null || genderValue === void 0 ? void 0 : genderValue.charAt(0))) {
            input.checked = true;
        }
    });
});
