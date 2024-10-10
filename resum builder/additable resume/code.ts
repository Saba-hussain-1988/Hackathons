// Selecting elements from the DOM

const name_Input = document.getElementById('name') as HTMLInputElement;
const age_Input = document.getElementById('age') as HTMLInputElement;
const gender_Input = document.getElementsByName('gender') as NodeListOf<HTMLInputElement>;
const education_Input = document.getElementById('education') as HTMLTextAreaElement;
const contact_Input = document.getElementById('contact') as HTMLInputElement;
const email_Input = document.getElementById('email') as HTMLInputElement;
const skills_Input = document.getElementById('skills') as HTMLTextAreaElement;
const experience_Input = document.getElementById('experience') as HTMLTextAreaElement;
const image_Input = document.getElementById('image') as HTMLInputElement;
const generate_Resume_Button = document.getElementById('generateResume') as HTMLButtonElement;

// Display elements for the resume

const display_Name = document.getElementById('displayName') as HTMLSpanElement;
const display_Age = document.getElementById('displayAge') as HTMLSpanElement;
const display_Gender = document.getElementById('displayGender') as HTMLSpanElement;
const display_Education = document.getElementById('displayEducation') as HTMLSpanElement;
const display_Contact = document.getElementById('displayContact') as HTMLSpanElement;
const display_Email = document.getElementById('displayEmail') as HTMLSpanElement;
const display_Skills = document.getElementById('displaySkills') as HTMLSpanElement;
const display_Experience = document.getElementById('displayExperience') as HTMLSpanElement; 
const display_Image = document.getElementById('displayImage') as HTMLImageElement;

// Function to generate the resume
const generate_Resume = (): void => {
    const name = name_Input.value.trim();
    const age = age_Input.value.trim();
    let gender = '';
    const education = education_Input.value.trim();
    const contact = contact_Input.value.trim();
    const email = email_Input.value.trim();
    const skills = skills_Input.value.trim();
    const experience = experience_Input.value.trim();
    const imageFile = image_Input.files?.[0];

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
    gender_Input.forEach((input) => {
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
        display_Skills.textContent = skills
        display_Experience.textContent = experience;


        if (imageFile) {
            const reader = new FileReader();
            reader.onload = function (e) {
                if (e.target && typeof e.target.result === 'string') {
                    display_Image.src = e.target.result;
                    display_Image.style.display = 'block';
                }
            };
            reader.readAsDataURL(imageFile);
        } else { 
            display_Image.style.display = 'none';
        }

    } else {
        alert('Please fill in all fields before generating your resume.');
    }
};

// Adding event listener to the button
generate_Resume_Button.addEventListener('click', generate_Resume);


// Function to make resume sections editable and reflect changes immediately
const makeEditable = (element: HTMLElement, inputElement: HTMLInputElement | HTMLTextAreaElement) => {
    element.addEventListener('input', () => {
        inputElement.value = element.textContent?.trim() || '';
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
display_Gender.addEventListener('input', () => {
    const genderValue = display_Gender.textContent?.trim().toLowerCase();
    gender_Input.forEach((input) => {
        if (input.value === genderValue?.charAt(0)) {
            input.checked = true;
        }
    });
});

