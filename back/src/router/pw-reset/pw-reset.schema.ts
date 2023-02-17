import V from 'fluent-json-schema';

export const PasswordResetRouteSchema = {
  body: V.object().prop('email', V.string().format('email').required()),
};
