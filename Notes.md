Notes
Export HTML from Mailchimp
Copy `<table>`, `<title>`, `<script>` tags from `src/index.html`

```
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>The Bloom Welcome Email Template</title>
</head>

<body>
  <table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnButtonBlock" style="min-width:100%;">
    <tbody class="mcnButtonBlockOuter">
      <tr>
        <td style="padding-top:18px; padding-right:18px; padding-bottom:18px; padding-left:18px;" valign="top"
          align="center" class="mcnButtonBlockInner">
          <table border="0" cellpadding="0" cellspacing="0" class="mcnButtonContentContainer"
            style="border-collapse: separate !important;border-top-left-radius: 4px;border-top-right-radius: 4px;border-bottom-right-radius: 4px;border-bottom-left-radius: 4px;background-color: #27AA6E;">
            <tbody>
              <tr>
                <td align="center" valign="middle" class="mcnButtonContent"
                  style="font-family: &quot;Merriweather Sans&quot;, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 16px; padding: 12px;">
                  <div class="mcnButton " title="Copy To Clipboard" onclick="copyElementToClipboard('email')"
                    style="cursor:pointer;font-weight: bold;letter-spacing: normal;line-height: 100%;text-align: center;text-decoration: none;color: #FFFFFF;">
                    Copy
                    To Clipboard</div>
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  </table>
</body>
<script>
  function copyElementToClipboard(element) {
    window.getSelection().removeAllRanges();
    let range = document.createRange();
    range.selectNode(typeof element === 'string' ? document.getElementById(element) : element);
    window.getSelection().addRange(range);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
  }
</script>

</html>
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
