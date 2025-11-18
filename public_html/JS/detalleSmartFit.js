document.addEventListener('DOMContentLoaded', () => {
    // Apuntamos a los contenedores principales (asumiendo que el HTML ya tiene el contenido)
    const detalleContainer = document.querySelector('.detalle-main-container');
    const planTarjetas = document.querySelectorAll('.tarjeta-plan');
    const btnInscripcion = document.querySelector('.btn-inscripcion');

    // --- Funcionalidad 1: Resaltar Plan Seleccionado ---
    planTarjetas.forEach(tarjeta => {
        tarjeta.addEventListener('click', () => {
            // Remover 'seleccionado' de todas
            planTarjetas.forEach(t => t.classList.remove('seleccionado'));
            // Agregar 'seleccionado' a la tarjeta clickeada
            tarjeta.classList.add('seleccionado');
            
            // Opcional: Mostrar un mensaje o actualizar un precio final
            console.log(`Plan seleccionado: ${tarjeta.querySelector('h4').innerText}`);
            alert(`¡Has seleccionado el ${tarjeta.querySelector('h4').innerText}!`);
        });
    });

    // --- Funcionalidad 2: Simulación de Acción (Botón Inscripción) ---
    if (btnInscripcion) {
        btnInscripcion.addEventListener('click', () => {
            alert('Procesando inscripción a la oferta. ¡Redirigiendo a formulario!');
            // Aquí iría el código de redirección o apertura de modal de inscripción
        });
    }

    // --- Animación de Carga (Opcional: Para darle un toque inicial) ---
    // Agregamos una clase para que el contenido aparezca con un fade-in suave
    if (detalleContainer) {
        detalleContainer.style.opacity = 0;
        setTimeout(() => {
            detalleContainer.style.transition = 'opacity 0.8s ease-out';
            detalleContainer.style.opacity = 1;
        }, 100);
    }
});





