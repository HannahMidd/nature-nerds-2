import './App.css';
import ParkSearch from './components/ParkSearch';
import HomeContent from './components/Home';
import AboutUs from './components/pages/AboutUs';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import AccuWeather from './components/AccuWeather';
import ParentComponent from './components/ParentComponent';

const client = new ApolloClient({
    uri: '/graphql',
    cache: new InMemoryCache(),
});

// Place homepage here???
function App() {
    return (
        <ApolloProvider client={client}>
            <div>
                <HomeContent />
                {/* <ParkSearch /> */}
                <ParentComponent />
                {/* <AccuWeather /> */}
                <AboutUs />
            </div>
        </ApolloProvider>
    );
}

export default App;
