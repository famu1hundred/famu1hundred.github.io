Notes
Copy `<script>` tags from `src/index.html`

```
<script>
  function copyElementToClipboard() {
		window.getSelection().removeAllRanges();
    let el = document.getElementsByTagName('html')[0];
    let body = document.getElementsByTagName('body')[0];
    let copy = document.getElementById('copy');
    console.log(body.childNodes)
    body.childNodes[1].removeChild(copy);
    console.log(el);
		let range = document.createRange();
		range.selectNode(el);
		window.getSelection().addRange(range);
		document.execCommand('copy');
		window.getSelection().removeAllRanges();
	}
</script>
```
Add copy ID to 2nd `<div>` under `<body>` to `<div id="copy"...`
