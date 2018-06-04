const fs = require('fs')
const _ = require('lodash')

const har = JSON.parse(fs.readFileSync('www.humblebundle.com.har'))

const entries = har.log.entries.filter(entry =>
  entry.response.content.mimeType === 'application/json'
).map(e =>
  JSON.parse(e.response.content.text)
)

const keys = _.flatMap(entries
  .map(e => e.tpkd_dict && e.tpkd_dict.all_tpks)
  .filter(k => k)
).filter(k => !k.redeemed_key_val)

const steam_names = keys
  .filter(k => k.key_type === 'steam')
  .map(k => k.human_name)

steam_names.sort()

//console.log(JSON.stringify(entries, null, 2))
//console.log(JSON.stringify(keys, null, 2))
//console.log(JSON.stringify(steam_names, null, 2))
steam_names.forEach(name => console.log(name))
