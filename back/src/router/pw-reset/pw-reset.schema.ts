import V from 'fluent-json-schema';

export const PasswordResetRouteSchema = {
  body: V.object().prop('email', V.string().format('email').required()),
};

export const PasswordResetVerifyRouteSchema = {
  body: V.object()
    .prop('password', V.string().required())
    .prop('token', V.string().required())
    .prop('userId', V.string().required()),
};
