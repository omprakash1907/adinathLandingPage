let header = document.getElementById("header");

let element = `
<div class="container d-flex align-items-center">
    <a href="index.html" class="logo me-auto">
    <img src="assets/img/logos/Trust Name (Website).webp" alt=""
            class="img-fluid" style="padding: 5px;">
    </a>

    <nav id="navbar" class="navbar order-last order-lg-0">
        <ul class="d-none d-lg-flex">
            <li><a class="nav-link scrollto" href="/">HOME</a></li>
            <li><a class="nav-link scrollto" href="/#about">ABOUT</a></li>
            <li><a class="nav-link scrollto" href="/#services">SERVICES</a></li>
            <li><a class="nav-link scrollto" href="/#gallery">GALLERY</a></li>
            <li><a class="nav-link scrollto" href="/document.html">DOCUMENT</a></li>
            <li><a class="nav-link scrollto" href="/doctor.html">DOCTORS</a></li>
            <li><a class="nav-link scrollto" href="/#contact">CONTACTS</a></li>
        </ul>
        <i class="bi bi-list mobile-nav-toggle d-lg-none" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"></i>
    </nav><!-- .navbar -->

    <a href="https://formbuilder.ccavenue.com/live/icici-bank/shree-aadinath-yuva-charitable-trust" target="_blank" class="appointment-btn scrollto d-none d-lg-block" 
       ><span class="d-none d-md-inline">Make</span> Donation</a>
</div>

<!-- offcanvas menu -->
<div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
    <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas"
            aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
                <a class="nav-link" href="/">HOME</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/#about">ABOUT</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/#services">SERVICES</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/#departments">DEPARTMENTS</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/document.html">DOCUMENT</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/doctor.html">DOCTORS</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/#contact">CONTACTS</a>
            </li>
        </ul>
        <button type="button" class="btn appointment-btn w-100" data-bs-toggle="modal"
            data-bs-target="#donation">Make Donation</button>
    </div>
</div>
<!-- offcanvas menu -->



`;

header.innerHTML = element;
