import Link from "next/link";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";
const inter = Inter({ subsets: ["latin"] });

interface Props {
  label: string,
  click: () => void,
}

export const ActiveLink = ({label, click}: Props) => {
  return (
    <button onClick={click} className={inter.className}>{label}</button>
  )
}
