import React, {Component} from 'react';

class Test1 extends Component {
    state = {
        value: 0
    };

    setNewValue = () => {
        this.setState({value: 1});
    };
    render() {
        return <div>
            <p>{this.state.value}</p>
            <button className="btn btn-secondary btn-sm" onClick={this.setNewValue}>Set Value</button>
        </div>
    }
}

export default Test1;