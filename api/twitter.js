const fetch = require('node-fetch');

module.exports = async (req, res) => {
  const bearerToken = 'YOUR_TWITTER_BEARER_TOKEN';

  try {
    const twitterApiUrl = 'https://api.twitter.com/2/users/by/username/SpectralHorizon';
    const response = await fetch(twitterApiUrl, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${bearerToken}`,
      },
    });

    if (!response.ok) {
      return res.status(500).json({ error: 'Failed to fetch Twitter data' });
    }

    const data = await response.json();
    const followersCount = data.data.public_metrics.followers_count;

    res.status(200).json({
      followers: followersCount,
    });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching Twitter data' });
  }
};