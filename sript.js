// Simple Form Alert & Handling
document.getElementById('inquiryForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const course = document.getElementById('course').value;

  if (name && phone) {
    alert(`Thank you, ${name}! Your inquiry for ${course || 'a course'} has been submitted. We will contact you soon.`);
    this.reset();
  }
});