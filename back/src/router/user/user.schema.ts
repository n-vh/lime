import V from 'fluent-json-schema';

export const CheckEmailRouteSchema = {
  body: V.object().prop('email', V.string().format('email').required()),
};
