/** NamedComponent: greets
 *
 * Props:
 * - name: name to introduce self with
 */
import React from 'react';

function NamedComponent(props) {
  return <p>My name is {props.name}.</p>;
}

export default NamedComponent;