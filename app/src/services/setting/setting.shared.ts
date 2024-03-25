// For more information about this file see https://dove.feathersjs.com/guides/cli/service.shared.html
import type { Params } from '@feathersjs/feathers'
import type { ClientApplication } from '../../client'
import type { Setting, SettingData, SettingPatch, SettingQuery, SettingService } from './setting.class'

export type { Setting, SettingData, SettingPatch, SettingQuery }

export type SettingClientService = Pick<SettingService<Params<SettingQuery>>, (typeof settingMethods)[number]>

export const settingPath = 'setting'

export const settingMethods = ['find', 'get', 'create', 'patch', 'remove'] as const

export const settingClient = (client: ClientApplication) => {
  const connection = client.get('connection')

  client.use(settingPath, connection.service(settingPath), {
    methods: settingMethods
  })
}

// Add this service to the client service type index
declare module '../../client' {
  interface ServiceTypes {
    [settingPath]: SettingClientService
  }
}
