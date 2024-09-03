import Form from "./Form";
import {Provider} from 'react-redux';
import store from '../redux/store';

export const App = () => {
  return (
    <Provider store={store}>
      <main className='text-base leading-normal text-black'>
        <Form />
      </main>
    </Provider>
  );
};
