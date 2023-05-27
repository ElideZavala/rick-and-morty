const BASE_URL = 'https://rickandmortyapi.com/api/character';

export const environment = {
  production: true,
  API: {
    CHARACTER: `${BASE_URL}/`,
    CHARACTER_PAGE: `${BASE_URL}/?page=`,
  }
};
