import React from "react";
import { Body, Events, Engine, World, Bodies, Vector, Bounds } from "matter-js";
import Render from './Render';
import './Game.scss';
import stage from './stage.json';
import ghost from './textures/BlueGhost.png';
import { ReactComponent as DirButton } from './textures/direction_button.svg';

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
        this.Engine = Engine;
        this.Render = Render;
        this.World = World;
        this.Bodies = Bodies;
        this.Bounds = Bounds;

        // Create the game engine
        var engine = this.Engine.create();

        // Update the size of the canvas
        this.updateDimensions();

        // Instantiate the rendering engine
        this.render = this.Render.create({
            element: this.mainDiv.current,
            canvas: this.canvas.current,
            engine: engine,
            options: {
                width: this.canvas.current.width,
                height: this.canvas.current.height,
                wireframes: false,
                hasBounds: true,
                background: "#E2CBFF"
            }
        });

        // Create player
        this.player = this.Bodies.rectangle(400, 400, 32, 64, { inertia: Infinity, friction: 0.05 });
        this.player.render.sprite.texture = ghost;

        // Create stage objects
        this.gameBodies = [this.player];
        for (var i = 0; i < stage.platforms.length; i++) {
            if (stage.platforms[i][0] === "rect")
                this.gameBodies.push(this.Bodies.rectangle(
                    stage.platforms[i][1],
                    stage.platforms[i][2],
                    stage.platforms[i][3],
                    stage.platforms[i][4],
                    { isStatic: true }
                ));
        }

        // Add game objects to world
        this.World.add(engine.world, this.gameBodies);
        this.world = engine.world;

        // Get the center of the world
        this.viewCenter = {
            x: this.render.options.width * .5,
            y: this.render.options.height * .5
        }

        // Increase world bounds
        this.world.bounds.min.x = -4096;
        this.world.bounds.min.y = -4096;
        this.world.bounds.max.x = 4096;
        this.world.bounds.max.y = 4096;

        // Run main game loop
        Events.on(engine, 'beforeUpdate', () => this.loop());

        // Check when character lands on the ground
        Events.on(engine, 'collisionActive', (event) => this.collisionActive(event));

        // Run the engine and renderer
        this.Engine.run(engine);
        this.Render.run(this.render);

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

        // Translate viewport to the player's new position
        this.moveView();
    }

    // Sets the velocity of the player if a key is pressed
    // and specific conditions are met
    moveCharacter = () => {
        // Directional movement
        var sprint = this.keyMap[17] ? 10 : 5;
        if (this.keyMap[39]) Body.setVelocity(this.player, { x: Math.min(this.player.velocity.x + 1.5, sprint), y: this.player.velocity.y });
        if (this.keyMap[37]) Body.setVelocity(this.player, { x: Math.max(this.player.velocity.x - 1.5, -sprint), y: this.player.velocity.y });

        // Jumping :D
        if ((this.keyMap[38] || this.keyMap[32]) && this.jumpCount < 2) {
            if (this.player.velocity.y < -10) {
                this.keyMap[38] = false;
                this.keyMap[32] = false;
                this.jumpCount++;
            }
            else {
                Body.setVelocity(this.player, { x: this.player.velocity.x, y: this.player.velocity.y - 3 });
            }
        }
    }

    // Translate viewport to the player's new position
    moveView = () => {
        // Update view center
        this.viewCenter = {
            x: (this.render.bounds.max.x + this.render.bounds.min.x) * .5,
            y: (this.render.bounds.max.y + this.render.bounds.min.y) * .5
        }

        var translate = Vector.sub(this.player.position, this.viewCenter);
        // // TODO: Prevent player from going out of bounds
        // if (this.render.bounds.min.x + translate.x < this.world.bounds.min.x)
        //     translate.x = this.world.bounds.min.x - this.render.bounds.min.x;

        // if (this.render.bounds.max.x + translate.x > this.world.bounds.max.x)
        //     translate.x = this.world.bounds.max.x - this.render.bounds.max.x;

        // if (this.render.bounds.min.y + translate.y < this.world.bounds.min.y)
        //     translate.y = this.world.bounds.min.y - this.render.bounds.min.y;

        // if (this.render.bounds.max.y + translate.y > this.world.bounds.max.y)
        //     translate.y = this.world.bounds.max.y - this.render.bounds.max.y;

        // Update bounds
        this.Bounds.translate(this.render.bounds, translate);
    }

    // Updates dimensions to the current width and height
    updateDimensions = () => {
        this.canvas.current.width = window.innerWidth;
        this.canvas.current.height = window.innerHeight;
    }

    // Sets key pressed to true
    keyDown = (event) => { this.keyMap[event.keyCode] = true }

    // Sets key pressed to false
    keyUp = (event) => { this.keyMap[event.keyCode] = false }

    // Sets player collision to true
    collisionActive = () => {
        this.jumpCount = 0;
    }

    // Checks if the device is touchscreen or not
    isTouchDevice = () => {
        var prefixes = ' -webkit- -moz- -o- -ms- '.split(' ');
        
        var mq = function (query) {
            return window.matchMedia(query).matches;
        }
    
        // Removed document touch bc it's deprecated in Gecko 25
        if ('ontouchstart' in window) {
            return true;
        }
    
        var query = ['(', prefixes.join('touch-enabled),('), 'hi', ')'].join('');
        return mq(query);
    }

    // Show UI buttons on mobile devices
    displayUIButtons = () => {
        if (this.isTouchDevice()) {
            return (
                <div id="ui-buttons">
                    <button className="ui-button-wrapper" onMouseDown={() => this.mouseDown(38)} onMouseUp={() => this.mouseUp(38)} onTouchStart={() => this.mouseDown(38)} onTouchEnd={() => this.mouseUp(38)}><DirButton className="ui-button up-button" /></button>
                    <button className="ui-button-wrapper" onMouseDown={() => this.mouseDown(37)} onMouseUp={() => this.mouseUp(37)} onTouchStart={() => this.mouseDown(37)} onTouchEnd={() => this.mouseUp(37)}><DirButton className="ui-button left-button" /></button>
                    <button className="ui-button-wrapper" onMouseDown={() => this.mouseDown(39)} onMouseUp={() => this.mouseUp(39)} onTouchStart={() => this.mouseDown(39)} onTouchEnd={() => this.mouseUp(39)}><DirButton className="ui-button right-button" /></button>
                </div>
            )
        }
        return null;
    }

    mouseDown = (code) => { this.keyMap[code] = true }

    mouseUp = (code) => { this.keyMap[code] = false }

    // Renders the game object
    // TODO: figure out how to ACTUALLY write text
    render() {
        return (
            <div>
                {this.displayUIButtons()}
                <div ref={this.divRef}>
                    <canvas ref={this.canvas}></canvas>
                </div>
            </div>
        )
    }
}

export default Game;