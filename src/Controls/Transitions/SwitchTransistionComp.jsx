import React from 'react'
import { CSSTransition, SwitchTransition } from "react-transition-group";
import "./Css/Animation.css";

const SwitchTransistionComp = ({ outKey="", timeout=100, classTrans='Transition',children }) => {
    return (
        <SwitchTransition>
            <CSSTransition
                key={outKey}
                timeout={timeout}
                classNames={classTrans}
            >
                {children}
            </CSSTransition>
        </SwitchTransition>
    )
}

SwitchTransistionComp.defaultProps = {
    outKey: "",
    timeout: 100,
};

export default SwitchTransistionComp
