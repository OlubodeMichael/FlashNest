const welcomeEmailTemplate = (firstName) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Welcome to FlashNest</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
    
    body {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      background-color: #f9f9f9;
      margin: 0;
      padding: 0;
      color: #171717;
    }
    .container {
      background-color: #ffffff;
      max-width: 600px;
      margin: 40px auto;
      border-radius: 12px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
      overflow: hidden;
    }
    .header {
      background-color: #ffffff;
      color: #000000;
      padding: 32px;
      text-align: center;
      border-bottom: 1px solid #e5e5e5;
    }
    .logo {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 24px;
      text-decoration: none;
    }
    .logo-icon {
      height: 3rem;
      width: 3rem;
      background-color: #facc15;
      border-radius: 0.75rem;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 0.75rem;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
    }
    .logo-text {
      font-size: 1.25rem;
      font-weight: 700;
      letter-spacing: -0.025em;
      color: #000000;
    }
    .content {
      padding: 32px;
    }
    .content h2 {
      color: #0a0a0a;
      font-size: 24px;
      font-weight: 600;
      margin-bottom: 16px;
    }
    .content p {
      color: #404040;
      line-height: 1.6;
      margin-bottom: 16px;
    }
    .cta {
      display: inline-block;
      margin-top: 24px;
      padding: 12px 24px;
      background-color: #facc15;
      color: #000000;
      text-decoration: none;
      border-radius: 8px;
      font-weight: 600;
      transition: background-color 0.2s;
    }
    .cta:hover {
      background-color: #eab308;
    }
    .footer {
      text-align: center;
      font-size: 12px;
      color: #737373;
      padding: 24px;
      border-top: 1px solid #e5e5e5;
    }
    @media (max-width: 600px) {
      .container {
        margin: 20px;
      }
      .content {
        padding: 24px;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div class="logo">
        <div class="logo-icon">
          <span style="font-weight: bold; font-size: 1rem;">FN</span>
        </div>
        <span class="logo-text">FlashNest</span>
      </div>
      <h1 style="margin: 0; font-size: 28px; font-weight: 700;">Welcome to FlashNest 🎉</h1>
    </div>
    <div class="content">
      <h2>Hello, ${firstName}!</h2>
      <p>We're thrilled to have you join <strong>FlashNest</strong>, the best way to master your subjects using interactive flashcards.</p>
      <p>Ready to dive in? Start creating your flashcards and boost your learning!</p>
      <a href="https://www.flashnest.app/dashboard" class="cta">Get Started</a>
    </div>
    <div class="footer">
      <p>© ${new Date().getFullYear()} FlashNest. All rights reserved.</p>
    </div>
  </div>
</body>
</html>
`;

module.exports = welcomeEmailTemplate;
