 <script lang="ts">
    import { emailFormatChecker } from "$lib/emailFormatChecker";
    let subscriberEmail = '';
    let error = '';
    let successMessage = '';
    function handleSubscribe(){
        if(subscriberEmail == ""){
            error = 'Enter a valid email';
            return;
        }
        if(emailFormatChecker(subscriberEmail) == false){
            error = 'Enter a valid email';
            return;
        }

        successMessage = "Thanks for subscribing!";
        subscriberEmail = '';
    }
 </script>
 <!-- Footer -->
 <footer class="footer-area mt-5">
    <img src="./imgs/bg-shape-4.svg" alt="Shape" class="animation-slide-right bg-shape" />
    <div class="footer-top">
        <div class="custom-container">
            <div class="custom-row align-items-end justify-content-between">
                <div class="left-content">
                    <a href="/" class="logo">
                        <img src="./logo-footer.png" alt="Logo" class="" style="width: 200px;"/>
                    </a>
                    <p>We provide the expertise and support to <br>
                        propel your business forward.</p>
                    <form on:submit|preventDefault={handleSubscribe} method="POST" class="subscribe-form">
                        <label for="" class="text-white mb-2">Subscribe to Newsletter</label>
                        <div class="subscribe-box d-flex">
                            <input type="email" id="email" name="email" placeholder="Enter email"  bind:value="{subscriberEmail}"/>
                            <button id="submit2" class="theme-btn">Get Started</button>
                            {#if successMessage !==''}
                                <span class="text-success">
                                    {successMessage}
                                </span>
                            {:else if error !==''}
                                <span class="text-danger">
                                    {error}
                                </span>
                            {/if}
                        </div>
                        <!-- Alert Message -->  
                        <div class="input-row">
                            <div class="input-group alert-notification">
                                <div id="alert-message-subscribe" class="alert-msg">
                                </div>
                            </div>
                        </div>
                    </form>
                    <div class="footer-clients d-flex align-items-center">
                        <div class="footer-client-img">
                            <a href="https://www.youtube.com/@techioex?sub_confirmation=1">
                                <img src="./imgs/youtube.svg" alt="Youtube" />
                            </a>
                        </div>
                        <!-- <div class="footer-client-img">
                            <img src="./imgs/webflow.svg" alt="webflow" />
                        </div>
                        <div class="footer-client-img">
                            <img src="./imgs/upwork.svg" alt="upwork" />
                        </div> -->
                        <div class="footer-client-img">
                            <!-- <img src="./imgs/shopify.svg" alt="shopify" /> -->
                        </div>
                    </div>
                </div>

                <div class="right-content">
                    <div class="right-content-inner">
                        <h2>Let’s get started on something great</h2>
                        <p>Our team of IT experts looks forward to meeting with you <br>
                            and providing valuable insights and solutions tailored to your business.</p>
                        <a href="contact-us" class="theme-btn">Book an appointment now</a>

                        <div class="footer-experience d-flex align-items-center">

                            <div class="footer-experience-item">
                                <h1>Instant <span></span></h1>
                                <p>Response Time</p>
                            </div>
                            <div class="footer-experience-item">
                                <h1>99.9%</h1>
                                <p>Client Satisfaction</p>
                            </div>
                            <!-- <div class="footer-experience-item">
                                <h1>8+ <span>Years</span></h1>
                                <p>Experience</p>
                            </div> -->

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="footer-bottom">
        <div class="custom-container">
            <div class="custom-row">
                <div class="footer-all-links-wrap justify-content-between d-flex">
                    <div class="footer-links">
                        <h3>Services</h3>
                        <ul>
                            <li><a href="javascript:void(0);">IT Support</a></li>
                            <li><a href="javascript:void(0);">Web Design</a></li>
                            <li><a href="javascript:void(0);">Mobile Development</a></li>
                            <li><a href="javascript:void(0);">Verification Software </a></li> <!--<span class="new">New</span>-->
                            <li><a href="javascript:void(0);">E-Commerce</a></li>
                            <li><a href="javascript:void(0);">CRM Solutions</a></li>
                        </ul>
                    </div>
                    <div class="footer-links">
                        <h3>Company</h3>
                        <ul>
                            <li><a href="#">Blog</a></li>
                            <li><a href="about-us">About Us</a></li>
                            <li><a href="#">Partners</a></li>
                            <!-- <li><a href="#">Careers</a></li> -->
                            <!-- <li><a href="#">Events</a></li> -->
                            <!-- <li><a href="#">Team</a></li> -->
                        </ul>
                    </div>
                    <div class="footer-links">
                        <h3>Other Services</h3>
                        <ul>
                            <li><a href="#">SEO Optimization</a></li>
                            <li><a href="#">Trainings</a></li>
                            <li><a href="#">Digital Marketing</a></li>
                            <li><a href="#">Database Management</a></li>
                        </ul>
                    </div>
                    <div class="footer-links">
                        <h3>Our Fields</h3>
                        <ul>
                            <li><a href="#">Healthcare</a></li>
                            <li><a href="#">Banks</a></li>
                            <li><a href="#">Verification Software</a></li>
                            <li><a href="#">Hotel Management Software</a></li>
                        </ul>
                    </div>
                    <div class="footer-links">
                        <h3>Legal</h3>
                        <ul>
                            <li><a href="#">Terms</a></li>
                            <li><a href="#">Privacy</a></li>
                        </ul>
                    </div>

                </div>

                <div class="footer-contact-info">
                    <div class="footer-contact-info-item">
                        <h4>Phone</h4>
                        <p>
                            <a href="tel:+1-455-1482-236">+234-903-536-3231</a> <br>
                            <a href="tel:+1-938-740-75556">+234-811-947-6898</a>
                        </p>
                    </div>
                    <div class="footer-contact-info-item">
                        <h4>Mail</h4>
                        <p>
                            <a href="mailto:help@techioex.com">help@techioex.com</a> <br>
                            <a href="mailto:trainings@techioex.com">trainings@techioex.com</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="copyright-area">
        <div class="custom-container">
            <div class="custom-row d-flex align-items-center justify-content-between">
                <ul class="social-links d-flex align-items-center">
                    <li><a href="https://facebook.com/techioex" target="_blank">
                        <i class="iconoir-facebook"></i>
                    </a></li>
                    <li><a href="#">
                        <i class="iconoir-twitter"></i>
                    </a></li>
                    <li><a href="https://instagram.com/techioex" target="_blank">
                        <i class="iconoir-instagram"></i>
                    </a></li>
                    <li><a href="https://www.linkedin.com/company/techioex-technologies/" target="_blank">
                        <i class="iconoir-linkedin"></i>
                    </a></li>
                    <li><a href="https://www.youtube.com/@techioex" target="_blank">
                        <i class="iconoir-youtube"></i>
                    </a></li>
                </ul>
            </div>
        </div>
    </div>
</footer>