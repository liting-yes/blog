import { defineClientAppEnhance } from '@vuepress/client'
import { addIcons } from "oh-vue-icons"

import {
  FaFortAwesome,
  FaSatelliteDish,
  FaTag,
  RiArchiveDrawerLine,
  HiDocumentText
} from "oh-vue-icons/icons"

addIcons(
  FaFortAwesome,
  FaTag,
  FaSatelliteDish,
  RiArchiveDrawerLine,
  HiDocumentText
)

export default defineClientAppEnhance(({ app, router, siteData }) => { })