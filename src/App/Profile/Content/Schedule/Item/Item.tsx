import React from 'react';

interface ItemProps {
    day: number,
    info?: string
}

const Item = ({day}: ItemProps) => {
    return (
        <div>
            {day}
        </div>
    );
};

export default Item;
