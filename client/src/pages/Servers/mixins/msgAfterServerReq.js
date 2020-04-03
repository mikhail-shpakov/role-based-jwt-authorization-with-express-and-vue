export default {
  methods: {
    msgAfterServerReq (msg, type = 'is-success') {
      this.$buefy.toast.open({
        message: msg,
        type: type,
        position: 'is-bottom',
        duration: 5000
      })
    }
  }
}
