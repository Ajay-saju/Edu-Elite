import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const data = await request.json();

        // Validate essential fields
        if (!data.name || !data.email || !data.phone) {
            return NextResponse.json(
                { error: "Name, Email, and Phone are required." },
                { status: 400 }
            );
        }

        // Configure the email transporter
        // NOTE: You need to set these environment variables in .env.local
        const transporter = nodemailer.createTransport({
            service: 'gmail', // You can use other services like 'outlook', 'yahoo', or a custom SMTP
            auth: {
                user: process.env.EMAIL_USER, // Your email address
                pass: process.env.EMAIL_PASS, // Your email password or App Password (recommended for Gmail)
            },
        });

        // Email content
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER, // Sending to yourself (Admin)
            subject: `New Student Registration: ${data.name}`,
            html: `
                <h2>New Student Registration</h2>
                <p><strong>Name:</strong> ${data.name}</p>
                <p><strong>Email:</strong> ${data.email}</p>
                <p><strong>Phone:</strong> ${data.phone}</p>
                <p><strong>Interested Course:</strong> ${data.course}</p>
                <p><strong>Study Type:</strong> ${data.studyType === 'abroad' ? 'Study Abroad' : 'Domestic Education'}</p>
                ${data.studyType === 'abroad' ? `<p><strong>Preferred Country:</strong> ${data.country}</p>` : ''}
                <p><strong>State:</strong> ${data.state}</p>
                <p><strong>City:</strong> ${data.city}</p>
            `,
        };

        // Send the email
        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true, message: "Registration successful and email sent!" });

    } catch (error) {
        console.error("Email sending error:", error);
        return NextResponse.json(
            { error: "Failed to send email. Please try again later." },
            { status: 500 }
        );
    }
}
