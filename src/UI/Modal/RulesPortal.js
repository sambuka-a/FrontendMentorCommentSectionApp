import { useState, useLayoutEffect } from 'react';
import { createPortal } from 'react-dom';

function createWrapperAndAppendToBody(wrapperId) {
    const wrapperElement = document.createElement('div');
    wrapperElement.setAttribute("id", wrapperId);
    document.body.appendChild(wrapperElement);
    return wrapperElement;
  }

function RulesPortal({ children, wrapperId = 'rules-portal-wrapper'}) {
    const [wrapperElement, setWrapperElement] = useState(null)

    useLayoutEffect(() => {
        let elem = document.getElementById(wrapperId)
        let systemCreated = false
        if(!elem) {
            systemCreated = true
            elem = createWrapperAndAppendToBody(wrapperId)
        }
        setWrapperElement(elem)

        return () => {
            // delete the programatically created element
            if(systemCreated && elem.parentNode) {
                elem.parentNode.removeChild(elem)
            }
        }
    }, [wrapperId])

    // wrapperElement state will be null on very first render.
    if (wrapperElement === null) return null;

    return createPortal(children, wrapperElement)
  }

export default RulesPortal;