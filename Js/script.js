// Dropdown functionality
const dropdownInput = document.getElementById('educationLevel');
const dropdownOptions = document.querySelector('.dropdown-options');

// Toggle dropdown visibility
dropdownInput.addEventListener('click', () => {
    if (dropdownOptions.style.display === 'block') {
        dropdownOptions.style.display = 'none';
    } else {
        dropdownOptions.style.display = 'block';
    }
});

// Select an option and populate the input
function selectOption(value) {
    dropdownInput.value = value;
    dropdownOptions.style.display = 'none';
}

// Close the dropdown when clicking outside
document.addEventListener('click', (event) => {
    if (!dropdownInput.contains(event.target) && !dropdownOptions.contains(event.target)) {
        dropdownOptions.style.display = 'none';
    }
});

// Form submission handling
document.getElementById('studentForm').addEventListener('submit', (event) => {
    event.preventDefault();

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const contact = document.getElementById('contact').value;
    const study = document.getElementById('study').value;
    const educationLevel = document.getElementById('educationLevel').value;

    if (!educationLevel) {
        alert("Please select an education level.");
        return;
    }

    const output = `
        <h3>Submitted Information:</h3>
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Contact:</strong> ${contact}</p>
        <p><strong>Current/Recent Study:</strong> ${study}</p>
        <p><strong>Education Level:</strong> ${educationLevel}</p>
    `;

    document.getElementById('output').innerHTML = output;
});
