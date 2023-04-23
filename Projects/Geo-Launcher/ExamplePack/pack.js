const filepath = (file)=> { return getFilePath(file, __filename) }
/* Gets the full path of any file in the plugin */

const StylePack = LoadLib("Super/libs/stylepack/")
/* Loads Stylepack Lib*/

StylePack.setStyle(filepath, "styles/opt1.css")
/* Load Up the Plugin Within the Launcher*/