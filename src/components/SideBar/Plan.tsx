

export default function Plan() {
    return (
        <div className="flex sticky flex-col h-12 border-t px-2 border-stone-400 justify-end text-sm"
        style={{ top: 'calc(100vh - 48px - 16px)' }}>
            <div className="flex items-center justify-between">
                <div>
                  <p className="font-bold">Enterprice</p>
                  <p className="text-stone-500">Pay as you go</p>  
                </div>  
                <button className="px-2 py-1.5 rounded font-medium bg-stone-200 hover:bg-stone-400 cursor-pointer transition-colors-rounded mr-2">
                Support
                </button>              
            </div>            
        </div>
    )
}