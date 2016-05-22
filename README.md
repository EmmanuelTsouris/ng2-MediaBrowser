#Angular 2 Media Browser

[Demo](https://emmanueltsouris.github.io/ng2-MediaBrowser/)

A prototype Angular 2 Application that reads in a json file containing a list of videos, title, descriptions, etc and displays them for users to browse and watch.

*This version includes some sample mp4 videos* from NASA and is about 170MB, I'll be cutting the videos down to a few seconds in the next update to reduce the total size. I kept these in there as samples to make sure I can clone and run it in multiple environments.

## Create a new project using ng2-Media Browser as a starting point.

Clone the repo into a new project folder (e.g., `my-proj`).
```bash
git clone  https://github.com/emmanueltsouris/ng2-mediabrowser  my-proj
cd my-proj
```

Optionally discard everything "git-like" by deleting the `.git` folder.
```bash
rm -rf .git
```

## Install npm packages

Install the npm packages described in the `package.json`:

**Windows Developers:  Run these commands in administrator mode**

```bash
npm install
```

## Install Angular-CLI
https://github.com/angular/angular-cli#installation

Verify that it works
```bash
ng serve
```

Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Add Video Files

Place your mp4 videos in the media folder, and update the list.json with details. For a production application you might use a backend REST api to provide the list of videos, you can update the Url in the *media.service* service.

#Appendix: Running Angular 2 Apps on Windows 2008 with IIS 7

##Allowing the Plus (+) character in a URL for Angular2 html5 Routing
By default, IIS 7 denies requests with certain characters in the URL. The plus (+) sign is one of those illegal characters. You can disable the setting for your web app using the web.config, basically setting allowDoubleEscaping to true.
 
Before making this change in production, be sure to research and understand the security implications for your specific environment, server, and web application.
 
Example location in web.config
```
<configuration>
  <system.webServer>
    <security>
            <requestFiltering allowDoubleEscaping="true" />
    </security>
</system.webServer>
</configuration>
```
[Learn more about requestFiltering](https://www.iis.net/configreference/system.webserver/security/requestfiltering)
 
Attribute
Description
allowDoubleEscaping
Optional Boolean attribute.
 
If set to true, request filtering will allow URLs with doubly-escaped characters. If set to false, request filtering will deny the request if characters that have been escaped twice are present in URLs.
 
The default value is false.
 
 
##Enable Json file download
Windows 2008 IIS 7 doesn't usually let you download a json file with the default configuration. You'll receive a 404 error, and need to add a mime type to handle the file extension. Adding a mime type can be done through the IIS console, or simply by editing the web.config.
 
Example location in web.config
```
<configuration>
  <system.webServer>
    <staticContent>
      <mimeMap fileExtension=".json" mimeType="application/json" />
    </staticContent>
  </system.webServer>
</configuration>
```

##URL rewrite and Routing
Another challenge with running Angular2 on Windows 2008 with IIS is the component router and the default html5 routes.

For URL rewriting, you'll need the rewrite module.
http://www.iis.net/learn/extensions/url-rewrite-module/creating-rewrite-rules-for-the-url-rewrite-module
 
An example rule for this Angular2 application
```
        <rewrite>
          <rules>
            <rule name="Main Rule" stopProcessing="true">
                    <match url=".*" />
                    <conditions logicalGrouping="MatchAll">
                        <add input="{REQUEST_FILENAME}" matchType="IsFile" negate="true" />
                        <add input="{REQUEST_FILENAME}" matchType="IsDirectory" negate="true" />
                    </conditions>
                    <action type="Rewrite" url="index.html" />
                </rule>
            </rules>
        </rewrite>
```

##Example of a working web.config (includes server side caching)
```
<?xml version="1.0" encoding="utf-8"?>
<!--
  For more information on how to configure your ASP.NET application, please visit
  http://go.microsoft.com/fwlink/?LinkId=169433
  -->
<configuration>
  <system.web>
    <compilation debug="true" targetFramework="4.5" />
    <httpRuntime targetFramework="4.5" />
  </system.web>
  <system.webServer>
    <modules runAllManagedModulesForAllRequests="true" />
    <security>
      <requestFiltering allowDoubleEscaping="true" />
    </security>
    <staticContent>
            <remove fileExtension=".map" />
      <mimeMap fileExtension=".json" mimeType="application/json" />
            <mimeMap fileExtension=".map" mimeType="application/json" />
            <clientCache cacheControlMode="UseMaxAge" cacheControlMaxAge="7.00:00:00" />
    </staticContent>
        <rewrite>
          <rules>
            <rule name="Main Rule" stopProcessing="true">
                    <match url=".*" />
                    <conditions logicalGrouping="MatchAll">
                        <add input="{REQUEST_FILENAME}" matchType="IsFile" negate="true" />
                        <add input="{REQUEST_FILENAME}" matchType="IsDirectory" negate="true" />
                    </conditions>
                    <action type="Rewrite" url="index.html" />
                </rule>
            </rules>
        </rewrite>
        <caching>
            <profiles>
                <add extension=".css" policy="CacheUntilChange" kernelCachePolicy="CacheUntilChange" />
                <add extension=".html" policy="CacheUntilChange" kernelCachePolicy="CacheUntilChange" duration="00:00:30" />
                <add extension=".js" policy="CacheUntilChange" kernelCachePolicy="CacheUntilChange" duration="00:00:30" />
            </profiles>
        </caching>
  </system.webServer>
</configuration>
```
