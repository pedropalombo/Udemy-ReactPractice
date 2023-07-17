import React from "react";
import MyParagraph from "./MyParagraph";

const DemoOutput = (props) => {
    return <MyParagraph>{props.show ? 'This is new!' : ''}</MyParagraph>
}

//memo() => re-evaluates the component ONLY IF there was a change in the received props
export default React.memo(DemoOutput);