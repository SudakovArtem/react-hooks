import React from "react";
import withAuth from "../examples/hoc/withAuth";
import SimpleComponent from "../examples/hoc/simpleComponent";
import withPropsStyles from "../examples/hoc/withPropsStyles";

const HocSolution = () => {
  const SimpleComponentWithAuth = withAuth(SimpleComponent);
  const NewSimpleComponent = withPropsStyles(SimpleComponentWithAuth);

  return <NewSimpleComponent />;
};

export default HocSolution;
