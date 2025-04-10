import bulldog from '../../assets/bulldog.webp'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'

export default function AcountToggle() {

    return (
        <div className="border-b mb-4 pb-4 border-stone-300">
            <button className="
            flex 
            p-1
            mt-2
             hover:bg-stone-200 
             rounded 
             transition-colors 
             relative 
             gap-2 
             w-full 
             items-center "
             >
                <img src={bulldog} alt="bulldog" className="size-12 rounded shrink-0" />
                <div className='text-start'>
                    <span className='text-sm font-bold block'>
                        Tomás is loading
                    </span>
                    <span className='text-xs block text-stone-500'>
                        tomasdev@gmail.com
                    </span>
                </div>
                <FaChevronUp 
                className='absolute right-2 top-1/2 translate-y-[calc(-50%-4px)] text-xs text-stone-500' />
                <FaChevronDown 
                className='absolute right-2 top-1/2 translate-y-[calc(-50%+4px)] text-xs text-stone-500'/>
            </button>
        </div>
    )
}