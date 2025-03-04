const Styles = (isHighlighted: boolean) => {
    const Styles = {
        wrapperDiv: `flex items-stretch  basis-[25%] rounded-[2px] bg-white transition-all duration-300 
                    ${isHighlighted 
                        ? "scale-[1.08] shadow-[0px_0px_5px_5px_#171a1f5a]" 
                        : "shadow-[0px_0px_5px_5px_#dcdcdc]"
                    }`,
    };
    return Styles;
} 
export default Styles; 