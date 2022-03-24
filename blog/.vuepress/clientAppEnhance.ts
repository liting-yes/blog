import { defineClientAppEnhance } from '@vuepress/client'
import { addIcons } from "oh-vue-icons"

import {
  FaFortAwesome,
  FaTag,
  FaBook,
  BiSearch,
  FaLink,
  FaSearch
} from "oh-vue-icons/icons"

addIcons(
  FaFortAwesome,
  FaTag,
  FaBook,
  BiSearch,
  FaLink,
  FaSearch
)

export default defineClientAppEnhance(({ app, router, siteData }) => { })