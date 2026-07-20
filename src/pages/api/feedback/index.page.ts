import { neon } from '@neondatabase/serverless';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  // Neon's HTTP driver is stateless, so the client is created per request.
  // Uses the connection string provisioned by the Vercel/Neon integration.
  // At least one of these env vars is set at runtime; cast satisfies neon()'s
  // string parameter.
  const sql = neon(process.env.DATABASE_URL || (process.env.POSTGRES_URL as string));

  if (method === 'POST') {
    const { type } = req.body;

    if (!type) {
      return res.status(400).json({ error: 'Type is required' });
    }

    try {
      await sql`INSERT INTO feedback (type) VALUES (${type});`;
      return res.status(201).json({ message: 'Feedback submitted successfully' });
    } catch (error) {
      console.error('Database error:', error);
      return res.status(500).json({
        error: 'Failed to submit feedback',
        details: error instanceof Error ? error.message : String(error),
      });
    }
  } else if (method === 'GET') {
    try {
      const rows = await sql`
        SELECT type, COUNT(*) AS count
        FROM feedback
        GROUP BY type;
      `;
      return res.status(200).json(rows);
    } catch (error) {
      console.error('Database error:', error);
      return res.status(500).json({
        error: 'Failed to retrieve feedback counts',
        details: error instanceof Error ? error.message : String(error),
      });
    }
  } else {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }
}
