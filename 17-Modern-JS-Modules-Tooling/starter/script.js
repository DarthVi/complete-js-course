import './clean.js';
import cloneDeep from 'lodash-es';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
// const getLastPost = async function () {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//   const data = await res.json();

//   return { title: data.at(-1).title, text: data.at(-1).body };
// };

// const lastPost = await getLastPost();
// console.log(lastPost);

if (module.hot) {
  module.hot.accept();
}
