const https = require('https');
const fs = require('fs');

https.get('https://www.piemedicalimaging.com/', (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    const imgRegex = /<img[^>]+src="([^">]+)"/g;
    let match;
    const images = new Set();
    while ((match = imgRegex.exec(data)) !== null) {
      if (match[1].startsWith('/')) {
        images.add('https://www.piemedicalimaging.com' + match[1]);
      } else {
        images.add(match[1]);
      }
    }
    fs.writeFileSync('images.json', JSON.stringify(Array.from(images), null, 2), 'utf-8');
    console.log('done');
  });
}).on('error', (err) => {
  console.log('Error: ' + err.message);
});
