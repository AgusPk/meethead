<div align="center">
<h1>Meethead</h1>

</div>

## Development

### Running the Project

At root of the project, run `npm install`.

Start development environment of a workspace

```sh
$ npm run start -w=<name-of-workspace>
```
Current workspaces:

backend
@meethead/ui
@meethead/app
@meethead/extension


Note: to start the extension workspace or the app, it is recommended to have the ui project running so you can see the changes you make in ui with hot reload.



## Production

Generate production files running

```sh
$ npm run build --workspaces
```


## Testing the extension

Go to chrome://extensions/ in you browser 

Turn on developer mode and select Load unpacked

select the build folder of the extension and you are ready!