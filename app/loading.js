export default function Loading() {
    return <div>
        <div className='px-[1rem] min-h-screen bg-[#F1F0E8] md:mx-0'>
            <div className="flex flex-col gap-4 items-center justify-center w-full py-12">
                <div className="skeleton h-32 w-[70%]"></div>
                <div className="skeleton h-4 w-[70%]"></div>
                <div className="skeleton h-4 w-[70%]"></div>
                <div className="skeleton h-4 w-[70%]"></div>
                <div className="skeleton h-4 w-[70%]"></div>
                <div className="skeleton h-4 w-[70%]"></div>
                <div className="skeleton h-4 w-[70%]"></div>
                <div className="skeleton h-4 w-[70%]"></div>
            </div>
        </div>
    </div>
}