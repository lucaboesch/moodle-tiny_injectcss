# Full Pluginname

-- Small two sentence description --

## Features:
-- Small feature overview --
- Bulletpoint 1
- Bulletpoint 2
- ...

### Usage:
1. -- First Step --
2. -- Second Step --

## Installation and configuration
Choose one of the following installation methods:
### Installation via ZIP file
1. Log in to your Moodle site as an administrator and go to Site administration > Plugins > Install plugins.
2. Upload the ZIP file containing the plugin code. You should only be prompted to add extra details if your plugin type is not automatically detected.
3. Check the plugin validation report and finish the installation.

### Installing manually
1. You can also install the plugin by copying the contents of this directory to
   ```
	{your/moodle/dirroot}/lib/editor/tiny/plugins/injectcss
	```
2. Afterwards, log in to your Moodle site as an administrator and go to Site administration > Notifications to complete the installation.
3. Alternatively, run the following command in the Moodle root directory:
   ```
   $ php admin/cli/upgrade.php 
   ```


### System Requirements and Dependencies
- Moodle x.x or higher

## Known limitations
-- List the limitations here --

## Language support
This plugin supports the following languages:
- English
- German

## License
2025 oncampus GmbH <support@oncampus.de>

This program is free software: you can redistribute it and/or modify it under  
the terms of the GNU General Public License as published by the Free Software  
Foundation, either version 3 of the License, or (at your option) any later  
version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY  
WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A  
PARTICULAR PURPOSE.  See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with  
this program.  If not, see <https://www.gnu.org/licenses/>.