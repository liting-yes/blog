import { defineClientAppEnhance } from '@vuepress/client'
import { addIcons } from "oh-vue-icons"

import {
  FaFortAwesome,
  FaTag,
  HiDocumentText,
  BiSearch,
  HiLink
} from "oh-vue-icons/icons"

addIcons(
  FaFortAwesome,
  FaTag,
  HiDocumentText,
  BiSearch,
  HiLink 
)

export default defineClientAppEnhance(({ app, router, siteData }) => { })