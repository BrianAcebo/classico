export const MenuBtn = (props) => {
    const { openSideNav } = props;

    const lineStyles = "bg-white h-[2px] smooth-transition";

    return (
        <div className="w-5 flex flex-col justify-end items-end cursor-pointer">
            <div className={openSideNav ? `${lineStyles} translate-y-[3px] rotate-[45deg] w-full mb-1` : `${lineStyles} w-full mb-1`}></div>
            <div className={openSideNav ? 'opacity-0' : `${lineStyles} w-full mb-1`}></div>
            <div className={openSideNav ? `${lineStyles} translate-y-[-3px] rotate-[-45deg] w-full mb-1` : `${lineStyles} w-1/2`}></div>
        </div>
    );
}