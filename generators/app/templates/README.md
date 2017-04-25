# \<<%= name %>\>

<%= description %>

<!--
```
<custom-element-demo>
  <template>
    <script src="../webcomponentsjs/webcomponents-loader.js"></script>
    <link rel="import" href="<%= name %>.html">
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->
```html
<<%= name %>></<%= name %>>
```

## Install the Polymer-CLI

First, make sure you have the [Polymer CLI](https://www.npmjs.com/package/polymer-cli) installed. Then run `polymer serve` to serve your element locally.

## Viewing Your Element

```
$ polymer serve
```

## Running Tests

```
$ polymer test
```

Your application is already set up to be tested via [web-component-tester](https://github.com/Polymer/web-component-tester). Run `polymer test` to run your application's test suite locally.

## License

[MIT](https://opensource.org/licenses/MIT)