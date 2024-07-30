import { sendMail } from 'service/mailservice';

export default async function handler(req, res) {
  try {
    const { method, body } = req;

    switch (method) {
      case 'POST':
        await sendMail(body);
        res.status(200).send('Success');
        break;

      case 'GET':
        // Example: return req.auth_data if properly populated
        res.status(200).json(req.auth_data || {});
        break;

      default:
        res.setHeader('Allow', ['POST', 'GET', 'PUT', 'DELETE']);
        res.status(405).end(`Method ${method} Not Allowed`);
        break;
    }
  } catch (err) {
    console.error('API Error:', err);
    res.status(400).json({
      error_code: 'api_error',
      message: err.message,
    });
  }
}
