export const save = (key, item) => {
  try {
    if (key?.length > 0) {
      localStorage.setItem(key, JSON.stringify(item));
    }
  } catch (error) {
    console.log('storage ~ save ~ error', error);
  }
};

export const load = key => {
  try {
    const isSaved = localStorage.getItem(key);
    return isSaved?.length > 0 ? JSON.parse(isSaved) : undefined;
  } catch (error) {
    console.log('storage ~ load ~ error', error);
  }
};
