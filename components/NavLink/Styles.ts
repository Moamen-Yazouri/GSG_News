const Styles = (pathName: string, currentPath: string) => {
    const styles = {
        link: `${pathName === currentPath ? "border-b-[#71B2ABFF] border-b-solid border-b-4" : undefined}
        flex items-center justify-center px-[12px] py-[15px] text-[#565E6CFF] cursor-pointer`
    }
    return styles;
}
export default Styles;