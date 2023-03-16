 /*
    * Geomatria: Crea un objeto THREE.Geometry y lo retorna
    *ENTRADAS: vx = arreglo de vertiuces (arreglo de arrego de enteros)
    *SALIDA: geom = Objeto THREE.Geometry, generado a partir de vx
    */ 
    function Geometria(vx) {
        geon = new THREE.Geometry();
       
            for (let i = 0; i < vx.length; ++i) {
                x = vx[i][0];
                y = vx[i][1];
                z = vx[i][2];
                vector = new THREE.Vector3(x, y, z);
                geon.vertices.push(vector); // atributo en THREE.Geometry se llama vertices
            }
            return geon;
        }
       /*
       *Traslacion : Crea la matriz de traslacion a partir de vector vt
       * ENTRADAS: vt = Vector de traslacion (arreglo de 3 enteros)
       *  SALIDA: matriz = Matriz de traslacion generada a partir de vt
       */
       
            function Traslacion(vt) {
                    var matriz = new THREE.Matrix4();
                    matriz.set(1, 0, 0, vt[0],
                            0, 1, 0, vt[1],
                            0, 0, 1, vt[2],
                            0, 0, 0, 1);
                    return matriz;
            }
    
         /*
       *Escalado : Crea la matriz de escalado a partir de vector vs
       * ENTRADAS: vs = Vector de traslacion (arreglo de 3 enteros)
       *  SALIDA: matriz = Matriz de traslacion generada a partir de vs
       */
       
            function Escalado(vs) {
                var matrizS = new THREE.Matrix4();
                matrizS.set(vs[0], 0, 0, 0,
                            0, vs[1], 0, 0,
                            0, 0, vs[2], 0,
                            0, 0, 0, 1);
                return matrizS;
            }    
       

            /**
             * EscaladoReal: Escal
             * ENTRADAS:  objeto obj de tipo ??
             *          vp = Vector de posición inicial de obj (Arreglo de 3 enteros)
             *          vs = Vector de escalado (Arreglo de 3 enteros)
             * SALIDA:   obj actualizado
             */
            function EscaladoReal(obj, vp, vs)  {
                vt = [-vp[0], -vp[1], -vp[2]];
                obj.applyMatrix(Traslacion(vt));   // Traslacion de obj al origen (0,0,0)
                obj.applyMatrix(Escalado(vs));     // Escalado de obj
                obj.applyMatrix(Traslacion(vp));   // Traslacion al punto inicial

            
            }
       
    
            function RotacionX(angulo) {
                var beta = angulo;
                var kos = Math.cos(beta);
                var zin = Math.sin(beta);
                var matriz = new THREE.Matrix4();
                matriz.set (1,0, 0, 0,
                    0, kos, -zin, 0,
                    0, zin, kos, 0,
                    0 , 0, 0, 1
                    )
                    return matriz;
                
            }

            function RotacionY(angulo) {
                var beta = angulo;
                var kos = Math.cos(beta);
                var zin = Math.sin(beta);
                var matriz = new THREE.Matrix4();
                matriz.set (kos,0, zin, 0,
                    0, 1, 0, 0,
                    -zin, 0, kos, 0,
                    0 , 0, 0, 1
                    )
                    return matriz;
                
            }

            function RotacionZ(angulo) {
                var beta = angulo;
                var kos = Math.cos(beta);
                var zin = Math.sin(beta);
                var matriz = new THREE.Matrix4();
                matriz.set (kos,-zin, 0, 0,
                    zin, kos, 0, 0,
                    0, 0, 1, 0,
                    0 , 0, 0, 1
                    )
                    return matriz;
                
            }


            function RotacionRealX(obj, vp, angulo)  {
                vt = [-vp[0], -vp[1], -vp[2]];
                obj.applyMatrix(Traslacion(vt));   // Traslacion de obj al origen (0,0,0)
                obj.applyMatrix(RotacionX(angulo));     // Rotacion
                obj.applyMatrix(Traslacion(vp));   // Traslacion al punto inicial

            }

            function RotacionRealY(obj, vp, angulo)  {
                vt = [-vp[0], -vp[1], -vp[2]];
                obj.applyMatrix(Traslacion(vt));   // Traslacion de obj al origen (0,0,0)
                obj.applyMatrix(RotacionY(angulo));     // Rotacion
                obj.applyMatrix(Traslacion(vp));   // Traslacion al punto inicial

            }

            function RotacionRealZ(obj, vp, angulo)  {
                vt = [-vp[0], -vp[1], -vp[2]];
                obj.applyMatrix(Traslacion(vt));   // Traslacion de obj al origen (0,0,0)
                obj.applyMatrix(RotacionZ(angulo));     // Rotacion
                obj.applyMatrix(Traslacion(vp));   // Traslacion al punto inicial

            }


       