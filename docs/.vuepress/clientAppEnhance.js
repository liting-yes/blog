import { defineClientAppEnhance } from '@vuepress/client'
import { addIcons } from "oh-vue-icons"
import {
  FaFortAwesome,
  FaSatelliteDish,
  FaTag,
  RiArchiveDrawerLine
} from "oh-vue-icons/icons"

addIcons(
  FaFortAwesome,
  FaTag,
  FaSatelliteDish,
  RiArchiveDrawerLine
)

export default defineClientAppEnhance(({ app, router, siteData }) => { })