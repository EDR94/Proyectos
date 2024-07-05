# Buscador de Registros y PDFs

Este proyecto es una aplicación web simple que permite buscar registros y mostrar archivos PDF relacionados. Los resultados se pueden filtrar por fecha, asunto o título, y los PDFs se muestran como enlaces horizontales.

## Características

- Búsqueda en tiempo real por fecha, asunto o título.
- Muestra enlaces a archivos PDF asociados con los registros.
- Diseño responsivo con enlaces a PDFs mostrados horizontalmente.

## Tecnologías Utilizadas

- HTML
- CSS
- JavaScript (jQuery)

## Instalación

1. Clona este repositorio en tu máquina local:
    ```bash
    git clone https://github.com/tu_usuario/BuscadorDePDFs.git
    ```

2. Navega al directorio del proyecto:
    ```bash
    cd BuscadorDePDFs
    ```

## Uso

1. Abre el archivo `index.html` en tu navegador.

2. Escribe en el campo de búsqueda para filtrar los registros. Los resultados se mostrarán en tiempo real mientras escribes.

## Ejemplo de Datos

Actualmente, los datos son simulados y están definidos en el archivo JavaScript dentro del HTML. Aquí un ejemplo de cómo se ven los datos:

```javascript
var datosFalsos = [
    {
        id: 1,
        fecha: '2023-05-12',
        asunto: 'Informe Mensual',
        titulo: 'Informe Mayo 2023',
        pdfs: [
            'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
            'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
            'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
            'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
            'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
            'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
            'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
        ]
    },
    {
        id: 2,
        fecha: '2023-06-18',
        asunto: 'Presentación Proyecto',
        titulo: 'Presentación Final',
        pdfs: [
            'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
        ]
    },
    {
        id: 3,
        fecha: '2023-07-02',
        asunto: 'Contrato Cliente',
        titulo: 'Contrato de Servicios',
        pdfs: []
    }
];
 ```
 Este apartado se espera reemplazar por el JSON que se reciba del backend.

# Personalización
Para conectar el buscador con tu backend:

Modifica la sección del código JavaScript donde se definen los datos simulados (datosFalsos) para hacer una solicitud AJAX a tu backend y obtener los datos reales.

Asegúrate de que los datos recibidos del backend tengan la misma estructura que los datos simulados.


