import React, { Component } from "react";
import PropTypes from "prop-types";

class List extends Component {
  render() {
    const { list, title, subtitle } = this.props;

    return (
      <div>
        <h2 className="text-center mb-3">{title}</h2>
        <h3 className="text-center mb-2">{subtitle}</h3>
        <ul className="list-group container mb-3 text-center list-group-horizontal">
          <li className="list-group-item list-group-item-dark list-group-item-action">
            {`Name: ${list.name}`}
          </li>
          <li className="list-group-item list-group-item-dark list-group-item-action">
            {`Surname: ${list.surname}`}
          </li>
          <li className="list-group-item list-group-item-dark list-group-item-action">
            {`Age: ${list.age}`}
          </li>
          <li className="list-group-item list-group-item-dark list-group-item-action">
            {`City: ${list.city}`}
          </li>
          <li className="list-group-item list-group-item-dark list-group-item-action">
            {`Color: ${list.color}`}
          </li>
        </ul>
      </div>
    );
  }
}

List.defaultProps = {
  title: "About me",
  subtitle: "Read!",
};

List.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default List;
