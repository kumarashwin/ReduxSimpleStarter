import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { selectBook } from '../actions/index';

class BookList extends Component {

    renderList() {
        return this.props.books.map(
            (book) => {
                return (
                    <li onClick={ (event) => this.props.selectBook(book) }
                        key={ book.title }
                        className="list-group-item">{ book.title }</li>
                )
            }
        );
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                { this.renderList() }
            </ul>
        );
    }
}

function mapDispatchtoProps(dispatch) {
    // The return ends up as props on BookList
    //
    // Also, whenever selectBook is called in the component, 
    // the result should be passed to all reducers
    return bindActionCreators({ selectBook }, dispatch);
}

// Return will show up as (replace?) props in BookList
// Receives its 'state' from the reducers.
function mapStateToProps(state) {
    return {
        books: state.books
    }
}

// Promote BookList from Component to Container.
export default connect(mapStateToProps, mapDispatchtoProps)(BookList);