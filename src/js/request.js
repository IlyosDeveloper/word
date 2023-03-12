const loader = document.querySelector('.loader')

export const getData = async (url) => {
  try {
    loader.classList.remove('hidden')
    const req = await fetch(url);
    const data = await req.json();
    loader.classList.add('hidden')
    return data;
  } catch (error) {
  }
};


