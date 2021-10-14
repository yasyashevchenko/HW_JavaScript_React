import React from "react";
import { connect } from "react-redux";

import { actionColor } from "../actions/color";


const Color = ( { actionColor, color} ) => {
    
    return (
        <div>
            <button onClick={() => actionColor('green')} style={{ background: color }}>Green</button>
            <button onClick={() => actionColor('red')} style={{ background: color }}>Red</button>
            <button onClick={() => actionColor('blue')} style={{ background: color }}>Blue</button>
        </div>
    );
}


const mapStateToProps = (state) => ({ color: state.color }); 

const mapDispatchToProps = {
    actionColor: actionColor,
    
};

export const ColorContainer = connect(mapStateToProps, mapDispatchToProps)(Color);