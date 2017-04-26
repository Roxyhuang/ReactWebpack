import * as React from 'react';
import {render} from 'react-dom';

interface IAppProps {
}
interface IAppState {
}

class Test extends React.Component<IAppProps, IAppState> {
    public render(): JSX.Element {
        return ( <div> Test </div> )
    }
}
export default Test;
