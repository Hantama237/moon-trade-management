// For more information about this file see https://dove.feathersjs.com/guides/cli/hook.html
import type { HookContext } from '../declarations'
import errors from '@feathersjs/errors'
export const featherErrorHandler = async (context: HookContext) => {
  if (context.error) {
    const error = context.error
    if (!error.code) {
      const newError = new errors.GeneralError('server error')
      context.error = newError
      return context
    }
    if (error.code === 404 || process.env.NODE_ENV === 'production') {
      error.stack = null
    }
    return context
  }
}
