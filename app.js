// var form = document.getElementById("resume-form") as HTMLFormElement;
// var generateBtn = document.getElementById("generate-btn") as HTMLButtonElement;
// var resumeOutput = document.getElementById("generatedResume") as HTMLDivElement;
// generateBtn.addEventListener("click", () => {
//     const name = (document.getElementById("name") as HTMLInputElement).value;
//     const email = (document.getElementById("email") as HTMLInputElement).value;
//     const phone = (document.getElementById("phone") as HTMLInputElement).value;
//     const address = (document.getElementById("address") as HTMLInputElement).value;
//     const education = (document.getElementById("education") as HTMLInputElement).value;
//     const skills = (document.getElementById("skills") as HTMLInputElement).value;
//     const experience = (document.getElementById("experience") as HTMLInputElement).value;
//     if (name && email && phone && address && education && skills && experience) {
//         resumeOutput.innerHTML = `
//             <h2>${name}'s Resume</h2>
//             <p><strong>Email:</strong> ${email}</p>
//             <p><strong>Phone:</strong> ${phone}</p>
//             <p><strong>Address:</strong> ${address}</p>
//             <p><strong>Education:</strong> ${education}</p>
//             <p><strong>Skills:</strong> ${skills}</p>
//             <p><strong>Experience:</strong> ${experience}</p>
//         `;
//         resumeOutput.style.border = "1px solid #ddd";
//         resumeOutput.style.padding = "15px";
//         resumeOutput.style.marginTop = "20px";
//     } else {
//         alert("Please fill in all fields before generating the resume.");
//     }
// });
// function generateResume(): void {
//     // Get form values
//     const nameInput = document.getElementById('name') as HTMLInputElement;
//     const emailInput = document.getElementById('email') as HTMLInputElement;
//     const experienceTextarea = document.getElementById('experience') as HTMLTextAreaElement;
//     const skillsTextarea = document.getElementById('skills') as HTMLTextAreaElement;
//     const name = nameInput.value;
//     const email = emailInput.value;
//     const experience = experienceTextarea.value;
//     const skills = skillsTextarea.value;
//     // Create resume content
//     const resumeContent = `
//       Name: ${name}
//       Email: ${email}
//       Experience:
//       ${experience}
//       Skills:
//       ${skills}
//     `;
//     // Create a blob with the resume content
//     const blob = new Blob([resumeContent], { type: 'text/plain' });
//     const url = URL.createObjectURL(blob);
//     // Create a link element and click it to download the file
//     const a = document.createElement('a');
//     a.href = url;
//     a.download = 'resume.txt';
//     a.click();
//     // Clean up
//     URL.revokeObjectURL(url);
//   }
//   // Add event listener for button click
//   document.getElementById('generateResumeButton')?.addEventListener('click', generateResume);
var form = document.getElementById('resume-form');
var resumeContent = document.getElementById('resume-content');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var address = document.getElementById('address').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skill').value;
    // Basic Validation
    if (!name || !email || !phone || !address || !education || !experience || !skills) {
        alert("Please fill out all fields.");
        return;
    }
    // Generate resume content
    var resumeHTML = "\n        <h3>Personal Information</h3>\n        <p><strong>Name:</strong> ".concat(name, "</p>\n        <p><strong>Email:</strong> <a href=\"mailto:").concat(email, "\">").concat(email, "</a></p>\n        <p><strong>Phone:</strong> ").concat(phone, "</p>\n        <p><strong>Address:</strong> ").concat(address, "</p>\n\n        \n        <h3>Education</h3>\n        <p>").concat(education, "</p>\n        \n        <h3>Experience</h3>\n        <p>").concat(experience, "</p>\n        \n        <h3>Skills</h3>\n        <ul>\n            ").concat(skills.split(',').map(function (skill) { return "<li>".concat(skill.trim(), "</li>"); }).join(''), "\n        </ul>\n    ");
    // Update resume content
    resumeContent.innerHTML = resumeHTML;
});
