const http = require('http');

const data = JSON.stringify({
  name: "Test User",
  email: "test@example.com",
  subject: "Product Inquiry",
  message: "This is a test enquiry message.",
  product: []
});

const options = {
  hostname: 'localhost',
  port: 3000,
  path: '/api/send',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(data),
  },
};

const req = http.request(options, (res) => {
  let body = '';
  res.on('data', (chunk) => body += chunk);
  res.on('end', () => {
    console.log(`Status: ${res.statusCode}`);
    console.log(`Response: ${body}`);
  });
});

req.on('error', (e) => console.error(`Error: ${e.message}`));
req.write(data);
req.end();
