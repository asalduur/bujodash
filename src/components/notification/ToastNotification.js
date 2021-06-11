import { toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'


export const successMsg = (msg) => {
  toast.success(msg)
}

export const warnMsg = (msg) => {
  toast.warn(msg)
}

export const errorMsg = (msg) => {
  toast.error(msg)
}