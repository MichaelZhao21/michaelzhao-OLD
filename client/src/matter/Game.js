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
        this.playerOnGround = false;
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

    collisionStart = (event) => {
        var pairs = event.pairs;
        for (var i = 0; i < pairs.length; i++) {
            var pair = pairs[i];
            if ((pair.bodyA === this.gameBodies.bodyA && pair.bodyB === this.gameBodies.ground) ||
                (pair.bodyB === this.gameBodies.bodyA && pair.bodyA === this.gameBodies.ground)) {
                this.playerOnGround = true;
            }
        }
    }

    collisionEnd = (event) => {
        var pairs = event.pairs;
        for (var i = 0; i < pairs.length; i++) {
            var pair = pairs[i];
            if ((pair.bodyA === this.gameBodies.bodyA && pair.bodyB === this.gameBodies.ground) ||
                (pair.bodyB === this.gameBodies.bodyA && pair.bodyA === this.gameBodies.ground)) {
                this.playerOnGround = false;
            }
        }
    }

    moveCharacter = () => {
        if (this.keyMap[39]) Body.setVelocity(this.gameBodies.bodyA, { x: (this.keyMap[17] ? 5 : 2.5), y: this.gameBodies.bodyA.velocity.y });
        if (this.keyMap[37]) Body.setVelocity(this.gameBodies.bodyA, { x: (this.keyMap[17] ? -5 : -2.5), y: this.gameBodies.bodyA.velocity.y });
        if ((this.keyMap[38] || this.keyMap[32]) && this.playerOnGround) Body.setVelocity(this.gameBodies.bodyA, { x: this.gameBodies.bodyA.velocity.x, y: -10 });
        if (this.keyMap[40]) Body.setVelocity(this.gameBodies.bodyA, { x: this.gameBodies.bodyA.velocity.x, y: 10 });
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

        this.gameBodies = { bodyA, ground };

        this.World.add(engine.world, Object.values(this.gameBodies));

        Events.on(engine, 'beforeUpdate', () => this.moveCharacter());
        Events.on(engine, 'collisionStart', (event) => this.collisionStart(event));
        Events.on(engine, 'collisionEnd', (event) => this.collisionEnd(event));
        // Events.on(engine, 'collisionActive', (event) => console.log(event));

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
                <p id="hi">Hi use arrow keys to move around and hold control to go faster!</p>
                <div ref={this.divRef}>
                    <canvas ref={this.canvas}></canvas>
                </div>
            </div>
        )
    }
}

export default Game;