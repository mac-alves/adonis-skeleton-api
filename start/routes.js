/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route');

Route.get('/', () => ({ powerApi: 'Welcome to Power API.' }));

Route.group(() => {
  Route.post('/session', 'SessionController.store').validator('Session');
  Route.post('/forgot', 'ForgotPasswordController.store').validator('Forgot');
  Route.post('/reset', 'ResetPasswordController.store').validator('Reset');
  Route.post('/users', 'UserController.store').validator('Register');
}).prefix('api/v1');

Route.group(() => {
  Route.get('/users', 'UserController.index');
  Route.get('/user/:id', 'UserController.show');
  Route.delete('/user', 'UserController.destroy').validator('Destroy');
}).prefix('api/v1').middleware('auth');
