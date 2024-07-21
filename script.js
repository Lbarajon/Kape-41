document.querySelector('#useful-links').addEventListener('click', (event) => {
    event.preventDefault(); // Prevent the default action of the link
    const aboutUsSection = document.querySelector('.about-us');
   
    
    aboutUsSection.classList.toggle('show-about-us');
    
});
