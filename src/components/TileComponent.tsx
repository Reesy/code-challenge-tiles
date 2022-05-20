import React from 'react';
import '../styles/tileComponent.css';


interface TileComponentProps
{

};

interface TileComponentState
{
    randomColor: boolean
};

export default class TileComponent extends React.Component<TileComponentProps, TileComponentState>
{

    constructor(props: TileComponentProps)
    {
        super(props);

        this.onClick = this.onClick.bind(this);
        this.getRandomColorStyle = this.getRandomColorStyle.bind(this);
        this.state = {
            randomColor: true
        };

    };

    render(): React.ReactNode
    {   

        
        return (
            <div className="TileComponent-main">
                <div className="one" onMouseDown={this.onClick} style={this.getRandomColorStyle()}>
                    <p>1</p>
                </div>
                <div className="two" onMouseDown={this.onClick} style={this.getRandomColorStyle()}>
                    <p>2</p>
                </div>
                <div className="three" onMouseDown={this.onClick} style={this.getRandomColorStyle()}>
                    <p>3</p>
                </div>
                <div className="four" onMouseDown={this.onClick} style={this.getRandomColorStyle()}>
                    <p>4</p>
                </div>
                <div className="five" onMouseDown={this.onClick} style={this.getRandomColorStyle()}>
                    <p>5</p>
                </div>
                <div className="six" onMouseDown={this.onClick} style={this.getRandomColorStyle()}>
                    <p>6</p>
                </div>
                <div className="seven" onMouseDown={this.onClick} style={this.getRandomColorStyle()}>
                    <p>7</p>
                </div>
                <div className="eight" onMouseDown={this.onClick} style={this.getRandomColorStyle()}>
                    <p>8</p>
                </div>
                <div className="nine" onMouseDown={this.onClick} style={this.getRandomColorStyle()}>
                    <p>9</p>
                </div>
            </div>
        )
    }


    private onClick()
    {
        this.setState({
            randomColor: !this.state.randomColor
        });
        console.log('clicked', this.state.randomColor);
    };

    private getRandomColorStyle()
    {   

        let random_color_style;
        random_color_style = {};
        if (this.state.randomColor === true)
        {   
            var letters = '0123456789ABCDEF';
            var color = '#';
            for (var i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            };
    
            random_color_style = {
                backgroundColor: color
            };
        };

        return random_color_style;
    }
};

