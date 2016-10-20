// import tweenmax from 'gsap';

const THREE = require('three');

export default class Terrain {

	constructor() {

		this.AMOUNTX = 32;
		this.AMOUNTY = 32;

		this.geometry = new THREE.PlaneGeometry(50, 50, this.AMOUNTX, this.AMOUNTY);
		this.material = new THREE.MeshBasicMaterial({
			color: 0xAAAAAA,
			wireframe: true,
		});

		this.mesh = new THREE.Mesh(this.geometry, this.material);

	}

	animate(now, intersects) {

		let i = this.geometry.vertices.length;
		const rayX = intersects[0].point.x;
		const rayY = intersects[0].point.y;

		while (i--) {

			const current = this.geometry.vertices[i];

			const distance = Math.sqrt(Math.pow(rayX - current.x, 2) + Math.pow(rayY - current.y, 2));

			const z = Math.sin((current.x / 5) + (now * 0.001)) + Math.sin((current.y / 5) + (now * 0.001)) + (1 / distance);

			current.z = z;

		}

	}

	render(now, intersects) {

		this.animate(now, intersects);

		this.geometry.verticesNeedUpdate = true;
		this.geometry.computeFaceNormals();

	}

}
