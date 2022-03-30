import SimpleAnalytics from 'simple-analytics-vue'
import Vue from 'vue'

Vue.use(SimpleAnalytics, {
  domain: 'uatu.yougotthis.io',
  skip: process.env.NODE_ENV !== 'production',
})
