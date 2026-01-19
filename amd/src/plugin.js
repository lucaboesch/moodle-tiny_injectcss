// This file is part of Moodle - https://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <https://www.gnu.org/licenses/>.

/**
 * Tiny tiny_injectcss for Moodle. Inspired by tiny_elediastyles made by https://eledia.de/
 *
 * @module      tiny_injectcss/plugin
 * @copyright   2025 oncampus GmbH <support@oncampus.de>
 * @license     http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

import {getTinyMCE} from 'editor_tiny/loader';
import {getPluginMetadata} from 'editor_tiny/utils';

import {component, pluginName} from './common';


const injectThemeCss = (editor) => {
    const doc = editor.getDoc();

    const stylesheetlinks = Array.from(doc.querySelectorAll('link[rel="stylesheet"]'));

    const editorLink = stylesheetlinks.find(l => /\/theme\/styles\.php\/[^/]+\/[^/]+\/editor$/.test(l.href));

    const replacedEditorLink = editorLink.href.replace(/\/editor$/, '/all');

    const linkAlreadyExists = stylesheetlinks.some(l => l && l.href === replacedEditorLink);
    if (linkAlreadyExists) {
        return;
    }

    const newLink = doc.createElement('link');
    newLink.rel = 'stylesheet';
    newLink.href = replacedEditorLink;
    doc.head.appendChild(newLink);

};

// Setup the tiny_injectcss Plugin.
export default new Promise((resolve) => {
    // Note: The PluginManager.add function does not support asynchronous configuration.
    // Perform any asynchronous configuration here, and then call the PluginManager.add function.
    Promise.all([
        getTinyMCE(),
        getPluginMetadata(component, pluginName),
    ]).then(([tinyMCE, pluginMetadata]) => {
        tinyMCE.PluginManager.add(pluginName, (editor) => {

            // Inject ALL CSS once Tiny is initialized.
            editor.on('init', () => {
                injectThemeCss(editor);
            });

            return pluginMetadata;
        });
        resolve([pluginName]);
        return pluginMetadata;
    }).catch((error) => {
        window.console.error("Error during plugin setup:", error);
        resolve([pluginName]);
    });
});
