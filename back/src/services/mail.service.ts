import type { MailgunMessageData } from 'mailgun.js/interfaces/Messages';
import type { FastifyInstance } from 'fastify';
import type { IUser } from '~/shared/types';
import type Client from 'mailgun.js/client';
import Mailgun from 'mailgun.js';
import FormData from 'form-data';

export class MailService {
  private app: FastifyInstance;
  private client: Client;
  private domain = import.meta.env.VITE_DOMAIN_NAME;

  constructor(app: FastifyInstance) {
    const mailgun = new Mailgun(FormData);

    this.app = app;
    this.client = mailgun.client({
      username: 'lime',
      key: import.meta.env.VITE_MAIL_KEY,
      url: import.meta.env.VITE_MAIL_URL,
    });
  }

  public async sendSignUp(user: IUser) {
    const { url, token } = this.appendTokenToURL('/signup', user, '24h');

    this.send({
      to: user.email,
      subject: 'Lime account signup',
      text: url,
      html: `
        <p>Thank you for signing up with Lime.</p>
        <p>To confirm your signup, please click on the following link:</p>
        <p>
          <a href="${url}">${url}</a>
        </p>
        <p>Thank you,<br />The Lime Team</p>
      `,
    });

    return token;
  }

  public async sendPasswordReset(user: IUser) {
    const { url, token } = this.appendTokenToURL('/password-reset', user, '24h');

    this.send({
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
    });

    return token;
  }

  private async send(data: MailgunMessageData) {
    this.client.messages
      .create(import.meta.env.VITE_DOMAIN_NAME, {
        ...data,
        from: `Lime <noreply@${import.meta.env.VITE_DOMAIN_NAME}>`,
      })
      .catch((err) => console.error(err));
  }

  private appendTokenToURL<T>(route: string, payload: T, expiresIn: string) {
    const token = this.app.jwt.sign({ payload }, { expiresIn });
    return { url: `${this.domain}${route}?token=${token}`, token };
  }
}
