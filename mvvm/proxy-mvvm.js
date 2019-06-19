let input = document.getElementById('input');
let content = document.getElementById('content');
let data = {
  value: ''
};

const proxy = new Proxy(data, {
  get: (target, key, receiver) => data['value'],
  set: (target, key, value, receiver) => {
    input.value = value;
  }
});

input.onkeyup = () => {
  data['value'] = input.value;
  content.innerHTML = data.value;
}