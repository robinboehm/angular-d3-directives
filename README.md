angular-d3
==================

Create directives to enable even more easy usage of d3!

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

I will publish here directives that come with my projects iam working on.
Feel free to contribute extensions, fixes or own directives.

###Word-Cloud Directive

Word cloud layout by Jason Davies, http://www.jasondavies.com/word-cloud/


Attributes:
*   <b>width</b>         <i>Number</i>
*   <b>height</b>        <i>Number</i>
*   <b>font-family</b>   <i>String</i>
*   <b>font-size</b>     <i>String</i>
*   <b>words</b>         <i>Array.<string></i>

```html
<wordcloud words="words" font-size="10" font-family="Arial"></wordcloud>
```

```javascript
$scope.words = ["This","is","a","d3","wordcloud","with","much","more","text","then","the","first"];
```

![alt text](https://github.com/robinboehm/angular-d3-directives/blob/master/examples/wordcloud/wordcloud.png?raw=true "Wordcloud Example")


## Develop

To install local dependencies you need to run the install task of npm / bower. 

```shell
npm install && bower install
```

To build the module you need to run the grunt with default task

```shell
grunt
```

## Todo

* improve build process
  * include the current d3 release, currently just pasted
  * solve warning in the build
* finish tests for the wordcloud directive, just notes now
* Implement more directives

