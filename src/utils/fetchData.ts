interface ExerciseOptions {
  method: string;
  headers: Record<string, string>;
  params?: Record<string, string | number>;
}

export const exerciseUrl: string =
  'https://exercisedb.p.rapidapi.com/exercises';

export const exerciseOptions: ExerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '523eeeae80mshfc46e26c1236754p1ff3b8jsnf7c34652cd0f',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
  },
};

export const fetchData = async <T>(
  url: string,
  options?: ExerciseOptions
): Promise<T> => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};
