
function init() {
    
    // Escena
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);    
    renderer = new THREE.WebGLRenderer();
    renderer.setClearColor(0x000000, 1.0);
    renderer.setSize(window.innerWidth, window.innerHeight);

    var size = 700;
    var arrowSize = 40;
    var divisions = 20;
    var origin = new THREE.Vector3( 0, 0, 0 );
    var x = new THREE.Vector3( 1, 0, 0 );
    var y = new THREE.Vector3( 0, 1, 0 );
    var z = new THREE.Vector3( 0, 0, 1 );
    var color2 = new THREE.Color( 0x333333 );  /// 0x333333
    var colorR = new THREE.Color( 0xAA0000 );
    var colorG = new THREE.Color( 0x00AA00 );
    var colorB = new THREE.Color( 0x0000AA );

    //Crear la Grilla
    var gridHelperXZ = new THREE.GridHelper( size, divisions, color2, color2);

    //Flechas
    var arrowX = new THREE.ArrowHelper( x, origin, arrowSize, colorR );
    var arrowY = new THREE.ArrowHelper( y, origin, arrowSize, colorG );
    var arrowZ = new THREE.ArrowHelper( z, origin, arrowSize, colorB );
        
    //Cámara
    camera.position.x = 100;
    camera.position.y = 300;
    camera.position.z = 700;
    camera.lookAt(scene.position);

   
    // Colores
    color = [{color:0xFF0000},{color:0x00FF00},{color:0x0000FF}];

    //Geometria para las piramides
    lado = 40; // Lado de la piramide
    h = 50; // Altura de la piramide
    [v1,v2,v3,v4,v5]= [[0,0,0],[lado,0,0],[lado,0,lado],[0,0,lado],[lado/2,h, lado/2]];
    vertices = [v1, v2, v3, v4, v5, v1, v4, v3, v5, v2]; //Saeucnecia del trasado de vertices
    geom = Geometria (vertices);
    //Materailes para las piramedes
    material=[];
    for (i = 0; i < 2; i++) {
        material.push(new THREE.ParticleBasicMaterial(color[i]));
        
    } 
        
    // figuras par las piramides
    fig=[];
    vt = [2*lado,2*lado,0];
    for (i = 0; i < 2; i++) {
        fig.push(new THREE.Line(geon,material[i]));
        fig[i].applyMatrix(Traslacion(vt));
    } 
     

    // Rotar una de las piramides sobre el eje x

    EscaladoReal(fig[1], vt, [1.5, 1.5, 1.5]);   //


    RotacionRealX(fig[1], vt, Math.PI/4);      //ROTACIONES EN X,Y,Z

    
    RotacionRealY(fig[1], vt, Math.PI/4);

    
    RotacionRealZ(fig[1], vt, Math.PI/3);



    // En el documento HTML
    document.body.appendChild(renderer.domElement);

    // Agregar elementos al escenario
    scene.add(gridHelperXZ);
    scene.add(arrowX);  
    scene.add(arrowY);  
    scene.add(arrowZ);
    for (i = 0; i <2; i++) {
        scene.add(fig[i]);
        
    }

    renderer.render(scene, camera);
}

init();  // otra forma: window.onload = init;
