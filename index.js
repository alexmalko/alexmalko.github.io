// engine set up
const { Engine, Render, Runner, World, Bodies, MouseConstraint, Mouse } = Matter;

const width = window.innerWidth;
const height = window.innerHeight;

const engine = Engine.create();
const { world } = engine;
const render = Render.create({
	element: document.body,
	engine: engine,
	options: {
		wireframes: false,
		width,
		height
	}
});

Render.run(render);
Runner.run(Runner.create(), engine);

World.add(
	world,
	MouseConstraint.create(engine, {
		mouse: Mouse.create(render.canvas)
	})
);

// walls
const walls = [
	Bodies.rectangle(width / 2, 0, width, 2, { isStatic: true }),
	Bodies.rectangle(width / 2, height, width, 2, { isStatic: true }),
	Bodies.rectangle(0, height / 2, 2, height, { isStatic: true }),
	Bodies.rectangle(width, height / 2, 2, height, { isStatic: true })
];
World.add(world, walls);

// randon shapes
for (let i = 0; i < 50; i++) {
	if (Math.random() > 0.5) {
		World.add(world, Bodies.rectangle(Math.random() * width, Math.random() * height, 50, 50));
	} else {
		World.add(world, Bodies.circle(Math.random() * width, Math.random() * height, 35));
	}
}
