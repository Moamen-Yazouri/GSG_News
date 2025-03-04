export default function NewsLayout({
    children,
    }: Readonly<{
    children: React.ReactNode;
    }>) {
    return (
        <div className="flex  justify-start">
            <aside className="min-h-[100vh] w-[20%] border-[black] border-[2px] border-solid">
                aside
            </aside>
            <div className="flex-grow">
                {children}
            </div>
        </div>
    );
}
