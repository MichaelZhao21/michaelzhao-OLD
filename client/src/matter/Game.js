import React from "react";
import Matter, { Body, Events } from "matter-js";
import './Game.scss';

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.canvas = React.createRef();
        this.mainDiv = React.createRef();
        this.keyMap = {};
        this.playerCollision = false;
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

        var bodyA = this.Bodies.rectangle(400, 400, 32, 64, { inertia: Infinity }),
            bodyB = this.Bodies.circle(500, 400, 40),
            ground = this.Bodies.rectangle(500, 500, 3000, 100, { isStatic: true }),
            ceiling = this.Bodies.rectangle(500, 200, 3000, 100, { isStatic: true });

        this.gameBodies = { bodyA, bodyB, ground, ceiling };

        this.World.add(engine.world, Object.values(this.gameBodies));

        Events.on(engine, 'beforeUpdate', () => this.moveCharacter());
        Events.on(engine, 'collisionStart', (event) => this.collisionActive(event));
        Events.on(engine, 'collisionEnd', (event) => this.collisionEnd(event));

        this.Engine.run(engine);
        this.Render.run(render);

        window.addEventListener('resize', this.updateDimensions);
        window.addEventListener('keydown', this.keyDown);
        window.addEventListener('keyup', this.keyUp);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions);
    }

    updateDimensions = () => {
        this.canvas.current.width = window.innerWidth;
        this.canvas.current.height = window.innerHeight;
    }

    keyDown = (event) => {
        this.keyMap[event.keyCode] = true;
    }

    keyUp = (event) => {
        this.keyMap[event.keyCode] = false;
    }

    collisionActive = (event) => {
        this.playerCollision = true;
    }

    collisionEnd = (event) => {
        this.playerCollision = false;
    }

    moveCharacter = () => {
        if (this.keyMap[39]) Body.setVelocity(this.gameBodies.player, { x: (this.keyMap[17] ? 5 : 2.5), y: this.gameBodies.player.velocity.y });
        if (this.keyMap[37]) Body.setVelocity(this.gameBodies.player, { x: (this.keyMap[17] ? -5 : -2.5), y: this.gameBodies.player.velocity.y });
        if ((this.keyMap[38] || this.keyMap[32]) && this.playerCollision) Body.setVelocity(this.gameBodies.player, { x: this.gameBodies.player.velocity.x, y: -10 });
        if (this.keyMap[40]) Body.setVelocity(this.gameBodies.player, { x: this.gameBodies.player.velocity.x, y: 10 });
    }

    // TODO: figure out how to ACTUALLY write text
    render() {
        return (
            <div>
                <p id="hi">Hi use arrow keys to move around and hold control to go faster!</p>
                <div ref={this.divRef}>
                    <canvas ref={this.canvas}></canvas>
                </div>
            </div>
        )
    }
}

export default Game;