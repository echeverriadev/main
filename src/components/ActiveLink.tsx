import Link from "next/link";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";
const inter = Inter({ subsets: ["latin"] });

interface Props {
  href: string,
  label: string,
}

const style = {
  backgroundColor: "var(--button-color)",
  color: "#fff",
  textDecoration: "underline",
}

export const ActiveLink = ({href, label}: Props) => {
  const { asPath } = useRouter()
  return (
    <Link style={ asPath === href ? style : undefined } className={inter.className} href={href}>{label}</Link>
  )
}
