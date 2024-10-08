
export function Button({
  cssStyle,
  pill = false, // ture , false
  variant ="primary",
  onClick,
  disabled,
  children 
}) {

  // edit style here.
  const style = {
    typography : "uppercase text-btn_small md:text-btn_medium lg:text-btn_large",
    flex : "flex items-center justify-center",
    border : `${pill ? "rounded-full" : "rounded-s md:rounded-m lg:rounded-l"}`,
    background : {
      primary : `bg-primary-container_default hover:bg-primary-container_low active:outline active:outline-4 active:outline-primary-border_lowest 
    active:bg-primary-container_default focus:bg-primary-container_high disabled:bg-primary-container_disabled text-surface-inverse_text_high
    dark:bg-primary-container_low dark:hover:bg-primary-container_lowest dark:active:outline dark:active:outline-4 dark:active:outline-primary-border_lowest
    dark:active:bg-primary-container_low dark:focus:bg-primary-container_default dark:text-surface-inverse_text_high disabled:outline-0 dark:disabled:outline-0
    dark:disabled:bg-primary-container_disabled`,
      neutral : `bg-surface-inverse_container_default hover:bg-surface-inverse_container_low active:outline active:outline-4 active:outline-surface-border_low
    active:bg-surface-inverse_container_default focus:bg-surface-inverse_container_high disabled:bg-surface-container_high text-surface-inverse_text_high
    dark:bg-surface-container_default dark:hover:bg-surface-container_low dark:active:outline dark:active:outline-4 dark:active:outline-surface-border_high
    dark:active:bg-surface-container_default dark:focus:bg-surface-container_high dark:text-surface-text_high disabled:outline-0 dark:disabled:outline-0
    dark:disabled:bg-surface-container_high`
    },
    responsive : `px-4 py-2 gap-[8px] md:px-[20px] md:py-[12px] md:gap-[12px] 
    lg:px-[24px] lg:py-[16px] lg:gap-[16px]`
  }

  return (
    <button
      className={`${style.typography} ${style.flex} ${style.border} ${variant === "primary" ? `${style.background.primary}`:`${style.background.neutral}`} ${style.responsive} `}
      type="button"
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export function ButtonSmall({
  cssStyle,
  pill = false, // ture , false
  variant ="primary",
  onClick,
  disabled,
  children 
}) {

  // edit style here.
  const style = {
    typography : "uppercase text-btn_small",
    flex : "flex items-center justify-center",
    border : `${pill ? "rounded-full" : "rounded-s"}`,
    background : {
      primary : `bg-primary-container_default hover:bg-primary-container_low active:outline active:outline-4 active:outline-primary-border_lowest 
    active:bg-primary-container_default focus:bg-primary-container_high disabled:bg-primary-container_disabled text-surface-inverse_text_high
    dark:bg-primary-container_low dark:hover:bg-primary-container_lowest dark:active:outline dark:active:outline-4 dark:active:outline-primary-border_lowest
    dark:active:bg-primary-container_low dark:focus:bg-primary-container_default dark:text-surface-inverse_text_high disabled:outline-0 dark:disabled:outline-0
    dark:disabled:bg-primary-container_disabled`,
      neutral : `bg-surface-inverse_container_default hover:bg-surface-inverse_container_low active:outline active:outline-4 active:outline-surface-border_low
    active:bg-surface-inverse_container_default focus:bg-surface-inverse_container_high disabled:bg-surface-container_high text-surface-inverse_text_high
    dark:bg-surface-container_default dark:hover:bg-surface-container_low dark:active:outline dark:active:outline-4 dark:active:outline-surface-border_high
    dark:active:bg-surface-container_default dark:focus:bg-surface-container_high dark:text-surface-text_high disabled:outline-0 dark:disabled:outline-0
    dark:disabled:bg-surface-container_high`
    },
    responsive : `px-4 py-2 gap-[8px]`
  }

  return (
    <button
      className={`${style.typography} ${style.flex} ${style.border} ${variant === "primary" ? `${style.background.primary}`:`${style.background.neutral}`} ${style.responsive} ${cssStyle}`}
      type="button"
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export function ButtonMedium({
  cssStyle,
  pill = false, // ture , false
  variant ="primary",
  onClick,
  disabled,
  children 
}) {

  // edit style here.
  const style = {
    typography : "uppercase text-btn_medium",
    flex : "flex items-center justify-center",
    border : `${pill ? "rounded-full" : "rounded-m"}`,
    background : {
      primary : `bg-primary-container_default hover:bg-primary-container_low active:outline active:outline-4 active:outline-primary-border_lowest 
    active:bg-primary-container_default focus:bg-primary-container_high disabled:bg-primary-container_disabled text-surface-inverse_text_high
    dark:bg-primary-container_low dark:hover:bg-primary-container_lowest dark:active:outline dark:active:outline-4 dark:active:outline-primary-border_lowest
    dark:active:bg-primary-container_low dark:focus:bg-primary-container_default dark:text-surface-inverse_text_high disabled:outline-0 dark:disabled:outline-0
    dark:disabled:bg-primary-container_disabled`,
      neutral : `bg-surface-inverse_container_default hover:bg-surface-inverse_container_low active:outline active:outline-4 active:outline-surface-border_low
    active:bg-surface-inverse_container_default focus:bg-surface-inverse_container_high disabled:bg-surface-container_high text-surface-inverse_text_high
    dark:bg-surface-container_default dark:hover:bg-surface-container_low dark:active:outline dark:active:outline-4 dark:active:outline-surface-border_high
    dark:active:bg-surface-container_default dark:focus:bg-surface-container_high dark:text-surface-text_high disabled:outline-0 dark:disabled:outline-0
    dark:disabled:bg-surface-container_high`
    },
    responsive : `px-[20px] py-[12px] gap-[12px]`
  }

  return (
    <button
      className={`${style.typography} ${style.flex} ${style.border} ${variant === "primary" ? `${style.background.primary}`:`${style.background.neutral}`} ${style.responsive} ${cssStyle}`}
      type="button"
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export function IconButton({
  cssStyle,
  pill=false , // ture , false
  onClick,
  disabled,
  children
}) {

  // edit style here.
  const style = {
    flex : `flex items-center justify-center ${cssStyle}`,
    border : `${pill ? "rounded-full" : "rounded-s md:rounded-m lg:rounded-l"}`,
    background : `bg-primary-container_default hover:bg-primary-container_low active:outline active:outline-4 active:outline-primary-border_lowest 
    active:bg-primary-container_default focus:bg-primary-container_high disabled:bg-primary-container_disabled text-surface-inverse_text_high
    dark:bg-primary-container_low dark:hover:bg-primary-container_lowest dark:active:outline dark:active:outline-4 dark:active:outline-primary-border_lowest
    dark:active:bg-primary-container_low dark:focus:bg-primary-container_default dark:text-surface-inverse_text_high dark:disabled:bg-primary-container_disabled disabled:active:outline-0 dark:disabled:active:outline-0`,
    responsive : "p-[8px] gap-[8px] md:p-[12px] md:gap-[12px] lg:p-[16px] lg:gap-[16px]"
  }

  return(
    <button 
    className={`${style.flex} ${style.border} ${style.background} ${style.responsive}`}
    type="button"
    onClick={onClick}
    disabled={disabled}
    aria-label="icon button"
    >
      {children}
    </button>
  )
}
