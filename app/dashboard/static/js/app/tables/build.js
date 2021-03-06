/*! Kernel CI Dashboard | Licensed under the GNU GPL v3 (or later) */
define([
    'utils/html',
    'tables/common'
], function(html, tcommon) {
    'use strict';
    var gBuildUtils,
        gStatusDefaults;

    gBuildUtils = {};

    gStatusDefaults = {
        pass: 'Build completed',
        build: 'Building',
        fail: 'Build failed',
        default: 'Unknown status'
    };

    /**
     * Function to render the tree column on a table.
     *
     * @param {object} data: The name of the tree/job.
     * @param {string} type: The type of the display option.
     * @return {string} The rendered element as a string.
    **/
    gBuildUtils.renderTree = function(data, type) {
        return tcommon.renderTree(data, type, '/job/' + data + '/');
    };

    /**
     * Function to render the date column on a table.
     *
     * @param {object} data: The date object.
     * @param {string} type: The type of the display option.
     * @return {string} The rendered element as a string.
    **/
    gBuildUtils.renderDate = function(data, type) {
        return tcommon.renderDate(data, type);
    };

    /**
     * Function to render the status column on a table.
     *
     * @param {string} status: The status value.
     * @param {string} type: The type of the display option.
     * @return {string} The rendered element as a string.
    **/
    gBuildUtils.renderStatus = function(status, type) {
        return tcommon.renderStatus(status, type, gStatusDefaults);
    };

    /**
     * Function to render the detail column on a table.
     *
     * @param {string} href: The link to associate with the element.
     * @param {string} type: The type of the display option.
     * @param {string} tooltip: The tooltip title.
     * @return {string} The rendered element as a string.
    **/
    gBuildUtils.renderDetails = function(href, type, tooltip) {
        return tcommon.renderDetails(href, type, tooltip);
    };

    /**
     * Render the kernel column on a table.
     *
     * @param {string} data: The actual data value.
     * @param {string} type: The type of the display option.
     * @param {string} href: The href to associate with the element.
     * @return {string} The rendered element as a string.
    **/
    gBuildUtils.renderKernel = function(data, type, href) {
        return tcommon.renderKernel(data, type, href);
    };

    /**
     * Render the defconfig column on a table.
     *
     * @param {string} data: The actual data value.
     * @param {string} type: The type of the display option.
     * @return {string} The rendered element as a string.
    **/
    gBuildUtils.renderDefconfig = function(data, type) {
        var rendered,
            tooltipNode;

        rendered = data;
        if (type === 'display') {
            tooltipNode = html.tooltip();
            tooltipNode.setAttribute('title', data);
            tooltipNode.appendChild(document.createTextNode(data));

            rendered = tooltipNode.outerHTML;
        }

        return rendered;
    };

    return gBuildUtils;
});
