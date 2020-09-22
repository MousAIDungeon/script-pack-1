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
/*                              Output Modifier                               */
/******************************************************************************/

const modifier = (text) => {
  
  // Clear the output. This basically means the input was a command.
  // Note: This is not ideal. The input was still sent to the AI, wasting the
  // player's time and AI Dungeon's resorces. Also, the "The AI doesn't know
  // what to say..." message still appears sometimes. There needs to be a way
  // to prevent sending input the to AI at all for script commands. For now, we
  // just add a space to try to prevent the 'no output' message from AID.
  if (state.clearOutput) {
    state.clearOutput = false
    return {text: ' '}
  }
  
  // The text is either the user's input or players output to modify.
  let modifiedText = text
  
  // You must return an object with the text property defined.
  return {text: modifiedText}
}

// Don't modify this part
modifier(text)
