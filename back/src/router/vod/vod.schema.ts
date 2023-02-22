import V from 'fluent-json-schema';

export const VodSchema = {
  params: V.object().prop('param', V.string().required()),
};
