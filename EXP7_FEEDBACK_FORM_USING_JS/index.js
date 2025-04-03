// Image preview
let uploadedImage = '';
document.getElementById('image').addEventListener('change', function (e) {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            uploadedImage = e.target.result;
            document.getElementById('imagePreview').src = uploadedImage;
        }
        reader.readAsDataURL(file);
    }
});

// Convert rating number to stars
function getStarRating(rating) {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating);
}

// Real-time validation
document.getElementById('name').addEventListener('input', function () {
    document.getElementById('nameError').textContent = this.value.length < 3 ? "Name must be at least 3 characters" : "";
});

document.getElementById('email').addEventListener('input', function () {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    document.getElementById('emailError').textContent = emailPattern.test(this.value) ? "" : "Enter a valid email";
});

// Character Counter
document.getElementById('feedback').addEventListener('input', function () {
    document.getElementById('charCount').textContent = `${this.value.length}/500 characters`;
});

// Progress Bar for Rating
document.querySelectorAll('input[name="rating"]').forEach(radio => {
    radio.addEventListener('change', function () {
        const rating = parseInt(this.value);
        document.getElementById('progress').style.width = `${(rating / 5) * 100}%`;
    });
});

// Preview feedback
function previewFeedback() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const courses = [...document.getElementById('course').selectedOptions].map(o => o.value).join(", ");
    const ratingValue = document.querySelector('input[name="rating"]:checked')?.value || '0';
    const rating = getStarRating(parseInt(ratingValue));
    const feedback = document.getElementById('feedback').value;

    document.getElementById('previewContent').innerHTML = `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Course(s):</strong> ${courses}</p>
        <p><strong>Rating:</strong> <span class="star-rating-display">${rating}</span></p>
        <p><strong>Feedback:</strong></p>
        <p>${feedback}</p>
        ${uploadedImage ? `<div class="preview-image-container"><img src="${uploadedImage}" class="preview-image"></div>` : ''}
    `;
    document.getElementById('previewSection').classList.add('show');
}

// Form submission
document.getElementById('feedbackForm').addEventListener('submit', function (e) {
    e.preventDefault();
    document.getElementById('thankYouMessage').style.display = "block";
    this.reset();
    document.getElementById('imagePreview').src = '';
    uploadedImage = '';
    document.getElementById('previewSection').classList.remove('show');
});
