import { defineClientAppEnhance } from '@vuepress/client'
import { addIcons } from "oh-vue-icons"

import {
  FaFortAwesome,
  FaTag,
  HiDocumentText,
  BiSearch
} from "oh-vue-icons/icons"

addIcons(
  FaFortAwesome,
  FaTag,
  HiDocumentText,
  BiSearch
)

export default defineClientAppEnhance(({ app, router, siteData }) => { })