<script lang="ts">
  import { enhance } from "$app/forms";
  import type { ActionData } from "./$types";
  import { RandomStringGenerator } from '$lib/generateRandomNumber';
  export let form : ActionData;
  let isLoading = false;
  
  export let botCheck = RandomStringGenerator(10);
  let modifiedCheck = botCheck.split('').join(" ")

</script>
<!-- Faq Hero -->
<section class="hero-service-wrap hero-section-wrap hero-portfolio-wrap">
    <div class="hero-section-content-wrap">
        <div class="custom-container">
            <div class="hero-portfolio-body">
                <div class="hero-section-content text-center">
                    <h5 class="section-subtitle">Contact Us</h5>
                    <h1 class="section-title fade-in">Get in Touch with Us</h1>
                    <p>Reach out to us today, and let's embark on a journey of technological excellence together.</p>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Contact -->
<section class="contact-area2">
    <div class="custom-container">
        <div class="contact-inner">
            <div class="contact-map-wrap">
                <h4>Connect Us</h4>

                
                <div id="map">
                    <div class="map-location-item">
                        <div class="map-location-item-inner">
                            <img src="./imgs/nigeria.png" style:width="18px" alt="Flag" />
                            <div class="content">
                                <h3>Lagos State, Nigeria</h3>
                                <p>Eputu Town, Lekki-Epe Expressway</p>
                            </div>
                        </div>
                        <span class="circle"></span>
                    </div>
                    <div class="map-location-item">
                        <div class="map-location-item-inner">
                            <img src="./imgs/nigeria.png" style:width="18px" alt="Flag" />
                            <div class="content">
                                <h3>Oyo State, Nigeria</h3>
                                <p>No.61, Challenge,
                                Ibadan</p>
                            </div>
                        </div>
                        <span class="circle"></span>
                    </div>
                    <div class="map-location-item">
                        <div class="map-location-item-inner">
                            <img src="./imgs/nigeria.png" class="img-circle" style:width="18px" alt="Flag" />
                            <div class="content">
                                <h3>Osun State, Nigeria</h3>
                                <p>Lagere, Ile-Ife</p>
                            </div>
                        </div>
                        <span class="circle"></span>
                    </div>
                    <img src="./imgs/map.svg" alt="Map"/>
                </div>
            </div>
            <div class="contact-inner-info-box d-flex align-items-center">
                <div class="contact-info-box simple-shadow">
                    <div class="icon"><i class="las la-headset"></i></div>
                    <h4>Support</h4>
                    <p>Contact our fast support team</p>
                    <h6><a href="mailto:enquiry@techioex.com">enquiry@techioex.com</a></h6>
                </div>
                <div class="contact-info-box simple-shadow">
                    <div class="icon"><i class="las la-phone"></i></div>
                    <h4>Phone</h4>
                    <p>Mon-Fri from 9am to 6pm.</p>
                    <h6><a href="tel:+1-938-740-7555">+234-903-536-3231</a></h6>
                </div>
            </div>
        </div>
    </div>
</section>


<!-- Location -->
<section class="contact-location-area">
    <img class="animation-slide-left bg-shape" src="./imgs/bg-shape-7.svg" alt="Shape"/>
    <div class="custom-container">
        <div class="custom-row justify-content-between align-items-center">
            <div class="contact-location-left-content">
                <div class="contact-location-left-body">
                    <h5 class="section-subtitle">Locations</h5>
                    <h1 class="section-title">Visit any of our <br>offices 
                        across Nigeria</h1>
                    <p>Our location is strategically situated at the heart of City, making it an ideal destination for businesses and visitors alike.</p>
                </div>
            </div>

            <div class="right">
                <div class="contact-locations-list">

                    <div class="contact-location-box">
                        <div class="number">
                            #1
                        </div>
                        <div class="content">
                            <h3>Lagos State, Nigeria</h3>
                            <p>Eputu Town, Lekki-Epe Expressway</p>
                        </div>
                    </div>
                    <div class="contact-location-box">
                        <div class="number">
                            #2
                        </div>
                        <div class="content">
                            <h3>Oyo State, Nigeria</h3>
                            <p>No.61, Challenge,
                                Ibadan</p>
                        </div>
                    </div>
                    <div class="contact-location-box">
                        <div class="number">
                            #3
                        </div>
                        <div class="content">
                            <h3>Osun State, Nigeria</h3>
                            <p>Lagere, Ile-Ife</p>
                        </div>
                    </div>
                    <!-- <div class="contact-location-box">
                        <div class="number">
                            #4
                        </div>
                        <div class="content">
                            <h3>Madras, IND</h3>
                            <p>3/5, Geils Street
                                Mannady, Madras</p>
                        </div>
                    </div> -->

                </div>
            </div>
        </div>
    </div>
</section>


<!-- Contact -->

<section class="contact-area">
    <div class="custom-container">
        <div class="custom-row">
            <div class="contact-form-wrap">
                <div class="contact-form-body">
                    <h5 class="section-subtitle">Contact</h5>
                    <h1 class="section-title">Talk to Us</h1>
                    <p>You can reach us anytime via <a href="#">enquiry@techioex.com</a></p>
                    <form  method="POST"  class="contact-form" use:enhance={ () => {
                        isLoading = true;
                        return ({ result, update}) => {
                            update();
                            isLoading = false;
                        }
                    }}>
                         <!-- Alert Message -->
                         {#if form?.formFieldErrors}
                            <!-- content here -->
                            <div class="input-row ">
                                <div class="input-group alert-notification alert alert-danger w-100">
                                    <div id="alert-message" class="alert-danger alert-msg">{ form.formFieldErrors }</div>
                                </div>
                            </div>
                         {/if}
                         {#if form?.emailNotSent}
                            <!-- content here -->
                            <div class="input-row ">
                                <div class="input-group alert-notification alert alert-info w-100">
                                    <div id="alert-message" class="alert-danger alert-msg">{ form.emailNotSent }</div>
                                </div>
                            </div>
                         {/if}
                         {#if form?.emailSent}
                            <!-- content here -->
                            <div class="input-row ">
                                <div class="input-group alert-notification alert alert-info w-100">
                                    <div id="alert-message" class="alert-danger alert-msg">{ form.emailSent }</div>
                                </div>
                            </div>
                            
                         {/if}
                         
                         <!-- {#if $page.url.searchParams.get('redirect')}
                            <div class="input-row ">
                                <div class="input-group alert-notification alert alert-info w-100">
                                    <div id="alert-message" class="alert-success alert-msg">
                                        Thank you! We have received your message and will get back to you shortly.
                                    </div>
                                </div>
                            </div>
                         {/if} -->
                        <div class="input-row">
                            <div class="input-group">
                                <label for="first_name">First Name</label>
                                <input id="first_name" type="text" required name="first_name"  placeholder="First Name" value="{form?.firstname || ''}" />
                            </div>
                            <div class="input-group">
                                <label for="last_name">Last Name</label>
                                <input id="last_name" type="text" required name="last_name" placeholder="Last Name" value="{form?.lastname || ''}" />
                            </div>
                        </div>
                        <div class="input-row">
                            <div class="input-group">
                                <label for="email">Email</label>
                                <input type="email" id="email" required name="email" placeholder="Your Email" value="{form?.email || ''}" />
                            </div>
                        </div>
                        <div class="input-row">
                            <div class="input-group">
                                <label for="email">Phone Number</label>
                                <input type="text" id="phone_number" required name="phone_number" placeholder="e.g +2349000000000" value="{form?.phone || ''}" />
                            </div>
                        </div>
                        <div class="input-row">
                            <div class="input-group">
                                <label for="">Your Interest</label>
                                <select name="inquiry" class="form-control">
                                    <option value="">Select Interest</option>
                                    <option>General Inquiry</option>
                                    <option>Training Inquiry</option>
                                </select>
                            </div>
                        </div>
                        <!-- <div class="input-row">
                            <div class="input-group phone-number">
                                <select class="number-prefix">
                                    <option value="uk">UK</option>
                                    <option value="us">US</option>
                                </select>
                                <label for="phone_number">Phone Number</label>
                                <input id="phone_number" type="text" required name="phone_number" placeholder="Your Number" />
                            </div>
                        </div> -->
                        <div class="input-row">
                            <div class="input-group">
                                <label for="message">Message</label>
                                <textarea name="message" id="message" required placeholder="Leave us a message...."></textarea>
                            </div>
                        </div>
                        <div class="input-row">
                            <div class="input-group">
                                <label for="message">
                                    <h6 class="text-uppercase text-dark">Enter the code below without space:</h6> 
                                    <div class="bg-light p-3 text-dark">
                                        <h2>{modifiedCheck}</h2>
                                    </div>
                                </label>
                                <input name="captcha" id="captcha" required placeholder="Enter Letters shown above" />
                                <input type="hidden" name="captcha_checks" id="captcha_checks"  value="{ botCheck }" />
                            </div>
                        </div>
                        <!-- <div class="input-row">
                            <div class="input-group input-checkbox">
                                <input type="checkbox" id="privacy_policy_accept">
                                <label for="privacy_policy_accept">You agree to our <a href="#">terms and conditions.</a></label>
                            </div>
                        </div> -->

                        <div class="input-row">
                            <div class="input-group">
                                <button id="submit" class="theme-btn" disabled="{isLoading}">
                                    {#if isLoading}
                                        Please wait... 
                                    {:else}
                                        Get Started
                                    {/if  }
                                </button>
                                <button style="display:none;" id="resetForm"></button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            
            <div class="contact-experience">
                <ul>
                    <li>
                        <h1>8+ <span>Years</span></h1>
                        <p>Field Experience </p>
                    </li>
                    <li>
                        <h1>30+ <span>Projects</span></h1>
                        <p>Completed </p>
                    </li>
                    <li>
                        <h1>99.9%</h1>
                        <p>Client Satisfaction</p>
                    </li>
                    <li>
                        <h1>Instant <span></span></h1>
                        <p>Response Time</p>
                    </li>
                </ul>
            </div>

            <!-- <div class="contact-infos">
                <div class="contact-infos-inner">
                    <div class="contact-info">
                        <img src="./imgs/support-icon.svg" alt="Support" />
                        <h3>Contact Info</h3>
                        <p>
                            +234-903-536-3231 <br>
                            enquiry@techioex.com
                        </p>
                    </div>
                    <div class="contact-office-info contact-info">
                        <img src="./imgs/map-icon.svg" alt="Map" />
                        <h3>Head Office</h3>
                        <p>Eputu Town, Lekki-Epe Expressway
                            Lagos State.</p>
                    </div>

                    <ul class="contact-social-links">
                        <li>
                            <a href="#">
                                <?xml version="1.0" encoding="UTF-8"?><i class="iconoir-dribbble"></i>
                                Dribbble
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <?xml version="1.0" encoding="UTF-8"?><i class="iconoir-twitter"></i>
                                Twitter
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <?xml version="1.0" encoding="UTF-8"?><i class="iconoir-instagram"></i>
                                 Instagram
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <?xml version="1.0" encoding="UTF-8"?><i class="iconoir-linkedin"></i>
                                linkedin
                            </a>
                        </li>
                    </ul>
                </div>
            </div> -->
        </div>
    </div>
</section>