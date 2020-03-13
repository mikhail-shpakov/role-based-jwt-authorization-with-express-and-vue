import { ToastProgrammatic as Toast } from 'buefy'

export default function (msg) {
  Toast.open({
    message: msg,
    position: 'is-bottom',
    type: 'is-danger'
  })
}
