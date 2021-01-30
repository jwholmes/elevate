import React from 'react';
import Button from './Button';
import Header from './Header';

class App extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <Header />
                </div>
                <div>
                    <Button />
                </div>
            </div>
        );
    }
}

export default App