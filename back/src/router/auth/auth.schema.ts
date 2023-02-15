import V from 'fluent-json-schema';

export const SignUpRouteSchema = {
  body: V.object()
    .prop('username', V.string().required())
    .prop('email', V.string().format('email').required())
    .prop('password', V.string().required()),
};

export const SignInRouteSchema = {
  body: V.object()
    .prop('email', V.string().format('email').required())
    .prop('password', V.string().required()),
};

export const CheckEmailRouteSchema = {
  body: V.object().prop('email', V.string().format('email').required()),
};
