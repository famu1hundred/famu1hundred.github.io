Notes
Export HTML from Mailchimp
Copy `<table>`, `<title>`, `<script>` tags from `src/index.html`

```
<script>
  function copyElementToClipboard() {
		window.getSelection().removeAllRanges();
    let el = document.getElementsByTagName('html')[0];
		let range = document.createRange();
		range.selectNode(el);
		window.getSelection().addRange(range);
		document.execCommand('copy');
		window.getSelection().removeAllRanges();
	}
</script>
```

Change `<center id="email">`
Add to `bodyTable`

```
max-width: 600px;
margin: 0 auto;
```

Add file to discord

```
**Welcome Email**

Click the link to download the file
Open the file in a browser (i.e. Internet Explorer, Safari, Chrome)
Click the **Copy to Clipboard** button
Paste the contents in the email client of your choice (i.e. gmail, outlook)

version 1.0.2
```
