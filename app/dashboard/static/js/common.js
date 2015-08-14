/*! Kernel CI Dashboard v2015.8.3 | Licensed under the GNU GPL v3 (or later) */
require.config({
    paths: {
        'lib': './lib',
        'app': './app',
        'charts': './app/charts',
        'utils': './app/utils',
        'jquery': 'lib/jquery-2.1.4',
        'jquery.hotkeys': 'lib/jquery.hotkeys-1.0.min',
        'jquery.hotkeymap': 'lib/jquery.hotkeymap-1.0.min',
        'bootstrap': 'lib/bootstrap-3.3.5',
        'sprintf': 'lib/sprintf-1.0.1',
        'd3': 'lib/d3-3.5.5',
        'datatables': 'lib/dataTables-1.10.7',
        'datatables.bootstrap': 'lib/dataTables.bootstrap-1.10.7'
    },
    map: {
        '*': {
            'app/view-boots-all': 'app/view-boots-all.201582',
            'app/view-boots-all-job': 'app/view-boots-all-job.201582',
            'app/view-boots-all-job-kernel-defconfig': 'app/view-boots-all-job-kernel-defconfig.201582',
            'app/view-boots-all-lab': 'app/view-boots-all-lab.201582',
            'app/view-boots-board': 'app/view-boots-board.201582',
            'app/view-boots-board-job': 'app/view-boots-board-job.201582',
            'app/view-boots-board-job-kernel': 'app/view-boots-board-job-kernel.201582',
            'app/view-boots-board-job-kernel-defconfig': 'app/view-boots-board-job-kernel-defconfig.201582',
            'app/view-boots-id': 'app/view-boots-id.201582',
            'app/view-boots-job-kernel': 'app/view-boots-job-kernel.201582',
            'app/view-builds-all': 'app/view-builds-all.201582',
            'app/view-builds-job-kernel': 'app/view-builds-job-kernel.201582',
            'app/view-builds-job-kernel-defconfig': 'app/view-builds-job-kernel-defconfig.201582',
            'app/view-builds-job-kernel-defconfig-logs': 'app/view-builds-job-kernel-defconfig-logs.201582',
            'app/view-index': 'app/view-index.201582',
            'app/view-info-faq': 'app/view-info-faq.201582',
            'app/view-jobs-all': 'app/view-jobs-all.201582',
            'app/view-jobs-job': 'app/view-jobs-job.201582',
            'app/view-jobs-job-branch': 'app/view-jobs-job-branch.201582',
            'app/view-stats': 'app/view-stats.201582'
        }
    },
    shim: {
        'bootstrap': {
            deps: ['jquery']
        },
        'datatables.bootstrap': {
            deps: ['datatables']
        },
        'jquery.hotkeys': {
            deps: ['jquery'],
            exports: 'jQuery'
        },
        'jquery.hotkeymap': {
            deps: ['jquery.hotkeys']
        }
    }
});
