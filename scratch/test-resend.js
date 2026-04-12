const { Resend } = require('resend');

const resend = new Resend('re_ZDDuXXzt_AG3VhzULt7byJo7TsqmJZ1XV');

async function testResend() {
  try {
    const data = await resend.emails.send({
      from: "Kemplast Website <onboarding@resend.dev>",
      to: ["sales@kemplast.in"],
      subject: "Test from Resend script",
      html: "<p>This is a test.</p>",
    });

    console.log("Resend Response:", data);
  } catch (error) {
    console.error("Resend Error Catch:", error);
  }
}

testResend();
