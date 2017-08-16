1. right click on the project's folder and "Git Bash Here"
2. run npm install if no "node_modules" folder is present in root, to install all the dependecies.
3. run "gulp watch" to preview the source code; browsersync will create and run a server and will open a browser to preview your site
4. run "gulp build" to rebuild the live compressed version; this will be placed in the "dist" folder
5. run "gulp previewDist" to preview in browser the distributable version;


NOTE:
The distributable version must be identical to the working version.
If any change have been made to the source code, the two versions will be out of sync.
Run "gulp build" to update the dist version.
