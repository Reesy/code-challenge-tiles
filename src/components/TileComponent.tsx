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
                <div className="one">
                    <p>1</p>
                </div>
                <div className="two">
                    <p>2</p>
                </div>
                <div className="three">
                    <p>3</p>
                </div>
                <div className="four">
                    <p>4</p>
                </div>
                <div className="five">
                    <p>5</p>
                </div>
                <div className="six">
                    <p>6</p>
                </div>
                <div className="seven">
                    <p>7</p>
                </div>
                <div className="eight">
                    <p>8</p>
                </div>
                <div className="nine">
                    <p>9</p>
                </div>
            </div>
        )
    }
};

