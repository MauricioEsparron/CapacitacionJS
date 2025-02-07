//nombra la resolucion sgun el valor de ancho y alto de las 
// resoluciones existentes

/**
 * Nombre: ancho x alto
 * 8K 7680 x 4320
 * 4k 3840 x 2160
 * WQHD 2560 x 1440
 * FHD 1920 x 1080
 * HD 1280 x 720
*/

function nombreResolucion(an, al) {
    if (an >= 7680 && al >= 4320) {
        return '8K';
    } else if (an >= 3840 && al >= 2160) {
        return '4K';
    } else if (an >= 2560 && al >= 1440) {
        return 'WQHD';
    } else if (an >= 1920 && al >= 1080) {
        return 'FHD';
    } else if (an >= 1280 && al >= 720) {
        return 'HD';
    } else if (an >= 1024 && al >= 576) {
        return 'WSVGA';
    } else if (an >= 1024 && al >= 768) {
        return 'XGA';
    } else if (an >= 800 && al >= 600) {
        return 'SVGA';
    } else if (an >= 640 && al >= 480) {
        return 'VGA';
    } else if (an >= 320 && al >= 240) {
        return 'QVGA';
    } else if (an >= 160 && al >= 120) {
        return 'QQVGA';
    } else {
        return 'Resolución personalizada';
    }
}

let nombre = nombreResolucion(1920,1080);
console.log(nombre);