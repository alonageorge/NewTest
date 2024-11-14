import React from 'react'

type TableButtonProps = {
    setModalShow: (flag: boolean) => void;
    text: string
}
function TableButtons({ setModalShow, text }: TableButtonProps) {


    return (
        <div className="flex justify-end gap-5 mt-[19px] ">
            <button type="button" className="font-poppins rounded bg-white text-[#18749C] h-[40px] w-[50px] opacity-[1px]" onClick={() => { setModalShow(false) }} aria-label="Close" >Cancel</button>
            <button type="button" className="font-poppins rounded text-white bg-[#18749C] h-[40px] w-[104px] opacity-[1px]" aria-label="Close">{text}</button>
        </div>
    )
}

export default TableButtons