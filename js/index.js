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

 ![Learn JavaScript - Full Course for Beginners](http://img.youtube.com/vi/YOUTUBE_VIDEO_ID_HERE/0.jpg)(https://www.youtube.com/watch?v=PkZNo7MFNFg)
 **This is an example of Bolded Text**`;

    let editorField = document.getElementById("editor");
    let previewElement = document.getElementById("preview");
    editorField.value = defaultText;
    previewElement.innerHTML = marked.parse(defaultText, {breaks: true});
}


