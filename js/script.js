var menu_icon = document.getElementById('menu-icon');
var nav_menu_section = document.getElementById('nav-mobile');
var close_icon = document.getElementById('close-icon');

menu_icon.addEventListener('click', function () {
    nav_menu_section.style.display = 'flex';
    close_icon.style.display = 'block';
    menu_icon.style.display = "none"
});

close_icon.addEventListener('click', function () {
    nav_menu_section.style.display = 'none';
    close_icon.style.display = 'none';
    menu_icon.style.display = "block"
})
