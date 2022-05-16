const _reverse = (string) => {
  let result = '';
  for (let character of string) {
    result = character + result;
  }
  return result;
};

const result = _reverse('Salman');
console.log(result);
