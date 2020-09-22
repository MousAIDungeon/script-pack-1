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
/*                               Customization                                */
/******************************************************************************/
/*  Customizing this script is easy! Simply follow the instructions below to
*   add new features to your next scenario.
*   
*   Currently, features ("modules") can be enabled or disabled by flipping a
*   'switch.' Modules are controlled by a varible which is set to ether "true"
*   or "false." Modules that are "true" are ON, while modules that are "false"
*   are OFF.
*   
*   Simply set the variables below for each module to either true or false.
*   (IMPORTANT: Use all lowercase letters.)
*   
*   Don't forget to read the instructions provided to actually learn how to use
*   each module!
*/

/*****************************     DEBUG MODE     *****************************/
// If true, this enables both the debug text and the help menu. It also allows
// you as a creator to test your scenarios while seeing exactly how the modules
// are interacting together.
//
// Before you publish your scenario, consider whether you want to turn this off
// or leave it on. If you leave it on, don't forget to make your World Info
// entries visible or the information Debug Mode gives will be useless, as
// your players won't be able to change anything anyway.

const enableDebugMode = true

/******************************************************************************/



/******************************     MODULES     *******************************/

// FOCUS MODULE
// Focus allows you to set a driving narrative for the story. Essentially, you
// use a World Info entry to input text that the AI will be fed with every
// action. This text is then stored in "frontMemory", which is a property of
// the memory object that takes precedence over just about everything else.
//
// WARNING: This is a very powerful feature that can derail and even break your
// scenarios if you are not careful. Use with caution, and test, test, test!
//
// Instructions: Use "mousai_focus" (without quotation marks) as a key in a
// World Info entry. Place text that will serve as your story's main driver
// there. Ex: "You are lost in the woods and must find your way out."
//
// Roadmap: A planned update will allow you to set a duration so that a focus
// can automatically expire. Without this feature, Focus really only works well
// for shorter games. At least, in my experience. YMMV.

const installFocusModule = true


// DANGER MODULE
// Danger works well for any scenario that requires escalating tension or a
// sequence of events. It allows you to send sequentially activated lines of
// text to the AI. Basically, it adds text to the end of the player's memory at
// a set turn number determined by you, overriding any previous Danger entries.
//
// To use the example of the offical "Death Island" featured scenario, at turn 3
// the script would begin adding: "You're probably going to die.". It would do
// this until turn 7, when it would instead add: "You're about to die." Finally,
// at turn 11 it would instead add, "You have no hope. There are minutes left
// till you die." With no other Danger entries to add, it would continue to
// append this text indefinitely, or until the player did indeed die (if in
// Hardcore mode where death is permanent).
//
// Instructions: Use "mousai_danger_x" (without quotation marks) as a key in a
// World Info entry. Use a number in place of the "x" to tell the script on what
// turn to begin injecting the entry into the player's memory text. Don't worry
// about leading zeros or how many digits there are. "003" is treated just like
// "3" and "321" will activate on turn 321, just like you would expect. An
// entry with a number of "0" or "00000" and so on, or of only "mousai_danger"
// will be active from the start. Use multiple entries, one per escalation.
//
// Example (entry order doesn't matter):
// 
// Keys: mousai_danger_003
// Entry: "The water level is now up to your ankles."
//
// Keys: mousai_danger_006
// Entry: "The water level is now up to your knees."
//
// Keys: mousai_danger_009
// Entry: "The water level is now up to your waist."
//
// ...etc.
//
// Roadmap: None planned. Leave me a comment if you have any suggestions!

const installDangerModule = true


// NERVES MODULE
// Nerves makes it so that your actions are not guaranteed to succeed. If you
// think about it, most of our actions sound like declarative statements of
// fact to the AI. It can't always tell the difference between "The sky is blue"
// and "I kill the orc." What if you're writing a horror or survival scenario
// and you don't want it to be so easy to "kill the orc?" In this case, the
// latter should be seen as a statement of intent, not necessarily of fact.
//
// Nerves seeks to solve this by changing all of your Do and Say actions. It
// inserts "try to" into the command, putting the AI on notice that your action
// need not succeed. In fact, with this module it often doesn't! This will
// not change Story actions, so if your scenario is not in Hardcore mode, then
// users can still have an unmodified way to affect the story (ditto for alter
// in Creative mode).
//
// Instructions: This module doesn't currently need World Info for anything.
// Simply flip the module on and you're done! Note that in Debug Mode, you can
// turn this module OFF and ON again during gameplay by typing "/nerves".
// However, the variable below MUST be set to true for this to work!
//
// Roadmap: I might develop a feature to let creators change the text that gets
// inserted using a World Info entry, as inserting "try to" isn't always ideal.
// Let me know your thoughts!

const installNervesModule = true


// EVENTS MODULE
// Events work similarly to the Focus module, but creators may create many
// events which are then randomly activated throughout the adventure. These
// events act as a 'mini focus' (and indeed overrule the Focus module) in order
// to cause a sharp turn in the story's narrative. Events have a set duration
// for which they take effect: either a single turn ("Suddenly, a large dragon
// swoops in from the sky!"), or for several turns ("You've come down with a
// mysterious illness..."). Each event entry is only used once per playthough
// unless the module is disabled and re-enabled, effectively resetting it.
// (This is only possible for players to do if you give them Debug Mode power.)
//
// Instructions: Use "mousai_events_x" (without quotation marks) as a key in a
// World Info entry. Use a number in place of the "x" to tell the script for how
// many turns it should remain in "frontMemory" and be injected into the text
// output. Don't worry about leading zeros or how many digits there are. "003"
// is treated just like "3" and "321" will remain active for 321 turns, just
// like you would expect. (I do not recommend this! An event lasting that long
// should really be handled by the Focus module.) An entry with a number of "0"
// or "000" and so on, or of only "mousai_events" will be active for only 1
// turn. Use one entry per event.
//
// Example (entry order doesn't matter):
// 
// Keys: mousai_event
// Entry: "Suddenly, the police bust down the door!"
//
// Keys: mousai_danger_3
// Entry: "Is that smoke you smell? There's a fire!"
//
// Keys: mousai_danger_10
// Entry: "Without warning, you've been transported to the spirit realm.
// Whatever you were doing before being transported no longer matters. It seems
// the gods have some business with you, and they won't be kept waiting..."
//
// Roadmap: Perhaps allow creators to adjust the chance of activation using
// the World Info entry key. Currently, events have a chance to activate
// about four or five times every ten turns or so. During each check, the odds
// of an event being triggered is about fifty-fifty. After that, the odds of
// a given event being the one to trigger is directly proportional to the number
// of events in the list. Thus, if there are five events, a particular event has
// a one-in-five chance of activating, whereas it will always activate if it is
// the only event left. (Note: this is exactly how it's coded to work in "Death
// Island." The exact check is: See if the current turn is divisible by [3 | 4],
// with exactly a 50% chance of checking for either one. If the check returns
// true, randomly select an event from the array with equal probability.

const installEventsModule = true


/*********************************     END     ********************************/
/*  That's it for now! Follow MousAI on AI Dungeon to keep up-to-date on my
 *  releases. Feature updates, bug fixes and original scenarios are all coming
 *  soon! Check back often, and give my scenarios an upvote if you like them.
 *
 *  DON'T EDIT ANYTHING BELOW THIS LINE UNLESS YOU KNOW WHAT YOU'RE DOING.
/******************************************************************************/

/******************************************************************************/
/*                    Begin MousAI Modular Script Framework                   */
/******************************************************************************/

/******************************************************************************/
/*                       Useful Constants and Functions                       */
/******************************************************************************/

function isModuleEnabled(module) {
  return Boolean(module?.isEnabled())
}

function isModulesEnabled () {
  return Boolean(state.modulesEnabled)
}

/******************************************************************************/
/*                              Regular Expresions                            */
/******************************************************************************/

/* Say or Do Regex Notes:
 * This regular expression tests true if the text is a Do or a Say action.
 * Group 2 contains the exact literal input of the player unless:
 * A Story action was typed to look exactly like a Say action.
 * A Story action was typed to look exactly like a Do action.
 * It's a Say action and the player ended with a double quotation.
 * It's a Do action and the player ended with a period.
 * Under the above conditions, the Say or Do prefix and suffix will be placed
 * into group 1 and group 3, respectively, as we can't tell it's player input.
 * Group 1: The Say or Do prefix
 * Group 2: The actual input from the player (see above exceptions)
 * Group 3: The Say or Do suffix
 */
const SAY_OR_DO_REGEX = RegExp('(?:^\\s*)((?=> You say ".*?"\\s*$)> You say "|> You )(.*?)((?<=^\\s*> You say ".*?)"|\\.?)(?:\\s*$)', 's')
const SAY_OR_DO_REGEX_GROUP_PREFIX = 1
const SAY_OR_DO_REGEX_GROUP_INPUT = 2
const SAY_OR_DO_REGEX_GROUP_SUFFIX = 3
const DO_PREFIX = '> You '
const DO_SUFFIX = '.'
const SAY_PREFIX = '> You say "'
const SAY_SUFFIX = '"'

const WORLD_INFO_KEY_REGEX_PREFIX = '(?:^\\s*|,\\s*)(?<key>'
const WORLD_INFO_KEY_REGEX_SUFFIX = ')(?:_(?<digits>\\d+))?(?:\\s*,|\\s*$)'
const WORLD_INFO_KEY_REGEX_GROUP_KEY = 1
const WORLD_INFO_KEY_REGEX_GROUP_DIGITS = 2
const DANGER_KEY = 'mousai_danger'
const EVENTS_KEY = 'mousai_events'
const FOCUS_KEY = 'mousai_focus'

const getWorldInfoKeyRegex = (key) => {
  return RegExp(WORLD_INFO_KEY_REGEX_PREFIX + key + WORLD_INFO_KEY_REGEX_SUFFIX, 'i')
}

const getWorldInfoEntriesByKey = (key) => {
  const regex = getWorldInfoKeyRegex(key)
  return worldEntries?.filter(entry => entry.keys.match(regex))
}

const getWorldInfoEntryByKey = (key) => {
  const regex = getWorldInfoKeyRegex(key)
  return worldEntries?.find(entry => entry.keys.match(regex))
}

const getWorldInfoEntryById = (id) => {
  return worldEntries?.find(entry => entry.id === id)
}

const getWorldInfoKeyNumber = (keys, key) => {
  if (typeof keys === 'string' || keys instanceof String) {
    const regex = getWorldInfoKeyRegex(key)
    const match = regex.exec(keys);
    if (match && WORLD_INFO_KEY_REGEX_GROUP_DIGITS < match.length) {
      const digits = match[WORLD_INFO_KEY_REGEX_GROUP_DIGITS]
      return parseInt(digits) || 0
    }
  }
  return 0
}

const isSameWorldInfoEntry = (entry, otherEntry) => {
  return entry?.id === otherEntry?.id
}

const removeWorldInfoEntryKey = (entry, key) => {
  const keys = entry?.keys
  if (typeof keys === 'string' || keys instanceof String) {
    const regex = getWorldInfoKeyRegex(key)
    const replacement = (keys.endsWith(',') ? ',' : '')
    entry.keys = keys.replace(regex, replacement)
  }
}

const isDoAction = (text) =>  {
  const match = SAY_OR_DO_REGEX.exec(text)
  return match && DO_PREFIX === match[SAY_OR_DO_REGEX_GROUP_PREFIX]
}

const isSayAction = (text) =>  {
  const match = SAY_OR_DO_REGEX.exec(text)
  return match && SAY_PREFIX === match[SAY_OR_DO_REGEX_GROUP_PREFIX]
}

/******************************************************************************/
/*                               Menus and Text                               */
/******************************************************************************/

const ICON_AUTHORS_NOTE = '📝 Author\'s Note'
const ICON_CONTEXT = '📌 Context'
const ICON_DEBUG_INFO = 'ℹ️ Debug Info'
const ICON_ERROR = '😵 Oof!'
const ICON_FRONT_MEMORY = '🧠 Front Memory'
const ICON_KEY = '️🔑 Key'
const ICON_MODULES = '[🧩 Modules]'
const ICON_OFF = '❌ OFF';
const ICON_ON = '✔ ON';
const ICON_PIN = '📌 Pin'
const ICON_QUICK_TIPS = '❔ Quick Tips'
const ICON_TYPE = '⌨ Type'

const TIPS = [
//   ICON_PIN + ' the first paragraph. Update as needed.\n'
// + '(' + ICON_TYPE + ' /remember in Hardcore mode.)',
  ICON_TYPE + ' /help for script info & special commands.'
  ]

const QUICK_TIPS = ICON_QUICK_TIPS + '\n\n'
+ ICON_PIN + ' the first paragraph. Update as needed.\n'
+ '(' + ICON_TYPE + ' /remember in Hardcore mode.)\n'
+ '\n'
+ ICON_TYPE + ' /help for script info & special commands.'

// This function violates the encapsulation of the modules' state on purpose in
// order to provide useful information to the user. Nothing else outside of this
// 'glass box'-style debug function should rely on the inner workings of the
// modules, as this would break their modularity and subvert their whole design.
function getDebugText() {
  let debugText = ICON_DEBUG_INFO + ' - Player Turns: ' + state.turn
  if (isModuleEnabled(Module.FOCUS)) {
    if (!state.focus.text.length) {
      debugText += '\n' + Module.FOCUS.toString() + ' (None) '
    } else {
      debugText += '\n' + Module.FOCUS.toString() + ' ' + state.focus.text
    }
  }
  if (isModuleEnabled(Module.DANGER)) {
    if (!state.danger.text.length) {
      debugText += '\n' + Module.DANGER.toString() + ' Turn ' + state.danger.turn + ': (None)'
    } else {
      debugText += '\n' + Module.DANGER.toString() + ' Turn ' + state.danger.turn + ': ' + state.danger.text
    }
  }
  if (isModuleEnabled(Module.EVENTS)) {
    if (!state.events.text.length) {
      debugText += '\n' + Module.EVENTS.toString() + ' Turn ' + state.events.turn + ': (None)'
    } else if (state.events.duration > 0) {
      debugText += '\n' + Module.EVENTS.toString() + ' Duration ' + state.events.duration + ': ' + state.events.text
    } else {
      debugText += '\n' + Module.EVENTS.toString() + ' Turn ' + state.events.turn + ": " + state.events.text
    }
  }
  debugText += '\n' + ICON_AUTHORS_NOTE + ': ' + state.memory.authorsNote
  debugText += '\n' + ICON_FRONT_MEMORY + ': ' + state.memory.frontMemory
  debugText += '\n' + ICON_CONTEXT + ': ' + state.memory.context
  return debugText
}

function getHelpMenu() {
  const enabled = isModulesEnabled()
  let helpText = '❓ MousAI Scripts Help Menu'
  helpText += '\n' + (enabled ? ICON_ON : ICON_OFF) + ' ' + ICON_MODULES + ' ' 
  + ICON_TYPE + ' /modules to ' + (enabled ? 'disable' : 'enable') + ' all.'
  Module.values().forEach(module => helpText += '\n\n' + module.getHelpText())
  helpText += '\n\n' + ICON_TYPE + ' /debug for useful debug information.'
  helpText += '\n\n' + ICON_TYPE + ' /close to close this menu.'
  return helpText
}

/******************************************************************************/
/*                                 Commands                                   */
/******************************************************************************/

const Command = {
  CLOSE:    'close',
  DEBUG:    'debug',
  ERROR:    'error',
  HELP:     'help',
  MODULES:  'modules',
  // These module commands are depreciated and will go away in the next release.
  DANGER:   'danger',
  EVENTS:   'events',
  FOCUS:    'focus',
  NERVES:   'nerves'
}

function parseCommand(text) {
  let input = extractInput(text)
  if (input?.startsWith('/') && input.length > 1) {
    const args = input.substring(1).split(' ', 2)
    const cmd = getCommand(args.splice(0, 1)[0])
    return processCommand(cmd, args)
  }
  return false
}

function extractInput(text) {
  let modifiedText = text
  if (SAY_OR_DO_REGEX.test(text)) {
    modifiedText = text.replace(SAY_OR_DO_REGEX, '$' + SAY_OR_DO_REGEX_GROUP_INPUT)
  }
  return modifiedText.trim()
}

function getCommand(input) {
  return state.commands.find(command => command === input.toLowerCase())
}

function processCommand(cmd, args) {
  switch(cmd) {
    case Command.CLOSE:
      processCloseCommand()
      return true
    case Command.DEBUG:
      processDebugCommand()
      return true
    case Command.ERROR:
      processErrorCommand()
      return true
    case Command.HELP:
      processHelpCommand()
      return true
    case Command.MODULES:
      processModulesCommand()
      return true
    case Command.DANGER:
    case Command.EVENTS:
    case Command.FOCUS:
    case Command.NERVES:
      // Individual module commands are deprecated.
      const module = getModule(cmd)
      processModuleCommand(module)
      return true
    default:
    // TODO Check the command against installed module names here. If a matching
    // module is found, call its command function and pass it the args.
    // Otherwise, return false.
      return false
  }
}

function processDebugCommand() {
  if (enableDebugInfo()) {
    state.message = ICON_DEBUG_INFO + ' is now ' + ICON_ON
  } else if (disableDebugInfo()) {
    state.message = ICON_DEBUG_INFO + ' is now ' + ICON_OFF
  } else {
    showErrorText()
  }
}

function enableDebugInfo() {
  if (!state.debugInfoEnabled) {
    state.debugInfoEnabled = true
    return true
  }
  return false
}

function disableDebugInfo() {
  if (state.debugInfoEnabled) {
    state.debugInfoEnabled = false
    return true
  }
  return false
}

function processErrorCommand() {
  showErrorText()
}

function showErrorText() {
  state.message = ICON_ERROR + ' Something went wrong...'
}

function processHelpCommand() {
  showHelpMenu()
}

function showHelpMenu() {
  state.message = getHelpMenu()
  state.helpMenuShowing = true
}

function processCloseCommand() {
  hideHelpMenu()
}

function hideHelpMenu() {
  state.message = ''
  state.helpMenuShowing = false
}

function processModulesCommand() {
  if (enableModules()) {
    state.message = ICON_MODULES + ' are now ' + ICON_ON + '.'
  } else if (disableModules()) {
    state.message = ICON_MODULES + ' are now ' + ICON_OFF + '.'
  } else {
    showErrorText()
  }
}

function enableModules() {
  if (!state.modulesEnabled && Module.values().length) {
    let changed = false
    Module.values().forEach(module => changed = module.enable() || changed)
    state.modulesEnabled = true
    return changed
  }
  return false
}

function disableModules() {
  if (state.modulesEnabled && Module.values().length) {
    let changed = false
    Module.values().forEach(module => changed = module.disable() || changed)
    state.modulesEnabled = false
    return changed
  }
  return false
}

function getModule(input) {
  return Module.values().find(module => module.name === input.toUpperCase())
}

function processModuleCommand(module) {
  if (enableModule(module)) {
    state.message = module.toString() + ' is now ' + ICON_ON + '.'
  } else if (disableModule(module)) {
    state.message = module.toString() + ' is now ' + ICON_OFF + '.'
  } else {
    showErrorText()
  }
}

function enableModule(module) {
  if (Module.values().includes(module) && module.enable()) {
    if (!state.modulesEnabled) {
      state.modulesEnabled = true
    }
    return true
  }
  return false
}

function disableModule(module) {
  if (Module.values().includes(module) && module.disable()) {
    if (Module.values().every(module => !module.isEnabled())) {
      state.modulesEnabled = false
    }
    return true
  }
  return false
}

/******************************************************************************/
/*                                  Modules                                   */
/******************************************************************************/

/*****************************      [FOCUS]      ******************************/

const FOCUS = {
  name: 'FOCUS',
  disable: function() {
    if (state.focus) {
      state.focus = null;
      return true;
    }
    return false;
  },
  enable: function() {
    if (!state.focus) {
      this.initialize();
      return true;
    }
    return false;
  },
  execute: function(text) {
    if (state.focus) {
      state.focus.turn++;
      
      const focus = getWorldInfoEntryByKey(FOCUS_KEY);
      if (focus) {
        state.focus.text = focus.entry;
      } else {
        state.focus.text = '';
      }
      
      state.frontMemoryText = state.focus.text;
    }
  },
  getHelpText: function() {
    const enabled = this.isEnabled();
    return (enabled ? ICON_ON : ICON_OFF) + ' ' + this.toString() + ' '
      + ICON_TYPE + ' /focus to ' + (enabled ? 'disable' : 'enable') + '.\n'
      + ICON_KEY + ': "mousai_focus" (1st occurrence used).\n'
      + 'The narrative is driven by a crucial motive or objective.';
      
  },
  initialize: function() {
    state.focus = Object.seal({
      text: '',
      turn: -1
    });
    if (state.turn > 0) {
      state.focus.turn++;
    }
  },
  isEnabled: function() {
    return Boolean(state.focus);
  },
  toString: () => '[🕵️ Focus]'
}

/*****************************      [DANGER]      *****************************/

const DANGER = {
  name: 'DANGER',
  disable: function() {
    if (state.danger) {
      state.danger = null;
      return true;
    }
    return false;
  },
  enable: function() {
    if (!state.danger) {
      this.initialize();
      return true;
    }
    return false;
  },
  execute: function(text) {
    if (state.danger) {
      state.danger.turn++;
      // First, determine whether a new danger is becoming active this turn.
      // Use the first valid entry in the list.
      const dangers = getWorldInfoEntriesByKey(DANGER_KEY);
      if (dangers) {
        const danger = dangers
          .find(danger => getWorldInfoKeyNumber(danger.keys, DANGER_KEY) === state.danger.turn);
        
        if (danger) {
          // There's a new danger taking effect this turn. Set it and forget it.
          state.danger.text = danger.entry;
        } else {
          // Find the most recent danger before now. Preceding entries win ties.
          let recentDangerTurn = -1;
          const activeDanger = dangers.reduce((recentDanger, otherDanger) => {
            const otherDangerTurn = getWorldInfoKeyNumber(otherDanger.keys, DANGER_KEY)
            if (otherDangerTurn > recentDangerTurn && otherDangerTurn < state.danger.turn) {
              recentDangerTurn = otherDangerTurn;
              return otherDanger;
            }
            return recentDanger;
            }, null);
          
          if (activeDanger) {
            // There is an entry that is valid. By setting it here, we're also
            // updating any changes to the entry since the last turn.
            state.danger.text = activeDanger.entry;
          } else {
            // This means there is no danger in World Info, or a previously
            // valid entry was edited or deleted so that it's no longer valid.
            state.danger.text = '';
          }
        }
      }
      
      // Store results to state. Results may be modified by subsequent modules.
      if (state.danger.text.length) {
        state.contextText += ' ' + state.danger.text;
      }
    }
  },
  getHelpText: function() {
    const enabled = this.isEnabled();
    return (enabled ? ICON_ON : ICON_OFF) + ' ' + this.toString() + ' '
      + ICON_TYPE + ' /danger to ' + (enabled ? 'disable' : 'enable') + '.\n'
      + ICON_KEY + ': "mousai_danger_x" (x = turn number).\n'
      + 'Danger escalates over time. Think carefully!\n'
      + 'Disabling resets the turn counter.';
  },
  initialize: function() {
    state.danger = Object.seal({
      text: '',
      turn: -1
    });
    if (state.turn > 0) {
      state.danger.turn++;
    }
  },
  isEnabled: function() {
    return Boolean(state.danger);
  },
  toString: () => '[🔪 Danger]'
}

/*****************************      [NERVES]      *****************************/

const NERVES = {
  name: 'NERVES',
  disable: function() {
    if (state.nerves) {
      state.nerves = null;
      return true;
    }
    return false;
  },
  enable: function() {
    if (!state.nerves) {
      this.initialize();
      return true;
    }
    return false;
  },
  execute: function(text) {
    if (state.nerves) {
      state.nerves.turn++;
      if (isDoAction(text) || isSayAction(text)) {
        state.modifiedText = '\n' + state.nerves.text + state.modifiedText.substring(7);
      }
    }
  },
  getHelpText: function() {
    const enabled = this.isEnabled();
    return (enabled ? ICON_ON : ICON_OFF) + ' ' + this.toString() + ' '
      + ICON_TYPE + ' /nerves to ' + (enabled ? 'disable' : 'enable') + '.\n'
      + 'Your actions might fail. Is it worth dying over?\n'
      + 'Does not affect Story actions.';
  },
  initialize: function() {
    state.nerves = Object.seal({
      text: '> You try to ',
      turn: -1
    });
    if (state.turn > 0) {
      state.nerves.turn++;
    }
  },
  isEnabled: function() {
    return Boolean(state.nerves);
  },
  toString: () => '[😨 Nerves]'
}

/*****************************      [EVENTS]      *****************************/

const EVENTS = {
  name: 'EVENTS',
  disable: function() {
    if (state.events) {
      state.events = null;
      return true;
    }
    return false;
  },
  enable: function() {
    if (!state.events) {
      this.initialize();
      return true;
    }
    return false;
  },
  execute: function(text) {
    if (state.events) {
      state.events.turn++;
      
      if (--state.events.duration < 0) {
        state.events.duration = 0;
      }
      
      // Check for updated events and remove expired ones.
      if (state.events.entry) {
        const entry = getWorldInfoEntryById(state.events.entry.id);
        if (entry) {
          // First, we need to update duration if the keys have changed.
          if (entry.keys !== state.events.entry.keys) {
            const originalDuration = getWorldInfoKeyNumber(state.events.entry.keys, EVENTS_KEY);
            const changedDuration = getWorldInfoKeyNumber(entry.keys, EVENTS_KEY);
            const timeLeft = originalDuration - state.events.duration;
            state.events.duration = changedDuration - timeLeft;
          }
          // Now we can remove an expired event or update it.
          if (state.events.duration <= 0) {
            // This is a true timer expiration. Add to the expired list.
            state.events.expired.push(entry.id);
            state.events.entry = null;
            state.events.duration = 0;
            state.events.text = '';
          } else {
            // Update the event in case the entry was changed.
            state.events.entry = entry;
            state.events.text = entry.entry;
          }
        } else {
          // The entry was deleted. Remove the event and reset related properties.
          state.events.entry = null;
          state.events.duration = 0;
          state.events.text = '';
        }
      }
      
      // Try for a new event only if there isn't already one already.
      if (!state.events.entry && state.events.turn > 0) {
        const nTurn = Math.floor((Math.random() * 2)) + 3;
        if (state.events.turn % nTurn === 0) {
          const events = getWorldInfoEntriesByKey(EVENTS_KEY);
          const unexpired = events?.filter(event => !state.events.expired.includes(event.id));
          if (unexpired?.length) {
            const index = Math.floor((Math.random() * unexpired.length));
            if (index < unexpired.length) {
              const event = unexpired[index];
              const duration = getWorldInfoKeyNumber(event.keys, EVENTS_KEY);
              state.events.entry = event;
              state.events.duration = duration;
              state.events.text = event.entry;
            }
          }
        }
      }
      
      // Store results to state. Results may be modified by subsequent modules.
      if (state.events.text.length) {
        state.modifiedText += '\n' + state.events.text;
        state.frontMemoryText = state.events.text;
      }
    }
  },
  getHelpText: function() {
    const enabled = this.isEnabled();
    return (enabled ? ICON_ON : ICON_OFF) + ' ' + this.toString() + ' '
      + ICON_TYPE + ' /events to ' + (enabled ? 'disable' : 'enable') + '.\n'
      + ICON_KEY + ': "mousai_event_x" (x = duration in turns).\n'
      + 'Self-expiring events happen by chance. Add your own!';
  },
  initialize: function() {
    state.events = Object.seal({
      duration: 0,
      entry: null,
      expired: [],
      text: '',
      turn: -1
    });
    if (state.turn > 0) {
      state.events.turn++;
    }
  },
  isEnabled: function() {
    return Boolean(state.events);
  },
  toString: () => '[⏰ Events]',
}

/***************************      MODULE BASE      ****************************/

function Module() {
  return Module;
}

Module.keys = function() {
  return Object.keys(Module)
    .filter(key => typeof Module[key] !== 'function')
    .sort((key1, key2) => Module[key1] - Module[key2]);
}

Module.valueOf = function(name) {
  return Module.values().find(module => module.name === name);
}

Module.values = function() {
  return Module.keys().map(key => Module[key]);
}

function deepFreeze(obj) {
  Object.getOwnPropertyNames(obj).forEach(name => {
    var prop = obj[name];
    if (prop && typeof prop === 'object') {
      deepFreeze(prop);
    }
  });
  return Object.freeze(obj);
}

function getModuleFactory() {
  return (module, index) => {
    Object.defineProperty(Module, module.name, {
      configurable: false,
      writable: false,
      enumerable: true,
      value: deepFreeze(module = {
        ordinal: index,
        name: module.name,
        disable: module.disable,
        enable: module.enable,
        execute: module.execute,
        getHelpText: module.getHelpText,
        initialize: module.initialize,
        isEnabled: module.isEnabled,
        toString: module.toString
      })
    });
  }
}

function buildModules() {
  if (state.modules?.length) {
    const createModule = getModuleFactory();
    state.modules.forEach((module, index) => {
      if (!Module.valueOf(module.name)) {
        createModule(module, index);
      }
    });
  }
}

function installModules() {
  state.modules = []
  if (installFocusModule) {
    state.modules.push(FOCUS)
  }
  if (installDangerModule) {
    state.modules.push(DANGER)
  }
  if (installNervesModule) {
    state.modules.push(NERVES)
  }
  if (installEventsModule) {
    state.modules.push(EVENTS)
  }
}

/******************************************************************************/
/*                               Input Modifier                               */
/******************************************************************************/

const modifier = (text) => {
  
  if (!state.initialized) {
    // Initialize Variables
    state.clearOutput = false
    state.message = ''
    state.turn = -1
    
    // Initialize Modules
    state.modulesEnabled = false
    installModules()
    buildModules()
    enableModules()
    
    // Initialize Debug Mode
    state.commands = []
    if (enableDebugMode) {
      state.tips = TIPS
      state.debugInfoEnabled = false
      state.helpMenuShowing = false
      state.commands.push(Command.DEBUG)
      state.commands.push(Command.HELP)
      state.commands.push(Command.CLOSE)
      // This ugly use of conditionals will disappear in the next minor release.
      if (Module.FOCUS) {
        state.commands.push(Command.FOCUS)
      }
      if (Module.DANGER) {
        state.commands.push(Command.DANGER)
      }
      if (Module.NERVES) {
        state.commands.push(Command.NERVES)
      }
      if (Module.EVENTS) {
        state.commands.push(Command.EVENTS)
      }
      if (Module.values().length) {
        state.commands.push(Command.MODULES)
      }
    }
    
    // This block runs only once.
    state.initialized = true
  }
  
  // Rebuild Modules
  if (!Module.values().length) {
    installModules()
    buildModules()
  }
  
  // Hide help menu if it is showing, otherwise just clear any messages.
  if (state.commands.includes(Command.HELP) && state.helpMenuShowing) {
    hideHelpMenu()
  } else {
    state.message = ''
  }
  
  // Show a tip and remove it from the lineup.
  if (state.tips?.length) {
    state.message = state.tips.splice(0, 1)[0]
  }
  
  // Attempt to parse a command from the input. If we succeed, return.
  if (state.commands.length && parseCommand(text)) {
    state.clearOutput = true
    return {text: ''}
  }
  
  // BEGIN PLAYER TURN
  state.turn++
  state.modifiedText = text
  state.authorsNoteText = '(Not implemented yet.)'
  state.contextText = memory || ''
  state.frontMemoryText = ''
  Module.values()
    .filter(module => module.isEnabled())
    .forEach(module => module.execute(text))
  // END PLAYER TURN
  
  // Store results in memory before passing modified text input off to the A.I.
  state.memory = {
    authorsNote: state.authorsNoteText,
    context:  state.contextText,
    frontMemory: state.frontMemoryText
  }
  
  // If debug is enabled, show debug information.
  if (state.debugInfoEnabled) {
    state.message = getDebugText()
  }
  
  // You must return an object with the text property defined.
  return {text: state.modifiedText}
}

// Don't modify this part
modifier(text)
