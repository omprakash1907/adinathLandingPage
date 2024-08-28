let header = document.getElementById("header");

let element = `
<div class="container d-flex align-items-center justify-content-between mx-auto px-3 px-lg-1">
    <!-- Desktop Logo -->
    <a href="index.html" class="logo logo-desktop d-none d-lg-block">
        <img src="assets/img/logos/Trust Name (Website).webp" alt="Trust Name" class="w-100" style="padding: 5px;">
    </a>

    <!-- Mobile Logo -->
    <a href="index.html" class="logo logo-mobile d-lg-none w-100">
        <div class="w-100 text-center">
            <img src="assets/img/logos/Trust Logo.png" alt="Trust Logo" class="img-fluid logo-img-mobile" style="padding: 5px;">
        </div>
        <img src="assets/img/logos/Trust Name.webp" alt="Trust Name" class=" logo-name-mobile" style="padding: 5px;">
    </a>

    <!-- Navigation Menu -->
    <nav id="navbar" class="navbar order-last order-lg-0">
        <ul class="d-none d-lg-flex">
            <li><a class="nav-link scrollto" href="/">HOME</a></li>
            <li><a class="nav-link scrollto" href="/#about">ABOUT</a></li>
            <li><a class="nav-link scrollto" href="/#services">SERVICES</a></li>
            <li><a class="nav-link scrollto" href="/#gallery">GALLERY</a></li>
            <li><a class="nav-link scrollto" href="/document.html">DOCUMENT</a></li>
            <li><a class="nav-link scrollto" href="/#contact">CONTACTS</a></li>
        </ul>
        <i class="bi bi-list mobile-nav-toggle d-lg-none " data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar"></i>
    </nav><!-- .navbar -->

    <!-- Donation Button -->
    <a href="https://formbuilder.ccavenue.com/live/icici-bank/shree-aadinath-yuva-charitable-trust" target="_blank" class="appointment-btn bg-theme-secondary text-white scrollto d-none d-lg-block">
        <span class="d-none d-md-inline">Make</span> Donation
    </a>
</div>


<!-- Offcanvas Menu -->
<div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
    <div class="offcanvas-header">
        <h5 class="offcanvas-title text-theme" id="offcanvasNavbarLabel">Menu</h5>
        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 text-theme-secondary">
            <li class="nav-item"><a class="nav-link" href="/">HOME</a></li>
            <li class="nav-item"><a class="nav-link" href="/#about">ABOUT</a></li>
            <li class="nav-item"><a class="nav-link" href="/#services">SERVICES</a></li>
            <li class="nav-item"><a class="nav-link" href="/#departments">DEPARTMENTS</a></li>
            <li class="nav-item"><a class="nav-link" href="/document.html">DOCUMENT</a></li>
            <li class="nav-item"><a class="nav-link" href="/doctor.html">DOCTORS</a></li>
            <li class="nav-item"><a class="nav-link" href="/#contact">CONTACTS</a></li>
        </ul>
        <button type="button" class="btn bg-theme-secondary text-white w-100 " data-bs-toggle="modal" data-bs-target="#donation">Make Donation</button>
    </div>
</div>

<!-- offcanvas menu -->



`;

header.innerHTML = element;
