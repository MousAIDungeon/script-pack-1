/*
Copyright © 2020 MousAI of the AI Dungeon community. (http://aidungeon.io)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

// Check out the wiki to learn how you can contribute your own modules:
// https://github.com/MousAIDungeon/script-pack-1/wiki/Contributing

/******************************************************************************/
/*                           MousAI Scripts Pack I                            */
/*                               version 1.0.3                                */
/*                           2020-09-11 (refactor)                            */
/******************************************************************************/

/******************************************************************************/
/*                              Context Modifier                              */
/******************************************************************************/

// info.memoryLength is the length of the memory section of text.
// info.maxChars is the maximum length that text can be. The server will truncate the text you return to this length.

// This modifier re-implements Author's Note as an example.
const modifier = (text) => {
  const memory = info.memoryLength ? text.slice(0, info.memoryLength) : ''
  const context = info.memoryLength ? text.slice(info.memoryLength + 1) : text
  const lines = context.split("\n")
  if (lines.length > 2) {
    // Uncomment to use this!
    // const authorsNote = "Everyone in this story is an AI programmer."
    // lines.splice(-3, 0, `[Author's note: ${authorsNote}]`)
  }
  // Make sure the new context isn't too long, or it will get truncated by the server.
  const combinedLines = lines.join("\n").slice(-(info.maxChars - info.memoryLength))
  const finalText = [memory, combinedLines].join("")
  return { text: finalText }
}

// Don't modify this part
modifier(text)
