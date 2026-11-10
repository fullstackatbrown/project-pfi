import {type SchemaTypeDefinition} from 'sanity'

import {personType} from './personType'
import {eventType} from './eventType'
import {homepageType} from './homepageType'
import {partnerType} from './partnerType'

export const schema: {types: SchemaTypeDefinition[]} = {
  types: [personType, eventType, homepageType, partnerType],
}
