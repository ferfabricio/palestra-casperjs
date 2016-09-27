# Palestra de testes com casperjs

Para utilizar este exemplo você deve ter o node e npm instalado em sua máquina.

## Instalando requisitos

### PhantomJS

```
npm install -g phantomjs
```

### CasperJS

```
npm install -g casperjs
```

## Subindo o site

Para subir o servidor http execute o seguinte comando no diretório principal:

```
npm run static
```

## Executando testes

Executar todos os testes:

```
casperjs test test/*.js
```

Executar somente um:

```
casperjs test test/yourtestfile.js
```