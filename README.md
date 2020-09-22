# MousAI Script Pack I for AI Dungeon
**The MousAI Script Pack I for AI Dungeon scenario writers.**
## What's this?
The MousAI Script Pack I is a collection of scripts for use on the AI Dungeon website (https://aidungeon.io). The pack is designed primarily for scenario writers who want to add functionality to their scenarios but may not be comfortable messing with code. However, it can also be a great resource for anyone who wants a curated pack of scripts that can easily be turned on/off as needed, as the work necessary to integrate such disparate scripts and ensure compatibility has already been done for you.
### How does it work?
Scenario writers need only copy and paste the scripts into their scenarios, then use World Info or "/" commands ("slash commands") to utilize the functions they want to use.
### It's really that easy?
Yep! Although, each module will have its own set of instructions for you to follow, we've done our best to standardize how you interact with the scripts to make it as easy as possible for you to use them (within the website's limitations, of course). Right now, that means World Info entries and slash commands will help you control the scripts. Lucky you!
### How do I install the scripts?
Simply copy the code found in `Input Modifier.js`, `Context Modifier.js`, and `Output Modifier.js` into the appropriate sections of the Scripts<sup>\*</sup> page in your scenario. Be sure to replace all of the code in those sections with the code found here. Also, don't accidentally type anything in the code area, as this will likely cause your scripts to not work and may break your scenario!

*Optional:* After that, read the red comments found at the top of the code to enable/disable modules as you wish.

**Tip:** If you worried about making a mistake and potentially making your scenario unplayable, simply make a duplicate of it before pasting the scripts. (Duplicate is a feature added in a recent update and is the double-page icon found in the top-right corner.) We've also included the default code here in case you want to go back. See the `/default` folder.

<sub>*\*Note: Please be aware that as of this writing, you need a premium subscription to access and use Scripts.*</sub>
# Contributing to the Script Pack
**The following section is for script writers who want to contribute to this project.**
## Why this pack?
The MousAI Script Pack is a framework designed to be a home for all kinds of useful scripts for use in scenarios hosted and played on the AI Dungeon website. It takes care of the heavy lifting of integrating with the website's ever-changing features and scripting backend, as well as integrating and ensuring compatibility with scripts from other script writers, allowing you to simply focus on adding the functionality you want to see.

This solves a few problems that both you and the users of your scripts might face, especially those without a coding background:
* Finding you and your scripts in a sea of scenarios that otherwise have nothing to do with scripts/scripting
* Allowing users to be able to use your scripts from within their own scenarios rather than only being able to start from your prompt
* Making it easy for scenario writers who otherwise wouldn't bother using your script because it's too much work or they are afraid to mess with the code
* Integrating your script with other useful/popular scripts for scenario writers who want to use more than one script in the same scenario
* Having a single trusted source for curated user-friendly scripts, especially for new users/subscribers who don't know where to start

In short, by contributing to this pack, you not only make your script more accessible to scenario writers, but you also increase your own visibility and the value of this pack, which in turn increases all contributors' visibility! It's win-win-win. Not only do contributors receive due credit, but they are free to include a link back to their own scripts and scenarios. (We'll figure out how best to do this as we go along, but right now I'm thinking of an in-game help page for each module that includes credit and a link, if the contributor desires.)
### OK, I'm sold. How do I contribute?
There are two ways to contribute:
1. By improving the framework
2. By contributing a module

Probably the easiest and most common way is by contributing a module.
### What exactly is a "Module" anyway?
We call individual units of features "Modules," which can be equated to a single script you might otherwise provide users on its own. These modules are then packaged with other modules that can then be easily turned on/off by the end user, who benefits from only having to install one single script to access not just the features you provided, but features from other script writers as well.

It's really easy to turn one of your scripts into a module or to write a whole new one. Let's see how that's done now.
## Creating a Module
In order to create a module, you first need an object with at least one method: `execute(text)`. As you can see, the `execute` method accepts a single argument, `text`, which is the unmodified text input. Notice that it's the same parameter provided to you by the default `modifier(text)` function, so you shouldn't have any problems getting your code to work as it did as a standalone script. (If you don't need this argument, that's fine; just ignore it.) By convention, we'll store your module in a `const` field with the name of your module in all uppercase. We'll also give it a property called `name` that stores this field name as a string in the object itself.

If we were creating the Nerves module, here's what we'd have so far:
```js
const NERVES = {
  name: 'NERVES',
  execute: function(text) {
    // Your module code goes here?
  }
}
```
So far so good, but what if you need to store state? We can't store it in the object itself, because your module will be destroyed and recreated after every player input. However, we can't store it just anywhere in `state` because other script writers will try to do the same thing and we don't want to step on each other's toes. Thus, we are going to give your module its own namespace in `state`, a property with the same name as your module but in all lowercase.

Let's do that in an `initialize` method:
```js
const NERVES = {
  // Code omitted for clarity.
  initialize: function() {
    state.nerves = Object.seal({
      text: '> You try to ',
    });
  }
}
```
...But let's also create a method to do just the opposite, a `destroy` method (you'll see why in the next step):
```js
const NERVES = {
  // Code omitted for clarity.
  destroy: function() {
    state.nerves = null;
  }
}
```
Now we need a method to tell us if your module is enabled or not. In debug mode, users can enable/disable your module on the fly so they can easily test their scenarios and get the results they desire. What's more, they should have a way to easily "reset" your module as they are testing. We can take care of both requirements with our `enable`, `disable`, and `isEnabled` functions:
```js
const NERVES = {
  // Code omitted for clarity.
  enable: function() {
    if (!this.isEnabled()) {
      this.initialize();
      return true;
    }
    return false;
  },
  disable: function() {
    if (this.isEnabled()) {
      this.destroy();
      return true;
    }
    return false;
  },
  isEnabled: function() {
    return Boolean(state.nerves);
  }
}
```
So, when `enable` is called, we call the `initialize` function we created in the last step to set up our state. When `disable` is called, we call the `destroy` function and set it to `null`. Finally, `isEnabled` simply returns a `boolean` value based upon whether we currently have state or not. Note that both `enable` and `disable` return `true` or `false` based upon whether the call resulted in a change to the module's state. This is important for the error checking the framework does when installing, building, and enabling/disabling modules. (By the way, these functions are provided for you in the module template, so you don't have to worry about coding these functions yourself.)

Now we can make one more change to the `execute` method:
```js
const NERVES = {
  name: 'NERVES',
  execute: function(text) {
    if (this.isEnabled()) {
      // Ah, so your module code goes HERE!
    }
  },
  // Code omitted for clarity.
}
```
Last but not least, branding! We're going to add a `toString` method that returns our module's name in a human readable format:
```js
const NERVES = {
  // Code omitted for clarity.
  toString: () => '[😨 Nerves]'
}
```
And that's it! We now have a functioning Nerves module that can be "plugged in" and simply work with the framework. Of course, we still need to code some logic if we want it to DO anything.

Here's the entire functioning Nerves module:
```js
const NERVES = {
  name: 'NERVES',
  toString: () => '[😨 Nerves]',
  execute: function(text) {
    if (this.isEnabled()) {
      if (isDoAction(text) || isSayAction(text)) {
        state.modifiedText = '\n' + state.nerves.text + state.modifiedText.substring(7);
      }
    }
  },
  initialize: function() {
    state.nerves = Object.seal({
      text: '> You try to ',
    });
  },
  destroy: function() {
    state.nerves = null;
  },
  enable: function() {
    if (!this.isEnabled()) {
      this.initialize();
      return true;
    }
    return false;
  },
  disable: function() {
    if (this.isEnabled()) {
      this.destroy();
      return true;
    }
    return false;
  },
  isEnabled: function() {
    return Boolean(state.nerves);
  }
}
```
