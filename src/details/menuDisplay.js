import React from 'react';

const MenuDisplay = (props) => {

    const renderMenu = ({menudata}) => {
        if(menudata){
            return menudata.map((item) => {
                return(
                    <div key={item.menu_id}>
                        <b>{item.menu_name}</b><br/>
                    </div>
                )
            })
        }
    }

    return(
        <div>
            {renderMenu(props)}
        </div>
    )
}

export default MenuDisplay;