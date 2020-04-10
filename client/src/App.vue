<template lang="pug">
#app
  top-bar
  router-view.pages
</template>

<script>
import { mapActions } from 'vuex'
import Fingerprint2 from 'fingerprintjs2'
import TopBar from './components/TopBar/index'
import Servers from './pages/Servers'

export default {
  components: {
    TopBar,
    Servers
  },
  methods: {
    ...mapActions('user', [
      'SET_FINGERPRINT'
    ]),
    setFingerprint () {
      const getFingerprint = () => {
        Fingerprint2.get(async components => {
          const values = components.map(component => component.value)
          const fingerprint = Fingerprint2.x64hash128(values.join(''), 31)
          await saveFingerprintInVuex(fingerprint)
        })
      }

      const saveFingerprintInVuex = async (fingerprint) => {
        await this.SET_FINGERPRINT(fingerprint)
      }

      window.requestIdleCallback
        ? requestIdleCallback(async () => { getFingerprint() })
        : setTimeout(async () => { getFingerprint() }, 500)
    }
  },
  mounted () {
    this.setFingerprint()
  }
}
</script>

<style lang="sass">
#app
  min-width: 320px
  .pages
    max-width: $display-width
    margin: 50px auto
</style>
