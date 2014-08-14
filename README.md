# URL CHANGER

A javascript module that change the url based on element attribute

## How to use

Add markers to your document

```HTML
<div data-url="/some-url.html">
	...
</div>
<div data-url="/other-url.html">
	...
</div>
```

Call the lib and the init mathod

```HTML
<script type="text/javascript" src="/js/urlChanger.js"></script>
<script type="text/javascript"> urlChanger.init(true); // pass true to the init function if you want a visual debug</script>
```

## TODO

1. Test! Test! Test!
2. Test in many browsers
3. Works with touch devices
4. Provide minified file