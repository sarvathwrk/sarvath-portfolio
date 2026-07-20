import { sendMail, type ContactFormPayload } from '@/lib/mailservice';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method, body } = req;
  if (method === 'POST') {
    try {
      await sendMail(body as ContactFormPayload);
      res.status(200).send('Success');
    } catch (error) {
      console.error('Mail sending error:', error);
      res.status(500).json({
        error: 'Failed to send mail',
        details: error instanceof Error ? error.message : String(error),
      });
    }
  } else {
    res.setHeader('Allow', ['POST', 'GET', 'PUT', 'DELETE']);
    res.status(405).end(`Method ${method} Not Allowed`);
  }
}
