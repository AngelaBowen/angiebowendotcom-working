document.addEventListener('DOMContentLoaded', function() {
  const themeToggle = document.querySelector('.theme-toggle');
  const themeLink = document.getElementById('theme-link');
  
  // Check for saved theme preference or default to 'light'
  const currentTheme = localStorage.getItem('theme') || 'light';
  themeLink.setAttribute('href', currentTheme === 'light' ? '/css/light.css' : '/css/dark.css');
  document.documentElement.setAttribute('data-theme', currentTheme);
  
  themeToggle.addEventListener('click', function() {
    const current = localStorage.getItem('theme') || 'light';
    const newTheme = current === 'light' ? 'dark' : 'light';
    
    themeLink.setAttribute('href', newTheme === 'light' ? '/css/light.css' : '/css/dark.css');
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  });
});