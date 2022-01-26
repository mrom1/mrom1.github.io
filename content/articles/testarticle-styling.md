---
title: Testarticle - Markdown Styling
description: A article to showcase rendering of markdown elements.
tags: 
  - vuejs
  - html
  - css
  - markdown
readingtime: 3min
createdAt: 2021-12-18 17:25:42
---

## HTML in Markdown

<div class="bg-blue-500 text-white p-4 mb-4">
  This is HTML inside markdown that has a class some classes
</div>

## Emphasis

Some of **this text is bold** mid sentence.

Some of *this text is italicized* mid sentence.

Some of ***this text is italicized and bold*** mid sentence.


## Blockquotes
Markdown:
> Dorothy followed her through many of the beautiful rooms in her castle.
>
> The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.

HTML:
<blockquote>
Dorothy followed her through many of the beautiful rooms in her castle.<br /><br />
The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.
</blockquote>

### Nested Blockquotes
> Dorothy followed her through many of the beautiful rooms in her castle.
>
>> The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.

### Blockquotes with other elements
> The quarterly results look great!
>
> - Revenue was off the chart.
> - Profits were higher than ever.
>
>  *Everything* is going according to **plan**.

## Tables
| Syntax      | Description |
| ----------- | ----------- |
| Header      | Title       |
| Paragraph   | Text        |
| Footer      | Text        |
| Caption     | Text        |
| Subheader   | Title       |

## Lists
### Ordered Lists
Markdown:
1. First item
2. Second item
3. Third item
    1. Indented item
    2. Indented item
4. Fourth item	

HTML:
<ol>
  <li>First item</li>
  <li>Second item</li>
  <li>Third item
    <ol>
      <li>Indented item</li>
      <li>Indented item</li>
    </ol>
  </li>
  <li>Fourth item</li>
</ol>	


### Unordered Lists
- First item
- Second item
- Third item
    - Indented item
    - Indented item
- Fourth item	

### Starting Unordered List Items With Numbers
- 1968\. A great year!
- I think 1969 was second best.	


## Code

### Code in line

Markdown: At the command prompt, type `nano`.	

HTML: At the command prompt, type <code>nano</code>.	

### Escaping Backticks
Markdown: ``Use `code` in your Markdown file.``	

HTML: <code>Use `code` in your Markdown file.</code>	

### Code Block HTML
```html[index.html]
<html>
  <head>
  </head>
</html>
```
### Code Block C++
```cpp[main.cpp]
#include <iostream>

int main()
{
    std::cout << "Hello World!" << std::endl;
    return 0;
}
```

### Code Block Python
```python[ascii.py]
c = 'p'
print("The ASCII value of '" + c + "' is", ord(c))
```

### Code Block Javascript
```js[convert.js]
export convertDateToLocalTime(utc) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  return new Date(utc).toLocaleDateString('en', options)
}
```

## Horizontal Rules
Try to put a blank line before...

---

...and after a horizontal rule.	

## Links
My favorite search engine is [Duck Duck Go](https://duckduckgo.com).
### Formatting Links
I love supporting the **[EFF](https://eff.org)**.
This is the *[Markdown Guide](https://www.markdownguide.org)*.
See the section on [`code`](#code).

### URLs and Email Addresses
<https://www.markdownguide.org>
<fake@example.com>


## Images

![ASAP Logo!](/images/projects/a2lparser/asaplogo.jpg "ASAP Logo")
