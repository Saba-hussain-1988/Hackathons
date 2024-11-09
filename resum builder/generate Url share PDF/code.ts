// Selecting elements from the DOM

const NameInput = document.getElementById('name') as HTMLInputElement;
const AgeInput = document.getElementById('age') as HTMLInputElement;
const GenderInput = document.getElementsByName('gender') as NodeListOf<HTMLInputElement>;
const EducationInput = document.getElementById('education') as HTMLTextAreaElement;
const ContactInput = document.getElementById('contact') as HTMLInputElement;
const EmailInput = document.getElementById('email') as HTMLInputElement;
const SkillsInput = document.getElementById('skills') as HTMLTextAreaElement;
const ExperienceInput = document.getElementById('experience') as HTMLTextAreaElement;
const ImageInput = document.getElementById('image') as HTMLInputElement;
const GenerateResume_Button = document.getElementById('generateResume') as HTMLButtonElement;

// Display elements for the resume

const DisplayName = document.getElementById('displayName') as HTMLSpanElement;
const DisplayAge = document.getElementById('displayAge') as HTMLSpanElement;
const DisplayGender = document.getElementById('displayGender') as HTMLSpanElement;
const DisplayEducation = document.getElementById('displayEducation') as HTMLSpanElement;
const DisplayContact = document.getElementById('displayContact') as HTMLSpanElement;
const DisplayEmail = document.getElementById('displayEmail') as HTMLSpanElement;
const DisplaySkills = document.getElementById('displaySkills') as HTMLSpanElement;
const DisplayExperience = document.getElementById('displayExperience') as HTMLSpanElement; 
const DisplayImage = document.getElementById('displayImage') as HTMLImageElement;

// Function to generate the resume
const GenerateResume = (): void => {
    const name = NameInput.value.trim();
    const age = AgeInput.value.trim();
    let gender = '';
    const education = EducationInput.value.trim();
    const contact = ContactInput.value.trim();
    const email = EmailInput.value.trim();
    const skills = SkillsInput.value.trim();
    const experience = ExperienceInput.value.trim();
    const imageFile = ImageInput.files?.[0];

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
    GenderInput.forEach((input) => {
        if (input.checked) {
            gender = input.value === 'm' ? 'Male' : 'Female';
        }
    });

    if (name && age && gender && education && contact && email && skills && experience) {
        DisplayName.textContent = name;
        DisplayAge.textContent = age;
        DisplayGender.textContent = gender;
        DisplayEducation.textContent = education;
        DisplayContact.textContent = contact;
        DisplayEmail.textContent = email;
        DisplaySkills.textContent = skills
        DisplayExperience.textContent = experience;


        if (imageFile) {
            const reader = new FileReader();
            reader.onload = function (e) {
                if (e.target && typeof e.target.result === 'string') {
                    DisplayImage.src = e.target.result;
                    DisplayImage.style.display = 'block';
                }
            };
            reader.readAsDataURL(imageFile);
        } else { 
            DisplayImage.style.display = 'none';
        }

    } else {
        alert('Please fill in all fields before generating your resume.');
    }
};

// Adding event listener to the button
GenerateResume_Button.addEventListener('click', GenerateResume);


// Function to make resume sections editable and reflect changes immediately
const makeEditable = (element: HTMLElement, inputElement: HTMLInputElement | HTMLTextAreaElement) => {
    element.addEventListener('input', () => {
        inputElement.value = element.textContent?.trim() || '';
    });
};

// Make each resume section editable and bind it to the form input
makeEditable(DisplayName, NameInput);
makeEditable(DisplayAge, AgeInput);
makeEditable(DisplayEducation, EducationInput);
makeEditable(DisplayContact, ContactInput);
makeEditable(DisplayEmail, EmailInput);
makeEditable(DisplaySkills, SkillsInput);
makeEditable(DisplayExperience, ExperienceInput);

// Handle gender changes manually
DisplayGender.addEventListener('input', () => {
    const genderValue = DisplayGender.textContent?.trim().toLowerCase();
    GenderInput.forEach((input) => {
        if (input.value === genderValue?.charAt(0)) {
            input.checked = true;
        }
    });
});


// generate url by using user name input
const generateUniqueURL = (username: string): string => {
    return `https://${username}.vercel.app/resume`;
};

const generateResumeLink = (): void => {
    const name = NameInput.value.trim();
    const username = name.toLowerCase().replace(/\s+/g, '');  // Create username from name
    const uniqueURL = generateUniqueURL(username);

    // Display the unique URL
    const resumeLink = document.createElement('a');
    resumeLink.href = uniqueURL;
    resumeLink.textContent = 'Click here to view your resume';
    resumeLink.target = '_blank';
    document.body.appendChild(resumeLink);  // Append the link somewhere on the page

    // Create a button to copy the link to clipboard
    const copyLinkButton = document.createElement('button');
    copyLinkButton.textContent = 'Copy Link';
    copyLinkButton.addEventListener('click', () => {
        navigator.clipboard.writeText(uniqueURL).then(() => {
            alert('Resume link copied to clipboard!');
        }).catch(err => {
            console.error('Failed to copy text: ', err);
        });
    });

    document.body.appendChild(copyLinkButton); // Copy button ko body mein add karna
};

// Function to download the resume as a PDF
const downloadResumeAsPDF = (): void => {
    const resumeElement = document.getElementById('resumeOutput') as HTMLElement; // Resume section ko select karna

    // html2pdf.js ka istemal karke PDF generate karna
    const options = {
        margin: 0.5,
        filename: `${DisplayName.textContent}_resume.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    html2pdf().from(resumeElement).set(options).save(); // PDF generate aur download karna
};

// Create and append the "Download Resume as PDF" button
const downloadPdfButton = document.createElement('button');
downloadPdfButton.textContent = 'Download Resume as PDF';
downloadPdfButton.addEventListener('click', downloadResumeAsPDF);
document.body.appendChild(downloadPdfButton); // PDF download button ko body mein add karna

// Ensure the shareable link is generated when the resume is generated
GenerateResume_Button.addEventListener('click', generateAndDisplayShareableLink);