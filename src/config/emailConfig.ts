/**
 * Webpulse Automation - Lead Capture & Email Webhook Configuration
 * 
 * Configure any of the following to receive contact form & newsletter submissions directly to your inbox:
 * 
 * Option 1: Web3Forms (Recommended - Free, Instant 30-second setup, Zero backend)
 *   1. Go to https://web3forms.com
 *   2. Enter your email: zayanarham07@gmail.com
 *   3. Copy the Access Key sent to your inbox and paste it into `web3formsAccessKey` below.
 * 
 * Option 2: EmailJS
 *   1. Go to https://www.emailjs.com
 *   2. Connect your Gmail service, create a template, and get your Service ID, Template ID, and Public Key.
 *   3. Paste them below.
 * 
 * Option 3: Custom Webhook (n8n, Make, Zapier, Google Sheets)
 *   - Paste your webhook URL into `customWebhookUrl`.
 */
export const emailConfig = {
  // Web3Forms Access Key (e.g., 'a1b2c3d4-e5f6-7890-abcd-ef1234567890')
  web3formsAccessKey: 'cb291425-e605-444c-968d-0bfded6ba122',

  // EmailJS Configuration
  emailjsServiceId: '',
  emailjsTemplateId: '',
  emailjsPublicKey: '',

  // Custom Webhook URL (e.g., 'https://n8n.yourdomain.com/webhook/lead-capture')
  customWebhookUrl: '',

  // Default notification recipient
  adminEmail: 'zayanarham07@gmail.com',
};
