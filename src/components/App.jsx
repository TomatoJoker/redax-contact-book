import Form from './Form';
import { Provider } from 'react-redux';
import { store, persistor} from '../redux/store';
import { PersistGate } from 'redux-persist/integration/react';

export const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <main className="text-base leading-normal text-black">
          <Form />
        </main>
      </PersistGate>
    </Provider>
  );
};
