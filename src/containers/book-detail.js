import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
    render() {

        if(!this.props.book)
            return <div>Select a book...</div>

        return (
            <div>
                <h4>Details for: </h4>
                <div>{ this.props.book.title }</div>
            </div>
        );
    }
}


// Return will show up as (replace?) props in BookDetail
// Receives its 'state' from the reducers.
function mapStateToProps(state) {
    return {
        book: state.activeBook
    }
}

// Promote BookDetail from Component to Container.
export default connect(mapStateToProps)(BookDetail);