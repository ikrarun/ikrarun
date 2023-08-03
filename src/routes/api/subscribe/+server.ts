import { error, json, type RequestEvent } from '@sveltejs/kit';
import nodemailer from 'nodemailer';

export async function POST(req: RequestEvent) {
	// @ts-ignore
	const email: string = await req.request.headers.get('email');
	const xuser = import.meta.env.VITE_USER_ID;
	const xpass = import.meta.env.VITE_USER_PASS;
	if (!email || !(email.length > 0)) {
		throw error(401, 'Email Not Found');
	}
	const transporter = nodemailer.createTransport({
		host: 'smtp-relay.brevo.com',
		port: 587,
		auth: {
			user: xuser,
			pass: xpass
		}
	});

	const Xres = await transporter
		.sendMail({
			from: 'Admin-Code Manch <admin@codemanch.com>',
			to: email,
			subject: 'Test Email Subject',
			html: '<h1>Example HTML Message Body</h1>'
		})
		.then(() => {
			return json('Successfully Send the Email');
		})
		.catch((e) => {
			throw error(400, e);
		});

	return Xres;
}
