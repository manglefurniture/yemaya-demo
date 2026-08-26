# Despliegue de la demo Yemayá

Host previsto: `yemaya.hacheinteractive.com`.

## Estado de indexación

Este host es una demo comercial. Debe permanecer fuera del índice mediante `robots.txt` y `X-Robots-Tag` hasta que exista lanzamiento autorizado en el dominio definitivo. En ese momento hay que retirar ambos bloqueos, revisar canonicals, sitemap, NAP, schema `Restaurant`, Google Business Profile y Search Console antes de solicitar indexación.

## Ruta en VPS

Se propone servir el sitio estático desde `/var/www/yemaya-demo` usando `deployment/nginx-yemaya.conf`.

## Flujo recomendado

1. Clonar o actualizar la rama aprobada en `/var/www/yemaya-demo`.
2. Instalar/copiar la configuración Nginx y validar con `nginx -t`.
3. Recargar Nginx solo si la validación pasa.
4. Emitir/adjuntar certificado TLS para `yemaya.hacheinteractive.com` en el origin.
5. Verificar `/healthz`, rutas profundas, 404 real, assets, headers y navegación móvil.
6. Mantener la demo con `noindex` hasta autorización de lanzamiento.

No se incluyen secretos ni credenciales en el repositorio.
