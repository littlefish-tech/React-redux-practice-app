import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Counter.css';


import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionTypes from '../../store/actions';

class Counter extends Component {
    render () {
        return (
            <div>
                <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 10" clicked={this.props.onAddCounter}  />
                </div>
                <div>
                <CounterControl label="Subtract 15" clicked={this.props.onSubtractCounter}  />
                <CounterControl label="Times 3" clicked={this.props.onTimesResult}  />
                <CounterControl label="Divid 6" clicked={this.props.onDividResult}  />
                </div>
                <hr />
                <button className="storeBtn" onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                <ul>
                    {this.props.storedResults.map(strResult => (
                        <div key={strResult.id}>{strResult.value}<button className="deleteBtn" onClick={() => this.props.onDeleteResult(strResult.id)}>Delete</button></div>
                    ))}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {

        ctr: state.ctr.counter,
        storedResults: state.res.results
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({type: actionTypes.INCREMENT}),
        onDecrementCounter: () => dispatch({type: actionTypes.DECREMENT}),
        onAddCounter: () => dispatch({type: actionTypes.ADD, val: 10}),
        onSubtractCounter: () => dispatch({type: actionTypes.SUBTRACT, val: 15}),
        onStoreResult: (result) => dispatch({type: actionTypes.STORE_RESULT, result: result}),
        onDeleteResult: (id) => dispatch({type: actionTypes.DELETE_RESULT, resultElId: id}),
        onTimesResult: (id) => dispatch({type: actionTypes.TIMES_RESULT, val: 3}),
        onDividResult: (id) => dispatch({type: actionTypes.DIVID_RESULT, val: 6})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);