<template>
  <component
    :is="iconComponent"
    :style="computedStyle"

  />
</template>

<script setup lang="ts">
import { icons, type IconProps } from "../Icons";

const props = defineProps<IconProps>();

const iconComponent = icons[props.name as keyof typeof icons];

const computedStyle = {
  width: props.size || "24px",
  height: props.size || "24px",
  color: props.color || "currentColor",
  ...(props.style ? { cssText: props.style } : {}),
};
</script>

<style scoped lang="scss">
// .social__logo {
//   display: inline-flex;
//   transition: transform 0.3s;
//   vertical-align: middle;

//   &:hover {
//     transform: scale(1.2);
//   }
// }
</style>
