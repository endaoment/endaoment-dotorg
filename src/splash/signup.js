import React from "react";
import { ReactTypeformEmbed } from "react-typeform-embed";

class SignUp extends React.Component {
  render() {
    return (
      <ReactTypeformEmbed
        popup={false}
        url="https://robbie974107.typeform.com/to/lLyuy4"
        class="typeform-modal"
      />
    );
  }
}

export default SignUp;
