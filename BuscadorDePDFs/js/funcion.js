        $(document).ready(function() {
            // Evento que se dispara cuando se escribe en el campo de busqueda
            $('#campoBusqueda').on('input', function() {
                var terminoBusqueda = $(this).val().trim(); // Eliminar espacios en blanco al inicio y final

                // Si el termino de busqueda esta vacio, limpiar la lista de resultados
                if (terminoBusqueda === '') {
                    $('#resultadosBusqueda').empty();
                    return;
                }

                // Simular resultados de busqueda (datos estaticos). En este apartado se espera reemplazar por el JSON que se reciba del backend
                var datosFalsos = [
                {id:1,fecha:'2023-05-12',asunto:'Informe Mensual',titulo:'Informe Mayo 2023',pdfs:['https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf','https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf','https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf','https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf','https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf','https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf','https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf']},
                {id:2,fecha:'2023-06-18',asunto:'Presentación Proyecto',titulo:'Presentación Final',pdfs:['https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf']},
                {id:3,fecha:'2023-07-02',asunto:'Contrato Cliente',titulo:'Contrato de Servicios',pdfs:[]}
            ];

                // Filtrar resultados segun el termino de busqueda
                var datosFiltrados = datosFalsos.filter(function(item) {
                    return (
                        item.fecha.includes(terminoBusqueda) ||
                        item.asunto.toLowerCase().includes(terminoBusqueda.toLowerCase()) ||
                        item.titulo.toLowerCase().includes(terminoBusqueda.toLowerCase())
                    );
                });

                // Mostrar resultados en la lista
                mostrarResultados(datosFiltrados);
            });

            // Funcion para mostrar resultados en la lista
            function mostrarResultados(datos) {
                var listaResultados = $('#resultadosBusqueda');
                listaResultados.empty(); // Limpiar la lista de resultados

                if (datos.length > 0) {
                    // Recorrer los datos filtrados y añadir cada resultado a la lista
                    $.each(datos, function(indice, registro) {
                        var listaPDFs = '';
                        if (registro.pdfs.length > 0) {
                            listaPDFs = '<div class="pdf-links">';
                            // Añadir cada PDF como un enlace en la lista
                            $.each(registro.pdfs, function(indicePDF, rutaPDF) {
                                listaPDFs += `<a href="${rutaPDF}" target="_blank">Ver PDF ${indicePDF + 1}</a>`;
                            });
                            listaPDFs += '</div>';
                        } else {
                            listaPDFs = '<div>No hay PDFs disponibles</div>';
                        }
                        // Añadir el registro a la lista de resultados
                        listaResultados.append(`<li>
                            <strong>${registro.titulo}</strong><br>
                            Fecha: ${registro.fecha}<br>
                            Asunto: ${registro.asunto}<br>
                            ${listaPDFs}
                        </li>`);
                    });
                } else {
                    // Mostrar mensaje si no se encontraron resultados
                    listaResultados.append('<li>No se encontraron resultados</li>');
                }
            }
        });