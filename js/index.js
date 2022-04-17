function updatePreview() {
    let previewElement = document.getElementById("preview");
    let editorValue = document.getElementById("editor").value;
    let markedUpHTML = marked.parse(editorValue, {breaks: true});
    previewElement.innerHTML = markedUpHTML;
}

function setDefault() {
    let defaultText = `\
# This is
## a markdown previewer
[Learn more about Javascript](http://www.freecodecamp.org).
<dl>
  <dt>Definition list</dt>
  <dd>Is something people use sometimes.</dd>

  <dt>Markdown in HTML</dt>
  <dd>Does *not* work **very** well. Use HTML <em>tags</em>.</dd>
</dl>

\`This is an example of inline code\`

\`\`\`

function exampleOf() {
    return multilineCodeBlock;
        }
\`\`\`

 - This
 - is
 - an
 - example
 - of
 - list
 - items

 > This is an example of block quote

 ![Learn JavaScript](https://www.youtube.com/s/desktop/4122e69b/img/favicon_48x48.png)
 [Here goes video lesson](https://www.youtube.com/watch?v=PkZNo7MFNFg)
 **This is an example of Bolded Text**`;

    let editorField = document.getElementById("editor");
    let previewElement = document.getElementById("preview");
    editorField.value = defaultText;
    previewElement.innerHTML = marked.parse(defaultText, {breaks: true});
}


