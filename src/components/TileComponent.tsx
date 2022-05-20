import React from 'react';
import '../styles/tileComponent.css';


interface TileComponentProps
{

};

interface TileComponentState
{
    ordered: boolean
};

export default class TileComponent extends React.Component<TileComponentProps, TileComponentState>
{   

    constructor(props: TileComponentProps)
    {
        super(props);

        this.state = {
            ordered: true
        };
        
    };

    render(): React.ReactNode
    {


        return (
            <div className="TileComponent-main">
            </div>
        )
    }
};

