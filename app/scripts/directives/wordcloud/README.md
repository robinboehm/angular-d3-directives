###Word-Cloud Directive

I've used the word cloud layout by [Jason Davies](http://www.jasondavies.com/word-cloud/)
and used the [decorator pattern](http://docs.angularjs.org/api/AUTO.$provide#decorator) to mixin the cloud layout
into the d3 service.

After that i've created a directive that enable the configuration over folliwing attributes:

*   <b>width</b>         <i>Number</i>
*   <b>height</b>        <i>Number</i>
*   <b>font-family</b>   <i>String</i>
*   <b>font-size</b>     <i>String</i>
*   <b>words</b>         <i>Array.<string></i>
*   <b>on-click</b>      <i>Function</i>
*   <b>on-hover</b>      <i>Function</i>


#### Option 1 : Comma seperated list
```html
<wordcloud>This,is,a,test,with,Strings</wordcloud>
```


#### Option 2 : Html Template
```html
<wordcloud>
  <word>This</word>
  <word>is</word>
  <word>a</word>
  <word>Subelement</word>
  <word>Test</word>
  <word>for</word>
  <word>demonstrating</word>
  <word>this</word>
  <word>Feature</word>
</wordcloud>
```


#### Option 3 : Using Controller Scope
```javascript
$scope.words =
        ["Hallo","Test","Lorem","Ipsum","Lorem","ipsum","dolor","sit","amet,","consetetur","sadipscing","elitr,","sed","diam","nonumy","eirmod","tempor","invidunt","ut","labore","et","dolore","magna","aliquyam","erat,","sed","diam"];

        $scope.myOnClickFunction = function(element){
            console.log("click",element);
        }

        $scope.myOnHoverFunction = function(element){
            console.log("hover",element);
        }
```

```html
<wordcloud
  words="words"
  on-click="myOnClickFunction(element)"
  on-hover="myOnHoverFunction(element)">

</wordcloud>
```

####Output

![alt text](https://github.com/robinboehm/angular-d3-directives/blob/master/examples/wordcloud/wordcloud.png?raw=true "Wordcloud Example")