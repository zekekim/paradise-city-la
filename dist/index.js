//Burger Menu Collapse/Decollapse
const button = document.querySelector('#menu-button'); // Hamburger Icon
const menu = document.querySelector('#menu'); // Menu

button.addEventListener('click', () => {
  menu.classList.toggle('hidden');
});

const callback = function (entries) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            console.log('entry')
            entry.target.classList.add("animate-snapUp");
            console.log(entry.target.classList);
          } else {
            entry.target.classList.remove("animate-snapUp");
          }
    });
}

const observer = new IntersectionObserver(callback);

observer.observe(document.querySelector('#snap-up'));

