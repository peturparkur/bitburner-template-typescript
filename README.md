# Setup

## File structure

```tree
project
|   
+-- .vscode 
|   +-- settings.json
+-- bitburner (git clone `https://github.com/danielyxie/bitburner/tree/master`)
+-- code
|   +-- package.json
|   +-- src
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