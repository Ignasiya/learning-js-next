const divElements = Array.from(document.querySelectorAll('div'));

const activeDivs = divElements.filter(element => element.hasAttribute('data-active'));

activeDivs.forEach(element => {
    console.log(element);
});