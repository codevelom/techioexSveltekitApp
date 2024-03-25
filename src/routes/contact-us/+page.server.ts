import { fail } from "@sveltejs/kit";
import type { Actions } from "./$types";

export const actions: Actions = {
    default : async ({ request, fetch, setHeaders }) => {
        const form = await request.formData();

        let firstname = form.get('first_name');
        let lastname = form.get('last_name');
        let email = form.get('email');
        let phone = form.get('phone_number');
        let inquiry = form.get('inquiry');
        let message = form.get('message');

        if(firstname =="" || lastname==""){
            return fail(400, {formFieldErrors: "Firstname and Lastname is compulsory"})
        }
        if(email ==""){
            return fail(400, {formFieldErrors: "The email field is compulsory"})
        }
        if(phone ==""){
            return fail(400, {formFieldErrors: "The phone number field is compulsory"})
        }
        if(inquiry ==""){
            return fail(400, {formFieldErrors: "Please select your type of inquiry"})
        }
        if(message ==""){
            return fail(400, {formFieldErrors: "The message field is compulsory"})
        }

       
        let response = await fetch('/api/contact', {
            method : "POST",
            body: JSON.stringify({
                "firstname" : firstname,
                "lastname" : lastname,
                "email" : email,
                "phone"  : phone,
                "inquiry"  : inquiry,
                "message" : message,
            })
        });

        let messages = await response.json();

        if(messages.success == false){
            return fail(500, {emailNotSent: "Sorry, form sumission not processed at this time.",
             firstname : firstname, 
             lastname : lastname, 
             email : email, 
             phone : phone, 
             message : message
            });
        }else{
            
            return fail(300, {emailNotSent: "Thank you! We have received your message and will get back to you shortly."});
        }
    }
};