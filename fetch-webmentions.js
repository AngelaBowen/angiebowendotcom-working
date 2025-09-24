// fetch-webmentions.js
const fs = require('fs');
const path = require('path');
const https = require('https');

const DOMAIN = 'angiebowen.com';
const OUTPUT_PATH = path.join(__dirname, 'data', 'webmentions.json');
const API_URL = `https://webmention.io/api/mentions.jf2?domain=${DOMAIN}`;

https.get(API_URL, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
    fs.writeFileSync(OUTPUT_PATH, data);
    console.log('Webmentions fetched and saved to data/webmentions.json');
  });
}).on('error', (err) => {
  console.error('Error fetching webmentions:', err);
});