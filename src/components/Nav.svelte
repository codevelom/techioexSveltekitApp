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
                        <!-- <li>
                            <a href="faq.html">FAQ</a>
                        </li> -->
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
