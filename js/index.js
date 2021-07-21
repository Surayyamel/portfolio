const coll = document.querySelectorAll(".collapse");

// loop over coll (so we can collapse more than one thing if we want)
// add event listener to current index of coll
// on click we toggle the 'active' class
// create a variable for the content (next sibling)
// if content display: block set it to none else set it to block

for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener('click', () => {
        coll[i].classList.toggle('active');
        const content = coll[i].nextElementSibling;
        let contentDisplayStyle = window.getComputedStyle(content).display;
        if (contentDisplayStyle === 'block') {
            content.style.display = 'none';
        } else {
            content.style.display = 'block';
        }
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }; 
    });
};


// Appear on scroll w/ Intersection Observer

const faders = document.querySelectorAll('.fade-in');
const sliders = document.querySelectorAll('.slide-in');

let target = document.querySelectorAll('section');


const options = {
    root: null,
    rootMargin: '0px',
    threshold: .3
}
    
const handleIntersect = (entries, observer) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }
    });
}

const appearOnScroll = new IntersectionObserver(handleIntersect, options);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
   
});

sliders.forEach(slider => {
    appearOnScroll.observe(slider)
});