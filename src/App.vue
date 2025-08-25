<template>
  <header></header>

  <main>
    <input type="date" />
    <br />
    <br />

    <div :class="$style.grid">
      <kwc-calendar></kwc-calendar>
      <kwc-calendar mode="popup"></kwc-calendar>
    </div>

    <br />

    <div :class="$style.grid">
      <kwc-calendar :class="[$style.calendar, $style.light]">
        <Icon slot="calendar-icon" :text="UI.KIT.ICON.TEXT.CALENDAR" />
        <Icon slot="arrow-left" :text="UI.KIT.ICON.TEXT.CHEVRON_LEFT" />
        <Icon slot="arrow-right" :text="UI.KIT.ICON.TEXT.CHEVRON_RIGHT" />
      </kwc-calendar>

      <kwc-calendar :class="[$style.calendar, $style.light]" mode="popup">
        <Icon slot="calendar-icon" :text="UI.KIT.ICON.TEXT.CALENDAR" />
        <Icon slot="arrow-left" :text="UI.KIT.ICON.TEXT.CHEVRON_LEFT" />
        <Icon slot="arrow-right" :text="UI.KIT.ICON.TEXT.CHEVRON_RIGHT" />
      </kwc-calendar>
    </div>

    <br />

    <div :class="$style.grid">
      <kwc-calendar :class="[$style.calendar, $style.dark]">
        <Icon slot="calendar-icon" :text="UI.KIT.ICON.TEXT.CALENDAR" />
        <Icon slot="arrow-left" :text="UI.KIT.ICON.TEXT.CHEVRON_LEFT" />
        <Icon slot="arrow-right" :text="UI.KIT.ICON.TEXT.CHEVRON_RIGHT" />
      </kwc-calendar>

      <kwc-calendar :class="[$style.calendar, $style.dark]" mode="popup" adjust-popup-to-input>
        <Icon slot="calendar-icon" :text="UI.KIT.ICON.TEXT.CALENDAR" />
        <Icon slot="arrow-left" :text="UI.KIT.ICON.TEXT.CHEVRON_LEFT" />
        <Icon slot="arrow-right" :text="UI.KIT.ICON.TEXT.CHEVRON_RIGHT" />
      </kwc-calendar>
    </div>

    <br />

    <kwc-calendar
      style="width: 100%"
      :class="[$style.calendar, $style.dark]"
      mode="popup"
      adjust-popup-to-input
      @date-changed="onDateChanged"
    ></kwc-calendar>

    <br />

    <div :class="$style.grid">
      <kwc-calendar :class="[$style.calendar, $style.dark]" mode="popup" adjust-popup-to-input>
        <Icon slot="calendar-icon" :text="UI.KIT.ICON.TEXT.CALENDAR" />
        <Icon slot="arrow-left" :text="UI.KIT.ICON.TEXT.CHEVRON_LEFT" />
        <Icon slot="arrow-right" :text="UI.KIT.ICON.TEXT.CHEVRON_RIGHT" />
      </kwc-calendar>

      <kwc-calendar :class="[$style.calendar, $style.dark]" mode="popup" adjust-popup-to-input></kwc-calendar>
      <kwc-calendar :class="[$style.calendar, $style.dark]" mode="popup" adjust-popup-to-input></kwc-calendar>
      <kwc-calendar :class="[$style.calendar, $style.dark]" mode="popup" adjust-popup-to-input></kwc-calendar>
      <kwc-calendar :class="[$style.calendar, $style.dark]" mode="popup" adjust-popup-to-input></kwc-calendar>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { KwcCalendarCustomEvent } from "kwc/loader";

import Icon from "@/components/ui-kit/Icon/Icon.vue";

import { UI } from "@/components/constants";

const entity = ref<{ date: Date | null }>({ date: null });

function onDateChanged(e: KwcCalendarCustomEvent<Date>) {
  entity.value = { date: e.detail };
  console.log(entity.value);
  console.log(entity.value.date?.toLocaleDateString());
}
</script>

<style module lang="scss">
@use "../assets/light-calendar.scss";
@use "../assets/dark-calendar.scss";

main {
  padding: 20px;
}

.grid {
  display: flex;
  gap: 24px;
}
</style>
