import { ToastProgrammatic as Toast } from 'buefy'
const defaultErrorMsg = 'При обращении к серверу произошла ошибка, попробуйте повторить позднее'

export default function (msg = defaultErrorMsg, type = 'failed') {
  Toast.open({
    message: msg,
    position: 'is-bottom',
    type: type === 'success' ? 'is-success' : 'is-danger',
    duration: 3000
  })
}
