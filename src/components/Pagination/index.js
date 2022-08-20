import React from "react";
import PropTypes from "prop-types";

const Pagination = props => {

    const { nextPage, previousPage, skip, posts } = props;

    const handNextPage = () => {
        if (nextPage) {
            nextPage();
        }
    }

    const handPreviousPage = () => {
        if (previousPage) {
            previousPage();
        }
    }

    const pStyle = {
        justifyContent: 'space-between',
        display: 'flex'
    };

    return (
        <div style={pStyle}>
            <button
                disabled={ skip <= 0 }
                onClick={ () => handPreviousPage() }
            >
                Prev
            </button>
            <button
                onClick={ () => handNextPage() }
                disabled={ posts.length == 0 }
            >
                Next
            </button>
        </div>
    );
}

Pagination.PropType = {
    pagination: PropTypes.object.isRequired,
    onPageChange: PropTypes.func
}

Pagination.defaultProps = {
    onPageChange: null
}

export default Pagination;