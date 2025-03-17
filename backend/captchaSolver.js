const solveCaptcha = async (req, res) => {
  const { captchaImage } = req.body;
  
  // Send to 2Captcha or Anti-Captcha API
  const solution = await fetch("https://2captcha.com/in.php", {
    method: "POST",
    body: JSON.stringify({ key: "YOUR_2CAPTCHA_KEY", method: "base64", body: captchaImage }),
  });

  res.json({ solvedCaptcha: solution });
};

module.exports = { solveCaptcha };
