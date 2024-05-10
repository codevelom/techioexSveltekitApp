<script lang="ts">
    import { page } from "$app/stores";
  import { onMount } from "svelte";
    import Footer from "../components/Footer.svelte";
    import Nav from "../components/Nav.svelte";
    import TopBar from "../components/TopBar.svelte";
    // get year
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
</script> 

<svelte:head>
    <title>
        {$page.data.title ? $page.data.title : 'Seamless Solutions - Techioex Technologies'}
    </title>
    <meta name="description" content="{$page.data.description ? $page.data.description : ''}" >
    <meta name="keywords" content="{$page.data.keywords ? $page.data.keywords : ''}" >
</svelte:head>
<main class="main-page homepage">
    <TopBar />
        <Nav />
        <slot />
    <Footer />
</main>