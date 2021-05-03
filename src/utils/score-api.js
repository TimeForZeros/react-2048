const BASE_URL = '/api/score/';

export const create = (score) => fetch(BASE_URL, {
  method: 'POST',
  headers: {'content-type': 'application/json'},
  body: JSON.stringify(score)
}).then(res => res.json());

export const index = () => fetch(BASE_URL).then(res => res.json());