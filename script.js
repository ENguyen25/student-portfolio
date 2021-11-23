const freelance = document.querySelector('.freelance');
const abercrombie = document.querySelector('.abercrombie');
const projectLaunch = document.querySelector('.project');
const freelanceContent = document.querySelector('.fl-content');
const abercrombieContent = document.querySelector('.af-content');
const projectContent = document.querySelector('.pr-content');

freelance.addEventListener('click', function() {
    freelanceContent.classList.toggle('hidden');
})

abercrombie.addEventListener('click', function() {
    abercrombieContent.classList.toggle('hidden');
})

projectLaunch.addEventListener('click', function() {
    projectContent.classList.toggle('hidden');
})
