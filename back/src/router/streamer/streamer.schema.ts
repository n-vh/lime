import V from 'fluent-json-schema';

export const StreamerSchema = {
  params: V.object().prop('param', V.string().required()),
};
