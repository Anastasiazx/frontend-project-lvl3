export default () => {
  const form = document.querySelector('form');

  const state = {
    data: [],
  };

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    state.data.unshift(name);
  });
};
