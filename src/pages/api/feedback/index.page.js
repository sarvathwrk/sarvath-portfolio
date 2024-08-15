import { sql } from '@vercel/postgres';

export default async function handler(req, res) {
  const { method } = req;

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
      return res
        .status(500)
        .json({ error: 'Failed to submit feedback', details: error.message });
    }
  } else if (method === 'GET') {
    try {
      const result = await sql`
        SELECT type, COUNT(*) AS count
        FROM feedback
        GROUP BY type;
      `;
      return res.status(200).json(result.rows);
    } catch (error) {
      console.error('Database error:', error);
      return res
        .status(500)
        .json({ error: 'Failed to retrieve feedback counts', details: error.message });
    }
  } else {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }
}
