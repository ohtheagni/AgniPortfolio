"use server";

import React from "react";
import { Resend } from "resend";
import { getErrorMessage, validateString } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
    const message = formData.get('message');
    const senderEmail = formData.get('email');

    // simple server side validation
    if (!validateString(senderEmail, 500)){
        return {
            error: "Invalid sender email"
        };
    }
    if (!validateString(message, 5000)) {
        return {
            error: "Invalid sender message"
        };
    }

    let data;
    try {
        data = await resend.emails.send({
            from: "Personal Portfolio <onboarding@resend.dev>",
            to: 'johncliffordagni@gmail.com',
            subject: "Message from contact form",
            text: message as string,
            reply_to: senderEmail as string,
            react: React.createElement(ContactFormEmail, {
                message: message,
                senderEmail: senderEmail,
            }),
        });
    } catch (error: unknown) {
        return {
            error: getErrorMessage(error),
        };
    }

    return {
        data,
    };
  };
