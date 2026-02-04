function showDropdown() {
    document.getElementById('bg-dropdown').classList.add("visible");
    document.getElementById('bg-dropdown').classList.add("opacity-100");
    document.getElementById('searchbar-dropdown').classList.add("visible");
    document.getElementById('searchbar-dropdown').classList.add("opacity-100");
}

function closeDropdown(){
    document.getElementById('bg-dropdown').classList.remove("visible");
    document.getElementById('bg-dropdown').classList.remove("opacity-100");
    document.getElementById('searchbar-dropdown').classList.remove("visible");
    document.getElementById('searchbar-dropdown').classList.remove("opacity-100");
}

function smallNav(){
    document.getElementsByTagName('header')[0].classList.toggle("xl:w-18!");
    document.getElementById('logo').classList.toggle("xl:hidden");
    const x = document.getElementsByTagName("header");
    const y = x[0].getElementsByTagName("span");
    
     for (let i = 0; i < y.length; i++) {
          y[i].classList.toggle("xl:hidden");
     }
}

function mobileNav(){
    document.getElementsByTagName('header')[0].classList.toggle("-ml-70");
    document.getElementById('bg-nav').classList.toggle("visible");
    document.getElementById('bg-nav').classList.toggle("opacity-100");
}