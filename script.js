const carrito = []

const deMenorAMayor = () => {


    cuadros.sort((a, b) => a.precio - b.precio)
    imprimirListaProductos()
};

const imprimirListaProductos = () => {

    const listaCuadros = cuadros.map(cuadro => {
        return '-'+cuadro.descripcion+' a $ '+cuadro.precio+ ' pesitos argentinos';

    })
   
    alert('Cuadros disponibles: '+'\n\n'+listaCuadros.join('\n'))
    comprarCuadros(listaCuadros)

};

const comprarCuadros = (listaCuadros) => {
    let cuadroNombre = ''
    let cuadroCantidad = 0
    let otroCuadro = false

    do {
        cuadroNombre = prompt('Qué cuadro vas a comprar?'+'\n\n'+listaCuadros.join('\n')+'Selecciones escribiendo "Messi", "Di María", "Dibu Martínez", o "Mac Allister"' )
        cuadroCantidad = parseInt(prompt('¿Cuántos queres comprar?'))  
        
        
        const cuadro = cuadros.find(cuadro => cuadro.nombre.toLowerCase() == cuadroNombre.toLocaleLowerCase())

        if (cuadro) {

            agregarAlCarrito(cuadro, cuadro.id, cuadroCantidad)

        } else {
            alert('No tenemos ese cuadro, elegí entre los cuatros disponibles en la lista')
        }

        console.log(cuadro)
        otroCuadro = confirm('¿Desea agregar otro producto?')      
    } while (otroCuadro);

};

const agregarAlCarrito = (cuadro, cuadroId, cuadroCantidad) => {

     const cuadroRepetido = carrito.find(cuadro => cuadro.id === cuadroId)

     if (cuadroRepetido) {
        cuadroRepetido.cantidad += cuadroCantidad
     } else {
        cuadro.cantidad += cuadroCantidad
        carrito.push(cuadro)
                
     }
     console.log(carrito)
};



deMenorAMayor()

