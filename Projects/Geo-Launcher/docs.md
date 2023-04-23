# [<](readme.md) Geo Launcher - Docs

The Preinstalled modules for node in this project are filesystem (fs) and path. To access one of these modules in your plugin all you need to do is type the following.

```js

// Node Module Path
modules.path
// Node Module Fs
modules.fs
// Then you can do whatever you need with the provided modules.

```

In Geo Launcher you cannot just use require you can only use `loadItem("ModuleOrFileName")` to manually get an installed node module or use extra helpers created using the "PluginApi" called SuperPack containing extra tools like backwards compatibility and extra functions shown below. For more info on the "Super" plugin [click here](superPlug.md).

```js
getFilePath("File To Find", __filename) /* Gets any selected path inside or
outside the plugin */
LoadPlug("Plugin name") // Loads the selected plugin's "pack.js"
LoadPlugJson("Plugin name") // Loads the pack.json from the plugin selected
LoadNest("Plugin Name", "nested pack") /* Allows you to get a custom ".js" file
from a folder called "sub" located in the Selected Pack of your choosing */
LoadLib("Plugin Name") // Allows you to get the "lib.js" from the selected pack
```