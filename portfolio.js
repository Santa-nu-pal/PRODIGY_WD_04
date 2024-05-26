document.addEventListener('DOMContentLoaded', function () {
    const aboutButton = document.getElementById('aboutt');
    const projectbutton=document.getElementById('projectss');
    const contactbutton=document.getElementById('contactt');
    aboutButton.addEventListener('click', function () {

        const aboutSection = document.getElementById('about-section');
        aboutSection.scrollIntoView({ behavior: 'smooth' });
    });

    projectbutton.addEventListener('click',function(){
        const projectsection=document.getElementById('projectsheading');
        projectsection.scrollIntoView({behavior:"smooth"});
    });
    contactbutton.addEventListener('click',function(){
        const contactsection=document.getElementById('contacsheading');
        contactsection.scrollIntoView({behavior:"smooth"});
    });
});