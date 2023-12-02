import './styles/style.css';
import App from './app';
import handleBtns from './btns';

handleBtns();
const app = new App();
app.createProject('Gym');
app.createProject('Cleaning');
app.createProject('Cooking');
app.projects[0].createTodo('Bench', 'High');
app.projects[0].createTodo('Este', 'High');
app.projects[0].createTodo('Back', 'High');
app.projects[0].createTodo('Bench', 'High');
app.projects[1].createTodo('Bench', 'High');
app.createProject('Cleaning');

app.projects[0].editTodo('Este', 'This');
console.log(app);
