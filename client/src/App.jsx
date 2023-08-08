import './App.css';
import Navbar from './components/Navbar';
import { Outlet } from 'react-router-dom';

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import 'bootstrap/dist/css/bootstrap.min.css';

const client = new ApolloClient({
    uri: '/graphql',
    cache: new InMemoryCache(),
});

// Place homepage here???
function App() {
    return (
        <ApolloProvider client={client}>
            <div>
                <Navbar />
                <Outlet />
            </div>
        </ApolloProvider>
    );
}

export default App;
