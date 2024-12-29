import fetch from 'node-fetch';

export default async function handler(req, res) {
  const apiKey = 'AIzaSyDGi1JBTHwYeIbT_eHTlzafzUDdmP5dKnE';
  const channelId = 'UCliYuAkUEmNhz9rYG-xmitQ';

  try {
    const response = await fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channelId}&key=${apiKey}`);
    if (!response.ok) {
      return res.status(500).json({ error: 'Failed to fetch YouTube data' });
    }

    const data = await response.json();
    const stats = data.items[0].statistics;

    res.status(200).json({
      subscribers: stats.subscriberCount,
      views: stats.viewCount,
      videos: stats.videoCount,
    });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching YouTube data' });
  }
}