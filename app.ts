const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeContent = document.getElementById('resume-content') as HTMLDivElement;

form.addEventListener('submit', (event) => {
    event.preventDefault(); 
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const address = (document.getElementById('address') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skill') as HTMLInputElement).value;

    // Basic Validation
    if (!name || !email || !phone ||!address || !education || !experience || !skills) {
        alert("Please fill out all fields.");
        return;
    }

    // Generate resume content
    const resumeHTML = `
        <h3>Personal Information</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Address:</strong> ${address}</p>

        
        <h3>Education</h3>
        <p>${education}</p>
        
        <h3>Experience</h3>
        <p>${experience}</p>
        
        <h3>Skills</h3>
        <ul>
            ${skills.split(',').map(skill => `<li>${skill.trim()}</li>`).join('')}
        </ul>
    `;

    // Update resume content
    resumeContent.innerHTML = resumeHTML;
});