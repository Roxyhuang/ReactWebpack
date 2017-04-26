import * as React from 'react';
import {render} from 'react-dom';
import  Test from './page/test.tsx';
import * as styles from './app.css';

interface IAppProps {
}
interface IAppState {
}

class App extends React.Component<IAppProps, IAppState> {
    public render(): JSX.Element {
        return (
            <div className={styles.test}> Hello111cc world <Test/></div>
        )
    }
}
render(<App />, document.getElementById('app'));
