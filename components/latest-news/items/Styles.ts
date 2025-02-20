const Styles = (isHighlighted: boolean) => {
    const Styles = {
        wrapperDiv: `flex items-stretch justify-center basis-[25%] rounded-[2px] bg-white transition-all duration-300 
                    ${isHighlighted 
                        ? "scale-[1.1] shadow-[0px_0px_5px_5px_#171a1f5a]" 
                        : "shadow-[0px_0px_5px_5px_#dcdcdc]"
                    }`,
        infoDiv: {
            wrapper: "flex items-start flex-col gap-[10px] p-[16px]",
            h3:"m-0 p-0 h-[30px] text-[16px] text-[#171A1FFF] leading-[20px]", 
            p:"text-[14px] text-[#9095A0]", 
            button: "outline h-[40px] w-[80px] text-[12px] px-[5px]"
        },
        img: "max-w-[160px] object-cover"
    };
    return Styles;
} 
export default Styles; 