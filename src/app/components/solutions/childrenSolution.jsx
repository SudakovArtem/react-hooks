import React from "react";
import PropTypes from "prop-types";

const ListComponent = ({ children }) => {
  return React.Children.map(children, (child, idx) => {
    return (
        <div className="d-flex text-nowrap">
          <span>{idx + 1}.&nbsp;</span>
          {child}
        </div>
    );
  });
};
ListComponent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

const ChildrenSolution = () => {
  return (
      <ListComponent>
        <Component/>
        <Component/>
        <Component/>
      </ListComponent>
  );
};

const Component = () => {
  return <div>Компонент списка</div>;
};

export default ChildrenSolution;
