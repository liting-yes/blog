import { defineClientAppEnhance } from '@vuepress/client'
import { addIcons } from "oh-vue-icons"

import {
  FaFortAwesome,
  FaTag,
  FaBook,
  BiSearch,
  FaLink
} from "oh-vue-icons/icons"

addIcons(
  FaFortAwesome,
  FaTag,
  FaBook,
  BiSearch,
  FaLink
)

export default defineClientAppEnhance(({ app, router, siteData }) => { })