/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_JWT_SECRET: string;
  readonly VITE_DATABASE_URI: string;
  readonly VITE_DOMAIN_NAME: string;
  readonly VITE_MAIL_KEY: string;
  readonly VITE_MAIL_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
