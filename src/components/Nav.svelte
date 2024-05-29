<!-- Header -->
<script lang="ts">
  import { onNavigate } from "$app/navigation";

    onNavigate( (navigation) => {
        let element : HTMLElement = document.getElementById('navWrapper') ?? null;
        element.classList.remove('active');
    });
</script>
<header class="header-area">

    <div class="custom-container">
        <div class="custom-row align-items-center justify-content-between">
            <div class="header-left d-flex align-items-center">
                <a href="/" class="logo">
                    <img src="./logo.png" alt="techioex technologies logo" />
                </a>

                <div class="header-left-right">
                    <a href="contact-us" class="theme-btn">Contact Us</a>
                    <span class="menu-bar">
                        <i class="las la-bars"></i>
                    </span>
                </div>
                <nav class="navbar-wrapper" id="navWrapper">
                    <span class="close-menu-bar">
                        <i class="las la-times"></i>
                    </span>
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="about-us">About Us</a>
                        </li>
                        <li>
                            <a href="contact-us">Contact Us</a>
                        </li>
                        <li class="mega-menu-item">
                            <a href="#">Our Products</a>
                            <span class="dropdown-menu-item-icon">
                                <i class="las la-angle-down"></i>
                            </span>
                            <div class="mega-menu mega-menu-portfolio">
                                <div class="mega-menu-inner">
                                    <div class="custom-container d-flex">
                                        <div class="left">
                                            <div
                                                class="mega-menu-link-wrap d-flex align-items-start justify-content-between">
                                                <div class="mega-menu-portfolio-card">
                                                    <!-- <div class="img-box">
                                                        <img src="./imgs/background-check-application.png"
                                                            alt="Portfolio" />
                                                    </div> -->
                                                    <div class="content-box">
                                                        <h3><a href="portfolio-details.html">VeriFast</a></h3>
                                                        <p>
                                                            VeriFast is a streamlined service for businesses to receive and manage 
                                                            background check documents efficiently and securely.
                                                        </p>
                                                    </div>
                                                </div>
                                                <!-- <div class="mega-menu-portfolio-card">
                                                    <div class="img-box">
                                                        <img src="./imgs/portfolio-mega-menu-2.jpg"
                                                            alt="Portfolio" />
                                                    </div>
                                                    <div class="content-box">
                                                        <h3><a href="#">App Development</a></h3>
                                                        <p>The mobile application has <br>significantly
                                                            improved.</p>
                                                    </div>
                                                </div> -->
                                            </div>

                                            <div
                                                class="mega-meu-footer d-flex align-items-center justify-content-between w-full">
                                                <ul class="mega-menu-social d-flex align-items-center">
                                                    <li><a href="https://facebook.com/techioex"><i class="iconoir-facebook"></i></a></li>
                                                    <li><a href="#"><i class="iconoir-twitter"></i></a></li>
                                                    <li><a href="https://instagram.com/techioex"><i class="iconoir-instagram"></i></a></li>
                                                    <li><a href="#"><i class="iconoir-linkedin"></i></a></li>
                                                </ul>

                                                <!-- <p>
                                                    <a href="portfolio.html">View Portfolio <i
                                                            class="iconoir-arrow-up-right"></i></a>
                                                </p> -->
                                            </div>
                                        </div>
                                        <div class="right">
                                            <div class="mega-menu-ads">
                                                <img src="./imgs/support-icon.svg" class="w-25" alt="iPad" />
                                                <h2>Request Demo</h2>
                                                <p>
                                                    Reachout to us via <i class="li li-phone"></i> +2348119476898
                                                </p>
                                                <p>- OR -</p>
                                                <a href="contact-us">Send an Email</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>
            <div class="header-right">
                <div class="header-contact-info d-flex align-items-center">
                    <div class="phone-number">
                        <a href="tel:+234-903-536-3231">
                            Call Us 
                            <i class="iconoir-arrow-up-right"></i>
                        </a>
                        +234-903-536-3231
                    </div>
                    <a href="contact-us" class="theme-btn">Contact Us</a>
                </div>
            </div>
        </div>
    </div>

</header>
