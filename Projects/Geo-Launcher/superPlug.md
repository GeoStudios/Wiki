# [<](docs.md) Super Plugin

This Plugin adds support of backwards compatability with older and newer plugins and adds helper functions to make plugins easier. The Functions in the pack are shown below.

```js
getFilePath("File To Find", __filename) /* Gets any selected path inside or
outside the plugin */
LoadPlug("Plugin name") // Loads the selected plugin's "pack.js"
LoadPlugJson("Plugin name") // Loads the pack.json from the plugin selected
LoadNest("Plugin Name", "nested pack") /* Allows you to get a custom ".js" file
from a folder called "sub" located in the Selected Pack of your choosing */
LoadLib("Plugin Name") // Allows you to get the "lib.js" from the selected pack
```

This Plugin Allows for more plugins to be enabled through the "packs.json" located in the "Config/Super" folder. This also adds a styles pack to add more styles and a lib to make stylepacks easier using this code snippet. [full example pack src](ExamplePack/readme.md)

```js

/* Gets the full path of any file in the plugin */
const filepath = (file)=> { return getFilePath(file, __filename) }

/* Loads Stylepack Lib*/
const StylePack = LoadLib("Super/libs/stylepack/")

/* Load Up the Plugin Within the Launcher*/
StylePack.setStyle(filepath, "styles/opt1.css")

```