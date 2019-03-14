import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AuthorQuiz from './AuthorQuiz';
import * as serviceWorker from './serviceWorker';

class Sum extends React.Component {
    render() {
        return <h1>
        {this.props.a} + {this.props.b} = {this.props.a + this.props.b}
        </h1>;
    }
}

ReactDOM.render(<Sum a={4} b={2} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// function Sum(props)
// {
//     return <h1>
//         {props.a} + {props.b} = {props.a + props.b}
//     </h1>
// };