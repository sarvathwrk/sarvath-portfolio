import { sendMail } from 'service/mailservice';

export default async function handler(req, res) {
  try {
    console.log('sfsfs');
    const { method, body } = req;
    switch (method) {
      case 'POST': {
        //Do some thing
        await sendMail(body);
        res.status(200).send('Success');
        break;
      }
      case 'GET': {
        //Do some thing
        res.status(200).send(req.auth_data);
        break;
      }
      default:
        res.setHeader('Allow', ['POST', 'GET', 'PUT', 'DELETE']);
        res.status(405).end(`Method ${method} Not Allowed`);
        break;
    }
  } catch (err) {
    res.status(400).json({
      error_code: 'api_one',
      message: err.message,
    });
  }
}
