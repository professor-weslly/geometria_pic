var scene, camera, renderer;

function init() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, 400 / 400, 0.1, 1000);
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(400, 400);
    document.getElementById('canvasContainer').innerHTML = '';
    document.getElementById('canvasContainer').appendChild(renderer.domElement);
    camera.position.z = 5;
}

function animate() {
    requestAnimationFrame(animate);

    // Atualiza todos os objetos na cena
    scene.traverse(function (object) {
        if (object.isMesh) {
            object.rotation.x += 0.01;
            object.rotation.y += 0.01;
        }
    });

    renderer.render(scene, camera);
}

function limparCena() {
    while (scene.children.length > 0) {
        scene.remove(scene.children[0]);
    }
}

function mostrarDescricao(texto) {
    var descricao = document.getElementById('sólidoDescription');
    descricao.innerHTML = texto;
    descricao.style.display = 'block';
}

function desenharCubo() {
    limparCena();
    var geometry = new THREE.BoxGeometry();
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
    var cubo = new THREE.Mesh(geometry, material);
    scene.add(cubo);
    mostrarDescricao("Um cubo é um sólido geométrico composto por seis faces quadradas iguais. Todos os ângulos internos são ângulos retos, e todas as arestas têm o mesmo comprimento.");
    animate();
}

function desenharCilindro() {
    limparCena();
    var geometry = new THREE.CylinderGeometry(1, 1, 2, 32);
    var material = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true });
    var cilindro = new THREE.Mesh(geometry, material);
    scene.add(cilindro);
    mostrarDescricao("Um cilindro é um sólido geométrico com duas bases circulares paralelas e uma superfície lateral que as conecta. As bases têm o mesmo tamanho e forma, e a altura é a distância entre elas.");
    animate();
}

function desenharCone() {
    limparCena();
    var geometry = new THREE.ConeGeometry(1, 2, 32);
    var material = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true });
    var cone = new THREE.Mesh(geometry, material);
    scene.add(cone);
    mostrarDescricao("Um cone é um sólido geométrico com uma base circular e uma superfície lateral que se afunila até um ponto chamado vértice. A altura é a distância perpendicular do vértice à base.");
    animate();
}

function desenharPiramide() {
    limparCena();
    var geometry = new THREE.TetrahedronGeometry();
    var material = new THREE.MeshBasicMaterial({ color: 0xffff00, wireframe: true });
    var piramide = new THREE.Mesh(geometry, material);
    scene.add(piramide);
    mostrarDescricao("Uma pirâmide é um sólido geométrico com uma base poligonal e faces triangulares que se encontram em um ponto comum chamado vértice. A altura é a distância perpendicular do vértice à base.");
    animate();
}

function desenharPrisma() {
    limparCena();
    var geometry = new THREE.BoxGeometry(1, 1, 2);
    var material = new THREE.MeshBasicMaterial({ color: 0xff00ff, wireframe: true });
    var prisma = new THREE.Mesh(geometry, material);
    scene.add(prisma);
    mostrarDescricao("Um prisma é um sólido geométrico com duas bases poligonais paralelas e faces laterais retangulares. A altura é a distância perpendicular entre as bases.");
    animate();
}

function desenharEsfera() {
    limparCena();
    var geometry = new THREE.SphereGeometry(1, 32, 32);
    var material = new THREE.MeshBasicMaterial({ color: 0x00ffff, wireframe: true });
    var esfera = new THREE.Mesh(geometry, material);
    scene.add(esfera);
    mostrarDescricao("Uma esfera é um sólido geométrico perfeitamente redondo, onde todos os pontos na superfície estão a uma distância igual do centro. O raio é a distância do centro até qualquer ponto na superfície.");
    animate();
}

function desenharParalelepipedo() {
    limparCena();
    var geometry = new THREE.BoxGeometry(2, 1, 1);
    var material = new THREE.MeshBasicMaterial({ color: 0xffa500, wireframe: true });
    var paralelepipedo = new THREE.Mesh(geometry, material);
    scene.add(paralelepipedo);
    mostrarDescricao("Um paralelepípedo é um sólido geométrico com seis faces retangulares. Todas as suas arestas opostas são iguais e paralelas.");
    animate();
}

// Initialize the scene
init();
