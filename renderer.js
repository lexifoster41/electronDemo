let formData = {}; // Object to store form data

// Function to render the form view
function renderForm() {
    // Accessing the 'app' div from the HTML
    const app = document.getElementById('app');

    // Setting the inner HTML of the 'app' div
    app.innerHTML = `
        <h1>Welcome to the Electron App!</h1>
        <form id="userForm">
            <label for="firstName">First Name:</label>
            <input type="text" id="firstName" name="firstName" required><br><br>
            <label for="lastName">Last Name:</label>
            <input type="text" id="lastName" name="lastName" required><br><br>
            <label for="birthdate">Birthdate:</label>
            <input type="date" id="birthdate" name="birthdate" required><br><br>
            <input type="submit" value="Submit">
        </form>
    `;

    attachFormSubmitListener();
}

function attachFormSubmitListener() {
    const form = document.getElementById('userForm');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        // Capture form data
        formData = {
            firstName: document.getElementById('firstName').value,
            lastName: document.getElementById('lastName').value,
            birthdate: document.getElementById('birthdate').value
        };
        renderSuccessMessage();
    });
}

// Function to render the success message view
function renderSuccessMessage() {
    // Also accesses the 'app' div and updates its inner HTML
    const app = document.getElementById('app');
    app.innerHTML = `
        <div class="success-message">
            <h1 style="color: green;">Submission Successful! 🎉</h1>
            <p style="font-size: 18px;">Your information has been received.</p>
            <div class="profile-page">
                <h2>Profile Page</h2>
                <p><b>First Name:</b> ${formData.firstName}</p>
                <p><b>Last Name:</b> ${formData.lastName}</p>
                <p><b>Birthdate:</b> ${formData.birthdate}</p>
            </div>
            <button id="goBackButton" style="background-color: blue; color: white; padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer; font-size: 16px;">Go Back</button>
        </div>
    `;
    styleSuccessMessage();
    document.getElementById('goBackButton').addEventListener('click', renderForm);
}

// Function to add styles to the success message
function styleSuccessMessage() {
    const successMessageDiv = document.querySelector('.success-message');
    successMessageDiv.style.textAlign = 'center';
    successMessageDiv.style.padding = '50px';
    successMessageDiv.style.borderRadius = '15px';
    successMessageDiv.style.backgroundColor = '#f0f8ff';
    successMessageDiv.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
}

// This event fires when the initial HTML document has been completely loaded and parsed, but before stylesheets,
// images, and subframes are loaded. When this event occurs, the renderForm() function is called, which sets up the
// initial view of the application.
document.addEventListener('DOMContentLoaded', renderForm);
