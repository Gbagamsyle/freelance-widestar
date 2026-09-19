export default function Button({ children, variant = 'primary', href, className = '', ...props }) {
  const classes = ['button', variant, className].filter(Boolean).join(' ')

  if (href) {
    return (
      <a className={classes} href={href} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} type="button" {...props}>
      {children}
    </button>
  )
}
