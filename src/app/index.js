import SceneConfig from './scene-config';

export default class App {

	constructor() {

		this.init();

	}

	init() {

		console.log('App started');

		// const terrain = new Terrain();
		const scene = new SceneConfig();
		scene.start();

		console.log(scene);

	}
}
