import { ToastProgrammatic as Toast } from 'buefy'

export default function (msg, type = 'failed') {
  Toast.open({
    message: msg,
    position: 'is-bottom',
    type: type === 'success' ? 'is-success' : 'is-danger'
  })
}
