/*! Kernel CI Dashboard | Licensed under the GNU GPL v3 (or later) */
define([
    'jquery',
    'd3',
    'utils/format',
    'charts/base',
    'utils/html',
    'charts/bar'
], function($, d3, format, k, html) {
    'use strict';
    var statsbar = {};

    function setupTooltips(element) {
        $(element + ' .bar').tooltip({
            html: true,
            trigger: 'hover',
            container: 'body',
            placement: 'top',
            title: function() {
                var el = $(this),
                    total = el.data('total') || 0,
                    prev = el.data('prev'),
                    tooltipString = '';

                if (prev !== null && prev !== undefined) {
                    prev = parseInt(prev, 10);
                    if (prev === 0) {
                        prev = '&#177;' + format.number(prev);
                    } else if (prev > 0) {
                        prev = '&#43;' + format.number(prev);
                    } else {
                        prev = format.number(prev);
                    }
                    tooltipString = format.number(total) + '<br/>(' +
                        prev + ')';
                } else {
                    tooltipString = format.number(total);
                }
                return tooltipString;
            }
        });
    }

    function barGraph(element, data, diffs, color) {
        var chart,
            setup,
            gElement;

        if (!color || color === null || color === undefined) {
            color = '#564195';
        }

        if (data !== null) {
            chart = k.charts.bar();
            setup = {
                values: data,
                chart: chart,
                reverse: true,
                color: color
            };

            html.removeChildren(document.getElementById(element));
            gElement = d3.select('#' + element);

            gElement
                .data([setup])
                .each(function(datum) {
                    d3.select(this).call(datum.chart);
                });

            gElement
                .selectAll('rect')
                .attr('data-total', function(d) {
                    return d;
                })
                .attr('data-prev', function() {
                    var tEl = d3.select(this),
                        dataKey = tEl.attr('data-key');

                    return diffs[dataKey];
                });

            setupTooltips('#' + element);
        }
    }

    // data: a dictionary with keys the ISO dates as string and values the
    // calculated totals.
    // diffs: a dictionary with keys the ISO dates as string, and values the
    // calculated difference for each date with thre previous one.
    statsbar.jobs = function(element, data, diffs) {
        barGraph(element, data, diffs, '#D9814F');
    };

    statsbar.builds = function(element, data, diffs) {
        barGraph(element, data, diffs, '#D9C24F');
    };

    statsbar.boots = function(element, data, diffs) {
        barGraph(element, data, diffs, '#348E75');
    };

    return statsbar;
});
