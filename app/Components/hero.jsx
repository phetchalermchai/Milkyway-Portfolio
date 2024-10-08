import { Button } from "./button"
import { Profile } from "./svg"
import Link from "next/link"

export default function Hero() {
  return (
    <div>
        <div className="mx-5 md:mx-[50px] xl:mx-20 pt-[86px] pb-[40px] md:pt-[140px] md:pb-[70px] flex flex-col xl:flex-row gap-[10px] items-center justify-center">
            <div className="xl:order-2">
                <Profile/>
            </div>
            <div className="flex flex-col gap-[10px] md:gap-[20px] xl:order-1 xl:items-start">
                <div className="hidden xl:block xl:py-[20px]">
                    <h1 className="text-h2 text-surface-text_high dark:text-surface-inverse_text_high">Turning ideas into <br /> visually engaging and <br />user-friendly <br /> web experiences</h1>
                </div>
                <div className="flex flex-col gap-[10px] justify-center items-center xl:items-start">
                    <h2 className="text-subtitle md:text-title font-bold text-surface-text_high dark:text-surface-inverse_text_high">Chalermchai Wauwai</h2>
                    <p className="text-small_text md:text-body_regular text-surface-text_default dark:text-surface-inverse_text_default">Front End Developer</p>
                </div>
                <div className="flex gap-[10px] justify-center items-center">
                    <Link href="/resume/Resume.pdf" download target="_blank">
                        <Button pill={true}>
                            resume
                        </Button>
                    </Link>
                    <Link href="https://github.com/phetchalermchai" target="_blank">
                        <Button pill={true}>
                            github
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}


