import type { FastifyInstance } from 'fastify';
import type { IUser } from '~/shared/types';
import type { MailgunMessageData } from 'mailgun.js/interfaces/Messages';
import type Client from 'mailgun.js/client';
import Mailgun from 'mailgun.js';
import FormData from 'form-data';

export class PasswordResetService {
  private app: FastifyInstance;
  private client: Client;
  private domain = import.meta.env.PROD
    ? import.meta.env.VITE_DOMAIN_NAME
    : 'localhost:6543';

  constructor(app: FastifyInstance) {
    const mailgun = new Mailgun(FormData);

    this.app = app;
    this.client = mailgun.client({
      username: 'lime',
      key: import.meta.env.VITE_MAIL_KEY,
      url: import.meta.env.VITE_MAIL_URL,
    });
  }

  public async send(user: IUser) {
    const token = this.app.jwt.sign({ payload: user }, { expiresIn: '24h' });
    const url = `${this.domain}/password-reset?token=${token}`;

    const data: MailgunMessageData = {
      from: `Lime <noreply@${import.meta.env.VITE_DOMAIN_NAME}>`,
      to: user.email,
      subject: 'Lime password reset request',
      text: url,
      html: `
        <p>We have received a request to reset your password.</p>
        <p>To reset your password, please click on the following link:</p>
        <p>
          <a href="${url}">${url}</a>
        </p>
        <p>Thank you,<br />The Lime Team</p>
      `,
    };

    this.client.messages
      .create(import.meta.env.VITE_DOMAIN_NAME, data)
      .catch((err) => console.error(err));

    return token;
  }
}
