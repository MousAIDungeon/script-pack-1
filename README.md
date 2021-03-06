# MousAI Script Pack I for AI Dungeon
## What's this?
The MousAI Script Pack I is a collection of modularized scripts for use in the AI Dungeon app or on its website (https://aidungeon.io). The pack is designed primarily for scenario writers who want to add functionality to their scenarios but may not be comfortable messing around with code. However, it can also be a great resource for anyone who wants a curated pack of scripts that can easily be turned on/off at will, as the work necessary to integrate such disparate scripts and ensure their compatibility has already been done for you.
### How does it work?
You need only copy and paste the scripts into your scenario, then use *World Info* or slash commands (e.g., "/focus off") to utilize the functions you want to use.
### It's really that easy?
Yep! Although each module will have its own set of instructions for you to follow, I've done my best to standardize how you interact with the scripts to make it as easy as possible for you to use them. Right now, that generally means *World Info* entries and slash commands are all you need to control the scripts. Lucky you!

#### To learn more about individual modules, check out the wiki:
https://github.com/MousAIDungeon/script-pack-1/wiki/Modules
## How do I install the scripts?
Simply copy the code found in the `/modifiers` folder. (You currently only need the input and output modifiers; the context modifier can be ignored.) Paste the code from `InputModifier.js` and `OutputModifier.js` into the appropriate sections of the *Scripts*<sup>***\****</sup> page in your scenario. Be careful! Be sure to replace all of the default code in those sections with the code found here. Also, make sure you don't accidentally type anything extraneous in the code area, as this will cause your scripts to not work and will probably break your scenario.

*Optional:* After pasting the code, follow the instructions in the red colored comments found at the top of `InputModifier.js` to install/uninstall individual modules as you see fit. All modules are installed by default, however, and you can opt to simply ignore the modules you don't want to use.

**Tip 1:** If you're worried about making a mistake and rendering your scenario unplayable, simply make a duplicate of it before pasting the scripts. "Duplicate" is a feature added to AI Dungeon in a recent update and is the double-page icon found in the top-right corner of the *Edit Scenario* screen. This is not a good solution for scenarios that are already published, as user interactions (upvotes/comments) are NOT duplicated. In that case, see the next tip.

**Tip 2:** In case you didn't duplicate your scenario but want to remove the script pack, you can find the default code that's included with all newly created scenarios in the `/default` folder here. Simply replace the script pack code in your scenario's *Scripts* page with the default code to revert.

<sub>***\*Note: Please be aware that as of this writing, you need a premium subscription to access and use *Scripts*.***</sub>

#### For a more comprehensive tutorial, check out the wiki:
https://github.com/MousAIDungeon/script-pack-1/wiki/Tutorial
## Contributing to the Script Pack
#### To help improve the framework or add your own modules to the pack, check out the wiki:
https://github.com/MousAIDungeon/script-pack-1/wiki/Contributing
