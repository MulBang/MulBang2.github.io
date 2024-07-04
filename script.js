document.addEventListener("DOMContentLoaded", () => {
  const greeting = document.getElementById('greeting');
  const subGreeting = document.getElementById('subGreeting');
  const resume = document.querySelector('.resume');
  
  // "안녕하세요" 나타나기
  setTimeout(() => {
    greeting.style.opacity = 1;
  }, 500); // 0.5초 후
  
  // "이수빈의 포트폴리오입니다. 환영합니다!" 나타나기
  setTimeout(() => {
    subGreeting.style.opacity = 1;
  }, 1200); // 0.7초 후
  
  // Resume 창 나타나기
  setTimeout(() => {
    resume.style.display = 'block';
  }, 1700); // 1.2초 후
});
