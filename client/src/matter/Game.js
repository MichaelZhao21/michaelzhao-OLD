import React from "react";
import Matter, { Body, Events } from "matter-js";

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.canvas = React.createRef();
        this.mainDiv = React.createRef();
        this.keyMap = {};
    }

    updateDimensions = () => {
        this.canvas.current.width = window.innerWidth;
        this.canvas.current.height = window.innerHeight;
    }

    keyDown = (event) => {
        this.keyMap[event.keyCode] = true;
        console.log(event.keyCode)
    }

    keyUp = (event) => {
        this.keyMap[event.keyCode] = false;
    }

    moveCharacter = () => {
        if (this.keyMap[39]) Body.setVelocity(this.gameBodies[0], { x: (this.keyMap[17] ? 5 : 2.5), y: this.gameBodies[0].velocity.y });
        if (this.keyMap[37]) Body.setVelocity(this.gameBodies[0], { x: (this.keyMap[17] ? -5 : -2.5), y: this.gameBodies[0].velocity.y });
        if (this.keyMap[38] || this.keyMap[32]) Body.setVelocity(this.gameBodies[0], { x: this.gameBodies[0].velocity.x, y: -10 });
        if (this.keyMap[40]) Body.setVelocity(this.gameBodies[0], { x: this.gameBodies[0].velocity.x, y: 10 });
    }

    groundCollision = () => {
        
    }

    componentDidMount() {
        this.Engine = Matter.Engine;
        this.Render = Matter.Render;
        this.World = Matter.World;
        this.Bodies = Matter.Bodies;

        var engine = this.Engine.create();

        this.updateDimensions();

        var render = this.Render.create({
            element: this.mainDiv.current,
            canvas: this.canvas.current,
            engine: engine,
            options: {
                width: this.canvas.current.width,
                height: this.canvas.current.height,
                wireframes: true
            }
        });

        var bodyA = this.Bodies.rectangle(400, 200, 80, 80, { inertia: Infinity }),
            bodyB = this.Bodies.rectangle(450, 50, 80, 80),
            ground = this.Bodies.rectangle(500, 500, 3000, 100, { isStatic: true });

        this.gameBodies = [bodyA, bodyB, ground];

        this.World.add(engine.world, this.gameBodies);

        const moveCharacter = this.moveCharacter;
        Events.on(engine, 'beforeUpdate', function(event) {
            moveCharacter();
        })

        this.Engine.run(engine);
        this.Render.run(render);

        window.addEventListener('resize', this.updateDimensions);
        window.addEventListener('keydown', this.keyDown);
        window.addEventListener('keyup', this.keyUp);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions);
    }

    render() {
        return (
            <div>
                <div ref={this.divRef}>
                    <canvas ref={this.canvas}></canvas>
                </div>
            </div>
        )
    }
}

export default Game;