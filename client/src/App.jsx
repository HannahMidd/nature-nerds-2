import React, { useState } from "react";
import './App.css';
import Navbar from './components/Navbar';
import ParkSearch from './components/ParkSearch';
import HomeContent from './components/Home';
import PageContainer from "./components/PageContainer";
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import 'bootstrap/dist/css/bootstrap.min.css';

const client = new ApolloClient({
    uri: '/graphql',
    cache: new InMemoryCache(),
});

// Place homepage here???
function App() {
    const [pages] = useState([
        {
            name: "Home"
        },
        {
            name: "About us"
        },
        {
            name: "Login"
        },
        {
            name: "Signup"
        }

    ]);
    const [currentPage, setCurrentPage] = useState(pages[0]);
    return (
        <ApolloProvider client={client}>
            <div>
                <Navbar 
                    pages={pages}
                    setCurrentPage={setCurrentPage}
                    currentPage={currentPage}
                ></Navbar>
                <main>
                    <PageContainer currentPage={currentPage}></PageContainer>
                </main>
            </div>
        </ApolloProvider>
    );
}

export default App;

{/* <HomeContent />
<ParkSearch /> */}