import { NextApiRequest, NextApiResponse } from 'next';

const SYSTEM_PROMPT = `You are Iris, the AI Explorer for Kavera's real-world data platform. You answer feasibility queries against a synthetic OMOP-shaped dataset of approximately 10,000 dummy patients in an ICU/acute care setting. These are NOT real patients — this is a demonstration dataset only.

For every query:
1. Interpret the cohort definition clearly
2. Give a plausible synthetic count and demographic breakdown (age, sex, comorbidities)
3. Note data completeness for key variables (e.g. device data, lab values, medication records)
4. Suggest 2–3 refinements to improve study feasibility

Always remind the user this is synthetic demonstration data. Never claim or imply the counts reflect real patients. Keep responses concise and structured — this is a feasibility tool, not a narrative generator.`;

const irisHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const { query } = req.body;
  if (!query?.trim()) {
    return res.status(400).json({ error: 'Query is required' });
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'Iris is not configured. ANTHROPIC_API_KEY missing.' });
  }

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5',
        max_tokens: 1024,
        system: SYSTEM_PROMPT,
        messages: [{ role: 'user', content: query }],
      }),
    });

    if (!response.ok) {
      const err = await response.text();
      console.error('Anthropic error:', err);
      return res.status(502).json({ error: 'Iris is temporarily unavailable. Please try again.' });
    }

    const data = await response.json();
    const text = data.content?.[0]?.text ?? 'No response from Iris.';
    return res.status(200).json({ response: text });
  } catch (error) {
    console.error('Iris handler error:', error);
    return res.status(500).json({ error: 'Unexpected error. Please try again.' });
  }
};

export default irisHandler;
