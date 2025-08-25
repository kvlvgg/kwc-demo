<template>
  <div :class="iconClasses">
    {{ text }}
  </div>
</template>

<script setup lang="ts">
import { useCssModule, computed } from "vue";
import type { PropType } from "vue";

import { UI } from "@/components/constants";

type Sizes = typeof UI.KIT.ICON.SIZE;
type Size = Sizes[keyof Sizes];

defineOptions({ name: "ui.kit.Icon" });

const props = defineProps({
  text: { type: String, required: true },
  size: { type: String as PropType<Size>, default: UI.KIT.ICON.SIZE.MD },
  button: { type: Boolean, default: false },
});

const style = useCssModule();

const iconClasses = computed(() => ({
  [style.icon]: true,
  [style.button]: props.button,
  [style[`size-${props.size}`]]: true,
}));
</script>

<style module lang="scss">
$sizes: (
  "lg": (
    "font-size": $icon-size-lg,
  ),
  "md": (
    "font-size": $icon-size-md,
  ),
  "sm": (
    "font-size": $icon-size-sm,
  ),
);

.icon {
  @include font-icon();
  color: $text-primary-color;

  &.button {
    cursor: pointer;
    user-select: none;
  }

  @each $size, $options in $sizes {
    &.size-#{$size} {
      font-size: map-get($options, "font-size");
    }
  }
}
</style>
