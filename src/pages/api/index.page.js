import { createClient } from '@vercel/postgres';
import { sendMail } from 'service/mailservice';

export default async function handler(req, res) {
  const { method, body } = req;
  const { type } = body;

  if (method === 'POST') {
    // Create a new client instance for each request
    const client = createClient({
      connectionString: process.env.POSTGRES_URL,
    });

    try {
      if (!['up', 'down'].includes(type)) {
        return res.status(400).json({ error: 'Invalid feedback type' });
      }

      await client.connect(); // Connect to the database

      // Insert feedback
      await client.query('INSERT INTO feedback (type) VALUES ($1)', [type]);

      res.status(200).json({ message: 'Feedback saved!' });
    } catch (error) {
      console.error('Database error:', error);
      res.status(500).json({ error: 'Failed to save feedback', details: error.message });
    } finally {
      try {
        await client.end(); // Ensure the connection is closed
        console.log('Database connection closed.');
      } catch (endError) {
        console.error('Failed to close database connection:', endError);
      }
    }
  } else if (method === 'POST1') {
    try {
      await sendMail(body);
      res.status(200).send('Success');
    } catch (error) {
      console.error('Mail sending error:', error);
      res.status(500).json({ error: 'Failed to send mail', details: error.message });
    }
  } else if (method === 'GET') {
    // Create a new client instance for each request
    const client = createClient({
      connectionString: process.env.POSTGRES_URL,
    });

    try {
      await client.connect(); // Connect to the database

      // Retrieve feedback counts
      const result = await client.query(`
        SELECT type, COUNT(*) AS count
        FROM feedback
        GROUP BY type;
      `);

      res.status(200).json(result.rows);
    } catch (error) {
      console.error('Database error:', error);
      res.status(500).json({
        error: 'Failed to retrieve feedback counts',
        details: error.message,
      });
    } finally {
      try {
        await client.end(); // Ensure the connection is closed
        console.log('Database connection closed.');
      } catch (endError) {
        console.error('Failed to close database connection:', endError);
      }
    }
  } else {
    res.setHeader('Allow', ['POST', 'GET', 'PUT', 'DELETE']);
    res.status(405).end(`Method ${method} Not Allowed`);
  }
}
