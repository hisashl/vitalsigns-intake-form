 
const form = document.getElementById('patient-form');
 
form.addEventListener('submit', async (event) => {
    
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    try {
        const response = await fetch('/api/register-patient', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data) // Convert JS object to JSON string
        });
 
        const result = await response.json();
        alert(result.message);   
    } catch (error) {
        console.error('Error submitting form:', error);
        alert('An error occurred while submitting the form. Please try again.');
    }
});
