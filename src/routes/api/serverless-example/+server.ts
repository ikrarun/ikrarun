import { error, type RequestEvent } from '@sveltejs/kit';
import nodemailer from 'nodemailer';

export async function POST(req:RequestEvent) {
	console.log(req);
	const xhtml = `<!DOCTYPE html>
	<html>
	<body>
	
	<h1>My First Heading</h1>
	<p>My first paragraph.</p>
	
	</body>
	</html>`;

	var res = new Response(JSON.stringify(xhtml));

	const transporter = nodemailer.createTransport({
		host: 'smtp-relay.brevo.com',
		port: 587,
		auth: {
			user: process.env.USER_ID,
			pass: process.env.USER_PASS
		}
	});

	await transporter
		.sendMail({
			from: 'Admin@codemanch.com',
			to: 'karun1442@gmail.com',
			subject: 'Test Email Subject',
			html: '<h1>Example HTML Message Body</h1>'
		})
		.then(() => {
			return res;
		})
		.catch((e) => {
			throw error(400, e);
		});
}
