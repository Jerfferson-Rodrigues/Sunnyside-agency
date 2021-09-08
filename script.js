function menuToggle() {
    const ToggleMenu = document.querySelector('.toggleMenu');
    const navigation = document.querySelector('.nav-menu');
    ToggleMenu.classList.toggle('active');
    navigation.classList.toggle('active');
}