# MousAI Script Pack I for AI Dungeon
**The MousAI Script Pack I for AI Dungeon scenario writers.**
## What's this?
The MousAI Script Pack I is a collection of modularized scripts for use in scenarios on the AI Dungeon website (https://aidungeon.io). The pack is designed primarily for scenario writers who want to add functionality to their scenarios but may not be comfortable messing around with code. However, it can also be a great resource for anyone who wants a curated pack of scripts that can easily be turned on/off at will, as the work necessary to integrate such disparate scripts and ensure their compatibility has already been done for you.
### How does it work?
Scenario writers need only copy and paste the scripts into their scenarios, then use World Info or "/" commands ("slash commands") to utilize the functions they want to use.
### It's really that easy?
Yep! Although each module will have its own set of instructions for you to follow, we've done our best to standardize how you interact with the scripts to make it as easy as possible for you to use them. Right now, that generally means World Info entries and slash commands are all you need to control the scripts. Lucky you!

#### Check the wiki for information on individual modules:
https://github.com/MousAIDungeon/script-pack-1/wiki/Modules
### How do I install the scripts?
Simply copy the code found in `InputModifier.js`, `ContextModifier.js`, and `OutputModifier.js` into the appropriate sections of the Scripts<sup>\*</sup> page in your scenario. Be sure to replace all of the code in those sections with the code found here. Also, make sure you don't accidentally type anything in the code area, as this will likely cause your scripts to not work and will probably break your scenario.

*Optional:* After pasting the code, follow the instructions in the red colored comments found at the top of the `InputModifier.js` script to install/uninstall individual modules as you see fit.

**Tip:** If you're worried about making a mistake and rendering your scenario unplayable, simply make a duplicate of it before pasting the scripts. Duplicate is a feature added in a recent update and is the double-page icon found in the top-right corner.

**Bonus Tip:** In case you didn't duplicate your scenario but want to remove the script pack, you can find the default code that's included with all newly created scenarios in the `/default` folder. Simply replace the script pack code with the default code to revert.

<sub>***\*Note: Please be aware that as of this writing, you need a premium subscription to access and use Scripts.***</sub>

#### A more comprehensive tutorial can be found on the wiki:
https://github.com/MousAIDungeon/script-pack-1/wiki/Tutorial
## Contributing to the Script Pack
#### Check the wiki to see how you can add your own modules to the pack or help improve the framework:
https://github.com/MousAIDungeon/script-pack-1/wiki/Contributing
