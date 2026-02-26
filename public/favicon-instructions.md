# Cómo generar los favicons

Ya tienes el archivo `favicon.svg` que funciona en navegadores modernos.

Para generar los archivos PNG y ICO necesitas usar una herramienta online:

1. Ve a: https://realfavicongenerator.net/
2. Sube el archivo `public/favicon.svg`
3. Configura:
   - **iOS**: Usa el color de fondo `#0046FF`
   - **Android**: Tema `#0046FF`
   - **Windows**: Color de tiles `#0046FF`
4. Genera y descarga el paquete
5. Extrae los archivos en la carpeta `public/`

Los archivos que necesitas son:
- `favicon.ico` (32x32)
- `apple-touch-icon.png` (180x180)
- `android-chrome-192x192.png` (192x192)
- `android-chrome-512x512.png` (512x512)

Por ahora, el `favicon.svg` debería funcionar en la mayoría de navegadores modernos.
