# Setup

## Requirements
- VsCode Bitburner extension

### Alternatively
    The VsCode bitburner extension just acts as a file-watcher looking for updates to the file system within a given folder. If a change has happened then it sends a post or put request to the bitburner web-server. the functionality of the extension could be replicated as an independent service for any editor (eg.: VIM).

## File structure

The following file structure has to be setup after cloning. This repository corresponds to the template folder.
The bitburner folder contains the source code for the game which is used for type definitions of typescript (and some definition lookup :) ).
The .vscode folder contains the settings settings for the bitburner extension.
Lastly the template folder is this repository.

```tree
project
|   
+-- .vscode 
|   +-- settings.json
+-- bitburner (git clone `https://github.com/danielyxie/bitburner/tree/master`)
+-- template(this)
|   +-- package.json
|   +-- src (source directory)
|   +-- dist (compile directory)
|   +-- etc*
```

### [`Settings.json`](../.vscode/settings.json)
```json
{
    "bitburner.authToken": "<Auth token>",
    "bitburner.scriptRoot": "./code/dist/",
    "bitburner.fileWatcher.enable": true,
    "bitburner.showPushSuccessNotification": true,
    "bitburner.showFileWatcherEnabledNotification": true,
}
```