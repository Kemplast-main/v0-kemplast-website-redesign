const http = require('http');

const data = JSON.stringify({
  name: "Test Applicant",
  email: "test@example.com",
  phone: "+91 98765 43210",
  position: "Sales Engineer",
  message: "I am interested in this position.",
  resumeBase64: "",
  resumeFileName: ""
});

const options = {
  hostname: 'localhost',
  port: 3000,
  path: '/api/send-application',
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
