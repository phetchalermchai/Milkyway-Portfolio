
export default function Slider({value = 22}) {

  let slider ;

  switch (value) {
    case 0:
        slider = "w-[22px]"
      break;
    case 5:
        slider = "w-[32px]"
      break;
    case 10:
        slider = "w-[42px]"
      break;
    case 15:
        slider = "w-[52px]"
      break;
    case 20:
        slider = "w-[62px]"
      break;
    case 25:
        slider = "w-[72px]"
      break;
    case 30:
        slider = "w-[82px]"
      break;
    case 35:
        slider = "w-[92px]"
      break;
    case 40:
        slider = "w-[102px]"
      break;
    case 45:
        slider = "w-[112px]"
      break;
    case 50:
        slider = "w-[122px]"
      break;
    case 55:
        slider = "w-[132px]"
      break;
    case 60:
        slider = "w-[142px]"
      break;
    case 65:
        slider = "w-[152px]"
      break;
    case 70:
        slider = "w-[162px]"
      break;
    case 75:
        slider = "w-[172px]"
      break;
    case 80:
        slider = "w-[182px]"
      break;
    case 85:
        slider = "w-[192px]"
      break;
    case 90:
        slider = "w-[202px]"
      break;
    case 95:
        slider = "w-[212px]"
      break;
    case 100:
        slider = "w-[222px]"
      break;
  
    default: slider = "w-[22px]"
      break;
  }
  
  return (
    <div className="w-[220px] h-[22px] relative">
        <div className="w-[205px] h-[11px] rounded-full bg-surface-inverse_container_low absolute right-0 top-1/4"></div>
        <div className={`${slider} h-[22px] rounded-full bg-primary-container_default dark:bg-primary-container_lowest absolute`}>
            <div className="w-[18px] h-[18px] rounded-full border-2 border-primary-border_lowest dark:border-primary-border_default bg-surface-container_low absolute right-[2px] top-[2px]"></div>
        </div>
    </div>
  )
}
