# Utilcord

Utilities to make your discord bots better and easier to make.

### Current functions

```js
import { nitro, meme } from 'discord-bot-utils'

// boost: true/false
nitro(true)

// meme
meme().then(x => {
    interaction.reply({ embeds: [
{
"title": x.title,
      "color": null,
      "author": {
        "name": x.author
      },
      "footer": {
        "text": 👍 x.upvotes
      }
}
] })
})
```
