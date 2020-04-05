import { ToastProgrammatic as Toast } from 'buefy'

export default function (msg, type = 'is-danger') {
  Toast.open({
    message: msg,
    position: 'is-bottom',
    type: type,
    duration: 3000
  })
}
