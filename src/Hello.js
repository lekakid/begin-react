import React from 'react';

function Hello({name, isSpecial}) {
    return (
        <div>
            {isSpecial && <b>*</b>}
            안녕하세요 {name}
        </div>
    );
}

Hello.defaultProps = {
    name: 'test'
}

export default Hello;