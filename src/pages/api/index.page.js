import { sendMail } from 'service/mailservice';

export default async function handler(req, res) {
  const { method, body } = req;
  if (method === 'POST') {
    try {
      await sendMail(body);
      res.status(200).send('Success');
    } catch (error) {
      console.error('Mail sending error:', error);
      res.status(500).json({ error: 'Failed to send mail', details: error.message });
    }
  } else {
    res.setHeader('Allow', ['POST', 'GET', 'PUT', 'DELETE']);
    res.status(405).end(`Method ${method} Not Allowed`);
  }
}
