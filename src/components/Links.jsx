import React from 'react';
import PropTypes from "prop-types";

 const Links = ({linkLable,classes}) => {
    return (
        <a className={`btn ${classes}`} >{linkLable}</a>
    )
};
Links.propTypes = {
    linkLable: PropTypes.string,
    };

export default Links;