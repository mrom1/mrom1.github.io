---
title: Testarticle - Custom Markdown VueJS Components
description: This article tests the rendering of custom vue components used inside markdown content. The components are located inside the /components/global folder.
tags: 
  - vuejs
  - html
  - css
  - markdown
readingtime: 6min
createdAt: 2022-01-07 17:25:42
---
## Message Box Component
### Message Box Info
<message-box type="info">
  <template #message-box>
    This is a vue component inside markdown using slots
  </template>
</message-box>


### Message Box Success
<message-box type="success">
  <template #message-box>
    This is a vue component inside markdown using slots
  </template>
</message-box>

### Message Box Warning
<message-box type="warning">
  <template #message-box>
    This is a vue component inside markdown using slots
  </template>
</message-box>

### Message Box Error
<message-box type="error">
  <template #message-box>
    This is a vue component inside markdown using slots
  </template>
</message-box>

### Message Box Education
<message-box-education>
  <template #message-box-education>
    This is a vue component inside markdown using slots
  </template>
</message-box-education>

### Message Box Protection
<message-box-protection>
  <template #message-box-protection>
    This is a vue component inside markdown using slots
  </template>
</message-box-protection>


## Image Container Component
<image-container source="/images/projects/minilockcpp/icon512.png">
  <template #image-container>
    Testing a image caption. Minilock logo.
  </template>
</image-container>