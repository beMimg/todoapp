import generateJoke from './generateJoke';
import './styles/main.scss';
import githubIconSvg from './assets/github.svg';

const githubSvg = document.getElementById('github-svg');
githubSvg.src = githubIconSvg;

console.log(generateJoke());
console.log('hddi');
