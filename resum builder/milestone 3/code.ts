// Selecting elements from the DOM

const nameInput = document.getElementById('name') as HTMLInputElement;
const ageInput = document.getElementById('age') as HTMLInputElement;
const genderInput = document.getElementsByName('gender') as NodeListOf<HTMLInputElement>;
const educationInput = document.getElementById('education') as HTMLTextAreaElement;
const contactInput = document.getElementById('contact') as HTMLInputElement;
const emailInput = document.getElementById('email') as HTMLInputElement;
const skillsInput = document.getElementById('skills') as HTMLTextAreaElement;
const experienceInput = document.getElementById('experience') as HTMLTextAreaElement;
const imageInput = document.getElementById('image') as HTMLInputElement;
const generateResumeButton = document.getElementById('generateResume') as HTMLButtonElement;

// Display elements for the resume

const displayName = document.getElementById('displayName') as HTMLSpanElement;
const displayAge = document.getElementById('displayAge') as HTMLSpanElement;
const displayGender = document.getElementById('displayGender') as HTMLSpanElement;
const displayEducation = document.getElementById('displayEducation') as HTMLSpanElement;
const displayContact = document.getElementById('displayContact') as HTMLSpanElement;
const displayEmail = document.getElementById('displayEmail') as HTMLSpanElement;
const displaySkills = document.getElementById('displaySkills') as HTMLSpanElement;
const displayExperience = document.getElementById('displayExperience') as HTMLSpanElement; 
const displayImage = document.getElementById('displayImage') as HTMLImageElement;

// Function to generate the resume
const generateResume = (): void => {
    const name = nameInput.value.trim();
    const age = ageInput.value.trim();
    let gender = '';
    const education = educationInput.value.trim();
    const contact = contactInput.value.trim();
    const email = emailInput.value.trim();
    const skills = skillsInput.value.trim();
    const experience = experienceInput.value.trim();
    const imageFile = imageInput.files?.[0];

    // Validation for name (no numbers allowed)
    const nameRegex = /^[a-zA-Z\s]+$/;
    if (!nameRegex.test(name)) {
        alert('Name should not contain numbers or special characters.');
        return;
    }

    // Validation for contact (only digits allowed)
    const contactRegex = /^\d+$/;
    if (!contactRegex.test(contact)) {
        alert('Contact number should only contain digits.');
        return;
    }


    // Loop through the gender radio buttons and find the checked one
    genderInput.forEach((input) => {
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
        displaySkills.textContent = skills
        displayExperience.textContent = experience;


        if (imageFile) {
            const reader = new FileReader();
            reader.onload = function (e) {
                if (e.target && typeof e.target.result === 'string') {
                    displayImage.src = e.target.result;
                    displayImage.style.display = 'block';
                }
            };
            reader.readAsDataURL(imageFile);
        } else { 
            displayImage.style.display = 'none';
        }

    } else {
        alert('Please fill in all fields before generating your resume.');
    }
};

// Adding event listener to the button
generateResumeButton.addEventListener('click', generateResume);