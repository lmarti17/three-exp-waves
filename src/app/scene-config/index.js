import Terrain from '../terrain';

const THREE = require('three');
const OrbitControls = require('three-orbit-controls')(THREE);

export default class SceneConfig {

	constructor() {

		this.props = {};
		this.mouse = {};

		this.props.raf = null;
		this.props.scene = new THREE.Scene();

		this.props.aspect = window.innerWidth / window.innerHeight;
		this.props.camera = new THREE.PerspectiveCamera(75, this.props.aspect, 0.1, 1000);

		this.props.scene.add(new THREE.AxisHelper(5));

		this.props.renderer = new THREE.WebGLRenderer();
		this.props.renderer.setSize(window.innerWidth, window.innerHeight);
		document.querySelector('#application').appendChild(this.props.renderer.domElement);

		this.terrain = new Terrain();
		this.props.scene.add(this.terrain.mesh); // ADD MESH TO SCENE

		this.props.raycaster = new THREE.Raycaster();

		this.controls = new OrbitControls(this.props.camera);
		this.props.camera.position.set(0, -10, 20);
		this.mouseMove();

		this.bind();

	}

	bind() {

		this.render = this.render.bind(this);

	}

	start() {

		this.props.raf = window.requestAnimationFrame(this.render);

	}

	stop() {

		if (typeof this.props.raf !== 'undefined' && this.props.raf !== null) {

			window.cancelAnimationFrame(this.props.raf);

			this.props.raf = null;

		}

	}

	render(now) {

		this.props.raf = window.requestAnimationFrame(this.render);

		this.terrain.render(now, this.intersects);
		this.controls.update();
		this.props.renderer.render(this.props.scene, this.props.camera);

	}

	mouseMove() {

		document.addEventListener('mousemove', (event) => {

			this.mouse.x = ((event.clientX / this.props.renderer.domElement.clientWidth) * 2) - 1;
			this.mouse.y = -((event.clientY / this.props.renderer.domElement.clientHeight) * 2) + 1;

			this.props.raycaster.setFromCamera(this.mouse, this.props.camera);

			// See if the ray from the camera into the world hits one of our meshes
			const intersects = this.props.raycaster.intersectObject(this.terrain.mesh);

			// Toggle rotation bool for meshes that we clicked
			if (intersects.length > 0) {

				this.intersects = intersects;

			}

		});

	}

}
