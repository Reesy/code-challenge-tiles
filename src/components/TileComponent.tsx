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
                <div className="one">1</div>
                <div className="two">2</div>
                <div className="three">3</div>
                <div className="four">4</div>
                <div className="five">5</div>
                <div className="six">6</div>
                <div className="seven">7</div>
                <div className="eight">8</div>
                <div className="nine">9</div>
            </div>
        )
    }
};

