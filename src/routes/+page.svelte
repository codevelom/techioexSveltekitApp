<script lang="ts">
  import ClientArea from '../components/ClientArea.svelte';
  import Events from '../components/Events.svelte';
  import Services from '../components/Services.svelte';
  import Testimonials from './../components/Testimonials.svelte'; 
</script>


<section class="hero-empowerment-area">
    <div class="custom-container">
        <div class="custom-row align-items-center">
            <div class="hero-empowerment-left-content">
                <h5 class="section-subtitle">Effective Web & IT Services</h5>
                <h1 class="section-title fade-in">Seamless IT for your business through end-end service.</h1>
                <p>We provide the expertise and support to move your
                    business forward in the digital landscape.</p>
                <div class="btns-group d-flex">
                    <!-- <a href="#" class="theme-btn">Learn More</a> -->
                    <a href="contact-us" class="theme-btn2">Let's Talk
                        <i class="iconoir-arrow-up-right"></i>
                    </a>
                </div>
            </div>

            <div class="hero-empowerment-right-content">
                <div class="top-content">
                    <img class="desktop fade-in" src="./imgs/techioex_image.jpeg" alt="techioex technologies" />
                    <img class="mobile" src="./imgs/techioex_image.jpeg" alt="techioex technologies" />

                    <!-- <div class="experience-box simple-shadow bounce-in">
                        <div class="experience-body d-flex align-items-center">
                            <img src="./imgs/icon1.svg" alt="Icon" />

                            <div class="experience-content d-flex align-items-center">
                                <h1>+8</h1>
                                <p>
                                    Years
                                    <span>Experience</span>
                                </p>
                            </div>
                        </div>
                    </div> -->
                </div>

                <!-- <div class="bottom-content d-flex">
                    <a href="team.html" class="our-expert-team-box simple-shadow bounce-in delay-2">
                        <div class="our-expert-team-box-inner d-flex align-items-center">
                            <div class="imgs imgs1 d-flex align-items-center">
                                <img src="./imgs/small-img-4.png" alt="team" />
                                <img src="./imgs/small-img-3.png" alt="team" />
                                <img src="./imgs/small-img-2.png" alt="team" />
                                <img src="./imgs/small-img-1.png" alt="team" />
                            </div>
                            <p>
                                Meet
                                <span>Our Experts</span>
                            </p>
                        </div>
                    </a>

                    <div class="google-reviews-box simple-shadow bounce-in delay-3">
                        <div class="left">
                            <span>Partners </span>
                            <img src="./imgs/icon2.svg" alt="Google" />
                        </div>
                        <div class="right">
                            <div class="stars d-flex align-items-center">
                                <i class="las la-star"></i>
                                <i class="las la-star"></i>
                                <i class="las la-star"></i>
                                <i class="las la-star"></i>
                                <i class="las la-star"></i>
                            </div>
                            <p>
                                3245
                                <span>Reviews</span>
                            </p>
                        </div>
                    </div>
                </div> -->

            </div>

        </div>
    </div>
</section>

<ClientArea />
<!-- How We Do -->
<section class="how-we-do-area container-fluid">
    <div class="custom-container">
        <div class="custom-row">
            <img src="./imgs/bg-shape-1.svg" alt="Shape" class="animation-slide-left how-we-do-bg" />
            <div class="how-we-do-left-content">
                <div class="top">
                    <h5 class="section-subtitle">Trust the process</h5>
                    <h1 class="section-title">WE ARE PROACTIVE EXPERTS</h1>
                    <p>Save time and money with our powerful method.</p>
                </div>
                <a href="contact-us" class="theme-btn">
                    Learn More
                    <i class="iconoir-arrow-up-right"></i>
                </a>
            </div>
            <div class="how-we-do-right-content">
                <div class="how-we-do-items d-flex align-items-center justify-content-center">

                    <div class="how-we-do-card">
                        <div class="circle-shape"></div>
                        <div class="line-shape"></div>

                        <div class="how-we-do-icon">
                            <img src="./imgs/hwd-icon-1.svg" alt="How we do" />
                        </div>
                        <div class="how-we-do-content">
                            <h4>Brainstroming</h4>
                            <p>Ideas</p>
                        </div>
                    </div>

                    <div class="how-we-do-card">
                        <div class="circle-shape"></div>
                        <div class="line-shape"></div>

                        <div class="how-we-do-icon">
                            <img src="./imgs/hwd-icon-2.svg" alt="How we do" />
                        </div>
                        <div class="how-we-do-content">
                            <h4>Product</h4>
                            <p>Design</p>
                        </div>
                    </div>

                    <div class="how-we-do-card">
                        <div class="circle-shape"></div>
                        <div class="line-shape"></div>

                        <div class="how-we-do-icon">
                            <img src="./imgs/hwd-icon-3.svg" alt="How we do" />
                        </div>
                        <div class="how-we-do-content">
                            <h4>Front-End</h4>
                            <p>Development</p>
                        </div>
                    </div>

                </div>

                <div class="how-we-do-items d-flex align-items-center justify-content-center">
                    <div class="how-we-do-card">
                        <div class="circle-shape"></div>
                        <div class="line-shape"></div>

                        <div class="how-we-do-icon">
                            <img src="./imgs/hwd-icon-4.svg" alt="How we do" />
                        </div>
                        <div class="how-we-do-content">
                            <h4>SEO</h4>
                            <p>Optimization</p>
                        </div>
                    </div>

                    <div class="how-we-do-card">
                        <div class="circle-shape"></div>
                        <div class="line-shape"></div>

                        <div class="how-we-do-icon">
                            <img src="./imgs/hwd-icon-5.svg" alt="How we do" />
                        </div>
                        <div class="how-we-do-content">
                            <h4>Back-End</h4>
                            <p>Development</p>
                        </div>
                    </div>
                </div>

                <div class="how-we-do-items d-flex align-items-center justify-content-center">

                    <div class="how-we-do-card">
                        <div class="circle-shape"></div>
                        <div class="line-shape"></div>

                        <div class="how-we-do-icon">
                            <img src="./imgs/hwd-icon-6.svg" alt="How we do" />
                        </div>
                        <div class="how-we-do-content">
                            <h4>Digital</h4>
                            <p>Marketing</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</section>

<!-- Service Area -->


<Services />


<!-- <Events /> -->

<!-- About Section -->
<section class="about-area">
    <div class="custom-container">
        <div class="custom-row justify-content-between align-items-center">
            <div class="left-content">
                <h5 class="section-subtitle">CONSULTING EXCELLENCE</h5>
                <h1 class="section-title">Pathway to Client Success</h1>
                <p>
                    We tailor our services to your unique needs, ensuring you have the exact tools and support to achieve your goals.
                </p>
                <ul>
                    <li>
                        <i class="icon-check las la-check"></i> 24/7 Full Service Support
                    </li>
                    <li>
                        <i class="icon-check las la-check"></i> Immediate Response
                    </li>
                    <li>
                        <i class="icon-check las la-check"></i> Easy to Approach us
                    </li>
                </ul>
            </div>

            <div class="right-content">
                <div class="about-timeline">
                    
                    <div class="about-timeline-item">
                        <div class="about-timeline-item-inner">
                            <img src="./imgs/bg-shape-2.svg" alt="Shape" class="line-shape" />
                            <span class="number">01</span>
                            <h3>Discovery and Analysis</h3>
                            <p>Perform a analysis of the client's existing application (if any) or cast the net together.</p>
                        </div>
                    </div>
                    <div class="about-timeline-item">
                        <div class="about-timeline-item-inner">
                            <img src="./imgs/bg-shape-2.svg" alt="Shape" class="line-shape" />
                            <span class="number">02</span>
                            <h3>Tailored Solutions</h3>
                            <p>Develop IT solutions based on the analysis phase.</p>
                        </div>
                    </div>
                    <div class="about-timeline-item">
                        <div class="about-timeline-item-inner">
                            <img src="./imgs/bg-shape-2.svg" alt="Shape" class="line-shape" />
                            <span class="number">03</span>
                            <h3>Deployment and Support</h3>
                            <p>Regularly communicate with our client to clear any concern.</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</section>

<Testimonials />