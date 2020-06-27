import React from "react";
import Matter, { Body, Events } from "matter-js";
import './Game.scss';

class Game extends React.Component {
    constructor(props) {
        super(props);
        
        // Create variables
        this.canvas = React.createRef();
        this.mainDiv = React.createRef();
        this.keyMap = {};
        this.playerCollision = false;
    }

    componentDidMount() {
        // Create variables for main matter.js classes
        this.Engine = Matter.Engine;
        this.Render = Matter.Render;
        this.World = Matter.World;
        this.Bodies = Matter.Bodies;

        // Create the game engine
        var engine = this.Engine.create();

        // Update the size of the canvas
        this.updateDimensions();

        // Instantiate the rendering engine
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

        // Create game objects
        var player = this.Bodies.rectangle(400, 400, 32, 64, { inertia: Infinity }),
            ground1 = this.Bodies.rectangle(1008, 800, 512, 108, { isStatic: true }),
            ground2 = this.Bodies.rectangle(400, 512, 400, 108, { isStatic: true }),
            ground3 = this.Bodies.rectangle(1616, 512, 400, 108, { isStatic: true });

        // Add game objects to world
        this.gameBodies = { player, ground1, ground2, ground3 };
        this.World.add(engine.world, Object.values(this.gameBodies));

        // Move character on each tick
        Events.on(engine, 'beforeUpdate', () => this.moveCharacter());
        
        // Check for collision of character
        Events.on(engine, 'collisionStart', (event) => this.collisionActive(event));
        Events.on(engine, 'collisionEnd', (event) => this.collisionEnd(event));

        // Run the engine and renderer
        this.Engine.run(engine);
        this.Render.run(render);

        // Add event listeners
        window.addEventListener('resize', this.updateDimensions);
        window.addEventListener('keydown', this.keyDown);
        window.addEventListener('keyup', this.keyUp);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions);
    }

    // Updates dimensions to the current width and height
    updateDimensions = () => {
        this.canvas.current.width = window.innerWidth;
        this.canvas.current.height = window.innerHeight;
    }

    // Sets key pressed to true
    keyDown = (event) => {
        this.keyMap[event.keyCode] = true;
    }

    // Sets key pressed to false
    keyUp = (event) => {
        this.keyMap[event.keyCode] = false;
    }

    // Sets player collision to true
    collisionActive = (event) => {
        this.playerCollision = true;
    }

    // Sets player collision to false
    collisionEnd = (event) => {
        this.playerCollision = false;
    }

    // Sets the velocity of the player if a key is pressed
    // and specific conditions are met
    moveCharacter = () => {
        if (this.keyMap[39]) Body.setVelocity(this.gameBodies.player, { x: (this.keyMap[17] ? 10 : 5), y: this.gameBodies.player.velocity.y });
        if (this.keyMap[37]) Body.setVelocity(this.gameBodies.player, { x: (this.keyMap[17] ? -10 : -5), y: this.gameBodies.player.velocity.y });
        // TODO: add double jump
        if ((this.keyMap[38] || this.keyMap[32]) && this.playerCollision) Body.setVelocity(this.gameBodies.player, { x: this.gameBodies.player.velocity.x, y: -10 });
        if (this.keyMap[40]) Body.setVelocity(this.gameBodies.player, { x: this.gameBodies.player.velocity.x, y: 10 });
    }

    // Renders the game object
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