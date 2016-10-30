import VueRouter from 'vue-router'

const router = new VueRouter({
    routes: []
        .concat(require('./modules/dashboard/router'))
        .concat(require('./modules/arp/router'))
});

module.exports = router;