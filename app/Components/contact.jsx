import { UndrawSocial } from "./svg"
import { PhoneIcons , LineIcons , GmailIcons} from "./icons"

export default function Contact() {
  return (
    <section id="Contack">
        <div className="mx-5 md:mx-[50px] xl:mx-20 py-10 md:py-[50px] xl:py-20 flex flex-col gap-[10px]">
            <div className="py-5 xl:py-[30px]">
                <h3 className="text-title xl:text-h3 text-surface-text_high dark:text-surface-inverse_text_high text-center">Contact</h3>
            </div>
            <div className="flex md:gap-[50px] xl:gap-20 items-center justify-center">
                <UndrawSocial/>
                <div className="flex flex-col gap-[10px] md:gap-[30px]">
                    <div className="py-[10px] flex flex-col items-center justify-center gap-[10px]">
                        <PhoneIcons/>
                        <h5 className="text-body_large text-surface-text_high dark:text-surface-inverse_text_high">Mobile Number</h5>
                        <span className="text-body_small xl:text-body_regular text-surface-text_default dark:text-surface-inverse_text_default">096-893-6090</span>
                        <span className="text-body_small xl:text-body_regular text-surface-text_default dark:text-surface-inverse_text_default">095-716-3209</span>
                    </div>
                    <div className="py-[10px] flex flex-col items-center justify-center gap-[10px]">
                        <LineIcons/>
                        <h5 className="text-body_large text-surface-text_high dark:text-surface-inverse_text_high">Line</h5>
                        <span className="text-body_small xl:text-body_regular text-surface-text_default dark:text-surface-inverse_text_default">LINE ID : phetchalermchai</span>
                    </div>
                    <div className="py-[10px] flex flex-col items-center justify-center gap-[10px]">
                        <GmailIcons/>
                        <h5 className="text-body_large text-surface-text_high dark:text-surface-inverse_text_high">Gmail</h5>
                        <span className="text-body_small xl:text-body_regular text-surface-text_default dark:text-surface-inverse_text_default">phetangelb@gmail.com</span>
                    </div>
                    
                </div>
            </div>
        </div>
    </section>
  )
}
