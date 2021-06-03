import { SyncHook } from 'tapable'

const hook = new SyncHook()

hook.tap('logPlugin', () => { console.log('被勾了') })

hook.call()
