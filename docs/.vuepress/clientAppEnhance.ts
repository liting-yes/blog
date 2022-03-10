import { defineClientAppEnhance } from '@vuepress/client'
import { addIcons } from "oh-vue-icons"
import {
  FaFortAwesome,
  FaSatelliteDish,
  FaTag
} from "oh-vue-icons/icons"

addIcons(
  FaFortAwesome,
  FaTag,
  FaSatelliteDish
)

export default defineClientAppEnhance(({ app, router, siteData }) => { })