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

## Branches com steps

Existem 6 branchs com o código parcial, se você quer escrever seus testes do zero utilize a branch *step-0*


## Documentação do CasperJS

http://docs.casperjs.org/en/latest/modules/

## Slides