import type { Handle } from "@sveltejs/kit";

export const handle : Handle = async ({ resolve, event }) => {
    
    // if(event.url.pathname.startsWith('/contact')){
    //     return new Response("Welcome to about us page");
    // }

    return resolve(event);
}