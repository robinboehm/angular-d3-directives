angular-d3
==================

##D3 AngularJS Module

D3 component to provide d3 as module for the injector.
Registerd as <b>d3</b>.

Include component as every other component via script tag into your webapp.

```html
<script src="components/angular/angular.js"></script>
<script src="components/d3/angular-d3.js"></script>
```

Add d3 module to the requires Array.

```javascript
angular.module('exampleApp', ['d3']);
```

Now you can inject the d3 module e.g. in a directive definition and enjoy the full power of d3 in a isolated scope.

```javascript
angular.module('d3')
  .directive('example', function (d3){
  // use d3 
  }
);
```


##Directives

With d3 directives you are able to create wonderful html extensions
that enable people with basic javascript experience to create d3 visualisations.

###Word-Cloud Directive

Word cloud layout by Jason Davies, http://www.jasondavies.com/word-cloud/

Algorithm due to Jonathan Feinberg, http://static.mrfeinberg.com/bv_ch03.pdf


```html
<wordcloud words="words" font-size="10" font-family="Arial"></wordcloud>
```

```javascript
$scope.words = ["Hallo","Test","Lorem","Ipsum","Lorem","ipsum","dolor"];
```

```javascript
angular.module('d3')
  .directive('wordcloud', function (d3){
  // use d3 
  }
);
```

