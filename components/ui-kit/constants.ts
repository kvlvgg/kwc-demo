const ICON = {
  TEXT: {
    PERSON: "person",
    EMPTY_DASHBOARD: "empty_dashboard",
    BOOK_2: "book_2",
    QUIZ: "quiz",
    ARTICLE: "article",
    CHECK_BOX: "check_box",
    CHECK_BOX_OUTLINE_BLANK: "check_box_outline_blank",
    LIGHT_MODE: "light_mode",
    PARTLY_CLOUDY_DAY: "partly_cloudy_day",
    DARK_MODE: "dark_mode",
    SAVE: "save",
    CLOSE: "close",
    DELETE: "delete",
    LOGOUT: "logout",
    ADD: "add",
    CHEVRON_RIGHT: "chevron_right",
    CHEVRON_LEFT: "chevron_left",
    EDIT: "edit",
    QUESTION_MARK: "question_mark",
    CHECK: "check",
    RADIO_BUTTON_UNCHECKED: "radio_button_unchecked",
    RADIO_BUTTON_CHECKED: "radio_button_checked",
    HOME: "home",
    CATEGORY: "category",
    LANGUAGE: "language",
    CALENDAR: "calendar_month",
  } as const,

  SIZE: {
    SM: "sm",
    MD: "md",
    LG: "lg",
  } as const,
} as const;

const UI_KIT = {
  ICON,
} as const;

export { UI_KIT };
