import React from "react";
import Matter from "matter-js";
import './Scene.scss';

class Scene extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        var Engine = Matter.Engine,
            Render = Matter.Render,
            World = Matter.World,
            Bodies = Matter.Bodies;

        var engine = Engine.create();

        var render = Render.create({
            element: this.refs.scene,
            engine: engine,
            options: {
                width: 600,
                height: 600,
                wireframes: false
            }
        });

        var boxA = Bodies.rectangle(400, 200, 80, 80);
        var boxB = Bodies.rectangle(450, 50, 80, 80);
        var ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true });

        World.add(engine.world, [boxA, boxB, ground]);
        Engine.run(engine);
        Render.run(render);
    }

    render() {
        return <div ref="scene" />;
    }
}

export default Scene;