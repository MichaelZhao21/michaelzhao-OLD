import React from "react";
import Matter, { Body, Events } from "matter-js";
import Render from './Render';
import './Game.scss';
import stage from './stage.json';

class Game extends React.Component {
    constructor(props) {
        super(props);
        
        // Create variables
        this.canvas = React.createRef();
        this.mainDiv = React.createRef();
        this.keyMap = {};
        this.jumpCount = 0;
    }

    componentDidMount() {
        // Create variables for main matter.js classes
        this.Engine = Matter.Engine;
        this.Render = Render;
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
                wireframes: true,
                showAngleIndicator: true
            }
        });

        // Create player
        this.player = this.Bodies.rectangle(400, 400, 32, 64, { inertia: Infinity });
        
        // Create stage objects
        this.gameBodies = [this.player];
        for (var i = 0; i < stage.platforms.length; i++) {
            if (stage.platforms[i][0] === "rect")
                this.gameBodies.push(this.Bodies.rectangle(stage.platforms[i][1], stage.platforms[i][2], stage.platforms[i][3], stage.platforms[i][4], { isStatic: true }));
        }

        // Add game objects to world
        this.World.add(engine.world, this.gameBodies);

        // Run main game loop
        Events.on(engine, 'beforeUpdate', () => this.loop());
        
        // Check when character lands on the ground
        Events.on(engine, 'collisionActive', (event) => this.collisionActive(event));

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

    // Main game loop
    loop = () => {
        // Move character
        this.moveCharacter();
    }

    // Sets the velocity of the player if a key is pressed
    // and specific conditions are met
    moveCharacter = () => {
        // Directional movement 
        if (this.keyMap[39]) Body.setVelocity(this.player, { x: this.keyMap[17] ? 10 : 5, y: this.player.velocity.y });
        if (this.keyMap[37]) Body.setVelocity(this.player, { x: this.keyMap[17] ? -10 : -5, y: this.player.velocity.y });
        if (this.keyMap[40]) Body.setVelocity(this.player, { x: this.player.velocity.x, y: 10 });
     
        // Jumping :D
        if ((this.keyMap[38] || this.keyMap[32]) && this.jumpCount < 2) {
            Body.setVelocity(this.player, { x: this.player.velocity.x, y: -10 });
            this.keyMap[38] = false;
            this.keyMap[32] = false;
            this.jumpCount++;
        }
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
    collisionActive = () => {
        this.jumpCount = 0;
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