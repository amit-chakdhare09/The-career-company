const form = document.getElementById('mentor-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const qualification = document.getElementById('qualification').value;
  const experience = document.getElementById('experience').value;

  const mentorInfo = {
    name,
    qualification,
    experience
  };

  const key = `mentorInfo_${localStorage.length + 1}`;
  localStorage.setItem(key, JSON.stringify(mentorInfo));

  window.location.href = 'mentor-profile.html';
});