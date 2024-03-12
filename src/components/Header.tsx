type HeaderProps = {
  image: {
    src: string
    alt: string
  }
  children: React.ReactNode
}

function Header({ image, children }: HeaderProps) {
  return (
    <header>
      <img {...image} />
      {children}
    </header>
  )
}

export default Header
