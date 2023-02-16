import V from 'fluent-json-schema';

export const PasswordResetRouterSchema = {
  body: V.object().prop('email', V.string().format('email').required()),
};
