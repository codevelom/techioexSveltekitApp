import type { RequestHandler } from "./$types";
import { json } from "@sveltejs/kit";
import nodemailer from "nodemailer";

export const GET : RequestHandler = () => {
    return json('From GET');
};


export const POST : RequestHandler = async ( { request }) => {
    const data = await request.json();
    let mailTransportStatus = false;
    // Create a transporter
    const transporter = nodemailer.createTransport({
        // Configure your SMTP settings here
        host: 'mail.smtp2go.com',
        port: 465,
        secure: true,
        auth: {
            user: 'techioex.com',
            pass: '076rJeijrzIYf9Gs',
        },
    });

    let mailContent = `
        <!doctype html>
        <html>
        <head></head>
        <body>
            <p>Inquiry type: ${data.inquiry}</p>
            <p>Contact Name: ${data.firstname} ${data.lastname}</p>
            <p>Contact Email: ${data.email}</p>
            <p>Contact Phone: ${data.phone}</p>
            <p>Message: ${data.message}</p>
        </body>
        </html>
    `;
    // // Email options
    const mailOptions = {
        from: {
            name: "Techioex Website",
            address: "notifications.techioex@techioex.com"
        },
        to : "enquiry@techioex.com",
        subject : "New Website Submission - Techioex",
        html : mailContent,
    };
    
    
    try {
        let response  = await transporter.sendMail(mailOptions);
        return json({status: 200, success: true});
    } catch (error) {
        return json({status: 500, success: false});
    }

}