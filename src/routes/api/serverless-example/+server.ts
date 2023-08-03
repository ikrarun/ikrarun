import { error } from '@sveltejs/kit';
import nodemailer from 'nodemailer';

export async function POST() {
	const xhtml = `<!DOCTYPE html>
	<html>
	<body>
	
	<h1>My First Heading</h1>
	<p>My first paragraph.</p>
	
	</body>
	</html>`;

	var res = new Response(xhtml, {
		headers: {
			'Content-Type': 'text'
		}
	});

	const transporter = nodemailer.createTransport({
		host: 'smtp-relay.brevo.com',
		port: 587,
		auth: {
			user: 'karun1442@gmail.com',
			pass: 'JvKjODkmsZbVhTy5'
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
		.catch(() => {
			throw error(400, 'Some Error Occured.');
		});
}
