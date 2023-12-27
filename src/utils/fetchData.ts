export const exerciseUrl =
  'https://exercisedb.p.rapidapi.com/exercises/bodyPart';

export const exerciseOptions = {
  method: 'GET',
  params: { limit: '10' },
  headers: {
    'X-RapidAPI-Key': '523eeeae80mshfc46e26c1236754p1ff3b8jsnf7c34652cd0f',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
  },
};

export const fetchData = async (url: string, options?: RequestInit) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};
