# MikroORM ERR_UNKNOWN_FILE_EXTENSION reproduce

This is a minimal reproduction of an issue with MikroORM with TypeScript, ESM and NodeNext.

## Steps to reproduce

### debug

```bash
npm i
npm exec mikro-orm debug
```

you should see the following error:

```bash
Current MikroORM CLI configuration
 - dependencies:
   - mikro-orm 5.4.1
   - node 16.14.2
   - typescript 4.8.3
 - package.json found
 - ts-node enabled
 - searched config paths:
   - C:/Other/project/mkorm/mikro-orm.config.ts (found)
   - C:/Other/project/mkorm/mikro-orm.config.js (not found)
- configuration not found (Unknown file extension ".ts" for C:\Other\project\mkorm\mikro-orm.config.ts)
```

### database

```bash
npm exec mikro-orm database:create
```

you should see the following error:

```bash
TypeError [ERR_UNKNOWN_FILE_EXTENSION]: Unknown file extension ".ts" for C:\Other\project\mkorm\mikro-orm.config.ts
    at new NodeError (node:internal/errors:371:5)
    at Object.getFileProtocolModuleFormat [as file:] (node:internal/modules/esm/get_format:87:11)
    at defaultGetFormat (node:internal/modules/esm/get_format:102:38)
    at defaultLoad (node:internal/modules/esm/load:21:14)
    at ESMLoader.load (node:internal/modules/esm/loader:359:26)
    at ESMLoader.moduleProvider (node:internal/modules/esm/loader:280:58)
    at new ModuleJob (node:internal/modules/esm/module_job:66:26)
    at ESMLoader.#createModuleJob (node:internal/modules/esm/loader:297:17)
    at ESMLoader.getModuleJob (node:internal/modules/esm/loader:261:34)
    at async Promise.all (index 0) {
  code: 'ERR_UNKNOWN_FILE_EXTENSION'
}
```
